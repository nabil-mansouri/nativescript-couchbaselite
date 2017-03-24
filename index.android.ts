import * as  utils from "utils/utils";
import * as def from "./index";
import { deserialize } from "class-transformer";
import { ClassType } from "class-transformer/ClassTransformer";
import { ImageSource } from "image-source"
import { ImageAsset } from "image-asset"
import { JSTypeChecker } from "./commons";
export { AttachmentImage, IndexUpdateMode, Log, ReplicationError, ReplicationStatus, Storage } from "./commons";

export class DatabaseManager implements def.DatabaseManager {
    private manager: com.couchbase.lite.Manager = null;
    private static instance: DatabaseManager;
    static get() {
        if (DatabaseManager.instance == null) {
            DatabaseManager.instance = new DatabaseManager();
            let androidContext = new com.couchbase.lite.android.AndroidContext(utils.ad.getApplicationContext());
            DatabaseManager.instance.manager = new com.couchbase.lite.Manager(androidContext, com.couchbase.lite.Manager.DEFAULT_OPTIONS);
        }
        return DatabaseManager.instance;
    }
    static getOrCreate<T extends def.Document>(opts: def.DatabaseOptions): def.Database {
        try {
            let instance = DatabaseManager.get();
            let db: com.couchbase.lite.Database;
            if (opts.encryptionKey) {
                let dbOpt = new com.couchbase.lite.DatabaseOptions();
                dbOpt.setEncryptionKey(<any>opts.encryptionKey);
                dbOpt.setCreate(true);
                db = instance.manager.openDatabase(opts.name, dbOpt);
            } else {
                db = instance.manager.getDatabase(opts.name);
            }
            return new Database(db);
        } catch (exception) {
            throw "Failed to create db with name:" + opts.name + "." + exception;
        }
    }
    static getExisting<T extends def.Document>(opts: def.DatabaseOptions): def.Database {
        try {
            let instance = DatabaseManager.get();
            let db: com.couchbase.lite.Database;
            if (opts.encryptionKey) {
                let dbOpt = new com.couchbase.lite.DatabaseOptions();
                dbOpt.setEncryptionKey(<any>opts.encryptionKey);
                dbOpt.setCreate(false);
                db = instance.manager.openDatabase(opts.name, dbOpt);
            } else {
                db = instance.manager.getExistingDatabase(opts.name);
            }
            if (db == null) {
                throw "Failed to open db with name:" + opts.name;
            } else {
                return new Database(db);
            }
        } catch (exception) {
            throw "Failed to open db with name:" + opts.name + ".\n" + exception;
        }
    }
}
class Mapper {
    gson: com.google.gson.Gson = null;
    mapping = new Map<string, ClassType<any>>();
    typeMap: java.lang.reflect.Type = null;
    constructor() {
        this.gson = new com.google.gson.GsonBuilder().create()
        let clazz = new java.util.HashMap<any, any>().getClass();
        this.typeMap = com.google.gson.reflect.TypeToken.get(clazz).getType();
    }
    setMapping(m: Map<string, ClassType<any>>) {
        this.mapping = m;
    }
    toJavaDate(d: Date) {
        return new java.util.Date(d.getTime());
    }
    toJSSAfe(javaO: java.lang.Object): any {
        let isInstance: (a: any) => boolean = (a) => {
            let clazz: java.lang.Class<any> = a["class"];
            return clazz.isInstance(javaO);
        };
        if (javaO == null) {
            return null;
        } else if (isInstance(java.util.Collection)) {
            let coll: java.util.Collection<any> = <any>javaO;
            let array = [];
            let it = coll.iterator();
            while (it.hasNext()) {
                let next = it.next();
                array.push(this.toJSSAfe(next));
            }
            return array;
        } else if (isInstance(java.util.Map)) {
            let coll: java.util.Map<any, any> = <any>javaO;
            return this.mapToJson(coll);
        } else if (isInstance(java.lang.String)) {
            return "" + javaO;
        } else if (isInstance(java.lang.Boolean)) {
            return true && (<java.lang.Boolean>javaO).booleanValue();
        } else if (isInstance(java.lang.Number)) {
            return 0 + (<java.lang.Number>javaO).doubleValue();
        } else if (isInstance(java.util.Date)) {
            return new Date((<java.util.Date>javaO).getTime());
        } else {
            return JSON.parse(this.gson.toJson(javaO));
        }
    }
    toJavaSafe(jsO: any): any {
        if (JSTypeChecker.isUndefined(jsO)) {
            return null;
        } else if (JSTypeChecker.isArray(jsO)) {
            let array = new java.util.ArrayList();
            jsO.forEach(a => array.add(this.toJavaSafe(a)));
            return array;
        } else if (JSTypeChecker.isMap(jsO)) {
            let array = new java.util.HashMap();
            jsO.forEach((value, key) => array.put(this.toJavaSafe(key), this.toJavaSafe(value)));
            return array;
        } else if (JSTypeChecker.isString(jsO)) {
            return new java.lang.String(jsO);
        } else if (JSTypeChecker.isBoolean(jsO)) {
            return new java.lang.Boolean(jsO);
        } else if (JSTypeChecker.isInt(jsO)) {
            return new java.lang.Long(jsO);
        } else if (JSTypeChecker.isFloat(jsO)) {
            return new java.lang.Double(jsO);
        } else if (JSTypeChecker.isDate(jsO)) {
            return new java.util.Date(jsO.getTime());
        } else {
            return this.jsonToMap(jsO);
        }
    }
    //http://stackoverflow.com/questions/22011200/creating-hashmap-from-a-json-string
    jsonToMap(json: string | def.Document): java.util.Map<any, any> {
        if (typeof json !== "string") {
            json = JSON.stringify(json);
        }
        return <any>this.gson.fromJson(<string>json, this.typeMap);
    }
    mapToJson(map: java.util.Map<any, any>): def.Document {
        if (typeof map === "undefined" || map == null) {
            return null;
        }
        let type: any = map.get("docType");
        let jsonString = this.gson.toJson(map, this.typeMap);
        if (this.mapping.has(type)) {
            return <any>deserialize(this.mapping.get(type), jsonString);
        } else {
            return JSON.parse(jsonString);
        }
    }
}
export class Database implements def.Database {
    mapper = new Mapper();
    constructor(private db: com.couchbase.lite.Database) { }
    setMapping(m: Map<string, ClassType<any>>) {
        this.mapper.setMapping(m);
    }
    createDocument(data: def.Document, id?: string, opts?: def.DocumentOpts): void {
        try {
            let document: com.couchbase.lite.Document = null;
            if (id) {
                document = this.db.getDocument(id);
            } else {
                document = this.db.createDocument();
            }
            if (opts) {
                opts.ttl && document.setExpirationDate(this.mapper.toJavaDate(opts.ttl));
            }
            let rev = document.putProperties(this.mapper.jsonToMap(data));
            data.docId = document.getId();
            data.docRev = rev.getId();
        } catch (exception) {
            throw "Failed to createDocument:" + exception;
        }
    }
    getDocument(id: string): def.Document {
        let document = this.db.getDocument(id);
        if (document != null && document.getProperties() != null) {
            var value = this.mapper.mapToJson(document.getProperties());
            value.docId = document.getId();
            value.docRev = document.getCurrentRevisionId();
            return value;
        }else{
            return null;
        }
    }
    updateDocument(id: string, data: def.Document, opts?: def.DocumentOpts): void {
        try {
            let document = this.db.getDocument(id);
            data.docId = document.getId();
            data.docRev = document.getCurrentRevisionId();
            if (opts) {
                opts.ttl && document.setExpirationDate(this.mapper.toJavaDate(opts.ttl));
            }
            document.putProperties(this.mapper.jsonToMap(data));
        } catch (exception) {
            throw "Failed to updateDocument:" + exception;
        }
    }
    deleteDocument(id: string): boolean {
        try {
            var document = this.db.getDocument(id);
            document.delete();
            return document.isDeleted();
        } catch (exception) {
            throw "Failed to deleteDocument:" + exception;
        }
    }
    getConflicts(id: string): def.Revision<def.Document>[] {
        var document = this.db.getDocument(id);
        let revs = document.getConflictingRevisions();
        let all: def.Revision<def.Document>[] = [];
        for (let i = 0; i < revs.size(); i++) {
            let temp = revs.get(i);
            all.push({
                id: temp.document.getId(),
                object: this.mapper.mapToJson(temp.document.getProperties()),
                revid: temp.getId()
            })
        }
        return all;
    }
    resolveConflict(id: string, merged: def.Document): void {
        let self = this;
        this.db.runInTransaction(new com.couchbase.lite.TransactionalTask({
            run() {
                try {
                    let document = this.db.getDocument(id);
                    let current = document.getCurrentRevision();
                    let revs = document.getConflictingRevisions();
                    for (let i = 0; i < revs.size(); i++) {
                        let rev = revs.get(i);
                        let newRev = rev.createRevision();
                        if (rev.getId().equals(current.getId())) {
                            newRev.setProperties(self.mapper.jsonToMap(merged));
                        } else {
                            newRev.setIsDeletion(true);
                        }
                        newRev.save(true);
                    }
                    return true;
                } catch (exception) {
                    return false;
                }
            }
        }));
    }
    getAttachment(id: string, name: string): def.Attachment {
        let doc = this.db.getDocument(id);
        let rev = doc.getCurrentRevision();
        let att = rev.getAttachment(name);
        if (att != null) {
            return new AttachmentDefault(att);
        } else {
            return null;
        }
    }
    getAttachmentNames(id: string): string[] {
        let doc = this.db.getDocument(id);
        let rev = doc.getCurrentRevision();
        let names = rev.getAttachmentNames();
        let array: string[] = [];
        for (let i = 0; i < names.size(); i++) {
            let temp = names.get(i);
            array.push(temp);
        }
        return array;
    }
    getAttachments(id: string): def.Attachment[] {
        let doc = this.db.getDocument(id);
        let rev = doc.getCurrentRevision();
        let names = rev.getAttachments();
        let array: def.Attachment[] = [];
        for (let i = 0; i < names.size(); i++) {
            let temp = names.get(i);
            array.push(new AttachmentDefault(temp));
        }
        return array;
    }
    setAttachment(id: string, file: def.Attachment): void {
        let doc = this.db.getDocument(id);
        let newRev = doc.getCurrentRevision().createRevision();
        newRev.setAttachment(file.getName(), file.getType(), file.getStream());
        newRev.save();
    }
    removeAttachment(id: string, name: string): void {
        let doc = this.db.getDocument(id);
        let newRev = doc.getCurrentRevision().createRevision();
        newRev.removeAttachment(name);
        newRev.save();
    }
    createView(opts: def.ViewOpts): void {
        let self = this;
        let view = this.db.getView(opts.name);
        let mapper = new com.couchbase.lite.Mapper({
            map(document: java.util.Map<String, Object>, emitter: com.couchbase.lite.Emitter) {
                let value = self.mapper.mapToJson(document);
                opts.map(value, new Emitter(emitter));
            }
        });
        if (opts.reduce) {
            view.setMapReduce(mapper, new com.couchbase.lite.Reducer({
                reduce(keys, values, rereduce) {
                    let keysJson = self.mapper.toJSSAfe(<any>keys);
                    let valuesJson = self.mapper.toJSSAfe(<any>values);
                    let result = opts.reduce(keysJson, valuesJson, rereduce);
                    return self.mapper.toJavaSafe(result);
                }
            }), opts.revision)
        } else {
            view.setMap(mapper, opts.revision);
        }
    }
    private prepareQuery(query: def.Query, queryM: com.couchbase.lite.Query) {
        this.isDefined(query.onlyConflict) && queryM.setAllDocsMode(com.couchbase.lite.Query.AllDocsMode.ONLY_CONFLICTS);
        this.isDefined(query.inclusiveStart) && queryM.setInclusiveStart(query.inclusiveStart);
        this.isDefined(query.inclusiveEnd) && queryM.setInclusiveEnd(query.inclusiveEnd);
        this.isDefined(query.descending) && queryM.setDescending(query.descending);
        this.isDefined(query.endKey) && queryM.setEndKey(this.mapper.toJavaSafe(query.endKey));
        this.isDefined(query.endKeyDocID) && queryM.setEndKeyDocId(query.endKeyDocID);
        this.isDefined(query.groupLevel) && queryM.setGroupLevel(query.groupLevel);
        this.isDefined(query.indexUpdateMode) && queryM.setIndexUpdateMode(query.indexUpdateMode);
        this.isDefined(query.keys) && queryM.setKeys(this.mapper.toJavaSafe(query.keys));
        this.isDefined(query.limit) && queryM.setLimit(query.limit);
        this.isDefined(query.mapOnly) && queryM.setMapOnly(query.mapOnly);
        this.isDefined(query.prefixMatchLevel) && queryM.setPrefixMatchLevel(query.prefixMatchLevel);
        this.isDefined(query.skip) && queryM.setSkip(query.skip);
        this.isDefined(query.startKey) && queryM.setStartKey(this.mapper.toJavaSafe(query.startKey));
        this.isDefined(query.startKeyDocID) && queryM.setStartKeyDocId(query.startKeyDocID);
    }
    private getQueryResult(query: def.Query, resEnum: com.couchbase.lite.QueryEnumerator): any[] {
        var result: any[] = [];
        while (resEnum.hasNext()) {
            var row = resEnum.next();
            if (row.getValue() != null) {
                let doc = this.mapper.toJSSAfe(row.getValue());
                result.push(doc);

            } else if (row.getDocument() != null) {
                let prop = row.getDocument().getProperties();
                let doc = this.mapper.mapToJson(prop);
                result.push(doc);
            }
        }
        if (query.mapOnly || result.length > 1) {
            return result;
        } else {
            return result[0];
        }
    }
    queryView(name: string, query: def.Query): any {
        let queryM = this.db.getView(name).createQuery();
        this.prepareQuery(query, queryM);
        var resEnum = queryM.run();
        return this.getQueryResult(query, resEnum);
    }
    queryAllDocuments(query: def.Query): any[] {
        let queryM = this.db.createAllDocumentsQuery();
        this.prepareQuery(query, queryM);
        var resEnum = queryM.run();
        return this.getQueryResult(query, resEnum);
    }
    liveQuery(name: string, query: def.Query, listener: def.QueryListener): def.LiveQuery {
        let view = this.db.getView(name);
        let queryM = view.createQuery();
        this.prepareQuery(query, queryM);
        let live: com.couchbase.lite.LiveQuery = queryM.toLiveQuery();
        let self = this;
        live.addChangeListener(new com.couchbase.lite.LiveQuery.ChangeListener({
            changed(event: com.couchbase.lite.LiveQuery.ChangeEvent) {
                let obj = <any>event.getSource();
                if (obj.equals(live)) {
                    let rows = self.getQueryResult(query, event.getRows());
                    listener.onRows(rows);
                }
            }
        }));
        return {
            waitForRows: () => {
                live.waitForRows();
            },
            updateIndex: () => {
                view.updateIndex();
            },
            start: () => {
                live.start();
            },
            stop: () => {
                live.stop();
            }
        }
    }
    addChangeListener(listener: def.DatabaseListener): void {
        try {
            this.db.addChangeListener(new com.couchbase.lite.Database.ChangeListener({
                changed(event) {
                    let changes = event.getChanges();
                    let all: def.DatabaseListenerParam[] = [];
                    for (let i = 0; i < changes.size(); i++) {
                        let change = changes.get(i);
                        all.push({
                            documentId: change.getDocumentId(),
                            revisionId: change.getRevisionId(),
                            isConflict: change.isConflict(),
                            isCurrentRevision: change.isCurrentRevision(),
                            isDeletion: change.isDeletion(),
                            source: (change.getSource() != null) ? change.getSource().toString() : null
                        });
                    }
                    listener.onChange(all);
                }
            }));
        } catch (exception) {
            throw "Failed to listen changes..." + exception;
        }
    }
    createPullReplication(url: string): def.ReplicationPull {
        try {
            let pull = this.db.createPullReplication(new java.net.URL(url));
            return new ReplicationPull(pull);
        } catch (exception) {
            throw "Failed to create pull replication..." + exception;
        }
    }
    createPushReplication(url: string): def.ReplicationPush {
        try {
            let pull = this.db.createPushReplication(new java.net.URL(url));
            return new ReplicationPush(pull);
        } catch (exception) {
            throw "Failed to create push replication..." + exception;
        }
    }
    createFilter(opts: def.FilterOpts): void {
        this.db.setFilter(opts.name, new com.couchbase.lite.ReplicationFilter({
            filter: (revision: com.couchbase.lite.SavedRevision, params: java.util.Map<String, Object>) => {
                let pa: Map<string, any> = this.mapper.toJSSAfe(<any>params);
                return opts.filter({
                    id: revision.getDocument().getId(),
                    revid: revision.getId(),
                    object: this.mapper.mapToJson(revision.getDocument().getProperties())
                }, pa);
            }
        }));
    }
    destroy() {
        try { this.db.delete(); }
        catch (exception) {
            throw "Failed to destroy db..." + exception;
        }
    }
    close() {
        try { this.db.close(); }
        catch (exception) {
            throw "Failed to close db..." + exception;
        }
    }
    private isDefined(variable) {
        return (typeof variable !== 'undefined');
    }
}

export class ReplicationPull implements def.ReplicationPull {
    mapper = new Mapper();
    constructor(private innerPull: com.couchbase.lite.replicator.Replication) { }
    setContinuous(cont: boolean) {
        this.innerPull.setContinuous(true);
    }
    setBasicAuthenticator(user: string, password: string) {
        let auth = new com.couchbase.lite.auth.BasicAuthenticator(user, password);
        this.innerPull.setAuthenticator(auth);
    }
    restart(): void {
        this.innerPull.restart();
    }
    start(): void {
        this.innerPull.start();
    }
    stop(): void {
        this.innerPull.stop();
    }
    addChangeListener(listener: def.ReplicationListener): void {
        this.innerPull.addChangeListener(new com.couchbase.lite.replicator.Replication.ChangeListener({
            changed(ev: com.couchbase.lite.replicator.Replication.ChangeEvent) {
                listener.onChange({
                    changesCount: ev.getChangeCount(),
                    completedChangesCount: ev.getCompletedChangeCount(),
                    lastError: (ev.getError() == null) ? null : ev.getError().getMessage(),
                    lastErrorCode: (ev.getError() == null) ? null : (<any>ev.getError()).code,
                    status: <number>ev.getStatus()
                })
            }
        }));
    }
    channels(channels: string[]) {
        this.innerPull.setChannels(this.mapper.toJavaSafe(channels));
    }
    setDocIds(docs: string[]) {
        this.innerPull.setDocIds(this.mapper.toJavaSafe(docs));
    }
}

export class ReplicationPush implements def.ReplicationPush {
    mapper = new Mapper();
    constructor(private innerPush: com.couchbase.lite.replicator.Replication) { }
    setContinuous(cont: boolean) {
        this.innerPush.setContinuous(true);
    }
    setBasicAuthenticator(user: string, password: string) {
        let auth = new com.couchbase.lite.auth.BasicAuthenticator(user, password);
        this.innerPush.setAuthenticator(auth);
    }
    restart(): void {
        this.innerPush.restart();
    }
    start(): void {
        this.innerPush.start();
    }
    stop(): void {
        this.innerPush.stop();
    }
    addChangeListener(listener: def.ReplicationListener): void {
        this.innerPush.addChangeListener(new com.couchbase.lite.replicator.Replication.ChangeListener({
            changed(ev: com.couchbase.lite.replicator.Replication.ChangeEvent) {
                listener.onChange({
                    changesCount: ev.getChangeCount(),
                    completedChangesCount: ev.getCompletedChangeCount(),
                    lastError: (ev.getError() == null) ? null : ev.getError().getMessage(),
                    lastErrorCode: (ev.getError() == null) ? null : (<any>ev.getError()).code,
                    status: <number>ev.getStatus()
                })
            }
        }));
    }
    setFilter(filter: string) {
        this.innerPush.setFilter(filter);
    }
    setFilterParams(params: Map<string, any>) {
        this.innerPush.setFilterParams(this.mapper.toJavaSafe(params));
    }
}
export class Emitter implements def.Emitter {
    mapper = new Mapper();
    constructor(private innerEmitter: com.couchbase.lite.Emitter) { }

    emit(key: any | Array<any>, value: any) {
        this.innerEmitter.emit(this.mapper.toJavaSafe(key), this.mapper.toJavaSafe(value));
    }

}
export class AttachmentDefault implements def.Attachment {
    constructor(private atachment: com.couchbase.lite.Attachment) { }
    getName() {
        return this.atachment.getName();
    }
    getType() {
        return this.atachment.getContentType();
    }
    getStream(): java.io.InputStream {
        return this.atachment.getContent();
    }
}

export class AttachmentFactory implements def.AttachmentFactory {
    static fromSource(source: ImageSource, name: string, type: def.AttachmentImage): def.Attachment {
        let ad: android.graphics.Bitmap = source.android;
        let bos = new java.io.ByteArrayOutputStream();
        let bMapType = def.AttachmentImage.PNG ? android.graphics.Bitmap.CompressFormat.PNG : android.graphics.Bitmap.CompressFormat.JPEG;
        let bMapQuality = def.AttachmentImage.PNG ? 0 : 100;
        ad.compress(bMapType, bMapQuality /*ignored for PNG*/, bos);
        let bitmapdata = bos.toByteArray();
        let bs = new java.io.ByteArrayInputStream(bitmapdata);
        return {
            getName: () => {
                return name;
            },
            getStream: () => {
                return bs;
            },
            getType: () => {
                return type == def.AttachmentImage.PNG ? "image/png" : "image/jpeg";
            }
        }
    }
}