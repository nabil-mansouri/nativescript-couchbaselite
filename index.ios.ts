import * as  utils from "utils/utils";
import * as def from "./index";
import { deserialize } from "class-transformer";
import { ClassType } from "class-transformer/ClassTransformer";
import { ImageSource } from "image-source"
import { ImageAsset } from "image-asset"
import { JSTypeChecker } from "./commons";
export { AttachmentImage, IndexUpdateMode, Log, ReplicationError, ReplicationStatus, Storage } from "./commons";

export class DatabaseManager implements def.DatabaseManager {
    private manager: CBLManager = null;
    private static instance: DatabaseManager;
    static get() {
        if (DatabaseManager.instance == null) {
            DatabaseManager.instance = new DatabaseManager();
            DatabaseManager.instance.manager = CBLManager.sharedInstance();
            if (!DatabaseManager.instance.manager) {
                throw "Failed creating CBLManager";
            }
        }
        return DatabaseManager.instance;
    }
    static getOrCreate<T extends def.Document>(opts: def.DatabaseOptions): def.Database {
        try {
            let instance = DatabaseManager.get();
            let db: CBLDatabase;
            if (opts.encryptionKey) {
                let dbOpt = new CBLDatabaseOptions();
                dbOpt.encryptionKey = opts.encryptionKey;
                dbOpt.create = opts.create;
                db = instance.manager.openDatabaseNamedWithOptionsError(opts.name, dbOpt);
            } else {
                db = instance.manager.databaseNamedError(opts.name);
            }
            return new Database(db);
        } catch (exception) {
            throw "Failed to create db with name:" + opts.name + "." + exception;
        }
    }
    static getExisting<T extends def.Document>(opts: def.DatabaseOptions): def.Database {
        try {
            let instance = DatabaseManager.get();
            let db: CBLDatabase;
            if (opts.encryptionKey) {
                let dbOpt = new CBLDatabaseOptions();
                dbOpt.encryptionKey = opts.encryptionKey;
                dbOpt.create = false;
                db = instance.manager.openDatabaseNamedWithOptionsError(opts.name, dbOpt);
            } else {
                db = instance.manager.databaseNamedError(opts.name);
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
    jsDateToTime = false;
    mapping = new Map<string, ClassType<any>>();
    constructor() {
    }
    setMapping(m: Map<string, ClassType<any>>) {
        this.mapping = m;
    }
    toJSSAfe(nsO: NSObject): any {
        let isInstance: (a: any) => boolean = (a) => {
            if (nsO && nsO.class) {
                return nsO.class == a.class;
            }
            return false;
        };
        if (nsO == null) {
            return null;
        } else if (JSTypeChecker.isString(nsO)
            || JSTypeChecker.isBoolean(nsO)
            || JSTypeChecker.isInt(nsO)
            || JSTypeChecker.isFloat(nsO)
            || JSTypeChecker.isDate(nsO)
            || isInstance(NSString)
            || isInstance(NSNumber)) {
            return nsO;
        } else if (isInstance(NSArray) || isInstance(NSMutableArray)) {
            let coll: NSArray<any> = <any>nsO;
            let array = [];
            for (let i = 0; i < coll.count; i++) {
                array.push(this.toJSSAfe(coll.objectAtIndex(i)));
            }
            return array;
        } else if (isInstance(NSDictionary) || isInstance(NSMutableDictionary)) {
            return this.mapToJson(<any>nsO);
        } else if (isInstance(NSDate)) {
            return nsO;
        } else {
            let data = NSJSONSerialization.dataWithJSONObjectOptionsError(nsO, NSJSONWritingOptions.PrettyPrinted);
            return JSON.parse(<any>NSString.alloc().initWithDataEncoding(data, NSUTF8StringEncoding));
        }
    }
    toObjcSafe(jsO: any): any {
        if (JSTypeChecker.isUndefined(jsO)) {
            return null;
        } else if (JSTypeChecker.isArray(jsO)) {
            let array = NSMutableArray.arrayWithCapacity((<Array<any>>jsO).length);
            (<Array<any>>jsO).forEach((a, index) => array.insertObjectAtIndex(this.toObjcSafe(a), index));
            return array;
        } else if (JSTypeChecker.isMap(jsO)) {
            let array = NSMutableDictionary.dictionaryWithCapacity((<Map<any, any>>jsO).size)
            jsO.forEach((value, key) => array.setObjectForKey(this.toObjcSafe(value), this.toObjcSafe(key)));
            return array;
        } else if (JSTypeChecker.isBoolean(jsO)) {
            return jsO;
        } else if (JSTypeChecker.isString(jsO)
            || JSTypeChecker.isInt(jsO)
            || JSTypeChecker.isFloat(jsO)) {
            return jsO;
        } else if (JSTypeChecker.isDate(jsO)) {
            if (this.jsDateToTime) {
                return (<Date>jsO).getTime();
            } else {
                return jsO;
            }
        } else {
            return this.jsonToMap(jsO);
        }
    }
    //TODO add class to runtime
    jsonToMap(json: string | def.Document): NSDictionary<string, any> {
        let jsonString: string = <any>json;
        if (typeof json !== "string") {
            jsonString = JSON.stringify(json);
        }
        let data = NSString.stringWithString(jsonString).dataUsingEncoding(NSUTF8StringEncoding);
        return NSJSONSerialization.JSONObjectWithDataOptionsError(data, NSJSONReadingOptions.MutableContainers);
    }
    mapToJson(map: NSDictionary<string, any>): def.Document {
        if (typeof map === "undefined" || map == null) {
            return null;
        }
        let type: any = map.objectForKey("docType");
        let data = NSJSONSerialization.dataWithJSONObjectOptionsError(map, NSJSONWritingOptions.PrettyPrinted);
        let jsonString: string = <any>NSString.alloc().initWithDataEncoding(data, NSUTF8StringEncoding);
        if (this.mapping.has(type)) {
            return <any>deserialize(this.mapping.get(type), jsonString);
        } else {
            return JSON.parse(jsonString);
        }
    }
}
export class Database implements def.Database {
    mapper = new Mapper();
    constructor(private db: CBLDatabase) { }
    setMapping(m: Map<string, ClassType<any>>) {
        this.mapper.setMapping(m);
    }
    createDocument(data: def.Document, id?: string, opts?: def.DocumentOpts): void {
        try {
            let document: CBLDocument = null;
            if (id) {
                document = this.db.documentWithID(id);
            } else {
                document = this.db.createDocument();
            }
            if (opts) {
                opts.ttl && (document.expirationDate = opts.ttl);
            }
            let rev = document.putPropertiesError(this.mapper.jsonToMap(data));
            data.docId = document.documentID;
            data.docRev = rev.revisionID;
        } catch (exception) {
            throw "Failed to createDocument:" + exception;
        }
    }
    getDocument(id: string): def.Document {
        let document = this.db.existingDocumentWithID(id);
        if (document != null && document.properties != null) {
            var value = this.mapper.mapToJson(document.properties);
            value.docId = document.documentID;
            value.docRev = document.currentRevisionID;
            return value;
        } else {
            return null;
        }
    }
    updateDocument(id: string, data: def.Document, opts?: def.DocumentOpts): void {
        try {
            let document = this.db.documentWithID(id);
            data.docId = document.documentID;
            data.docRev = document.currentRevisionID;
            if (opts) {
                opts.ttl && (document.expirationDate = opts.ttl);
            }
            document.putPropertiesError(this.mapper.jsonToMap(data));
        } catch (exception) {
            throw "Failed to updateDocument:" + exception;
        }
    }
    deleteDocument(id: string): boolean {
        try {
            var document = this.db.documentWithID(id);
            document.deleteDocument();
            return document.isDeleted;
        } catch (exception) {
            throw "Failed to deleteDocument:" + exception;
        }
    }
    getConflicts(id: string): def.Revision<def.Document>[] {
        var document = this.db.documentWithID(id);
        let revs = document.getConflictingRevisions();
        let all: def.Revision<def.Document>[] = [];
        for (let i = 0; i < revs.count; i++) {
            let temp = revs.objectAtIndex(i);
            all.push({
                id: temp.document.documentID,
                object: this.mapper.mapToJson(temp.document.properties),
                revid: temp.revisionID
            })
        }
        return all;
    }
    resolveConflict(id: string, merged: def.Document): void {
        let self = this;
        this.db.inTransaction(() => {
            try {
                let document = this.db.documentWithID(id);
                let current = document.currentRevision;
                let revs = document.getConflictingRevisions();
                for (let i = 0; i < revs.count; i++) {
                    let rev = revs.objectAtIndex(i);
                    let newRev = rev.createRevision();
                    if (rev.revisionID == current.revisionID) {
                        newRev.properties = NSMutableDictionary.dictionaryWithDictionary(self.mapper.jsonToMap(merged));
                    } else {
                        newRev.isDeletion = true;
                    }
                    newRev.saveAllowingConflict();
                }
                return true;
            } catch (exception) {
                return false;
            }
        });
    }
    getAttachment(id: string, name: string): def.Attachment {
        let doc = this.db.documentWithID(id);
        let rev = doc.currentRevision;
        let att = rev.attachmentNamed(name);
        if (att != null) {
            return new AttachmentDefault(att);
        } else {
            return null;
        }
    }
    getAttachmentNames(id: string): string[] {
        let doc = this.db.documentWithID(id);
        let rev = doc.currentRevision;
        let names = rev.attachmentNames;
        let array: string[] = [];
        if (names != null) {
            for (let i = 0; i < names.count; i++) {
                let temp = names.objectAtIndex(i);
                array.push(temp);
            }
        }
        return array;
    }
    getAttachments(id: string): def.Attachment[] {
        let doc = this.db.documentWithID(id);
        let rev = doc.currentRevision;
        let names = rev.attachments;
        let array: def.Attachment[] = [];
        if (names != null) {
            for (let i = 0; i < names.count; i++) {
                let temp = names.objectAtIndex(i);
                array.push(new AttachmentDefault(temp));
            }
        }
        return array;
    }
    setAttachment(id: string, file: def.Attachment): void {
        let doc = this.db.documentWithID(id);
        let newRev = doc.currentRevision.createRevision();
        newRev.setAttachmentNamedWithContentTypeContent(file.getName(), file.getType(), file.getStream());
        newRev.save();
    }
    removeAttachment(id: string, name: string): void {
        let doc = this.db.documentWithID(id);
        let newRev = doc.currentRevision.createRevision();
        newRev.removeAttachmentNamed(name);
        newRev.save();
    }
    createView(opts: def.ViewOpts): void {
        let self = this;
        let view = this.db.viewNamed(opts.name);
        let mapper = (document: NSDictionary<string, any>, emit: (p1, p2) => void) => {
            try {
                let value = self.mapper.mapToJson(document);
                opts.map(value, new Emitter(emit));
            } finally {
            }
        };
        if (opts.reduce) {
            view.setMapBlockReduceBlockVersion(mapper, (keys, values, rereduce) => {
                let keysJson = self.mapper.toJSSAfe(<any>keys);
                let valuesJson = self.mapper.toJSSAfe(<any>values);
                let result = opts.reduce(keysJson, valuesJson, rereduce);
                return self.mapper.toObjcSafe(result);
            }, opts.revision)
        } else {
            view.setMapBlockVersion(mapper, opts.revision);
        }
    }
    private prepareQuery(query: def.Query, queryM: CBLQuery) {
        this.isDefined(query.onlyConflict) && (queryM.allDocsMode = CBLAllDocsMode.kCBLOnlyConflicts);
        this.isDefined(query.inclusiveStart) && (queryM.inclusiveStart = query.inclusiveStart);
        this.isDefined(query.inclusiveEnd) && (queryM.inclusiveEnd = query.inclusiveEnd);
        this.isDefined(query.descending) && (queryM.descending = query.descending);
        this.isDefined(query.endKey) && (queryM.endKey = this.mapper.toObjcSafe(query.endKey));
        this.isDefined(query.endKeyDocID) && (queryM.endKeyDocID = query.endKeyDocID);
        this.isDefined(query.groupLevel) && (queryM.groupLevel = query.groupLevel);
        if (this.isDefined(query.indexUpdateMode)) {
            switch (query.indexUpdateMode) {
                case def.IndexUpdateMode.AFTER:
                    queryM.indexUpdateMode = CBLIndexUpdateMode.kCBLUpdateIndexAfter;
                    break;
                case def.IndexUpdateMode.BEFORE:
                    queryM.indexUpdateMode = CBLIndexUpdateMode.kCBLUpdateIndexBefore;
                    break;
                case def.IndexUpdateMode.NEVER:
                    queryM.indexUpdateMode = CBLIndexUpdateMode.kCBLUpdateIndexNever;
                    break;
            }
        }
        this.isDefined(query.keys) && (queryM.keys = this.mapper.toObjcSafe(query.keys));
        this.isDefined(query.limit) && (queryM.limit = query.limit);
        this.isDefined(query.mapOnly) && (queryM.mapOnly = query.mapOnly);
        this.isDefined(query.prefixMatchLevel) && (queryM.prefixMatchLevel = query.prefixMatchLevel);
        this.isDefined(query.skip) && (queryM.skip = query.skip);
        this.isDefined(query.startKey) && (queryM.startKey = this.mapper.toObjcSafe(query.startKey));
        this.isDefined(query.startKeyDocID) && (queryM.startKeyDocID = query.startKeyDocID);
    }
    queryView(name: string, query: def.Query): def.QueryResult {
        let queryM = this.db.viewNamed(name).createQuery();
        this.prepareQuery(query, queryM);
        var resEnum = queryM.run();
        return new QueryResult(queryM, resEnum);
    }
    queryAllDocuments(query: def.Query): def.QueryResult {
        let queryM = this.db.createAllDocumentsQuery();
        this.prepareQuery(query, queryM);
        var resEnum = queryM.run();
        return new QueryResult(queryM, resEnum);
    }
    liveQuery(name: string, query: def.Query, listener: def.QueryListener): def.LiveQuery {
        let view = this.db.viewNamed(name);
        let queryM = view.createQuery();
        this.prepareQuery(query, queryM);
        let live = queryM.asLiveQuery();
        let self = this;
        class ObserverLive extends NSObject {
            observeValueForKeyPath(keyPath: NSString, ofObject: NSObject, change: NSDictionary<string, any>, context): void {
                if (ofObject == live) {
                    let rows = new QueryResult(live, live.rows);
                    listener.onRows(rows);
                }
            }
            public static init(): ObserverLive {
                const observer = <ObserverLive>super.new();
                return observer;
            }
        }
        let observer = ObserverLive.init();
        live.addObserverForKeyPathOptionsContext(observer, "rows", null, null);
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
            },
            run: () => {
                let res = live.run();
                return new QueryResult(live, live.rows);
            }
        }
    }
    addChangeListener(listener: def.DatabaseListener): void {
        try {
            let mainQueue = NSOperationQueue.mainQueue;
            NSNotificationCenter.defaultCenter.addObserverForNameObjectQueueUsingBlock(kCBLDatabaseChangeNotification, this.db, mainQueue, (n: NSNotification) => {
                if (n.userInfo) {
                    var changes = n.userInfo.objectForKey("changes");
                    let all: def.DatabaseListenerParam[] = [];
                    for (let i = 0; i < changes.count; i++) {
                        let change: CBLDatabaseChange = changes.objectAtIndex(i);
                        all.push({
                            documentId: change.documentID,
                            revisionId: change.revisionID,
                            isConflict: change.inConflict,
                            isCurrentRevision: change.isCurrentRevision,
                            isDeletion: change.isDeletion,
                            source: (change.source != null) ? change.source.absoluteString : null
                        });
                    }
                    listener.onChange(all);
                }
            })
        } catch (exception) {
            throw "Failed to listen changes..." + exception;
        }
    }
    createPullReplication(url: string): def.ReplicationPull {
        try {
            let pull = this.db.createPullReplication(NSURL.URLWithString(url));
            return new ReplicationPull(pull, this.db);
        } catch (exception) {
            throw "Failed to create pull replication..." + exception;
        }
    }
    createPushReplication(url: string): def.ReplicationPush {
        try {
            let pull = this.db.createPushReplication(NSURL.URLWithString(url));
            return new ReplicationPush(pull, this.db);
        } catch (exception) {
            throw "Failed to create push replication..." + exception;
        }
    }
    createFilter(opts: def.FilterOpts): void {
        this.db.setFilterNamedAsBlock(opts.name, (revision: CBLRevision, params: NSDictionary<string, any>) => {
            let pa: Map<string, any> = this.mapper.toJSSAfe(<any>params);
            return opts.filter({
                id: revision.document.documentID,
                revid: revision.revisionID,
                object: this.mapper.mapToJson(revision.document.properties)
            }, pa);
        });
    }
    destroy() {
        try { this.db.deleteDatabase(); }
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
export class QueryResult implements def.QueryResult {
    ids: string[] = null;
    documents: def.Document[] = null;
    values: any[] = null;
    mapper = new Mapper();
    constructor(private query: CBLQuery, private resEnum: CBLQueryEnumerator) {

        var result: any[] = [];
        for (let i = 0; i < resEnum.count; i++) {
            var row = resEnum.rowAtIndex(i);
            if (row.value != null) {
                let doc = this.mapper.toJSSAfe(row.value);
                result.push(doc);
            } else if (row.document != null) {
                let prop = row.document.properties;
                let doc = this.mapper.mapToJson(prop);
                result.push(doc);
            }
        }
    }
    getDocuments(): def.Document[] {
        this.resEnum.reset();
        if (this.documents == null) {
            this.documents = [];
            for (let i = 0; i < this.resEnum.count; i++) {
                var row = this.resEnum.rowAtIndex(i);
                if (row.document != null) {
                    let prop = row.document.properties;
                    let doc = this.mapper.mapToJson(prop);
                    this.documents.push(doc);
                }
            }
        }
        return this.documents;
    } firstDocument(): def.Document {
        let docs = this.getDocuments();
        return docs.length > 0 ? docs[0] : null;
    }
    firstValue(): any {
        let docs = this.getValues();
        return docs.length > 0 ? docs[0] : null;
    }
    firstId(): string {
        let docs = this.getDocumentsId();
        return docs.length > 0 ? docs[0] : null;
    }
    hasDocuments() {
        let docs = this.getDocuments();
        return docs.length > 0;
    }
    hasValues() {
        let docs = this.getValues();
        return docs.length > 0;
    }
    hasIds() {
        let docs = this.getDocumentsId();
        return docs.length > 0;
    }
    getValues(): any[] {
        this.resEnum.reset();
        if (this.values == null) {
            this.values = [];
            for (let i = 0; i < this.resEnum.count; i++) {
                var row = this.resEnum.rowAtIndex(i);
                if (row.value != null) {
                    let doc = this.mapper.toJSSAfe(row.value);
                    this.values.push(doc);
                }
            }
        }
        return this.values;
    }
    getDocumentsId(): string[] {
        if (this.ids == null) {
            this.ids = [];
            for (let i = 0; i < this.resEnum.count; i++) {
                var row = this.resEnum.rowAtIndex(i);
                if (row.documentID != null) {
                    this.ids.push(row.documentID);
                }
            }
        }
        return this.ids;
    }
    rerun(): void {
        this.documents = null;
        this.ids = null;
        this.values = null;
        this.resEnum = this.query.run();
    }
}
abstract class Replication {
    addChangeListener(listener: def.ReplicationListener): void {
        let self = this;
        let mainQueue = NSOperationQueue.mainQueue;
        NSNotificationCenter.defaultCenter.addObserverForNameObjectQueueUsingBlock("CBLReplicationChange", this.observed(), mainQueue, (n: NSNotification) => {
            if (n.object) {
                let replic: CBLReplication = n.object;
                let status: def.ReplicationStatus = null;
                switch (replic.status) {
                    case CBLReplicationStatus.kCBLReplicationActive:
                        status = def.ReplicationStatus.Active;
                        break;
                    case CBLReplicationStatus.kCBLReplicationIdle:
                        status = def.ReplicationStatus.Idle;
                        break;
                    case CBLReplicationStatus.kCBLReplicationOffline:
                        status = def.ReplicationStatus.Offline;
                        break;
                    case CBLReplicationStatus.kCBLReplicationStopped:
                        status = def.ReplicationStatus.Stopped;
                        break;
                }
                listener.onChange({
                    changesCount: replic.changesCount,
                    completedChangesCount: replic.completedChangesCount,
                    lastError: (replic.lastError == null) ? null : replic.lastError.description,
                    lastErrorCode: (replic.lastError == null) ? null : replic.lastError.code,
                    status: status
                })
            }
        })
    }
    abstract observed();
}
export class ReplicationPull extends Replication implements def.ReplicationPull {
    mapper = new Mapper();
    constructor(private innerPull: CBLReplication, private db: CBLDatabase) { super() }
    observed() { return this.innerPull; }
    setContinuous(cont: boolean) {
        this.innerPull.continuous = true;
    }
    setBasicAuthenticator(user: string, password: string) {
        this.innerPull.authenticator = CBLAuthenticator.basicAuthenticatorWithNamePassword(user, password);
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
    channels(channels: string[]) {
        this.innerPull.channels = this.mapper.toObjcSafe(channels);
    }
    setDocIds(docs: string[]) {
        this.innerPull.documentIDs = this.mapper.toObjcSafe(docs);
    }
}

export class ReplicationPush extends Replication implements def.ReplicationPush {
    mapper = new Mapper();
    constructor(private innerPush: CBLReplication, private db: CBLDatabase) { super(); }
    observed() { return this.innerPush; }
    setContinuous(cont: boolean) {
        this.innerPush.continuous = true;
    }
    setBasicAuthenticator(user: string, password: string) {
        this.innerPush.authenticator = CBLAuthenticator.basicAuthenticatorWithNamePassword(user, password);
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
    setFilter(filter: string) {
        this.innerPush.filter = filter;
    }
    setFilterParams(params: Map<string, any>) {
        this.innerPush.filterParams = this.mapper.toObjcSafe(params);
    }
}
export class Emitter implements def.Emitter {
    mapper = new Mapper();
    constructor(private innerEmitter: (p1, p2) => void) {
        this.mapper.jsDateToTime = true;
    }

    emit(key: any | Array<any>, value: any) {
        this.innerEmitter(this.mapper.toObjcSafe(key), this.mapper.toObjcSafe(value));
    }

}
export class AttachmentDefault implements def.Attachment {
    constructor(private atachment: CBLAttachment) { }
    getName() {
        return this.atachment.name;
    }
    getType() {
        return this.atachment.contentType;
    }
    getStream(): NSData {
        return this.atachment.content;
    }
}

export class AttachmentFactory implements def.AttachmentFactory {
    static fromSource(source: ImageSource, name: string, type: def.AttachmentImage): def.Attachment {
        let ad: UIImage = source.ios;
        let data: NSData = null;
        switch (type) {
            case def.AttachmentImage.JPG:
                data = UIImageJPEGRepresentation(ad, 1);
                break;
            case def.AttachmentImage.PNG:
                data = UIImagePNGRepresentation(ad);
                break;
        }
        return {
            getName: () => {
                return name;
            },
            getStream: () => {
                return data;
            },
            getType: () => {
                return type == def.AttachmentImage.PNG ? "image/png" : "image/jpeg";
            }
        }
    }
}