import { Component } from "@angular/core";
import {
    LiveQuery, QueryListener, Revision,
    DatabaseManager, Document, Database, AttachmentFactory, Emitter, AttachmentImage
} from 'nativescript-couchbaselite';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    constructor() {

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
            getName() {
                return this.name;
            }
        }
        let url = "http://192.168.1.85:4984/test/";
        let dbName = "test";
        let dbTest = DatabaseManager.getOrCreate({ name: dbName, create: true });
        dbTest.destroy();
        dbTest.close();
        dbTest = DatabaseManager.getOrCreate({ name: dbName, create: true });
        dbTest.createFilter({
            name: "filter",
            filter: (doc: Revision<Document>, params: Map<string, any>) => {
                return doc.id == "ID1";
            }
        });
        console.log("CREATED FILTER")
        //CREATE DOCS
        for (let i = 0; i < 5; i++) {
            let user = new User();
            user.name = "user" + i;
            user.registerAtDate = new Date();
            dbTest.createDocument(user, "ID" + i);
        }
        console.log("INSERTED DOC")
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
        console.log("PUSH CREATED")
        push.addChangeListener(l)
        push.start();
        console.log("STARTED PUSH")
        setTimeout(() => {
            expect(l.count).toBe(1, "Should push 1");
            push.stop();
            //PULLING
            console.log("PULLING NEW DOCS");
            let pull = dbTest.createPullReplication(url);
            pull.setBasicAuthenticator("user", "password");
            let pullCallback = {
                countEvent: 0,
                onChange: (p) => {
                    pullCallback.countEvent++;
                }
            }
            pull.addChangeListener(pullCallback);
            pull.start();
            //
            setTimeout(() => {
                expect(pullCallback.countEvent > 0).toBeTruthy("Should pull");
                console.log("FINISH")
            }, 1000)
        }, 5000)
    }
}
