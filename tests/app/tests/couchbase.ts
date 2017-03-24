import { TestAppComponent } from "./test-app";
import {
    LiveQuery, QueryListener, Revision,
    DatabaseManager, Document, Database, AttachmentFactory, Emitter, AttachmentImage
} from 'nativescript-couchbaselite';
import { Type } from "class-transformer";
import { ImageSource, fromUrl, fromResource } from "image-source";
import { isAndroid, isIOS } from "platform";
class Group {
    name: string;
}
class User implements Document {
    docId: string;
    docRev: string;
    docType: string = "USER";
    name: string;
    registerAt: number;
    secure: boolean = false;
    set registerAtDate(d: Date) {
        this.registerAt = d.getTime();
    }
    get registerAtDate() {
        return this.registerAt ? new Date(this.registerAt) : null;
    }
    @Type(() => Group) group: Group = new Group;
    getName() {
        return this.name;
    }
}
class Orgnisation implements Document {
    docId: string;
    docRev: string;
    docType: string = "ORGANISATION";
    name: string;
}
describe('test a TransactionService', () => {
    let testApp: TestAppComponent = null;
    let dbTest: Database = null;
    let testObject = { test: "TEST", oh: 2 };
    let dbName = "test";
    beforeAll((done) => {
        console.log("Creating components.......");
        return TestAppComponent.create([], [TestAppComponent]).then((app) => {
            console.log("Components created.......");
            testApp = app;
            expect(testApp).not.toBeNull();
            done();
        });
    });
    afterAll(() => {
        testApp.dispose();
    });

    beforeEach((done) => {
        //CREATE DB 
        dbTest = DatabaseManager.getOrCreate({ name: dbName });
        dbTest.destroy();
        dbTest = DatabaseManager.getOrCreate({ name: dbName });
        let mapping = new Map<string, any>();
        mapping.set("USER", User);
        dbTest.setMapping(mapping);
        expect(dbTest).not.toBeNull();
        done();
    });
    afterEach(() => {
        testApp.disposeComponents();
    });
    it("should create database", (done) => {
        let db = DatabaseManager.getOrCreate({ name: "unsafe" });
        expect(db).not.toBeNull("DB is null");
        db.createDocument(testObject);
        //GET OPENED DB
        db = DatabaseManager.getExisting({ name: "unsafe" });
        expect(db).not.toBeNull("DB dont exists");
        db.destroy();
        db.close();
        done();
    });
    it("should create database encrypt", (done) => {
        let db = DatabaseManager.getOrCreate({ name: "dbencrypt", encryptionKey: "SECURE" });
        expect(db).not.toBeNull("DB is null");
        //GET OPENED
        db = DatabaseManager.getExisting({ name: "dbencrypt", encryptionKey: "SECURE" });
        expect(db).not.toBeNull("DB dont exists");
        db.destroy();
        done();
    });
    it("should crud document", (done) => {
        let now = new Date();
        let user = new User;
        user.name = "user1";
        user.group.name = "group1";
        user.registerAtDate = now;
        user.secure = true;
        dbTest.createDocument(user, null, { ttl: new Date() });
        expect(user.docId).not.toBeNull("Cannot fetch from DB");
        expect(user.docRev).not.toBeNull("Revision should be setted");
        let fetched: User = <User>dbTest.getDocument(user.docId);
        expect(fetched.secure).toBeTruthy("Boolean not setted correctly");
        expect(fetched.name).toBe("user1");
        expect(fetched.registerAtDate.getTime()).toBe(now.getTime(), "Date not setted correctly");
        expect(fetched.getName()).toBe("user1");
        expect(fetched.group.name).toBe("group1");
        fetched.group.name = "group2";
        dbTest.updateDocument(fetched.docId, fetched);
        fetched = <User>dbTest.getDocument(user.docId);
        expect(fetched.group.name).toBe("group2");
        let success = dbTest.deleteDocument(user.docId);
        expect(success).toBeTruthy("Should have deleted");
        fetched = <User>dbTest.getDocument(user.docId);
        expect(fetched).toBeNull("Cannot fetch deleted");
        done();
    });
    it("should create with id document", (done) => {
        let user = new User;
        user.name = "user1";
        user.group.name = "group1";
        dbTest.createDocument(user, "ID");
        let fetched: User = <User>dbTest.getDocument("ID");
        expect(fetched.name).toBe("user1");
        done();
    });
    it("should create conflicts", (done) => {
        let user = new User;
        user.name = "user1";
        user.group.name = "group1";
        dbTest.createDocument(user, "ID");
        let conflict = dbTest.getConflicts("ID");
        expect(conflict.length).toBe(1, "should have 2 revision conflicting");
        let fetched: User = <User>dbTest.getDocument("ID");
        let fetched2: User = <User>dbTest.getDocument("ID");
        dbTest.updateDocument("ID", fetched);
        try {
            dbTest.updateDocument("ID", fetched2);
        } catch (e) {

        }
        conflict = dbTest.getConflicts("ID");
        expect(conflict.length).toBe(2, "should have 2 revision conflicting");
        dbTest.resolveConflict("ID", fetched);
        conflict = dbTest.getConflicts("ID");
        expect(conflict.length).toBe(1, "should have 2 revision conflicting");
        done();
    });

    it("should create attachment with document", (done) => {
        let user = new User;
        user.name = "user1";
        user.group.name = "group1";
        dbTest.createDocument(user, "ID");
        let attachments = dbTest.getAttachmentNames("ID");
        expect(attachments.length).toBe(0, "Should not have attachment");
        //
        let source = fromResource("icon");
        let attach = AttachmentFactory.fromSource(source, "yeah", AttachmentImage.PNG);
        dbTest.setAttachment("ID", attach);
        //
        attachments = dbTest.getAttachmentNames("ID");
        expect(attachments.length).toBe(1, "Should have one attachment");
        expect(attachments[0]).toBe("yeah", "Should have one attachment");
        //
        attach = dbTest.getAttachment("ID", "yeah");
        expect(attach).not.toBeNull("Should find attachment yeah");
        expect(attach.getStream()).not.toBeNull("Should set attachment stream");
        expect(attach.getType()).toBe("image/png", "Should set attachment type");
        //
        dbTest.removeAttachment("ID", "yeah");
        attachments = dbTest.getAttachmentNames("ID");
        expect(attachments.length).toBe(0, "Should not have attachment");
        done();
    });
    //TODO grouplevel + use push to create conflict => create doc push one shot then destroy then pull
    it("should create simple view", (done) => {
        dbTest.createView({
            name: "users",
            revision: "1",
            map: (doc: User, emitter) => {
                if (doc.docType == "USER") {
                    emitter.emit(doc.name.toLowerCase(), null);
                }
            }
        })
        //CREATE DOCS
        for (let i = 0; i < 5; i++) {
            let user = new User();
            user.name = "user" + i;
            user.registerAtDate = new Date();
            user.group.name = "group" + i;
            dbTest.createDocument(user, "ID" + i);
        }
        let org = new Orgnisation();
        dbTest.createDocument(org);
        //
        let founded = dbTest.queryView("users", { mapOnly: true });
        expect(founded.length).toBe(5, "Should find users")
        expect(founded[0].name).toBe("user0", "Should find user");
        founded = dbTest.queryView("users", { mapOnly: true, startKey: "user4" });
        expect(founded.length).toBe(1, "Should find by start key")
        founded = dbTest.queryView("users", { mapOnly: true, endKey: "user0" });
        expect(founded.length).toBe(1, "Should find by end key")
        founded = dbTest.queryView("users", { mapOnly: true, startKeyDocID: "ID4" });
        expect(founded.length).toBe(5, "Should find by start doc key")
        founded = dbTest.queryView("users", { mapOnly: true, endKeyDocID: "ID0" });
        expect(founded.length).toBe(5, "Should find by end doc key")
        founded = dbTest.queryView("users", { mapOnly: true, descending: true });
        expect(founded.length).toBe(5, "Should find users")
        expect(founded[0].name).toBe("user4", "Should find user descending");
        founded = dbTest.queryView("users", { mapOnly: true, limit: 2 });
        expect(founded.length).toBe(2, "Should find users limit")
        founded = dbTest.queryView("users", { mapOnly: true, skip: 3 });
        expect(founded.length).toBe(2, "Should find users limit")
        expect(founded[0].name).toBe("user3", "Should find user skip");
        founded = dbTest.queryView("users", { mapOnly: true, keys: ["user1", "user2"] });
        expect(founded.length).toBe(2, "Should find by keys")
        done();
    })

    it("should create view with compound key", (done) => {
        dbTest.createView({
            name: "users_compound",
            revision: "1",
            map: (doc: User, emitter) => {
                if (doc.docType == "USER") {
                    emitter.emit([doc.getName().toLowerCase(), doc.group.name.toLowerCase(), doc.registerAt, doc.registerAtDate, doc.secure], null);
                }
            }
        })
        //CREATE
        for (let i = 0; i < 5; i++) {
            let user = new User();
            user.name = "user" + i;
            user.secure = true;
            user.registerAtDate = new Date();
            user.group.name = "group" + i;
            //todo it is not a date but string...
            user.registerAtDate = new Date();
            dbTest.createDocument(user, "ID" + i);
        }
        //
        let founded = dbTest.queryView("users_compound", { mapOnly: true });
        expect(founded.length).toBe(5, "Should find users");
        founded = dbTest.queryView("users_compound", { mapOnly: true, startKey: ["user4", "group4"] });
        expect(founded.length).toBe(1, "Should find users by startkey");
        founded = dbTest.queryView("users_compound", { mapOnly: true, endKey: ["user1", "group1"], inclusiveEnd: true });
        expect(founded.length).toBe(1, "Should find users by endKey");
        //
        done();
    })

    it("should create view with emit object", (done) => {
        dbTest.createView({
            name: "users_value",
            revision: "1",
            map: (doc: User, emitter) => {
                if (doc.docType == "USER") {
                    emitter.emit([doc.getName().toLowerCase()], doc.name);
                }
            }
        });
        //CREATE
        for (let i = 0; i < 5; i++) {
            let user = new User();
            user.name = "user" + i;
            user.registerAtDate = new Date();
            user.group.name = "group" + i;
            dbTest.createDocument(user, "ID" + i);
        }
        //
        let founded = dbTest.queryView("users_value", { mapOnly: true });
        expect(founded.length).toBe(5, "Should find user names");
        expect(founded[0]).toBe("user0", "Should find user");
        done();
    })
    it("should create view with reducer primitive", (done) => {
        dbTest.createView({
            name: "users_reducer",
            revision: "1",
            map: (doc: User, emitter) => {
                if (doc.docType == "USER") {
                    emitter.emit([doc.getName().toLowerCase()], doc.name);
                }
            },
            reduce: (keys: any[], values: any[], rereduce: boolean) => {
                return keys.length;
            }
        });
        //CREATE
        for (let i = 0; i < 5; i++) {
            let user = new User();
            user.name = "user" + i;
            user.registerAtDate = new Date();
            user.group.name = "group" + i;
            dbTest.createDocument(user, "ID" + i);
        }
        //
        let founded: any = dbTest.queryView("users_reducer", { mapOnly: false });
        expect(founded).toBe(5, "Should find reduce value");
        done();
    })
    it("should create view with reducer object", (done) => {
        dbTest.createView({
            name: "users_reducer_object",
            revision: "1",
            map: (doc: User, emitter) => {
                if (doc.docType == "USER") {
                    emitter.emit([doc.getName().toLowerCase()], doc.name);
                }
            },
            reduce: (keys: any[], values: any[], rereduce: boolean) => {
                let u = new User();
                u.name = values[0];
                console.log("REDUCING......")
                return u;
            }
        });
        //CREATE
        for (let i = 0; i < 5; i++) {
            let user = new User();
            user.name = "user" + i;
            user.registerAtDate = new Date();
            user.group.name = "group" + i;
            dbTest.createDocument(user, "ID" + i);
        }
        let founded: any = dbTest.queryView("users_reducer_object", { mapOnly: false });
        expect(founded.name).toBe("user0", "Should find reduce object");
        done();
    })

    it("should query all documents", (done) => {
        //CREATE DOCS
        for (let i = 0; i < 5; i++) {
            let user = new User();
            user.name = "user" + i;
            user.registerAtDate = new Date();
            user.group.name = "group" + i;
            dbTest.createDocument(user, "ID" + i);
        }
        let org = new Orgnisation();
        dbTest.createDocument(org);
        let founded = dbTest.queryAllDocuments({ mapOnly: true });
        expect(founded.length).toBe(6, "Should find only one doc")
        founded = dbTest.queryAllDocuments({ mapOnly: true, limit: 2 });
        expect(founded.length).toBe(2, "Should find doc limit")
        founded = dbTest.queryAllDocuments({ mapOnly: true, keys: ["ID0", "ID1"] });
        expect(founded.length).toBe(2, "Should find by keys")
        done();
    })

    it("should live query", (done) => {
        expect(false).toBeTruthy("DO NOT EXEC TEST");
        dbTest.createView({
            name: "users_live",
            revision: "2",
            map: (doc: Document, emitter) => {
                console.log("EMIT.....", doc["_id"])
                emitter.emit(doc.docId, null);
            }
        });
        let l = {
            last: [],
            count: 0,
            onRows(rows: any[]) {
                console.log("ROWS......", rows);
                l.last = rows;
                l.count++;
            }
        };
        for (let i = -2; i < 0; i++) {
            let user = new User();
            user.name = "user" + i;
            user.registerAtDate = new Date();
            user.group.name = "group" + i;
            dbTest.createDocument(user, "ID" + i);
        }
        let live = dbTest.liveQuery("users_live", { mapOnly: true }, l);
        live.start();
        for (let i = 0; i < 2; i++) {
            let user = new User();
            user.name = "user" + i;
            user.registerAtDate = new Date();
            user.group.name = "group" + i;
            dbTest.createDocument(user, "ID" + i);
        }
        live.stop();
        done();
    }, 10000)
    let url = "http://192.168.1.85:4984/test/";
    it("should push replication with filter", (done) => {
        dbTest.createFilter({
            name: "filter",
            filter: (doc: Revision<Document>, params: Map<string, any>) => {
                return doc.id == "ID1";
            }
        });
        //CREATE DOCS
        for (let i = 0; i < 5; i++) {
            let user = new User();
            user.name = "user" + i;
            user.registerAtDate = new Date();
            user.group.name = "group" + i;
            dbTest.createDocument(user, "ID" + i);
        }
        //
        let push = dbTest.createPushReplication(url);
        push.setBasicAuthenticator("user", "password");
        push.setFilter("filter");
        let l = {
            count: 0,
            onChange: (p) => {
                l.count = p.changesCount;
            }
        };
        push.addChangeListener(l)
        push.start();
        setTimeout(() => {
            expect(l.count).toBe(1, "Should push 1");
            push.stop(); 
            //PULLING
            console.log("PULLING NEW DOCS");
            let pull = dbTest.createPullReplication(url);
            pull.setBasicAuthenticator("user", "password");
            pull.start();
            let pullCallback = {
                countEvent: 0,
                onChange: (p) => { 
                    pullCallback.countEvent++;  
                }
            }
            pull.addChangeListener(pullCallback);
            //
            setTimeout(() => {
                expect(pullCallback.countEvent>0).toBeTruthy("Should pull");
                done();
            },1000)
        }, 1000)
    }) 

    fit("should transform to java", (done) => {
        if (isAndroid) {
            console.log("Runing android")
            let mapper = dbTest["mapper"];
            let date = new Date;
            let jDate = mapper.toJavaDate(date);
            expect(jDate.getTime()).toBe(date.getTime());
            expect(mapper.toJavaSafe(null)).toBeNull("Should be null")
            //STRING
            let jString = mapper.toJavaSafe("test");
            expect(jString.getClass().getName()).toBe("java.lang.String", "Should be class String")
            expect(mapper.toJSSAfe(jString)).toBe("test", "Should string be equals")
            //BOOL
            let jBool = mapper.toJavaSafe(true);
            expect(jBool.getClass().getName()).toBe("java.lang.Boolean", "Should be class Boolean")
            expect(mapper.toJSSAfe(jBool)).toBe(true, "Should Boolean be equals")
            //LONG
            let jLong = mapper.toJavaSafe(1);
            expect(jLong.getClass().getName()).toBe("java.lang.Long", "Should be class Long")
            expect(mapper.toJSSAfe(jLong)).toBe(1, "Should Long be equals")
            //FLOAT
            let fFloat = mapper.toJavaSafe(1.5);
            expect(fFloat.getClass().getName()).toBe("java.lang.Double", "Should be class Double")
            expect(mapper.toJSSAfe(fFloat)).toBe(1.5, "Should Double be equals")
            //DATE
            jDate = mapper.toJavaSafe(date);
            expect(jDate.getClass().getName()).toBe("java.util.Date", "Should be class Date")
            expect(jDate.getTime()).toBe(date.getTime(), "Should Date be equals")
            expect(mapper.toJSSAfe(jDate).getTime()).toBe(date.getTime(), "Should Date be equals")
            //ARRAY
            let jArray = mapper.toJavaSafe([1, "YO", true]);
            expect(jArray.size()).toBe(3, "Should list to be of size one")
            expect(jArray.get(0).getClass().getName()).toBe("java.lang.Long", "Should first element to be long")
            expect(mapper.toJSSAfe(jArray.get(0))).toBe(1, "Should first element to be 1")
            expect(mapper.toJSSAfe(jArray.get(1))).toBe("YO", "Should first element to be 1")
            expect(mapper.toJSSAfe(jArray.get(2))).toBe(true, "Should first element to be 1")
            //REVERSE ARRAY
            let jsArray = mapper.toJSSAfe(jArray);
            expect(jsArray[0]).toBe(1, "Should first element to be 1")
            expect(jsArray[1]).toBe("YO", "Should first element to be 1")
            expect(jsArray[2]).toBe(true, "Should first element to be 1")
            //MAP
            let m = new Map<string, number>();
            m.set("YO", 1);
            let jMap = mapper.toJavaSafe(m);
            expect(jMap.size()).toBe(1, "Should map to be of size one")
            expect(jMap.get("YO").getClass().getName()).toBe("java.lang.Long", "Should first element of map to be long")
            expect(mapper.toJSSAfe(jMap.get("YO"))).toBe(1, "Should first element of map to be 1")
            //OBJECT
            let obj = { test: "OK", inner: { test: "OK", bool: true } };
            let jObj = mapper.toJavaSafe(obj);
            expect(jObj.size()).toBe(2, "Should object have 2 props")
            expect(mapper.toJSSAfe(jObj.get("test"))).toBe("OK", "Should prop test equal")
            expect(mapper.toJSSAfe(jObj.get("inner").get("test"))).toBe("OK", "Should inner prop test equal")
            expect(mapper.toJSSAfe(jObj.get("inner").get("bool"))).toBe(true, "Should inner prop test equal")
            //REVERSE OBJECT
            obj = mapper.toJSSAfe(jObj);
            expect(obj.test).toBe("OK", "Should real prop test equal")
            expect(obj.inner.test).toBe("OK", "Should real inner prop test equal")
            expect(obj.inner.bool).toBe(true, "Should real inner prop test equal")
            //TODO date in map
            done();
        } else {
            done();
        }
    })

});