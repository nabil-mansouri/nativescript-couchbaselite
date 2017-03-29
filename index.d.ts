import { LiveQuery, ReplicationListener, Log, Storage, DatabaseOptions, DatabaseListener, DatabaseListenerParam, QueryListener, DocumentOpts, Revision, AttachmentImage, Attachment, Document, Emitter, ViewOpts, FilterOpts, IndexUpdateMode, ReplicationError, ReplicationStatus, Query, QueryResult } from "./commons";
import { ImageSource } from "image-source"

import { ClassType } from "class-transformer/ClassTransformer";
export { LiveQuery, ReplicationListener, Log, Storage, DatabaseOptions, DatabaseListenerParam, DatabaseListener, QueryListener, DocumentOpts, Revision, AttachmentImage, Attachment, Document, Emitter, ViewOpts, FilterOpts, IndexUpdateMode, ReplicationError, ReplicationStatus, Query, QueryResult };
declare module "couch" {

}
export class DatabaseManager {
    static getOrCreate(opts: DatabaseOptions): Database;
    static getExisting(opts: DatabaseOptions): Database;
}

export class AttachmentFactory {
    static fromSource(source: ImageSource, name: string, type: AttachmentImage): Attachment;
}
export class Database {
    setMapping(m: Map<string, ClassType<any>>);
    createDocument(data: Document, id?: string, opts?: DocumentOpts): void;
    getDocument(id: string): Document;
    updateDocument(id: string, data: Document, opts?: DocumentOpts): void;
    deleteDocument(id: string): boolean;
    getConflicts(id: string): Revision<Document>[];
    resolveConflict(id: string, merged: Document): void;
    getAttachment(id: string, name: string): Attachment;
    getAttachmentNames(id: string): string[];
    getAttachments(id: string): Attachment[];
    setAttachment(id: string, file: Attachment): void;
    removeAttachment(id: string, name: string): void;
    createView(opts: ViewOpts): void;
    queryView(name: string, query: Query): QueryResult;
    queryAllDocuments(query: Query): QueryResult;
    liveQuery(name: string, query: Query, listener: QueryListener): LiveQuery;
    addChangeListener(listener: DatabaseListener): void;
    createPullReplication(url: string): ReplicationPull;
    createPushReplication(url: string): ReplicationPush;
    createFilter(opts: FilterOpts): void;
    destroy();
    close();
}
export class ReplicationPush {
    setContinuous(cont: boolean);
    setBasicAuthenticator(user: string, password: string);
    start(): void;
    restart(): void;
    stop(): void;
    addChangeListener(listener: ReplicationListener): void;
    setFilter(filter: string);
    setFilterParams(params: Map<string, any>);
}
export class ReplicationPull {
    setContinuous(cont: boolean);
    setBasicAuthenticator(user: string, password: string);
    start(): void;
    restart(): void;
    stop(): void;
    addChangeListener(listener: ReplicationListener): void;
    channels(channels: string[]);
    setDocIds(docs: string[]);
}
