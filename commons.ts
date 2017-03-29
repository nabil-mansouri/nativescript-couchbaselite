import { ImageSource } from "image-source"

export enum Log {
    VERBOSE,
    DEBUG,
    INFO,
    WARN,
    ERROR
}

export enum Storage {
    SQLLite,
    ForestDB
}
export interface DatabaseOptions {
    name: string;
    create: boolean;
    encryptionKey?: string;
}
export interface DatabaseListenerParam {
    documentId: string;
    revisionId: string;
    isConflict: boolean;
    isCurrentRevision: boolean;
    isDeletion: boolean;
    source: string;
}
export interface DatabaseListener {
    onChange(p: DatabaseListenerParam[]);
}
export interface QueryListener {
    onRows(rows: QueryResult);
}
export interface DocumentOpts {
    ttl?: Date;
}
export interface Revision<T> {
    revid: string;
    object: T;
    id: string;
}
export enum AttachmentImage {
    PNG, JPG
}
export interface Attachment {
    getName();
    getType(): string;
    getStream(): any;
}
export interface Document {
    docId?: string;
    docRev?: string;
    docType?: string;
    docDeleted?: boolean;
}
export interface Emitter {
    emit(key: any | Array<any>, value: any);
}
export interface ViewOpts {
    name: string;
    revision: string;
    map: (doc: Document, emitter: Emitter) => void;
    reduce?: (keys: any[], values: any[], rereduce: boolean) => any;
}
export interface FilterOpts {
    name: string;
    filter: (doc: Revision<Document>, params: Map<string, any>) => boolean;
}
export enum IndexUpdateMode {
    BEFORE, AFTER, NEVER
}
export enum ReplicationError {
    Authentication = 401
}
export enum ReplicationStatus {
    Stopped,
    Offline,
    Idle,
    Active
}
export interface LiveQuery {
    waitForRows(): void;
    updateIndex(): void;
    start(): void;
    stop(): void;
    run(): QueryResult;
}
export interface QueryResult {
    getDocumentsId(): string[];
    getDocuments(): Document[];
    getValues(): any[];
    firstDocument(): Document;
    firstValue(): any;
    firstId(): string;
    hasDocuments(): boolean;
    hasValues(): boolean;
    hasIds(): boolean;
    rerun(): void;
}
export interface ReplicationListenerParams {
    status: ReplicationStatus;
    lastError: string;
    lastErrorCode: number | ReplicationError;
    completedChangesCount: number;
    changesCount: number;
}
export interface ReplicationListener {
    onChange(p: ReplicationListenerParams);
}
export interface Query {
    startKey?: any;
    endKey?: any;
    descending?: boolean;
    inclusiveStart?: boolean;
    inclusiveEnd?: boolean;
    limit?: number;
    skip?: number;
    keys?: string[];
    startKeyDocID?: string;
    endKeyDocID?: string;
    indexUpdateMode?: IndexUpdateMode;
    prefixMatchLevel?: number;
    mapOnly: boolean;
    groupLevel?: number;
    onlyConflict?: boolean
}

export class JSTypeChecker {
    static isUndefined(jsO: any): boolean {
        return typeof jsO === "undefined" || jsO == null || (JSTypeChecker.isNumber(jsO) && isNaN(jsO));
    }
    static isDate(jsO: any): boolean {
        return jsO instanceof Date;
    }
    static isString(jsO: any): boolean {
        return typeof jsO == "string" || jsO instanceof String;
    }
    static isBoolean(jsO: any): boolean {
        return typeof jsO == "boolean" || jsO instanceof Boolean;
    }
    static isNumber(jsO: any): boolean {
        return typeof jsO == "number" || jsO instanceof Number;
    }
    static isInt(jsO: any): boolean {
        return JSTypeChecker.isNumber(jsO) && jsO % 1 === 0;
    }
    static isFloat(jsO: any): boolean {
        return JSTypeChecker.isNumber(jsO) && !JSTypeChecker.isInt(jsO);
    }
    static isMap(jsO: any): boolean {
        return jsO instanceof Map;
    }
    static isArray(jsO: any): boolean {
        return jsO instanceof Array;
    }
}