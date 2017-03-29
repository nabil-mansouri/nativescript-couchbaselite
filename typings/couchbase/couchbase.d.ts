declare module com {
	export module couchbase {
		export module lite {
			export class AsyncTask {
				/**
				 * Constructs a new instance of the com.couchbase.lite.AsyncTask interface with the provided implementation.
				 */
				public constructor(implementation: {
					run(param0: com.couchbase.lite.Database): void;
				});
				public run(param0: com.couchbase.lite.Database): void;
			}
		}
	}
}

import javaioInputStream = java.io.InputStream;
import javautilMap = java.util.Map;
import javanetURL = java.net.URL;
/// <reference path="./com.couchbase.lite.BlobStoreWriter.d.ts" />
/// <reference path="./com.couchbase.lite.Database.d.ts" />
/// <reference path="./com.couchbase.lite.Document.d.ts" />
/// <reference path="./com.couchbase.lite.Revision.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class Attachment {
				public constructor(param0: javaioInputStream, param1: string);
				public constructor(param0: com.couchbase.lite.Revision, param1: string, param2: javautilMap);
				public setName(param0: string): void;
				public static installAttachmentBodies(param0: javautilMap, param1: com.couchbase.lite.Database): javautilMap;
				public getContentType(): string;
				public getRevision(): com.couchbase.lite.Revision;
				public getContentURL(): javanetURL;
				public getName(): string;
				public static blobStoreWriterForBody(param0: javaioInputStream, param1: com.couchbase.lite.Database): com.couchbase.lite.BlobStoreWriter;
				public getLength(): number;
				public getMetadata(): javautilMap;
				public setRevision(param0: com.couchbase.lite.Revision): void;
				public getContent(): javaioInputStream;
				public getDocument(): com.couchbase.lite.Document;
				public getBodyIfNew(): javaioInputStream;
			}
		}
	}
}

import javalangObject = java.lang.Object;
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class BlobKey {
				public hasBlobKey(): boolean;
				public constructor(param0: native.Array<number>);
				public base64Digest(): string;
				public static convertFromHex(param0: string): native.Array<number>;
				public equals(param0: javalangObject): boolean;
				public hashCode(): number;
				public static convertToHex(param0: native.Array<number>): string;
				public setBytes(param0: native.Array<number>): void;
				public toString(): string;
				public getBytes(): native.Array<number>;
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

import javaioFile = java.io.File;
import javautilSet = java.util.Set;
import javautilList = java.util.List;
/// <reference path="./com.couchbase.lite.BlobKey.d.ts" />
/// <reference path="./com.couchbase.lite.Context.d.ts" />
/// <reference path="./com.couchbase.lite.support.action.Action.d.ts" />
/// <reference path="./com.couchbase.lite.support.security.SymmetricKey.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class BlobStore {
				public static FILE_EXTENSION: string;
				public static TMP_FILE_EXTENSION: string;
				public static TMP_FILE_PREFIX: string;
				public static ENCRYPTION_ALGORITHM: string;
				public static ENCRYPTION_MARKER_FILENAME: string;
				public static keyForBlobFromFile(param0: javaioFile): com.couchbase.lite.BlobKey;
				public static migrateBlobstoreFilenames(param0: javaioFile): void;
				public blobForKey(param0: com.couchbase.lite.BlobKey): native.Array<number>;
				public allKeys(): javautilSet;
				public blobStreamForKey(param0: com.couchbase.lite.BlobKey): javaioInputStream;
				public actionToChangeEncryptionKey(param0: com.couchbase.lite.support.security.SymmetricKey): com.couchbase.lite.support.action.Action;
				public isGZipped(param0: com.couchbase.lite.BlobKey): boolean;
				public getEncryptionKey(): com.couchbase.lite.support.security.SymmetricKey;
				public static keyForBlob(param0: native.Array<number>): com.couchbase.lite.BlobKey;
				public getBlobPathForKey(param0: com.couchbase.lite.BlobKey): string;
				public deleteBlobsExceptWithKeys(param0: javautilList): number;
				public getSizeOfBlob(param0: com.couchbase.lite.BlobKey): number;
				public constructor(param0: com.couchbase.lite.Context, param1: string, param2: com.couchbase.lite.support.security.SymmetricKey, param3: boolean);
				public totalDataSize(): number;
				public getRawPathForKey(param0: com.couchbase.lite.BlobKey): string;
				public storeBlob(param0: native.Array<number>, param1: com.couchbase.lite.BlobKey): boolean;
				public getPath(): string;
				public getKeyForFilename(param0: com.couchbase.lite.BlobKey, param1: string): boolean;
				public changeEncryptionKey(param0: com.couchbase.lite.support.security.SymmetricKey): void;
				public hasBlobForKey(param0: com.couchbase.lite.BlobKey): boolean;
				public deleteBlobs(): number;
				public tempDir(): javaioFile;
				public constructor(param0: com.couchbase.lite.Context, param1: string, param2: com.couchbase.lite.support.security.SymmetricKey);
				public count(): number;
				public isEncrypted(): boolean;
			}
		}
	}
}

declare module okhttp3 {
	export module Request {
		export module Builder {

		}
	}
	export module Headers {
	}
	export module MediaType {
	}
	export module RequestBody {
	}
	export module OkHttpClient {
	}
	export module Call {
	}
	export module CookieJar {
	}
	export module Cookie {
	}
	export module Response {
	}
	export module HttpUrl {
	}
}
/// <reference path="./com.couchbase.lite.BlobKey.d.ts" />
/// <reference path="./com.couchbase.lite.BlobStore.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class BlobStoreWriter {
				public getBlobKey(): com.couchbase.lite.BlobKey;
				public mD5DigestString(): string;
				public constructor(param0: com.couchbase.lite.BlobStore);
				public appendData(param0: native.Array<number>): void;
				public cancel(): void;
				public getFilePath(): string;
				public appendData(param0: native.Array<number>, param1: number, param2: number): void;
				public finish(): void;
				public install(): boolean;
				public sHA1DigestString(): string;
				public getLength(): number;
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class Cache {
				public put(param0: javalangObject, param1: javalangObject): javalangObject;
				public clear(): void;
				public constructor(param0: number);
				public remove(param0: javalangObject): javalangObject;
				public resourceWithCacheKeyDontRecache(param0: javalangObject): javalangObject;
				public constructor();
				public get(param0: javalangObject): javalangObject;
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class ChangeValidator {
				/**
				 * Constructs a new instance of the com.couchbase.lite.ChangeValidator interface with the provided implementation.
				 */
				public constructor(implementation: {
					validateChange(param0: string, param1: javalangObject, param2: javalangObject): boolean;
				});
				public validateChange(param0: string, param1: javalangObject, param2: javalangObject): boolean;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ChangesOptions {
				public isIncludeDocs(): boolean;
				public setLimit(param0: number): void;
				public setSortBySequence(param0: boolean): void;
				public setIncludeConflicts(param0: boolean): void;
				public isIncludeConflicts(): boolean;
				public constructor(param0: number, param1: boolean, param2: boolean, param3: boolean);
				public toString(): string;
				public constructor();
				public getLimit(): number;
				public setIncludeDocs(param0: boolean): void;
				public isSortBySequence(): boolean;
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.NetworkReachabilityManager.d.ts" />
/// <reference path="./com.couchbase.lite.storage.SQLiteStorageEngineFactory.d.ts" />
/// <reference path="./java.io.File.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class Context {
				/**
				 * Constructs a new instance of the com.couchbase.lite.Context interface with the provided implementation.
				 */
				public constructor(implementation: {
					getFilesDir(): javaioFile;
					getTempDir(): javaioFile;
					setNetworkReachabilityManager(param0: com.couchbase.lite.NetworkReachabilityManager): void;
					getNetworkReachabilityManager(): com.couchbase.lite.NetworkReachabilityManager;
					getSQLiteStorageEngineFactory(): com.couchbase.lite.storage.SQLiteStorageEngineFactory;
					getUserAgent(): string;
				});
				public setNetworkReachabilityManager(param0: com.couchbase.lite.NetworkReachabilityManager): void;
				public getTempDir(): javaioFile;
				public getSQLiteStorageEngineFactory(): com.couchbase.lite.storage.SQLiteStorageEngineFactory;
				public getFilesDir(): javaioFile;
				public getNetworkReachabilityManager(): com.couchbase.lite.NetworkReachabilityManager;
				public getUserAgent(): string;
			}
		}
	}
}

import javalangThrowable = java.lang.Throwable;
/// <reference path="./com.couchbase.lite.Status.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class CouchbaseLiteException {
				public constructor(param0: com.couchbase.lite.Status);
				public constructor(param0: string, param1: javalangThrowable, param2: com.couchbase.lite.Status);
				public constructor(param0: string, param1: javalangThrowable, param2: number);
				public constructor(param0: javalangThrowable, param1: com.couchbase.lite.Status);
				public constructor(param0: string, param1: com.couchbase.lite.Status);
				public constructor(param0: string, param1: number);
				public getCBLStatus(): com.couchbase.lite.Status;
				public constructor(param0: number);
				public constructor(param0: javalangThrowable, param1: number);
				public toString(): string;
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class CouchbaseLiteRuntimeException {
				public constructor(param0: string, param1: javalangThrowable);
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

import javautilconcurrentFuture = java.util.concurrent.Future;
import javautilconcurrentatomicAtomicBoolean = java.util.concurrent.atomic.AtomicBoolean;
/// <reference path="./com.couchbase.lite.AsyncTask.d.ts" />
/// <reference path="./com.couchbase.lite.BlobKey.d.ts" />
/// <reference path="./com.couchbase.lite.BlobStore.d.ts" />
/// <reference path="./com.couchbase.lite.BlobStoreWriter.d.ts" />
/// <reference path="./com.couchbase.lite.ChangesOptions.d.ts" />
/// <reference path="./com.couchbase.lite.Database.d.ts" />
/// <reference path="./com.couchbase.lite.DatabaseOptions.d.ts" />
/// <reference path="./com.couchbase.lite.Document.d.ts" />
/// <reference path="./com.couchbase.lite.DocumentChange.d.ts" />
/// <reference path="./com.couchbase.lite.Manager.d.ts" />
/// <reference path="./com.couchbase.lite.Mapper.d.ts" />
/// <reference path="./com.couchbase.lite.Query.d.ts" />
/// <reference path="./com.couchbase.lite.QueryOptions.d.ts" />
/// <reference path="./com.couchbase.lite.ReplicationFilter.d.ts" />
/// <reference path="./com.couchbase.lite.ReplicationFilterCompiler.d.ts" />
/// <reference path="./com.couchbase.lite.RevisionList.d.ts" />
/// <reference path="./com.couchbase.lite.Status.d.ts" />
/// <reference path="./com.couchbase.lite.TransactionalTask.d.ts" />
/// <reference path="./com.couchbase.lite.Validator.d.ts" />
/// <reference path="./com.couchbase.lite.View.d.ts" />
/// <reference path="./com.couchbase.lite.internal.AttachmentInternal.d.ts" />
/// <reference path="./com.couchbase.lite.internal.RevisionInternal.d.ts" />
/// <reference path="./com.couchbase.lite.replicator.Replication.d.ts" />
/// <reference path="./com.couchbase.lite.store.Store.d.ts" />
/// <reference path="./com.couchbase.lite.store.ViewStore.d.ts" />
/// <reference path="./com.couchbase.lite.support.HttpClientFactory.d.ts" />
/// <reference path="./com.couchbase.lite.support.PersistentCookieJar.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.concurrent.Future.d.ts" />
/// <reference path="./java.util.concurrent.atomic.AtomicBoolean.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class Database {
				public static TAG: string;
				public static kBigAttachmentLength: number;
				public static DEFAULT_MAX_REVS: number;
				public static kCBLDatabaseLocalCheckpoint_LocalUUID: string;
				public static kLocalCheckpointDocId: string;
				public getPersistentCookieStore(): com.couchbase.lite.support.PersistentCookieJar;
				public getStore(): com.couchbase.lite.store.Store;
				public open(param0: com.couchbase.lite.DatabaseOptions): void;
				public runAsync(param0: com.couchbase.lite.AsyncTask): javautilconcurrentFuture;
				public getDocument(param0: string, param1: string, param2: boolean): com.couchbase.lite.internal.RevisionInternal;
				public getView(param0: string): com.couchbase.lite.View;
				public addReplication(param0: com.couchbase.lite.replicator.Replication): void;
				public publicUUID(): string;
				public lastSequenceWithCheckpointId(param0: string): string;
				public getDocumentCount(): number;
				public deleteLocalDocument(param0: string): boolean;
				public getAllViews(): javautilList;
				public constructor(param0: string, param1: string, param2: com.couchbase.lite.Manager, param3: boolean);
				public getMaxRevTreeDepth(): number;
				public slowQuery(param0: com.couchbase.lite.Mapper): com.couchbase.lite.Query;
				public getActiveReplications(): javautilList;
				public getLocalCheckpointDocumentPropertyValueForKey(param0: string): javalangObject;
				public saveLocalUUIDInLocalCheckpointDocument(): boolean;
				public setInfo(param0: string, param1: string): number;
				public generateRevID(param0: native.Array<number>, param1: boolean, param2: string): string;
				public setName(param0: string): void;
				public runInTransaction(param0: com.couchbase.lite.TransactionalTask): boolean;
				public getAttachmentStorePath(): string;
				public setLastSequence(param0: string, param1: string): boolean;
				public getAllRevisions(param0: string, param1: boolean): com.couchbase.lite.RevisionList;
				public static parseCouchDBRevisionHistory(param0: javautilMap): javautilList;
				public setFilter(param0: string, param1: com.couchbase.lite.ReplicationFilter): void;
				public replaceUUIDs(): boolean;
				public addChangeListener(param0: com.couchbase.lite.Database.ChangeListener): void;
				public rememberPendingKey(param0: com.couchbase.lite.BlobKey, param1: string): void;
				public rememberAttachmentWriter(param0: com.couchbase.lite.BlobStoreWriter, param1: string): void;
				public static getFilterCompiler(): com.couchbase.lite.ReplicationFilterCompiler;
				public getLocalDocument(param0: string, param1: string): com.couchbase.lite.internal.RevisionInternal;
				public createPushReplication(param0: javanetURL): com.couchbase.lite.replicator.Replication;
				public delete(): void;
				public getExistingDocument(param0: string): com.couchbase.lite.Document;
				public open(): void;
				public putRevision(param0: com.couchbase.lite.internal.RevisionInternal, param1: string, param2: boolean): com.couchbase.lite.internal.RevisionInternal;
				public getRevisionHistory(param0: com.couchbase.lite.internal.RevisionInternal): javautilList;
				public totalDataSize(): number;
				public put(param0: string, param1: javautilMap, param2: string, param3: boolean, param4: javanetURL, param5: com.couchbase.lite.Status): com.couchbase.lite.internal.RevisionInternal;
				public getDocument(param0: string): com.couchbase.lite.Document;
				public createDocument(): com.couchbase.lite.Document;
				public getAttachmentWriter(): com.couchbase.lite.BlobStoreWriter;
				public expirationOfDocument(param0: string): number;
				public changesSince(param0: number, param1: com.couchbase.lite.ChangesOptions, param2: com.couchbase.lite.ReplicationFilter, param3: javautilMap): com.couchbase.lite.RevisionList;
				public clearDocumentCache(): void;
				public putLocalRevision(param0: com.couchbase.lite.internal.RevisionInternal, param1: string, param2: boolean): com.couchbase.lite.internal.RevisionInternal;
				public getValidation(param0: string): com.couchbase.lite.Validator;
				public getExistingLocalDocument(param0: string): javautilMap;
				public static setAutoCompact(param0: boolean): void;
				public getViewStorage(param0: string, param1: boolean): com.couchbase.lite.store.ViewStore;
				public static setFilterCompiler(param0: com.couchbase.lite.ReplicationFilterCompiler): void;
				public getPossibleAncestorRevisionIDs(param0: com.couchbase.lite.internal.RevisionInternal, param1: number, param2: javautilconcurrentatomicAtomicBoolean): javautilList;
				public purgeRevisions(param0: javautilMap): javautilMap;
				public compact(): void;
				public getManager(): com.couchbase.lite.Manager;
				public getExistingView(param0: string): com.couchbase.lite.View;
				public setViewDocumentType(param0: string, param1: string): void;
				public databaseStorageChanged(param0: com.couchbase.lite.DocumentChange): void;
				public getAllDocs(param0: com.couchbase.lite.QueryOptions): javautilMap;
				public rememberAttachmentWritersForDigests(param0: javautilMap): void;
				public getLocalCheckpointDocument(): javautilMap;
				public runFilter(param0: com.couchbase.lite.ReplicationFilter, param1: javautilMap, param2: com.couchbase.lite.internal.RevisionInternal): boolean;
				public setValidation(param0: string, param1: com.couchbase.lite.Validator): void;
				public getRevisionHistoryDictStartingFromAnyAncestor(param0: com.couchbase.lite.internal.RevisionInternal, param1: javautilList): javautilMap;
				public setMaxRevTreeDepth(param0: number): void;
				public getFilter(param0: string): com.couchbase.lite.ReplicationFilter;
				public getLastSequenceNumber(): number;
				public findMissingRevisions(param0: com.couchbase.lite.RevisionList): number;
				public getName(): string;
				public getPath(): string;
				public getAllReplications(): javautilList;
				public toString(): string;
				public storageExitedTransaction(param0: boolean): void;
				public createAllDocumentsQuery(): com.couchbase.lite.Query;
				public putRevision(param0: com.couchbase.lite.internal.RevisionInternal, param1: string, param2: boolean, param3: com.couchbase.lite.Status): com.couchbase.lite.internal.RevisionInternal;
				public exists(): boolean;
				public loadRevisionBody(param0: com.couchbase.lite.internal.RevisionInternal): com.couchbase.lite.internal.RevisionInternal;
				public putLocalCheckpointDocumentWithKey(param0: string, param1: javalangObject): boolean;
				public updateAttachment(param0: string, param1: com.couchbase.lite.BlobStoreWriter, param2: string, param3: com.couchbase.lite.internal.AttachmentInternal.AttachmentEncoding, param4: string, param5: string, param6: javanetURL): com.couchbase.lite.internal.RevisionInternal;
				public getCachedDocument(param0: string): com.couchbase.lite.Document;
				public expandAttachments(param0: com.couchbase.lite.internal.RevisionInternal, param1: number, param2: boolean, param3: boolean, param4: com.couchbase.lite.Status): boolean;
				public forgetView(param0: string): void;
				public close(): boolean;
				public findCommonAncestorOf(param0: com.couchbase.lite.internal.RevisionInternal, param1: javautilList): string;
				public removeDatabaseListener(param0: com.couchbase.lite.Database.DatabaseListener): void;
				public unpushedRevisionsSince(param0: string, param1: com.couchbase.lite.ReplicationFilter, param2: javautilMap): com.couchbase.lite.RevisionList;
				public forceInsert(param0: com.couchbase.lite.internal.RevisionInternal, param1: javautilList, param2: javanetURL): void;
				public getStartTime(): number;
				public makeAnonymousView(): com.couchbase.lite.View;
				public removeDocumentFromCache(param0: com.couchbase.lite.Document): void;
				public getInfo(param0: string): string;
				public getViewDocumentType(param0: string): string;
				public addDatabaseListener(param0: com.couchbase.lite.Database.DatabaseListener): void;
				public queryViewNamed(param0: string, param1: com.couchbase.lite.QueryOptions, param2: javautilList): javautilList;
				public getAttachmentStore(): com.couchbase.lite.BlobStore;
				public getParentRevision(param0: com.couchbase.lite.internal.RevisionInternal): com.couchbase.lite.internal.RevisionInternal;
				public privateUUID(): string;
				public getAttachment(param0: javautilMap, param1: string): com.couchbase.lite.internal.AttachmentInternal;
				public inlineFollowingAttachmentsIn(param0: com.couchbase.lite.internal.RevisionInternal): boolean;
				public getAttachments(param0: string, param1: string): javautilMap;
				public createPullReplication(param0: javanetURL): com.couchbase.lite.replicator.Replication;
				public putLocalDocument(param0: string, param1: javautilMap): boolean;
				public changeEncryptionKey(param0: javalangObject): void;
				public getAttachment(param0: com.couchbase.lite.internal.RevisionInternal, param1: string): com.couchbase.lite.internal.AttachmentInternal;
				public addActiveReplication(param0: com.couchbase.lite.replicator.Replication): void;
				public fileForAttachmentDict(param0: javautilMap): javanetURL;
				public isOpen(): boolean;
				public rememberAttachmentWriter(param0: com.couchbase.lite.BlobStoreWriter): void;
				public findActiveReplicator(param0: com.couchbase.lite.replicator.Replication): com.couchbase.lite.replicator.Replication;
				public removeChangeListener(param0: com.couchbase.lite.Database.ChangeListener): void;
				public createReplicator(param0: javanetURL, param1: boolean, param2: com.couchbase.lite.support.HttpClientFactory): com.couchbase.lite.replicator.Replication;
			}
			export module Database {
				export class ChangeEvent {
					public getChanges(): java.util.List<com.couchbase.lite.DocumentChange>;
					public isExternal(): boolean;
					public constructor(param0: com.couchbase.lite.Database, param1: boolean, param2: javautilList);
					public getSource(): com.couchbase.lite.Database;
				}
				export class ChangeListener {
					/**
					 * Constructs a new instance of the com.couchbase.lite.Database$ChangeListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						changed(param0: com.couchbase.lite.Database.ChangeEvent): void;
					});
					public changed(param0: com.couchbase.lite.Database.ChangeEvent): void;
				}
				export class DatabaseListener {
					/**
					 * Constructs a new instance of the com.couchbase.lite.Database$DatabaseListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						databaseClosing(): void;
					});
					public databaseClosing(): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class DatabaseOptions {
				public setStorageType(param0: string): void;
				public getEncryptionKey(): javalangObject;
				public getStorageType(): string;
				public isReadOnly(): boolean;
				public isCreate(): boolean;
				public setEncryptionKey(param0: javalangObject): void;
				public constructor();
				public setCreate(param0: boolean): void;
				public setReadOnly(param0: boolean): void;
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.Database.d.ts" />
/// <reference path="./com.couchbase.lite.Manager.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class DatabaseUpgrade {
				public canRemoveOldAttachmentsDir(): boolean;
				public deleteSQLiteFiles(): void;
				public getNumDocs(): number;
				public backOut(): void;
				public constructor(param0: com.couchbase.lite.Manager, param1: com.couchbase.lite.Database, param2: string);
				public getNumRevs(): number;
				public importData(): boolean;
			}
		}
	}
}

import Date = java.util.Date;
/// <reference path="./com.couchbase.lite.Database.d.ts" />
/// <reference path="./com.couchbase.lite.Document.d.ts" />
/// <reference path="./com.couchbase.lite.DocumentChange.d.ts" />
/// <reference path="./com.couchbase.lite.QueryRow.d.ts" />
/// <reference path="./com.couchbase.lite.SavedRevision.d.ts" />
/// <reference path="./com.couchbase.lite.UnsavedRevision.d.ts" />
/// <reference path="./com.couchbase.lite.internal.RevisionInternal.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class Document {
				public static TAG: string;
				public addChangeListener(param0: com.couchbase.lite.Document.ChangeListener): void;
				public getUserProperties(): javautilMap;
				public putExistingRevision(param0: javautilMap, param1: javautilMap, param2: javautilList, param3: javanetURL): boolean;
				public getId(): string;
				public getConflictingRevisions(): java.util.List<com.couchbase.lite.SavedRevision>;
				public isDeleted(): boolean;
				public delete(): boolean;
				public getRevision(param0: string): com.couchbase.lite.SavedRevision;
				public getExpirationDate(): Date;
				public getLeafRevisions(): javautilList;
				public getRevisionFromRev(param0: com.couchbase.lite.internal.RevisionInternal): com.couchbase.lite.SavedRevision;
				public revisionAdded(param0: com.couchbase.lite.DocumentChange, param1: boolean): void;
				public loadCurrentRevisionFrom(param0: com.couchbase.lite.QueryRow): void;
				public constructor(param0: com.couchbase.lite.Database, param1: string);
				public putProperties(param0: java.util.Map<string, any>): com.couchbase.lite.SavedRevision;
				public removeChangeListener(param0: com.couchbase.lite.Document.ChangeListener): void;
				public getLeafRevisions(param0: boolean): javautilList;
				public getProperty(param0: string): javalangObject;
				public forgetCurrentRevision(): void;
				public getCurrentRevisionId(): string;
				public update(param0: com.couchbase.lite.Document.DocumentUpdater): com.couchbase.lite.SavedRevision;
				public static isValidDocumentId(param0: string): boolean;
				public setExpirationDate(param0: java.util.Date): void;
				public getCurrentRevision(): com.couchbase.lite.SavedRevision;
				public putProperties(param0: javautilMap, param1: string, param2: boolean): com.couchbase.lite.SavedRevision;
				public getDatabase(): com.couchbase.lite.Database;
				public getProperties(): java.util.Map<string, any>;
				public purge(): void;
				public createRevision(): com.couchbase.lite.UnsavedRevision;
				public getRevisionHistory(): javautilList;
				public propertiesToInsert(param0: javautilMap): javautilMap;
			}
			export module Document {
				export class ChangeEvent {
					public getChange(): com.couchbase.lite.DocumentChange;
					public getSource(): com.couchbase.lite.Document;
					public constructor(param0: com.couchbase.lite.Document, param1: com.couchbase.lite.DocumentChange);
				}
				export class ChangeListener {
					/**
					 * Constructs a new instance of the com.couchbase.lite.Document$ChangeListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						changed(param0: com.couchbase.lite.Document.ChangeEvent): void;
					});
					public changed(param0: com.couchbase.lite.Document.ChangeEvent): void;
				}
				export class DocumentUpdater {
					/**
					 * Constructs a new instance of the com.couchbase.lite.Document$DocumentUpdater interface with the provided implementation.
					 */
					public constructor(implementation: {
						update(param0: com.couchbase.lite.UnsavedRevision): boolean;
					});
					public update(param0: com.couchbase.lite.UnsavedRevision): boolean;
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.internal.RevisionInternal.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class DocumentChange {
				public getWinningRevisionID(): string;
				public getSource(): javanetURL;
				public getDocumentId(): string;
				public isCurrentRevision(): boolean;
				public isDeletion(): boolean;
				public toString(): string;
				public constructor(param0: string);
				public getAddedRevision(): com.couchbase.lite.internal.RevisionInternal;
				public constructor(param0: com.couchbase.lite.internal.RevisionInternal, param1: string, param2: boolean, param3: javanetURL);
				public isConflict(): boolean;
				public reduceMemoryUsage(): void;
				public getWinningRevisionIfKnown(): com.couchbase.lite.internal.RevisionInternal;
				public getRevisionId(): string;
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class Emitter {
				/**
				 * Constructs a new instance of the com.couchbase.lite.Emitter interface with the provided implementation.
				 */
				public constructor(implementation: {
					emit(param0: javalangObject, param1: javalangObject): void;
				});
				public emit(param0: javalangObject, param1: javalangObject): void;
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.LiveQuery.d.ts" />
/// <reference path="./com.couchbase.lite.QueryEnumerator.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.concurrent.Future.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class LiveQuery extends com.couchbase.lite.Query implements com.couchbase.lite.Database.ChangeListener {
				public queryFuture: javautilconcurrentFuture;
				public rerunUpdateFuture: javautilconcurrentFuture;
				public stop(): void;
				public removeChangeListener(param0: com.couchbase.lite.LiveQuery.ChangeListener): void;
				public start(): void;
				public changed(param0: com.couchbase.lite.Database.ChangeEvent): void;
				public waitForRows(): void;
				public getLastError(): javalangThrowable;
				public run(): com.couchbase.lite.QueryEnumerator;
				public addChangeListener(param0: com.couchbase.lite.LiveQuery.ChangeListener): void;
				public queryOptionsChanged(): void;
				public getRows(): com.couchbase.lite.QueryEnumerator;
			}
			export module LiveQuery {
				export class ChangeEvent {
					public getSource(): com.couchbase.lite.LiveQuery;
					public getRows(): com.couchbase.lite.QueryEnumerator;
					public getError(): javalangThrowable;
				}
				export class ChangeListener {
					/**
					 * Constructs a new instance of the com.couchbase.lite.LiveQuery$ChangeListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						changed(param0: com.couchbase.lite.LiveQuery.ChangeEvent): void;
					});
					public changed(param0: com.couchbase.lite.LiveQuery.ChangeEvent): void;
				}
			}
		}
	}
}

import javautilCollection = java.util.Collection;
import javautilconcurrentScheduledExecutorService = java.util.concurrent.ScheduledExecutorService;
import javalangRunnable = java.lang.Runnable;
/// <reference path="./com.couchbase.lite.AsyncTask.d.ts" />
/// <reference path="./com.couchbase.lite.Context.d.ts" />
/// <reference path="./com.couchbase.lite.Database.d.ts" />
/// <reference path="./com.couchbase.lite.DatabaseOptions.d.ts" />
/// <reference path="./com.couchbase.lite.ManagerOptions.d.ts" />
/// <reference path="./com.couchbase.lite.replicator.Replication.d.ts" />
/// <reference path="./com.couchbase.lite.support.HttpClientFactory.d.ts" />
/// <reference path="./com.fasterxml.jackson.databind.ObjectMapper.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.concurrent.Future.d.ts" />
/// <reference path="./java.util.concurrent.ScheduledExecutorService.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class Manager {
				public static PRODUCT_NAME: string;
				public static kV1DBExtension: string;
				public static kDBExtension: string;
				public static DEFAULT_OPTIONS: com.couchbase.lite.ManagerOptions;
				public static LEGAL_CHARACTERS: string;
				public static USER_AGENT: string;
				public static SQLITE_STORAGE: string;
				public static FORESTDB_STORAGE: string;
				public static VERSION: string;
				public getWorkExecutor(): javautilconcurrentScheduledExecutorService;
				public runAsync(param0: javalangRunnable): javautilconcurrentFuture;
				public getDatabase(param0: string, param1: boolean): com.couchbase.lite.Database;
				public forgetDatabase(param0: com.couchbase.lite.Database): void;
				public getEncryptionKeys(): javautilMap;
				public runAsync(param0: string, param1: com.couchbase.lite.AsyncTask): javautilconcurrentFuture;
				public getContext(): com.couchbase.lite.Context;
				public static isValidDatabaseName(param0: string): boolean;
				public registerEncryptionKey(param0: javalangObject, param1: string): boolean;
				public getAllDatabaseNames(): javautilList;
				public getDatabase(param0: string): com.couchbase.lite.Database;
				public constructor();
				public static getFullVersionInfo(): string;
				public static getSharedInstance(): com.couchbase.lite.Manager;
				public static getObjectMapper(): com.fasterxml.jackson.databind.ObjectMapper;
				public getReplicator(param0: javautilMap): com.couchbase.lite.replicator.Replication;
				public setDefaultHttpClientFactory(param0: com.couchbase.lite.support.HttpClientFactory): void;
				public openDatabase(param0: string, param1: com.couchbase.lite.DatabaseOptions): com.couchbase.lite.Database;
				public close(): void;
				public replaceDatabase(param0: string, param1: string): boolean;
				public getDirectory(): javaioFile;
				public getExecutorThreadPoolSize(): number;
				public setStorageType(param0: string): void;
				public replaceDatabase(param0: string, param1: javaioInputStream, param2: javautilMap): void;
				public getDefaultHttpClientFactory(): com.couchbase.lite.support.HttpClientFactory;
				public static enableLogging(param0: string, param1: number): void;
				public allOpenDatabases(): javautilCollection;
				public getStorageType(): string;
				public isAutoMigrateBlobStoreFilename(): boolean;
				public constructor(param0: com.couchbase.lite.Context, param1: com.couchbase.lite.ManagerOptions);
				public getExistingDatabase(param0: string): com.couchbase.lite.Database;
				public static getUserAgent(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ManagerOptions {
				public setExecutorThreadPoolSize(param0: number): void;
				public isAutoMigrateBlobStoreFilename(): boolean;
				public isReadOnly(): boolean;
				public setAutoMigrateBlobStoreFilename(param0: boolean): void;
				public getExecutorThreadPoolSize(): number;
				public constructor();
				public setReadOnly(param0: boolean): void;
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.Emitter.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class Mapper {
				/**
				 * Constructs a new instance of the com.couchbase.lite.Mapper interface with the provided implementation.
				 */
				public constructor(implementation: {
					map(param0: java.util.Map<string, any>, param1: com.couchbase.lite.Emitter): void;
				});
				public map(param0: java.util.Map<string, any>, param1: com.couchbase.lite.Emitter): void;
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class Misc {
				public static CreateUUID(): string;
				public static unquoteString(param0: string): string;
				public static convertToHex(param0: native.Array<number>): string;
				public static SequenceCompare(param0: number, param1: number): number;
				public static keyForPrefixMatch(param0: javalangObject, param1: number): javalangObject;
				public static HexSHA1Digest(param0: native.Array<number>): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class NetworkReachabilityListener {
				/**
				 * Constructs a new instance of the com.couchbase.lite.NetworkReachabilityListener interface with the provided implementation.
				 */
				public constructor(implementation: {
					networkReachable(): void;
					networkUnreachable(): void;
				});
				public networkUnreachable(): void;
				public networkReachable(): void;
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.NetworkReachabilityListener.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export abstract class NetworkReachabilityManager {
				public listeners: javautilList;
				public notifyListenersNetworkReachable(): void;
				public addNetworkReachabilityListener(param0: com.couchbase.lite.NetworkReachabilityListener): void;
				public notifyListenersNetworkUneachable(): void;
				public removeNetworkReachabilityListener(param0: com.couchbase.lite.NetworkReachabilityListener): void;
				public stopListening(): void;
				public startListening(): void;
				public isOnline(): boolean;
				public constructor();
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class Predicate {
				/**
				 * Constructs a new instance of the com.couchbase.lite.Predicate interface with the provided implementation.
				 */
				public constructor(implementation: {
					apply(param0: javalangObject): boolean;
				});
				public apply(param0: javalangObject): boolean;
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.Database.d.ts" />
/// <reference path="./com.couchbase.lite.LiveQuery.d.ts" />
/// <reference path="./com.couchbase.lite.Predicate.d.ts" />
/// <reference path="./com.couchbase.lite.QueryEnumerator.d.ts" />
/// <reference path="./com.couchbase.lite.View.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.concurrent.Future.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class Query {
				public setEndKey(param0: javalangObject): void;
				public setDescending(param0: boolean): void;
				public getIndexUpdateMode(): com.couchbase.lite.Query.IndexUpdateMode;
				public getSkip(): number;
				public getStartKeyDocId(): string;
				public setStartKeyDocId(param0: string): void;
				public finalize(): void;
				public getKeys(): javautilList;
				public setSkip(param0: number): void;
				public isInclusiveStart(): boolean;
				public getEndKeyDocId(): string;
				public setIndexUpdateMode(param0: com.couchbase.lite.Query.IndexUpdateMode): void;
				public setMapOnly(param0: boolean): void;
				public setPrefixMatchLevel(param0: number): void;
				public setInclusiveStart(param0: boolean): void;
				public setGroupLevel(param0: number): void;
				public shouldPrefetch(): boolean;
				public setStartKey(param0: javalangObject): void;
				public getView(): com.couchbase.lite.View;
				public getLimit(): number;
				public getEndKey(): javalangObject;
				public setLimit(param0: number): void;
				public getAllDocsMode(): com.couchbase.lite.Query.AllDocsMode;
				public getStartKey(): javalangObject;
				public setIncludeDeleted(param0: boolean): void;
				public run(): com.couchbase.lite.QueryEnumerator;
				public setPostFilter(param0: com.couchbase.lite.Predicate): void;
				public getGroupLevel(): number;
				public isInclusiveEnd(): boolean;
				public getDatabase(): com.couchbase.lite.Database;
				public isMapOnly(): boolean;
				public getPrefixMatchLevel(): number;
				public setInclusiveEnd(param0: boolean): void;
				public shouldIncludeDeleted(): boolean;
				public setAllDocsMode(param0: com.couchbase.lite.Query.AllDocsMode): void;
				public toLiveQuery(): com.couchbase.lite.LiveQuery;
				public setPrefetch(param0: boolean): void;
				public setEndKeyDocId(param0: string): void;
				public isDescending(): boolean;
				public setKeys(param0: java.util.List<string>): void;
				public getPostFilter(): com.couchbase.lite.Predicate;
				public runAsync(param0: com.couchbase.lite.Query.QueryCompleteListener): javautilconcurrentFuture;
			}
			export module Query {
				export class AllDocsMode {
					public static ALL_DOCS: com.couchbase.lite.Query.AllDocsMode;
					public static INCLUDE_DELETED: com.couchbase.lite.Query.AllDocsMode;
					public static SHOW_CONFLICTS: com.couchbase.lite.Query.AllDocsMode;
					public static ONLY_CONFLICTS: com.couchbase.lite.Query.AllDocsMode;
					public static BY_SEQUENCE: com.couchbase.lite.Query.AllDocsMode;
					public static valueOf(param0: string): com.couchbase.lite.Query.AllDocsMode;
					public static values(): native.Array<com.couchbase.lite.Query.AllDocsMode>;
				}
				export class IndexUpdateMode {
					public static BEFORE: com.couchbase.lite.Query.IndexUpdateMode;
					public static NEVER: com.couchbase.lite.Query.IndexUpdateMode;
					public static AFTER: com.couchbase.lite.Query.IndexUpdateMode;
					public static valueOf(param0: string): com.couchbase.lite.Query.IndexUpdateMode;
					public static values(): native.Array<com.couchbase.lite.Query.IndexUpdateMode>;
				}
				export class QueryCompleteListener {
					/**
					 * Constructs a new instance of the com.couchbase.lite.Query$QueryCompleteListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						completed(param0: com.couchbase.lite.QueryEnumerator, param1: javalangThrowable): void;
					});
					public completed(param0: com.couchbase.lite.QueryEnumerator, param1: javalangThrowable): void;
				}
			}
		}
	}
}

import javautilIterator = java.util.Iterator;
/// <reference path="./com.couchbase.lite.QueryRow.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class QueryEnumerator {
				public iterator(): javautilIterator;
				public reset(): void;
				public remove(): void;
				public getRow(param0: number): com.couchbase.lite.QueryRow;
				public equals(param0: javalangObject): boolean;
				public next(): com.couchbase.lite.QueryRow;
				public hasNext(): boolean;
				public getCount(): number;
				public getSequenceNumber(): number;
				public isStale(): boolean;
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.Predicate.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class QueryOptions {
				public static QUERY_OPTIONS_DEFAULT_LIMIT: number;
				public setUpdateSeq(param0: boolean): void;
				public setEndKey(param0: javalangObject): void;
				public setDescending(param0: boolean): void;
				public setReduceSpecified(param0: boolean): void;
				public getSkip(): number;
				public getStartKeyDocId(): string;
				public setStartKeyDocId(param0: string): void;
				public isGroup(): boolean;
				public getKeys(): javautilList;
				public isReduce(): boolean;
				public constructor();
				public setIncludeDocs(param0: boolean): void;
				public setSkip(param0: number): void;
				public isIncludeDocs(): boolean;
				public isInclusiveStart(): boolean;
				public getEndKeyDocId(): string;
				public setPrefixMatchLevel(param0: number): void;
				public setInclusiveStart(param0: boolean): void;
				public setGroupLevel(param0: number): void;
				public isUpdateSeq(): boolean;
				public setStartKey(param0: javalangObject): void;
				public isReduceSpecified(): boolean;
				public getLimit(): number;
				public getEndKey(): javalangObject;
				public getStale(): com.couchbase.lite.Query.IndexUpdateMode;
				public setLimit(param0: number): void;
				public getAllDocsMode(): com.couchbase.lite.Query.AllDocsMode;
				public getStartKey(): javalangObject;
				public setPostFilter(param0: com.couchbase.lite.Predicate): void;
				public getGroupLevel(): number;
				public toString(): string;
				public isInclusiveEnd(): boolean;
				public setInclusiveEnd(param0: boolean): void;
				public getPrefixMatchLevel(): number;
				public setGroup(param0: boolean): void;
				public setAllDocsMode(param0: com.couchbase.lite.Query.AllDocsMode): void;
				public setEndKeyDocId(param0: string): void;
				public isDescending(): boolean;
				public setKeys(param0: javautilList): void;
				public getPostFilter(): com.couchbase.lite.Predicate;
				public setReduce(param0: boolean): void;
				public setStale(param0: com.couchbase.lite.Query.IndexUpdateMode): void;
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.Database.d.ts" />
/// <reference path="./com.couchbase.lite.Document.d.ts" />
/// <reference path="./com.couchbase.lite.internal.RevisionInternal.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class QueryRow {
				public getDocumentId(): string;
				public getConflictingRevisions(): javautilList;
				public asJSONDictionary(): javautilMap;
				public getKey(): javalangObject;
				public constructor(param0: string, param1: number, param2: javalangObject, param3: javalangObject, param4: com.couchbase.lite.internal.RevisionInternal);
				public getSourceDocumentId(): string;
				public toString(): string;
				public getDatabase(): com.couchbase.lite.Database;
				public equals(param0: javalangObject): boolean;
				public getDocumentProperties(): javautilMap;
				public getSequenceNumber(): number;
				public getValue(): javalangObject;
				public getDocument(): com.couchbase.lite.Document;
				public getDocumentRevisionId(): string;
				public setDatabase(param0: com.couchbase.lite.Database): void;
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class Reducer {
				/**
				 * Constructs a new instance of the com.couchbase.lite.Reducer interface with the provided implementation.
				 */
				public constructor(implementation: {
					reduce(param0: java.util.List<string>, param1: java.util.List<any>, param2: boolean): javalangObject;
				});
				public reduce(param0: java.util.List, param1: java.util.List, param2: boolean): javalangObject;
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.SavedRevision.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class ReplicationFilter {
				/**
				 * Constructs a new instance of the com.couchbase.lite.ReplicationFilter interface with the provided implementation.
				 */
				public constructor(implementation: {
					filter(param0: com.couchbase.lite.SavedRevision, param1: java.util.Map<String, Object>): boolean;
				});
				public filter(param0: com.couchbase.lite.SavedRevision, param1: java.util.Map<String, Object>): boolean;
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.ReplicationFilter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class ReplicationFilterCompiler {
				/**
				 * Constructs a new instance of the com.couchbase.lite.ReplicationFilterCompiler interface with the provided implementation.
				 */
				public constructor(implementation: {
					compileFilterFunction(param0: string, param1: string): com.couchbase.lite.ReplicationFilter;
				});
				public compileFilterFunction(param0: string, param1: string): com.couchbase.lite.ReplicationFilter;
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.Attachment.d.ts" />
/// <reference path="./com.couchbase.lite.Database.d.ts" />
/// <reference path="./com.couchbase.lite.Document.d.ts" />
/// <reference path="./com.couchbase.lite.SavedRevision.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export abstract class Revision {
				public document: com.couchbase.lite.Document;
				public parentRevID: string;
				public getUserProperties(): javautilMap;
				public getId(): string;
				public getProperty(param0: string): javalangObject;
				public getAttachmentNames(): java.util.List<string>;
				public getSequence(): number;
				public setParentRevisionID(param0: string): void;
				public isDeletion(): boolean;
				public toString(): string;
				public getAttachmentMetadata(): javautilMap;
				public getParentId(): string;
				public getDatabase(): com.couchbase.lite.Database;
				public getProperties(): javautilMap;
				public constructor(param0: com.couchbase.lite.Document);
				public getAttachments(): java.util.List<com.couchbase.lite.Attachment>;
				public getAttachment(param0: string): com.couchbase.lite.Attachment;
				public equals(param0: javalangObject): boolean;
				public hashCode(): number;
				public getRevisionHistory(): javautilList;
				public static generationFromRevID(param0: string): number;
				public getGeneration(): number;
				public getParent(): com.couchbase.lite.SavedRevision;
				public getDocument(): com.couchbase.lite.Document;
				public isGone(): boolean;
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.internal.RevisionInternal.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class RevisionList {
				public removeAndReturnRev(param0: com.couchbase.lite.internal.RevisionInternal): com.couchbase.lite.internal.RevisionInternal;
				public sortByDocID(): void;
				public clone(): javalangObject;
				public getAllRevIds(): javautilList;
				public sortBySequence(): void;
				public getAllDocIds(): javautilList;
				public revWithDocId(param0: string): com.couchbase.lite.internal.RevisionInternal;
				public constructor(param0: javautilList);
				public limit(param0: number): void;
				public constructor();
				public revWithDocIdAndRevId(param0: string, param1: string): com.couchbase.lite.internal.RevisionInternal;
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.Database.d.ts" />
/// <reference path="./com.couchbase.lite.Document.d.ts" />
/// <reference path="./com.couchbase.lite.UnsavedRevision.d.ts" />
/// <reference path="./com.couchbase.lite.internal.RevisionInternal.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class SavedRevision extends com.couchbase.lite.Revision {
				public deleteDocument(): com.couchbase.lite.SavedRevision;
				public getId(): string;
				public getSequence(): number;
				public isDeletion(): boolean;
				public constructor(param0: com.couchbase.lite.Document, param1: com.couchbase.lite.internal.RevisionInternal);
				public getParentId(): string;
				public getProperties(): javautilMap;
				public arePropertiesAvailable(): boolean;
				public constructor(param0: com.couchbase.lite.Document);
				public loadProperties(): boolean;
				public createRevision(): com.couchbase.lite.UnsavedRevision;
				public getRevisionHistory(): javautilList;
				public createRevision(param0: javautilMap): com.couchbase.lite.SavedRevision;
				public getParent(): com.couchbase.lite.SavedRevision;
				public constructor(param0: com.couchbase.lite.Database, param1: com.couchbase.lite.internal.RevisionInternal, param2: string);
				public constructor(param0: com.couchbase.lite.Database, param1: com.couchbase.lite.internal.RevisionInternal);
				public getDocument(): com.couchbase.lite.Document;
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class SpecialKey {
				public toString(): string;
				public constructor(param0: string);
				public setText(param0: string): void;
				public getText(): string;
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class Status {
				public static UNKNOWN: number;
				public static OK: number;
				public static CREATED: number;
				public static ACCEPTED: number;
				public static NOT_MODIFIED: number;
				public static BAD_REQUEST: number;
				public static UNAUTHORIZED: number;
				public static FORBIDDEN: number;
				public static NOT_FOUND: number;
				public static METHOD_NOT_ALLOWED: number;
				public static NOT_ACCEPTABLE: number;
				public static REQUEST_TIMEOUT: number;
				public static CONFLICT: number;
				public static GONE: number;
				public static DUPLICATE: number;
				public static UNSUPPORTED_TYPE: number;
				public static INTERNAL_SERVER_ERROR: number;
				public static NOT_IMPLEMENTED: number;
				public static BAD_ENCODING: number;
				public static BAD_ATTACHMENT: number;
				public static ATTACHMENT_NOT_FOUND: number;
				public static BAD_JSON: number;
				public static BAD_ID: number;
				public static BAD_PARAM: number;
				public static DELETED: number;
				public static INVALID_STORAGE_TYPE: number;
				public static BAD_CHANGES_FEED: number;
				public static CHANGES_FEED_TRUNCATED: number;
				public static UPSTREAM_ERROR: number;
				public static DB_ERROR: number;
				public static CORRUPT_ERROR: number;
				public static ATTACHMENT_ERROR: number;
				public static CALLBACK_ERROR: number;
				public static EXCEPTION: number;
				public static DB_BUSY: number;
				public setCode(param0: number): void;
				public getHTTPStatus(): com.couchbase.lite.Status.HTTPStatus;
				public getHTTPCode(): number;
				public isError(): boolean;
				public getHTTPMessage(): string;
				public isSuccessful(): boolean;
				public getCode(): number;
				public constructor(param0: number);
				public toString(): string;
				public constructor();
			}
			export module Status {
				export class HTTPStatus {
					public toString(): string;
					public constructor(param0: number, param1: string);
					public getMessage(): string;
					public getCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class TransactionalTask {
				/**
				 * Constructs a new instance of the com.couchbase.lite.TransactionalTask interface with the provided implementation.
				 */
				public constructor(implementation: {
					run(): boolean;
				});
				public run(): boolean;
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.Attachment.d.ts" />
/// <reference path="./com.couchbase.lite.Document.d.ts" />
/// <reference path="./com.couchbase.lite.SavedRevision.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class UnsavedRevision extends com.couchbase.lite.Revision {
				public getId(): string;
				public setIsDeletion(param0: boolean): void;
				public getSequence(): number;
				public setUserProperties(param0: javautilMap): void;
				public save(): com.couchbase.lite.SavedRevision;
				public setProperties(param0: java.util.Map<any,any>): void;
				public setAttachment(param0: string, param1: string, param2: javanetURL): void;
				public getParentId(): string;
				public getProperties(): javautilMap;
				public constructor(param0: com.couchbase.lite.Document);
				public getParentSequence(): number;
				public constructor(param0: com.couchbase.lite.Document, param1: com.couchbase.lite.SavedRevision);
				public save(param0: boolean): com.couchbase.lite.SavedRevision;
				public removeAttachment(param0: string): void;
				public getRevisionHistory(): javautilList;
				public addAttachment(param0: com.couchbase.lite.Attachment, param1: string): void;
				public setAttachment(param0: string, param1: string, param2: javaioInputStream): void;
				public getParent(): com.couchbase.lite.SavedRevision;
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.ChangeValidator.d.ts" />
/// <reference path="./com.couchbase.lite.SavedRevision.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class ValidationContext {
				/**
				 * Constructs a new instance of the com.couchbase.lite.ValidationContext interface with the provided implementation.
				 */
				public constructor(implementation: {
					getCurrentRevision(): com.couchbase.lite.SavedRevision;
					getChangedKeys(): javautilList;
					reject(): void;
					reject(param0: string): void;
					validateChanges(param0: com.couchbase.lite.ChangeValidator): boolean;
				});
				public validateChanges(param0: com.couchbase.lite.ChangeValidator): boolean;
				public reject(): void;
				public getChangedKeys(): javautilList;
				public getCurrentRevision(): com.couchbase.lite.SavedRevision;
				public reject(param0: string): void;
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.ChangeValidator.d.ts" />
/// <reference path="./com.couchbase.lite.SavedRevision.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class ValidationContextImpl {
				public validateChanges(param0: com.couchbase.lite.ChangeValidator): boolean;
				public reject(): void;
				public getChangedKeys(): javautilList;
				public getCurrentRevision(): com.couchbase.lite.SavedRevision;
				public reject(param0: string): void;
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.Revision.d.ts" />
/// <reference path="./com.couchbase.lite.ValidationContext.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class Validator {
				/**
				 * Constructs a new instance of the com.couchbase.lite.Validator interface with the provided implementation.
				 */
				public constructor(implementation: {
					validate(param0: com.couchbase.lite.Revision, param1: com.couchbase.lite.ValidationContext): void;
				});
				public validate(param0: com.couchbase.lite.Revision, param1: com.couchbase.lite.ValidationContext): void;
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.Database.d.ts" />
/// <reference path="./com.couchbase.lite.Mapper.d.ts" />
/// <reference path="./com.couchbase.lite.Query.d.ts" />
/// <reference path="./com.couchbase.lite.QueryOptions.d.ts" />
/// <reference path="./com.couchbase.lite.Reducer.d.ts" />
/// <reference path="./com.couchbase.lite.Status.d.ts" />
/// <reference path="./com.couchbase.lite.ViewCompiler.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class View {
				public getMap(): com.couchbase.lite.Mapper;
				public setMap(param0: com.couchbase.lite.Mapper, param1: string): boolean;
				public isStale(): boolean;
				public getCurrentTotalRows(): number;
				public query(param0: com.couchbase.lite.QueryOptions): javautilList;
				public getDocumentType(): string;
				public updateIndex(): com.couchbase.lite.Status;
				public delete(): void;
				public setMapReduce(param0: com.couchbase.lite.Mapper, param1: com.couchbase.lite.Reducer, param2: string): boolean;
				public getViewsInGroup(): javautilList;
				public constructor(param0: com.couchbase.lite.Database, param1: string, param2: boolean);
				public updateIndexes(param0: javautilList): com.couchbase.lite.Status;
				public getTotalRows(): number;
				public close(): void;
				public getMapVersion(): string;
				public dump(): javautilList;
				public createQuery(): com.couchbase.lite.Query;
				public setCollation(param0: com.couchbase.lite.View.TDViewCollation): void;
				public getLastSequenceIndexed(): number;
				public getName(): string;
				public toString(): string;
				public static totalValues(param0: javautilList): number;
				public getDatabase(): com.couchbase.lite.Database;
				public deleteIndex(): void;
				public setDocumentType(param0: string): void;
				public static keyForPrefixMatch(param0: javalangObject, param1: number): javalangObject;
				public static getCompiler(): com.couchbase.lite.ViewCompiler;
				public static setCompiler(param0: com.couchbase.lite.ViewCompiler): void;
				public getReduce(): com.couchbase.lite.Reducer;
				public updateIndexAlone(): com.couchbase.lite.Status;
			}
			export module View {
				export class TDViewCollation {
					public static TDViewCollationUnicode: com.couchbase.lite.View.TDViewCollation;
					public static TDViewCollationRaw: com.couchbase.lite.View.TDViewCollation;
					public static TDViewCollationASCII: com.couchbase.lite.View.TDViewCollation;
					public static values(): native.Array<com.couchbase.lite.View.TDViewCollation>;
					public static valueOf(param0: string): com.couchbase.lite.View.TDViewCollation;
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.Mapper.d.ts" />
/// <reference path="./com.couchbase.lite.Reducer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export class ViewCompiler {
				/**
				 * Constructs a new instance of the com.couchbase.lite.ViewCompiler interface with the provided implementation.
				 */
				public constructor(implementation: {
					compileMap(param0: string, param1: string): com.couchbase.lite.Mapper;
					compileReduce(param0: string, param1: string): com.couchbase.lite.Reducer;
				});
				public compileReduce(param0: string, param1: string): com.couchbase.lite.Reducer;
				public compileMap(param0: string, param1: string): com.couchbase.lite.Mapper;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module auth {
				export class Authenticator {
					/**
					 * Constructs a new instance of the com.couchbase.lite.auth.Authenticator interface with the provided implementation.
					 */
					public constructor(implementation: {
					});
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.auth.Authenticator.d.ts" />
/// <reference path="./com.couchbase.lite.auth.OIDCLoginCallback.d.ts" />
/// <reference path="./com.couchbase.lite.auth.TokenStore.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module auth {
				export class AuthenticatorFactory {
					public static createPersonaAuthenticator(param0: string): com.couchbase.lite.auth.Authenticator;
					public constructor();
					public static createFacebookAuthenticator(param0: string): com.couchbase.lite.auth.Authenticator;
					public static createOpenIDConnectAuthenticator(param0: com.couchbase.lite.auth.OIDCLoginCallback, param1: com.couchbase.lite.auth.TokenStore): com.couchbase.lite.auth.Authenticator;
					public static createBasicAuthenticator(param0: string, param1: string): com.couchbase.lite.auth.Authenticator;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module auth {
				export class Authorizer {
					/**
					 * Constructs a new instance of the com.couchbase.lite.auth.Authorizer interface with the provided implementation.
					 */
					public constructor(implementation: {
						getRemoteURL(): javanetURL;
						setRemoteURL(param0: javanetURL): void;
						getLocalUUID(): string;
						setLocalUUID(param0: string): void;
						removeStoredCredentials(): boolean;
						getUsername(): string;
					});
					public getUsername(): string;
					public getLocalUUID(): string;
					public removeStoredCredentials(): boolean;
					public setRemoteURL(param0: javanetURL): void;
					public setLocalUUID(param0: string): void;
					public getRemoteURL(): javanetURL;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module auth {
				export abstract class BaseAuthorizer {
					public getUsername(): string;
					public getLocalUUID(): string;
					public constructor();
					public removeStoredCredentials(): boolean;
					public setRemoteURL(param0: javanetURL): void;
					public setLocalUUID(param0: string): void;
					public getRemoteURL(): javanetURL;
				}
			}
		}
	}
}

import okhttp3RequestBuilder = okhttp3.Request.Builder;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module auth {
				export class BasicAuthenticator extends com.couchbase.lite.auth.PasswordAuthorizer {
					public constructor(param0: string, param1: string);
					public getUsername(): string;
					public getLocalUUID(): string;
					public constructor();
					public removeStoredCredentials(): boolean;
					public authorizeURLRequest(param0: okhttp3RequestBuilder): boolean;
					public authUserInfo(): string;
					public setRemoteURL(param0: javanetURL): void;
					public setLocalUUID(param0: string): void;
					public getRemoteURL(): javanetURL;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module auth {
				export class CredentialAuthorizer {
					/**
					 * Constructs a new instance of the com.couchbase.lite.auth.CredentialAuthorizer interface with the provided implementation.
					 */
					public constructor(implementation: {
						authUserInfo(): string;
					});
					public authUserInfo(): string;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module auth {
				export class CustomHeadersAuthorizer {
					/**
					 * Constructs a new instance of the com.couchbase.lite.auth.CustomHeadersAuthorizer interface with the provided implementation.
					 */
					public constructor(implementation: {
						authorizeURLRequest(param0: okhttp3RequestBuilder): boolean;
						getRemoteURL(): javanetURL;
						setRemoteURL(param0: javanetURL): void;
						getLocalUUID(): string;
						setLocalUUID(param0: string): void;
						removeStoredCredentials(): boolean;
						getUsername(): string;
					});
					public getUsername(): string;
					public getLocalUUID(): string;
					public removeStoredCredentials(): boolean;
					public authorizeURLRequest(param0: okhttp3RequestBuilder): boolean;
					public setRemoteURL(param0: javanetURL): void;
					public setLocalUUID(param0: string): void;
					public getRemoteURL(): javanetURL;
				}
			}
		}
	}
}

import okhttp3Headers = okhttp3.Headers;
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./okhttp3.Headers.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module auth {
				export class FacebookAuthorizer extends com.couchbase.lite.auth.BaseAuthorizer implements com.couchbase.lite.auth.SessionCookieAuthorizer {
					public getUsername(): string;
					public implementedLoginResponse(): boolean;
					public getLocalUUID(): string;
					public loginResponse(param0: javalangObject, param1: okhttp3Headers, param2: javalangThrowable, param3: com.couchbase.lite.auth.LoginAuthorizer.ContinuationBlock): void;
					public constructor(param0: string);
					public constructor();
					public removeStoredCredentials(): boolean;
					public loginRequest(): javautilList;
					public static registerToken(param0: string, param1: string, param2: javanetURL): boolean;
					public setRemoteURL(param0: javanetURL): void;
					public setLocalUUID(param0: string): void;
					public getRemoteURL(): javanetURL;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./okhttp3.Headers.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module auth {
				export class LoginAuthorizer {
					/**
					 * Constructs a new instance of the com.couchbase.lite.auth.LoginAuthorizer interface with the provided implementation.
					 */
					public constructor(implementation: {
						loginRequest(): javautilList;
						loginResponse(param0: javalangObject, param1: okhttp3Headers, param2: javalangThrowable, param3: com.couchbase.lite.auth.LoginAuthorizer.ContinuationBlock): void;
						implementedLoginResponse(): boolean;
						getRemoteURL(): javanetURL;
						setRemoteURL(param0: javanetURL): void;
						getLocalUUID(): string;
						setLocalUUID(param0: string): void;
						removeStoredCredentials(): boolean;
						getUsername(): string;
					});
					public getUsername(): string;
					public implementedLoginResponse(): boolean;
					public getLocalUUID(): string;
					public loginResponse(param0: javalangObject, param1: okhttp3Headers, param2: javalangThrowable, param3: com.couchbase.lite.auth.LoginAuthorizer.ContinuationBlock): void;
					public removeStoredCredentials(): boolean;
					public loginRequest(): javautilList;
					public setRemoteURL(param0: javanetURL): void;
					public setLocalUUID(param0: string): void;
					public getRemoteURL(): javanetURL;
				}
				export module LoginAuthorizer {
					export class ContinuationBlock {
						/**
						 * Constructs a new instance of the com.couchbase.lite.auth.LoginAuthorizer$ContinuationBlock interface with the provided implementation.
						 */
						public constructor(implementation: {
							call(param0: boolean, param1: javalangThrowable): void;
						});
						public call(param0: boolean, param1: javalangThrowable): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module auth {
				export class MemTokenStore {
					public saveTokens(param0: javanetURL, param1: string, param2: javautilMap): boolean;
					public constructor();
					public loadTokens(param0: javanetURL, param1: string): javautilMap;
					public deleteTokens(param0: javanetURL, param1: string): boolean;
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.auth.OIDCLoginContinuation.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module auth {
				export class OIDCLoginCallback {
					/**
					 * Constructs a new instance of the com.couchbase.lite.auth.OIDCLoginCallback interface with the provided implementation.
					 */
					public constructor(implementation: {
						callback(param0: javanetURL, param1: javanetURL, param2: com.couchbase.lite.auth.OIDCLoginContinuation): void;
					});
					public callback(param0: javanetURL, param1: javanetURL, param2: com.couchbase.lite.auth.OIDCLoginContinuation): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module auth {
				export class OIDCLoginContinuation {
					/**
					 * Constructs a new instance of the com.couchbase.lite.auth.OIDCLoginContinuation interface with the provided implementation.
					 */
					public constructor(implementation: {
						callback(param0: javanetURL, param1: javalangThrowable): void;
					});
					public callback(param0: javanetURL, param1: javalangThrowable): void;
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.auth.OIDCLoginCallback.d.ts" />
/// <reference path="./com.couchbase.lite.auth.TokenStore.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./okhttp3.Headers.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module auth {
				export class OpenIDConnectAuthorizer extends com.couchbase.lite.auth.BaseAuthorizer implements com.couchbase.lite.auth.CustomHeadersAuthorizer, com.couchbase.lite.auth.SessionCookieAuthorizer {
					public loginCallback: com.couchbase.lite.auth.OIDCLoginCallback;
					public tokenStore: com.couchbase.lite.auth.TokenStore;
					public authURL: javanetURL;
					public IDToken: string;
					public refreshToken: string;
					public haveSessionCookie: boolean;
					public static forgetIDTokensForServer(param0: javanetURL, param1: com.couchbase.lite.auth.TokenStore): boolean;
					public setRefreshToken(param0: string): void;
					public getLocalUUID(): string;
					public loginResponse(param0: javalangObject, param1: okhttp3Headers, param2: javalangThrowable, param3: com.couchbase.lite.auth.LoginAuthorizer.ContinuationBlock): void;
					public removeStoredCredentials(): boolean;
					public getRefreshToken(): string;
					public authorizeURLRequest(param0: okhttp3RequestBuilder): boolean;
					public loginRequest(): javautilList;
					public setLocalUUID(param0: string): void;
					public setTokenStore(param0: com.couchbase.lite.auth.TokenStore): void;
					public getUsername(): string;
					public toString(): string;
					public implementedLoginResponse(): boolean;
					public setUsername(param0: string): void;
					public setIDToken(param0: string): void;
					public constructor();
					public constructor(param0: com.couchbase.lite.auth.OIDCLoginCallback, param1: com.couchbase.lite.auth.TokenStore);
					public getIDToken(): string;
					public getTokenStore(): com.couchbase.lite.auth.TokenStore;
					public setRemoteURL(param0: javanetURL): void;
					public getRemoteURL(): javanetURL;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module auth {
				export class PasswordAuthorizer extends com.couchbase.lite.auth.BaseAuthorizer implements com.couchbase.lite.auth.CustomHeadersAuthorizer, com.couchbase.lite.auth.CredentialAuthorizer {
					public static TAG: string;
					public constructor(param0: string, param1: string);
					public getUsername(): string;
					public getLocalUUID(): string;
					public constructor();
					public removeStoredCredentials(): boolean;
					public authorizeURLRequest(param0: okhttp3RequestBuilder): boolean;
					public authUserInfo(): string;
					public setRemoteURL(param0: javanetURL): void;
					public setLocalUUID(param0: string): void;
					public getRemoteURL(): javanetURL;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./okhttp3.Headers.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module auth {
				export class PersonaAuthorizer extends com.couchbase.lite.auth.BaseAuthorizer implements com.couchbase.lite.auth.SessionCookieAuthorizer {
					public static TAG: string;
					public static ASSERTION_FIELD_EMAIL: string;
					public static ASSERTION_FIELD_ORIGIN: string;
					public static ASSERTION_FIELD_EXPIRATION: string;
					public getLocalUUID(): string;
					public loginResponse(param0: javalangObject, param1: okhttp3Headers, param2: javalangThrowable, param3: com.couchbase.lite.auth.LoginAuthorizer.ContinuationBlock): void;
					public constructor(param0: string);
					public static assertionForEmailAndSite(param0: string, param1: javanetURL): string;
					public removeStoredCredentials(): boolean;
					public static registerAssertion(param0: string): string;
					public loginRequest(): javautilList;
					public setLocalUUID(param0: string): void;
					public getUsername(): string;
					public implementedLoginResponse(): boolean;
					public constructor();
					public setEmailAddress(param0: string): void;
					public getEmailAddress(): string;
					public setRemoteURL(param0: javanetURL): void;
					public getRemoteURL(): javanetURL;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./okhttp3.Headers.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module auth {
				export class SessionCookieAuthorizer {
					/**
					 * Constructs a new instance of the com.couchbase.lite.auth.SessionCookieAuthorizer interface with the provided implementation.
					 */
					public constructor(implementation: {
						loginRequest(): javautilList;
						loginResponse(param0: javalangObject, param1: okhttp3Headers, param2: javalangThrowable, param3: com.couchbase.lite.auth.LoginAuthorizer.ContinuationBlock): void;
						implementedLoginResponse(): boolean;
						getRemoteURL(): javanetURL;
						setRemoteURL(param0: javanetURL): void;
						getLocalUUID(): string;
						setLocalUUID(param0: string): void;
						removeStoredCredentials(): boolean;
						getUsername(): string;
					});
					public getUsername(): string;
					public implementedLoginResponse(): boolean;
					public getLocalUUID(): string;
					public loginResponse(param0: javalangObject, param1: okhttp3Headers, param2: javalangThrowable, param3: com.couchbase.lite.auth.LoginAuthorizer.ContinuationBlock): void;
					public removeStoredCredentials(): boolean;
					public loginRequest(): javautilList;
					public setRemoteURL(param0: javanetURL): void;
					public setLocalUUID(param0: string): void;
					public getRemoteURL(): javanetURL;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./okhttp3.Headers.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module auth {
				export class TokenAuthenticator extends com.couchbase.lite.auth.BaseAuthorizer implements com.couchbase.lite.auth.SessionCookieAuthorizer {
					public static TAG: string;
					public getUsername(): string;
					public implementedLoginResponse(): boolean;
					public getLocalUUID(): string;
					public loginResponse(param0: javalangObject, param1: okhttp3Headers, param2: javalangThrowable, param3: com.couchbase.lite.auth.LoginAuthorizer.ContinuationBlock): void;
					public constructor();
					public removeStoredCredentials(): boolean;
					public constructor(param0: string, param1: javautilMap);
					public loginRequest(): javautilList;
					public setRemoteURL(param0: javanetURL): void;
					public setLocalUUID(param0: string): void;
					public getRemoteURL(): javanetURL;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module auth {
				export class TokenStore {
					/**
					 * Constructs a new instance of the com.couchbase.lite.auth.TokenStore interface with the provided implementation.
					 */
					public constructor(implementation: {
						loadTokens(param0: javanetURL, param1: string): javautilMap;
						saveTokens(param0: javanetURL, param1: string, param2: javautilMap): boolean;
						deleteTokens(param0: javanetURL, param1: string): boolean;
					});
					public saveTokens(param0: javanetURL, param1: string, param2: javautilMap): boolean;
					public loadTokens(param0: javanetURL, param1: string): javautilMap;
					public deleteTokens(param0: javanetURL, param1: string): boolean;
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.BlobKey.d.ts" />
/// <reference path="./com.couchbase.lite.Database.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export class AttachmentInternal {
					public getEncodedContent(): native.Array<number>;
					public getLength(): number;
					public getEncodedContentInputStream(): javaioInputStream;
					public asStubDictionary(): javautilMap;
					public getDigest(): string;
					public getEncoding(): com.couchbase.lite.internal.AttachmentInternal.AttachmentEncoding;
					public getDatabase(): com.couchbase.lite.Database;
					public constructor(param0: string, param1: string);
					public setEncoding(param0: com.couchbase.lite.internal.AttachmentInternal.AttachmentEncoding): void;
					public setEncodedLength(param0: number): void;
					public getContentURL(): javanetURL;
					public getContent(): native.Array<number>;
					public getBlobKey(): com.couchbase.lite.BlobKey;
					public getContentInputStream(): javaioInputStream;
					public getRevpos(): number;
					public getContentType(): string;
					public getEncodedLength(): number;
					public setRevpos(param0: number): void;
					public setLength(param0: number): void;
					public setDatabase(param0: com.couchbase.lite.Database): void;
					public getName(): string;
					public setPossiblyEncodedLength(param0: number): void;
					public isValid(): boolean;
					public hasBlobKey(): boolean;
					public constructor(param0: string, param1: javautilMap);
					public setBlobKey(param0: com.couchbase.lite.BlobKey): void;
				}
				export module AttachmentInternal {
					export class AttachmentEncoding {
						public static AttachmentEncodingNone: com.couchbase.lite.internal.AttachmentInternal.AttachmentEncoding;
						public static AttachmentEncodingGZIP: com.couchbase.lite.internal.AttachmentInternal.AttachmentEncoding;
						public static valueOf(param0: string): com.couchbase.lite.internal.AttachmentInternal.AttachmentEncoding;
						public static values(): native.Array<com.couchbase.lite.internal.AttachmentInternal.AttachmentEncoding>;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export class Body {
					public compactEasy(): void;
					public getObject(param0: string): javalangObject;
					public getPropertyForKey(param0: string): javalangObject;
					public constructor(param0: javautilList);
					public constructor(param0: javautilMap);
					public getPrettyJson(): native.Array<number>;
					public release(): void;
					public getSize(): number;
					public constructor(param0: native.Array<number>, param1: number);
					public compact(): boolean;
					public getProperties(): javautilMap;
					public constructor(param0: native.Array<number>, param1: string, param2: string, param3: boolean);
					public constructor(param0: native.Array<number>);
					public constructor(param0: javautilMap, param1: number);
					public getJSONString(): string;
					public isValidJSON(): boolean;
					public getObject(): javalangObject;
					public getJson(): native.Array<number>;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export class InterfaceAudience {
					public constructor();
				}
				export module InterfaceAudience {
					export class Private {
						/**
						 * Constructs a new instance of the com.couchbase.lite.internal.InterfaceAudience$Private interface with the provided implementation.
						 */
						public constructor(implementation: {
						});
					}
					export class Public {
						/**
						 * Constructs a new instance of the com.couchbase.lite.internal.InterfaceAudience$Public interface with the provided implementation.
						 */
						public constructor(implementation: {
						});
					}
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.internal.Body.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export class RevisionInternal {
					public getRevID(): string;
					public setProperties(param0: javautilMap): void;
					public static CBLCompareRevIDs(param0: string, param1: string): number;
					public static generationFromRevID(param0: string): number;
					public getSequence(): number;
					public setDocID(param0: string): void;
					public toString(): string;
					public constructor(param0: javautilMap, param1: number);
					public setBody(param0: com.couchbase.lite.internal.Body): void;
					public setSequence(param0: number): void;
					public setDeleted(param0: boolean): void;
					public static digestFromRevID(param0: string): string;
					public setJSON(param0: native.Array<number>): void;
					public constructor(param0: string, param1: string, param2: boolean);
					public hashCode(): number;
					public isMissing(): boolean;
					public getJson(): native.Array<number>;
					public copyWithoutBody(): com.couchbase.lite.internal.RevisionInternal;
					public getObject(param0: string): javalangObject;
					public copy(): com.couchbase.lite.internal.RevisionInternal;
					public getBody(): com.couchbase.lite.internal.Body;
					public getGeneration(): number;
					public getPropertyForKey(param0: string): javalangObject;
					public setMissing(param0: boolean): void;
					public equals(param0: javalangObject): boolean;
					public constructor(param0: javautilMap);
					public mutateAttachments(param0: com.couchbase.lite.util.CollectionUtils.Functor): boolean;
					public isDeleted(): boolean;
					public getProperties(): javautilMap;
					public copyWithDocID(param0: string, param1: string): com.couchbase.lite.internal.RevisionInternal;
					public getAttachments(): javautilMap;
					public static CBLCollateRevIDs(param0: string, param1: string): number;
					public getDocID(): string;
					public constructor(param0: com.couchbase.lite.internal.Body);
					public setRevID(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export class CancellationSignal {
						public constructor();
						public throwIfCanceled(): void;
						public isCanceled(): boolean;
						public cancel(): void;
						public setOnCancelListener(param0: com.couchbase.lite.internal.database.CancellationSignal.OnCancelListener): void;
					}
					export module CancellationSignal {
						export class OnCancelListener {
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.database.CancellationSignal$OnCancelListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onCancel(): void;
							});
							public onCancel(): void;
						}
					}
				}
			}
		}
	}
}

import javalangByte = java.lang.Byte;
import javalangShort = java.lang.Short;
import javalangInteger = java.lang.Integer;
import javalangLong = java.lang.Long;
import javalangFloat = java.lang.Float;
import javalangDouble = java.lang.Double;
import javalangBoolean = java.lang.Boolean;
import javautilArrayList = java.util.ArrayList;
/// <reference path="./java.lang.Boolean.d.ts" />
/// <reference path="./java.lang.Byte.d.ts" />
/// <reference path="./java.lang.Double.d.ts" />
/// <reference path="./java.lang.Float.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Short.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export class ContentValues {
						public static TAG: string;
						public getAsInteger(param0: string): javalangInteger;
						public put(param0: string, param1: javalangFloat): void;
						public put(param0: string, param1: string): void;
						public put(param0: string, param1: javalangLong): void;
						public hashCode(): number;
						public getAsFloat(param0: string): javalangFloat;
						public putNull(param0: string): void;
						public put(param0: string, param1: javalangDouble): void;
						public getAsString(param0: string): string;
						public keySet(): javautilSet;
						public size(): number;
						public putAll(param0: com.couchbase.lite.internal.database.ContentValues): void;
						public getAsByte(param0: string): javalangByte;
						public put(param0: string, param1: javalangByte): void;
						public getAsShort(param0: string): javalangShort;
						public getAsBoolean(param0: string): javalangBoolean;
						public constructor();
						public getStringArrayList(param0: string): javautilArrayList;
						public equals(param0: javalangObject): boolean;
						public getAsLong(param0: string): javalangLong;
						public put(param0: string, param1: javalangInteger): void;
						public remove(param0: string): void;
						public put(param0: string, param1: javalangShort): void;
						public put(param0: string, param1: javalangBoolean): void;
						public get(param0: string): javalangObject;
						public constructor(param0: com.couchbase.lite.internal.database.ContentValues);
						public put(param0: string, param1: native.Array<number>): void;
						public toString(): string;
						public valueSet(): javautilSet;
						public containsKey(param0: string): boolean;
						public putStringArrayList(param0: string, param1: javautilArrayList): void;
						public getAsByteArray(param0: string): native.Array<number>;
						public getAsDouble(param0: string): javalangDouble;
						public constructor(param0: number);
						public clear(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.internal.database.sqlite.SQLiteDatabase.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export class DatabaseErrorHandler {
						/**
						 * Constructs a new instance of the com.couchbase.lite.internal.database.DatabaseErrorHandler interface with the provided implementation.
						 */
						public constructor(implementation: {
							onCorruption(param0: com.couchbase.lite.internal.database.sqlite.SQLiteDatabase): void;
						});
						public onCorruption(param0: com.couchbase.lite.internal.database.sqlite.SQLiteDatabase): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export class DatabasePlatformSupport {
						/**
						 * Constructs a new instance of the com.couchbase.lite.internal.database.DatabasePlatformSupport interface with the provided implementation.
						 */
						public constructor(implementation: {
							isMainThread(): boolean;
						});
						public isMainThread(): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.internal.database.sqlite.SQLiteDatabase.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export class DefaultDatabaseErrorHandler {
						public constructor();
						public onCorruption(param0: com.couchbase.lite.internal.database.sqlite.SQLiteDatabase): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export class OperationCanceledException {
						public constructor();
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export class SQLException {
						public constructor();
						public constructor(param0: string, param1: javalangThrowable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module cursor {
						export class Cursor {
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.database.cursor.Cursor interface with the provided implementation.
							 */
							public constructor(implementation: {
								moveToNext(): boolean;
								isAfterLast(): boolean;
								getColumnIndex(param0: string): number;
								getColumnIndexOrThrow(param0: string): number;
								getColumnName(param0: number): string;
								getString(param0: number): string;
								getShort(param0: number): number;
								getInt(param0: number): number;
								getLong(param0: number): number;
								getFloat(param0: number): number;
								getDouble(param0: number): number;
								getBlob(param0: number): native.Array<number>;
								isNull(param0: number): boolean;
								close(): void;
							});
							public static FIELD_TYPE_INTEGER: number;
							public static FIELD_TYPE_NULL: number;
							public static FIELD_TYPE_STRING: number;
							public static FIELD_TYPE_BLOB: number;
							public static FIELD_TYPE_FLOAT: number;
							public moveToNext(): boolean;
							public getColumnIndex(param0: string): number;
							public getColumnIndexOrThrow(param0: string): number;
							public getShort(param0: number): number;
							public close(): void;
							public isAfterLast(): boolean;
							public getBlob(param0: number): native.Array<number>;
							public getDouble(param0: number): number;
							public getInt(param0: number): number;
							public getFloat(param0: number): number;
							public getColumnName(param0: number): string;
							public isNull(param0: number): boolean;
							public getString(param0: number): string;
							public getLong(param0: number): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.internal.database.log.Logger.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module log {
						export class DLog {
							public static logger: com.couchbase.lite.internal.database.log.Logger;
							public static TAG_SQLiteConnection: string;
							public static TAG_SQLiteConnectionPool: string;
							public static TAG_SQLiteDatabase: string;
							public static TAG_SQLiteQueryBuilder: string;
							public static TAG_SQLiteQueryCursor: string;
							public static VERBOSE: number;
							public static DEBUG: number;
							public static INFO: number;
							public static WARN: number;
							public static ERROR: number;
							public constructor();
							public static enableLogging(param0: string, param1: number): void;
							public static v(param0: string, param1: string, param2: javalangThrowable, param3: native.Array<javalangObject>): void;
							public static w(param0: string, param1: string, param2: native.Array<javalangObject>): void;
							public static v(param0: string, param1: string): void;
							public static w(param0: string, param1: string, param2: javalangThrowable, param3: native.Array<javalangObject>): void;
							public static i(param0: string, param1: string): void;
							public static w(param0: string, param1: string, param2: javalangThrowable): void;
							public static e(param0: string, param1: string, param2: native.Array<javalangObject>): void;
							public static v(param0: string, param1: string, param2: native.Array<javalangObject>): void;
							public static i(param0: string, param1: string, param2: native.Array<javalangObject>): void;
							public static i(param0: string, param1: string, param2: javalangThrowable, param3: native.Array<javalangObject>): void;
							public static v(param0: string, param1: string, param2: javalangThrowable): void;
							public static i(param0: string, param1: string, param2: javalangThrowable): void;
							public static d(param0: string, param1: string, param2: native.Array<javalangObject>): void;
							public static d(param0: string, param1: string, param2: javalangThrowable): void;
							public static e(param0: string, param1: string, param2: javalangThrowable, param3: native.Array<javalangObject>): void;
							public static w(param0: string, param1: javalangThrowable): void;
							public static e(param0: string, param1: string, param2: javalangThrowable): void;
							public static d(param0: string, param1: string, param2: javalangThrowable, param3: native.Array<javalangObject>): void;
							public static w(param0: string, param1: string): void;
							public static e(param0: string, param1: string): void;
							public static d(param0: string, param1: string): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module log {
						export class Logger {
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.database.log.Logger interface with the provided implementation.
							 */
							public constructor(implementation: {
								v(param0: string, param1: string): void;
								v(param0: string, param1: string, param2: javalangThrowable): void;
								d(param0: string, param1: string): void;
								d(param0: string, param1: string, param2: javalangThrowable): void;
								i(param0: string, param1: string): void;
								i(param0: string, param1: string, param2: javalangThrowable): void;
								w(param0: string, param1: string): void;
								w(param0: string, param1: javalangThrowable): void;
								w(param0: string, param1: string, param2: javalangThrowable): void;
								e(param0: string, param1: string): void;
								e(param0: string, param1: string, param2: javalangThrowable): void;
							});
							public i(param0: string, param1: string, param2: javalangThrowable): void;
							public i(param0: string, param1: string): void;
							public e(param0: string, param1: string, param2: javalangThrowable): void;
							public w(param0: string, param1: string): void;
							public v(param0: string, param1: string): void;
							public d(param0: string, param1: string, param2: javalangThrowable): void;
							public w(param0: string, param1: javalangThrowable): void;
							public v(param0: string, param1: string, param2: javalangThrowable): void;
							public d(param0: string, param1: string): void;
							public w(param0: string, param1: string, param2: javalangThrowable): void;
							public e(param0: string, param1: string): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module log {
						export class SystemLogger {
							public constructor();
							public i(param0: string, param1: string, param2: javalangThrowable): void;
							public i(param0: string, param1: string): void;
							public e(param0: string, param1: string, param2: javalangThrowable): void;
							public w(param0: string, param1: string): void;
							public v(param0: string, param1: string): void;
							public d(param0: string, param1: string, param2: javalangThrowable): void;
							public w(param0: string, param1: javalangThrowable): void;
							public v(param0: string, param1: string, param2: javalangThrowable): void;
							public d(param0: string, param1: string): void;
							public w(param0: string, param1: string, param2: javalangThrowable): void;
							public e(param0: string, param1: string): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module security {
						export class Key {
							public constructor();
							public static derivePBKDF2SHA256Key(param0: string, param1: native.Array<number>, param2: number): native.Array<number>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export abstract class SQLiteClosable {
							public constructor();
							public acquireReference(): void;
							public close(): void;
							public onAllReferencesReleasedFromContainer(): void;
							public releaseReference(): void;
							public releaseReferenceFromContainer(): void;
							public onAllReferencesReleased(): void;
						}
					}
				}
			}
		}
	}
}

import javautilLocale = java.util.Locale;
import javalangStringBuilder = java.lang.StringBuilder;
import javalangException = java.lang.Exception;
/// <reference path="./com.couchbase.lite.internal.database.CancellationSignal.d.ts" />
/// <reference path="./com.couchbase.lite.internal.database.sqlite.SQLiteStatementInfo.d.ts" />
/// <reference path="./com.couchbase.lite.internal.database.util.Printer.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.StringBuilder.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export class SQLiteConnection {
							public executeForChangedRowCount(param0: string, param1: native.Array<javalangObject>, param2: com.couchbase.lite.internal.database.CancellationSignal): number;
							public getLocale(): javautilLocale;
							public executeForLong(param0: string, param1: native.Array<javalangObject>, param2: com.couchbase.lite.internal.database.CancellationSignal): number;
							public executePrepareStatementNoRelease(param0: string, param1: native.Array<javalangObject>): com.couchbase.lite.internal.database.sqlite.SQLiteConnection.PreparedStatement;
							public executeForString(param0: string, param1: native.Array<javalangObject>, param2: com.couchbase.lite.internal.database.CancellationSignal): string;
							public finalize(): void;
							public prepare(param0: string, param1: com.couchbase.lite.internal.database.sqlite.SQLiteStatementInfo): void;
							public dump(param0: com.couchbase.lite.internal.database.util.Printer, param1: boolean): void;
							public toString(): string;
							public getConnectionHandle(): number;
							public executeForLastInsertedRowId(param0: string, param1: native.Array<javalangObject>, param2: com.couchbase.lite.internal.database.CancellationSignal): number;
							public executeReleasePrepareStatement(param0: com.couchbase.lite.internal.database.sqlite.SQLiteConnection.PreparedStatement): void;
							public getConnectionId(): number;
							public isPrimaryConnection(): boolean;
							public execute(param0: string, param1: native.Array<javalangObject>, param2: com.couchbase.lite.internal.database.CancellationSignal): void;
							public onCancel(): void;
						}
						export module SQLiteConnection {
							export class Operation {
								public mStartTime: number;
								public mEndTime: number;
								public mKind: string;
								public mSql: string;
								public mBindArgs: javautilArrayList;
								public mFinished: boolean;
								public mException: javalangException;
								public mCookie: number;
								public describe(param0: javalangStringBuilder, param1: boolean): void;
							}
							export class OperationLog {
								public beginOperation(param0: string, param1: string, param2: native.Array<javalangObject>): number;
								public dump(param0: com.couchbase.lite.internal.database.util.Printer, param1: boolean): void;
								public logOperation(param0: number, param1: string): void;
								public describeCurrentOperation(): string;
								public endOperation(param0: number): void;
								public endOperationDeferLog(param0: number): boolean;
								public failOperation(param0: number, param1: javalangException): void;
							}
							export class PreparedStatement {
								public mPoolNext: com.couchbase.lite.internal.database.sqlite.SQLiteConnection.PreparedStatement;
								public mSql: string;
								public mBindArgs: native.Array<javalangObject>;
								public mStatementPtr: number;
								public mNumParameters: number;
								public mType: number;
								public mReadOnly: boolean;
								public mInUse: boolean;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.internal.database.sqlite.SQLiteConnection.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export class SQLiteConnectionListener {
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.database.sqlite.SQLiteConnectionListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onOpen(param0: com.couchbase.lite.internal.database.sqlite.SQLiteConnection): void;
								onClose(param0: com.couchbase.lite.internal.database.sqlite.SQLiteConnection): void;
							});
							public onOpen(param0: com.couchbase.lite.internal.database.sqlite.SQLiteConnection): void;
							public onClose(param0: com.couchbase.lite.internal.database.sqlite.SQLiteConnection): void;
						}
					}
				}
			}
		}
	}
}

import javalangThread = java.lang.Thread;
import javalangRuntimeException = java.lang.RuntimeException;
/// <reference path="./com.couchbase.lite.internal.database.CancellationSignal.d.ts" />
/// <reference path="./com.couchbase.lite.internal.database.sqlite.SQLiteConnection.d.ts" />
/// <reference path="./com.couchbase.lite.internal.database.sqlite.SQLiteConnectionListener.d.ts" />
/// <reference path="./com.couchbase.lite.internal.database.sqlite.SQLiteDatabaseConfiguration.d.ts" />
/// <reference path="./com.couchbase.lite.internal.database.util.Printer.d.ts" />
/// <reference path="./java.lang.RuntimeException.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Thread.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export class SQLiteConnectionPool {
							public static CONNECTION_FLAG_READ_ONLY: number;
							public static CONNECTION_FLAG_PRIMARY_CONNECTION_AFFINITY: number;
							public static CONNECTION_FLAG_INTERACTIVE: number;
							public collectDbStats(param0: javautilArrayList): void;
							public close(): void;
							public reconfigure(param0: com.couchbase.lite.internal.database.sqlite.SQLiteDatabaseConfiguration): void;
							public static open(param0: com.couchbase.lite.internal.database.sqlite.SQLiteDatabaseConfiguration, param1: com.couchbase.lite.internal.database.sqlite.SQLiteConnectionListener): com.couchbase.lite.internal.database.sqlite.SQLiteConnectionPool;
							public acquireConnection(param0: string, param1: number, param2: com.couchbase.lite.internal.database.CancellationSignal): com.couchbase.lite.internal.database.sqlite.SQLiteConnection;
							public finalize(): void;
							public releaseConnection(param0: com.couchbase.lite.internal.database.sqlite.SQLiteConnection): void;
							public dump(param0: com.couchbase.lite.internal.database.util.Printer, param1: boolean): void;
							public toString(): string;
							public shouldYieldConnection(param0: com.couchbase.lite.internal.database.sqlite.SQLiteConnection, param1: number): boolean;
						}
						export module SQLiteConnectionPool {
							export class AcquiredConnectionStatus {
								public static NORMAL: com.couchbase.lite.internal.database.sqlite.SQLiteConnectionPool.AcquiredConnectionStatus;
								public static RECONFIGURE: com.couchbase.lite.internal.database.sqlite.SQLiteConnectionPool.AcquiredConnectionStatus;
								public static DISCARD: com.couchbase.lite.internal.database.sqlite.SQLiteConnectionPool.AcquiredConnectionStatus;
								public static values(): native.Array<com.couchbase.lite.internal.database.sqlite.SQLiteConnectionPool.AcquiredConnectionStatus>;
								public static valueOf(param0: string): com.couchbase.lite.internal.database.sqlite.SQLiteConnectionPool.AcquiredConnectionStatus;
							}
							export class ConnectionWaiter {
								public mNext: com.couchbase.lite.internal.database.sqlite.SQLiteConnectionPool.ConnectionWaiter;
								public mThread: javalangThread;
								public mStartTime: number;
								public mPriority: number;
								public mWantPrimaryConnection: boolean;
								public mSql: string;
								public mConnectionFlags: number;
								public mAssignedConnection: com.couchbase.lite.internal.database.sqlite.SQLiteConnection;
								public mException: javalangRuntimeException;
								public mNonce: number;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.internal.database.cursor.Cursor.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export class SQLiteCursorDriver {
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.database.sqlite.SQLiteCursorDriver interface with the provided implementation.
							 */
							public constructor(implementation: {
								query(param0: com.couchbase.lite.internal.database.sqlite.SQLiteDatabase.CursorFactory, param1: native.Array<string>): com.couchbase.lite.internal.database.cursor.Cursor;
								cursorDeactivated(): void;
								cursorRequeried(param0: com.couchbase.lite.internal.database.cursor.Cursor): void;
								cursorClosed(): void;
								setBindArguments(param0: native.Array<string>): void;
							});
							public cursorClosed(): void;
							public cursorRequeried(param0: com.couchbase.lite.internal.database.cursor.Cursor): void;
							public setBindArguments(param0: native.Array<string>): void;
							public cursorDeactivated(): void;
							public query(param0: com.couchbase.lite.internal.database.sqlite.SQLiteDatabase.CursorFactory, param1: native.Array<string>): com.couchbase.lite.internal.database.cursor.Cursor;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.internal.database.CancellationSignal.d.ts" />
/// <reference path="./com.couchbase.lite.internal.database.ContentValues.d.ts" />
/// <reference path="./com.couchbase.lite.internal.database.DatabaseErrorHandler.d.ts" />
/// <reference path="./com.couchbase.lite.internal.database.DatabasePlatformSupport.d.ts" />
/// <reference path="./com.couchbase.lite.internal.database.cursor.Cursor.d.ts" />
/// <reference path="./com.couchbase.lite.internal.database.sqlite.SQLiteConnectionListener.d.ts" />
/// <reference path="./com.couchbase.lite.internal.database.sqlite.SQLiteCursorDriver.d.ts" />
/// <reference path="./com.couchbase.lite.internal.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./com.couchbase.lite.internal.database.sqlite.SQLiteQuery.d.ts" />
/// <reference path="./com.couchbase.lite.internal.database.sqlite.SQLiteStatement.d.ts" />
/// <reference path="./com.couchbase.lite.internal.database.sqlite.SQLiteTransactionListener.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export class SQLiteDatabase extends com.couchbase.lite.internal.database.sqlite.SQLiteClosable {
							public static CONFLICT_ROLLBACK: number;
							public static CONFLICT_ABORT: number;
							public static CONFLICT_FAIL: number;
							public static CONFLICT_IGNORE: number;
							public static CONFLICT_REPLACE: number;
							public static CONFLICT_NONE: number;
							public static SQLITE_MAX_LIKE_PATTERN_LENGTH: number;
							public static OPEN_READWRITE: number;
							public static OPEN_READONLY: number;
							public static OPEN_READ_MASK: number;
							public static CREATE_IF_NECESSARY: number;
							public static ENABLE_WRITE_AHEAD_LOGGING: number;
							public static MAX_SQL_CACHE_SIZE: number;
							public reopenReadWrite(): void;
							public static openOrCreateDatabase(param0: string, param1: com.couchbase.lite.internal.database.sqlite.SQLiteDatabase.CursorFactory, param2: com.couchbase.lite.internal.database.DatabaseErrorHandler): com.couchbase.lite.internal.database.sqlite.SQLiteDatabase;
							public beginTransactionWithListener(param0: com.couchbase.lite.internal.database.sqlite.SQLiteTransactionListener): void;
							public markTableSyncable(param0: string, param1: string, param2: string): void;
							public isOpen(): boolean;
							public replace(param0: string, param1: string, param2: com.couchbase.lite.internal.database.ContentValues): number;
							public endTransaction(): void;
							public rawQueryWithFactory(param0: com.couchbase.lite.internal.database.sqlite.SQLiteDatabase.CursorFactory, param1: string, param2: native.Array<string>, param3: string, param4: com.couchbase.lite.internal.database.CancellationSignal): com.couchbase.lite.internal.database.cursor.Cursor;
							public isDbLockedByOtherThreads(): boolean;
							public beginTransactionNonExclusive(): void;
							public beginTransaction(): void;
							public markTableSyncable(param0: string, param1: string): void;
							public updateWithOnConflict(param0: string, param1: com.couchbase.lite.internal.database.ContentValues, param2: string, param3: native.Array<string>, param4: number): number;
							public update(param0: string, param1: com.couchbase.lite.internal.database.ContentValues, param2: string, param3: native.Array<string>): number;
							public setTransactionSuccessful(): void;
							public delete(param0: string, param1: string, param2: native.Array<string>): number;
							public rawQuery(param0: string, param1: native.Array<string>): com.couchbase.lite.internal.database.cursor.Cursor;
							public setForeignKeyConstraintsEnabled(param0: boolean): void;
							public static deleteDatabase(param0: javaioFile): boolean;
							public rawQueryWithFactory(param0: com.couchbase.lite.internal.database.sqlite.SQLiteDatabase.CursorFactory, param1: string, param2: native.Array<string>, param3: string): com.couchbase.lite.internal.database.cursor.Cursor;
							public finalize(): void;
							public execSQL(param0: string): void;
							public queryWithFactory(param0: com.couchbase.lite.internal.database.sqlite.SQLiteDatabase.CursorFactory, param1: boolean, param2: string, param3: native.Array<string>, param4: string, param5: native.Array<string>, param6: string, param7: string, param8: string, param9: string, param10: com.couchbase.lite.internal.database.CancellationSignal): com.couchbase.lite.internal.database.cursor.Cursor;
							public setMaximumSize(param0: number): number;
							public yieldIfContended(): boolean;
							public static create(param0: com.couchbase.lite.internal.database.sqlite.SQLiteDatabase.CursorFactory): com.couchbase.lite.internal.database.sqlite.SQLiteDatabase;
							public rawQuery(param0: string, param1: native.Array<string>, param2: com.couchbase.lite.internal.database.CancellationSignal): com.couchbase.lite.internal.database.cursor.Cursor;
							public getPageSize(): number;
							public isReadOnly(): boolean;
							public yieldIfContendedSafely(param0: number): boolean;
							public execSQL(param0: string, param1: native.Array<javalangObject>): void;
							public isInMemoryDatabase(): boolean;
							public enableWriteAheadLogging(): boolean;
							public setLocale(param0: javautilLocale): void;
							public static openDatabase(param0: string, param1: com.couchbase.lite.internal.database.sqlite.SQLiteDatabase.CursorFactory, param2: number, param3: number, param4: com.couchbase.lite.internal.database.DatabaseErrorHandler, param5: com.couchbase.lite.internal.database.sqlite.SQLiteConnectionListener): com.couchbase.lite.internal.database.sqlite.SQLiteDatabase;
							public getVersion(): number;
							public yieldIfContendedSafely(): boolean;
							public insertOrThrow(param0: string, param1: string, param2: com.couchbase.lite.internal.database.ContentValues): number;
							public toString(): string;
							public beginTransactionWithListenerNonExclusive(param0: com.couchbase.lite.internal.database.sqlite.SQLiteTransactionListener): void;
							public static openDatabase(param0: string, param1: com.couchbase.lite.internal.database.sqlite.SQLiteDatabase.CursorFactory, param2: number, param3: com.couchbase.lite.internal.database.DatabaseErrorHandler): com.couchbase.lite.internal.database.sqlite.SQLiteDatabase;
							public getAttachedDbs(): javautilList;
							public insert(param0: string, param1: string, param2: com.couchbase.lite.internal.database.ContentValues): number;
							public needUpgrade(param0: number): boolean;
							public static openOrCreateDatabase(param0: javaioFile, param1: com.couchbase.lite.internal.database.sqlite.SQLiteDatabase.CursorFactory): com.couchbase.lite.internal.database.sqlite.SQLiteDatabase;
							public replaceOrThrow(param0: string, param1: string, param2: com.couchbase.lite.internal.database.ContentValues): number;
							public getMaximumSize(): number;
							public setVersion(param0: number): void;
							public inTransaction(): boolean;
							public isWriteAheadLoggingEnabled(): boolean;
							public query(param0: string, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: string, param6: string, param7: string): com.couchbase.lite.internal.database.cursor.Cursor;
							public query(param0: boolean, param1: string, param2: native.Array<string>, param3: string, param4: native.Array<string>, param5: string, param6: string, param7: string, param8: string, param9: com.couchbase.lite.internal.database.CancellationSignal): com.couchbase.lite.internal.database.cursor.Cursor;
							public setLockingEnabled(param0: boolean): void;
							public static isSupportEncryption(): boolean;
							public static openDatabase(param0: string, param1: com.couchbase.lite.internal.database.sqlite.SQLiteDatabase.CursorFactory, param2: number): com.couchbase.lite.internal.database.sqlite.SQLiteDatabase;
							public setPageSize(param0: number): void;
							public query(param0: boolean, param1: string, param2: native.Array<string>, param3: string, param4: native.Array<string>, param5: string, param6: string, param7: string, param8: string): com.couchbase.lite.internal.database.cursor.Cursor;
							public static findEditTable(param0: string): string;
							public getPath(): string;
							public insertWithOnConflict(param0: string, param1: string, param2: com.couchbase.lite.internal.database.ContentValues, param3: number): number;
							public isDatabaseIntegrityOk(): boolean;
							public disableWriteAheadLogging(): void;
							public static openOrCreateDatabase(param0: string, param1: com.couchbase.lite.internal.database.sqlite.SQLiteDatabase.CursorFactory): com.couchbase.lite.internal.database.sqlite.SQLiteDatabase;
							public queryWithFactory(param0: com.couchbase.lite.internal.database.sqlite.SQLiteDatabase.CursorFactory, param1: boolean, param2: string, param3: native.Array<string>, param4: string, param5: native.Array<string>, param6: string, param7: string, param8: string, param9: string): com.couchbase.lite.internal.database.cursor.Cursor;
							public setMaxSqlCacheSize(param0: number): void;
							public isDbLockedByCurrentThread(): boolean;
							public query(param0: string, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: string, param6: string): com.couchbase.lite.internal.database.cursor.Cursor;
							public onAllReferencesReleased(): void;
							public static setDatabasePlatformSupport(param0: com.couchbase.lite.internal.database.DatabasePlatformSupport): void;
							public compileStatement(param0: string): com.couchbase.lite.internal.database.sqlite.SQLiteStatement;
						}
						export module SQLiteDatabase {
							export class CursorFactory {
								/**
								 * Constructs a new instance of the com.couchbase.lite.internal.database.sqlite.SQLiteDatabase$CursorFactory interface with the provided implementation.
								 */
								public constructor(implementation: {
									newCursor(param0: com.couchbase.lite.internal.database.sqlite.SQLiteDatabase, param1: com.couchbase.lite.internal.database.sqlite.SQLiteCursorDriver, param2: string, param3: com.couchbase.lite.internal.database.sqlite.SQLiteQuery): com.couchbase.lite.internal.database.cursor.Cursor;
								});
								public newCursor(param0: com.couchbase.lite.internal.database.sqlite.SQLiteDatabase, param1: com.couchbase.lite.internal.database.sqlite.SQLiteCursorDriver, param2: string, param3: com.couchbase.lite.internal.database.sqlite.SQLiteQuery): com.couchbase.lite.internal.database.cursor.Cursor;
							}
							export class CustomFunction {
								/**
								 * Constructs a new instance of the com.couchbase.lite.internal.database.sqlite.SQLiteDatabase$CustomFunction interface with the provided implementation.
								 */
								public constructor(implementation: {
									callback(param0: native.Array<string>): void;
								});
								public callback(param0: native.Array<string>): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export class SQLiteDatabaseConfiguration {
							public static MEMORY_DB_PATH: string;
							public path: string;
							public label: string;
							public openFlags: number;
							public maxSqlCacheSize: number;
							public locale: javautilLocale;
							public foreignKeyConstraintsEnabled: boolean;
							public walConnectionPoolSize: number;
							public constructor(param0: com.couchbase.lite.internal.database.sqlite.SQLiteDatabaseConfiguration);
							public isOpenReadOnly(): boolean;
							public constructor(param0: string, param1: number, param2: number);
							public updateParametersFrom(param0: com.couchbase.lite.internal.database.sqlite.SQLiteDatabaseConfiguration): void;
							public isInMemoryDb(): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export class SQLiteDebug {
							public static DEBUG_LOG_SLOW_QUERIES: boolean;
							public static DEFAULT_SLOW_QUERY_THRESHOLD: number;
							public constructor();
							public static shouldLogSlowQuery(param0: number): boolean;
						}
						export module SQLiteDebug {
							export class DbStats {
								public dbName: string;
								public pageSize: number;
								public dbSize: number;
								public lookaside: number;
								public constructor(param0: string, param1: number, param2: number, param3: number);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.internal.database.CancellationSignal.d.ts" />
/// <reference path="./com.couchbase.lite.internal.database.cursor.Cursor.d.ts" />
/// <reference path="./com.couchbase.lite.internal.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export class SQLiteDirectCursorDriver {
							public cursorClosed(): void;
							public cursorRequeried(param0: com.couchbase.lite.internal.database.cursor.Cursor): void;
							public setBindArguments(param0: native.Array<string>): void;
							public cursorDeactivated(): void;
							public toString(): string;
							public constructor(param0: com.couchbase.lite.internal.database.sqlite.SQLiteDatabase, param1: string, param2: string, param3: com.couchbase.lite.internal.database.CancellationSignal);
							public query(param0: com.couchbase.lite.internal.database.sqlite.SQLiteDatabase.CursorFactory, param1: native.Array<string>): com.couchbase.lite.internal.database.cursor.Cursor;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export class SQLiteGlobal {
							public static getDefaultJournalMode(): string;
							public static getWALConnectionPoolSize(): number;
							public static getJournalSizeLimit(): number;
							public static getDefaultSyncMode(): string;
							public static getDefaultPageSize(): number;
							public static getWALSyncMode(): string;
							public static getWALAutoCheckpoint(): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.internal.database.sqlite.SQLiteSession.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export abstract class SQLiteProgram extends com.couchbase.lite.internal.database.sqlite.SQLiteClosable {
							public getConnectionFlags(): number;
							public bindAllArgsAsStrings(param0: native.Array<string>): void;
							public onCorruption(): void;
							public bindBlob(param0: number, param1: native.Array<number>): void;
							public clearBindings(): void;
							public bindLong(param0: number, param1: number): void;
							public getUniqueId(): number;
							public bindNull(param0: number): void;
							public bindString(param0: number, param1: string): void;
							public bindDouble(param0: number, param1: number): void;
							public onAllReferencesReleased(): void;
							public getSession(): com.couchbase.lite.internal.database.sqlite.SQLiteSession;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export class SQLiteQuery extends com.couchbase.lite.internal.database.sqlite.SQLiteProgram {
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.internal.database.CancellationSignal.d.ts" />
/// <reference path="./com.couchbase.lite.internal.database.cursor.Cursor.d.ts" />
/// <reference path="./com.couchbase.lite.internal.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.StringBuilder.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export class SQLiteQueryBuilder {
							public constructor();
							public setProjectionMap(param0: javautilMap): void;
							public buildUnionQuery(param0: native.Array<string>, param1: string, param2: string): string;
							public appendWhereEscapeString(param0: string): void;
							public buildQuery(param0: native.Array<string>, param1: string, param2: string, param3: string, param4: string, param5: string): string;
							public query(param0: com.couchbase.lite.internal.database.sqlite.SQLiteDatabase, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: string, param6: string, param7: string, param8: com.couchbase.lite.internal.database.CancellationSignal): com.couchbase.lite.internal.database.cursor.Cursor;
							public buildUnionSubQuery(param0: string, param1: native.Array<string>, param2: javautilSet, param3: number, param4: string, param5: string, param6: native.Array<string>, param7: string, param8: string): string;
							public setTables(param0: string): void;
							public static buildQueryString(param0: boolean, param1: string, param2: native.Array<string>, param3: string, param4: string, param5: string, param6: string, param7: string): string;
							public appendWhere(param0: string): void;
							public buildUnionSubQuery(param0: string, param1: native.Array<string>, param2: javautilSet, param3: number, param4: string, param5: string, param6: string, param7: string): string;
							public setDistinct(param0: boolean): void;
							public static appendColumns(param0: javalangStringBuilder, param1: native.Array<string>): void;
							public query(param0: com.couchbase.lite.internal.database.sqlite.SQLiteDatabase, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: string, param6: string): com.couchbase.lite.internal.database.cursor.Cursor;
							public setCursorFactory(param0: com.couchbase.lite.internal.database.sqlite.SQLiteDatabase.CursorFactory): void;
							public setStrict(param0: boolean): void;
							public query(param0: com.couchbase.lite.internal.database.sqlite.SQLiteDatabase, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: string, param6: string, param7: string): com.couchbase.lite.internal.database.cursor.Cursor;
							public buildQuery(param0: native.Array<string>, param1: string, param2: native.Array<string>, param3: string, param4: string, param5: string, param6: string): string;
							public getTables(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.internal.database.sqlite.SQLiteQuery.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export class SQLiteQueryCursor {
							public moveToNext(): boolean;
							public getColumnIndex(param0: string): number;
							public getColumnIndexOrThrow(param0: string): number;
							public getShort(param0: number): number;
							public close(): void;
							public isAfterLast(): boolean;
							public getBlob(param0: number): native.Array<number>;
							public getDouble(param0: number): number;
							public getInt(param0: number): number;
							public getFloat(param0: number): number;
							public getColumnName(param0: number): string;
							public isNull(param0: number): boolean;
							public constructor(param0: com.couchbase.lite.internal.database.sqlite.SQLiteQuery);
							public getString(param0: number): string;
							public getLong(param0: number): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.internal.database.CancellationSignal.d.ts" />
/// <reference path="./com.couchbase.lite.internal.database.sqlite.SQLiteConnectionPool.d.ts" />
/// <reference path="./com.couchbase.lite.internal.database.sqlite.SQLiteStatementInfo.d.ts" />
/// <reference path="./com.couchbase.lite.internal.database.sqlite.SQLiteTransactionListener.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export class SQLiteSession {
							public static TRANSACTION_MODE_DEFERRED: number;
							public static TRANSACTION_MODE_IMMEDIATE: number;
							public static TRANSACTION_MODE_EXCLUSIVE: number;
							public hasTransaction(): boolean;
							public beginQuery(param0: string, param1: native.Array<javalangObject>, param2: number, param3: com.couchbase.lite.internal.database.CancellationSignal): com.couchbase.lite.internal.database.sqlite.SQLiteConnection.PreparedStatement;
							public executeForChangedRowCount(param0: string, param1: native.Array<javalangObject>, param2: number, param3: com.couchbase.lite.internal.database.CancellationSignal): number;
							public yieldTransaction(param0: number, param1: boolean, param2: com.couchbase.lite.internal.database.CancellationSignal): boolean;
							public hasNestedTransaction(): boolean;
							public constructor(param0: com.couchbase.lite.internal.database.sqlite.SQLiteConnectionPool);
							public beginTransaction(param0: number, param1: com.couchbase.lite.internal.database.sqlite.SQLiteTransactionListener, param2: number, param3: com.couchbase.lite.internal.database.CancellationSignal): void;
							public prepare(param0: string, param1: number, param2: com.couchbase.lite.internal.database.CancellationSignal, param3: com.couchbase.lite.internal.database.sqlite.SQLiteStatementInfo): void;
							public executeForString(param0: string, param1: native.Array<javalangObject>, param2: number, param3: com.couchbase.lite.internal.database.CancellationSignal): string;
							public executeForLastInsertedRowId(param0: string, param1: native.Array<javalangObject>, param2: number, param3: com.couchbase.lite.internal.database.CancellationSignal): number;
							public hasConnection(): boolean;
							public endTransaction(param0: com.couchbase.lite.internal.database.CancellationSignal): void;
							public endQuery(param0: com.couchbase.lite.internal.database.sqlite.SQLiteConnection.PreparedStatement): void;
							public executeForLong(param0: string, param1: native.Array<javalangObject>, param2: number, param3: com.couchbase.lite.internal.database.CancellationSignal): number;
							public execute(param0: string, param1: native.Array<javalangObject>, param2: number, param3: com.couchbase.lite.internal.database.CancellationSignal): void;
							public setTransactionSuccessful(): void;
						}
						export module SQLiteSession {
							export class Transaction {
								public mParent: com.couchbase.lite.internal.database.sqlite.SQLiteSession.Transaction;
								public mMode: number;
								public mListener: com.couchbase.lite.internal.database.sqlite.SQLiteTransactionListener;
								public mMarkedSuccessful: boolean;
								public mChildFailed: boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export class SQLiteStatement extends com.couchbase.lite.internal.database.sqlite.SQLiteProgram {
							public execute(): void;
							public executeUpdateDelete(): number;
							public toString(): string;
							public executeInsert(): number;
							public simpleQueryForString(): string;
							public simpleQueryForLong(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export class SQLiteStatementInfo {
							public numParameters: number;
							public columnNames: native.Array<string>;
							public readOnly: boolean;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export class SQLiteTransactionListener {
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.database.sqlite.SQLiteTransactionListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onBegin(): void;
								onCommit(): void;
								onRollback(): void;
							});
							public onRollback(): void;
							public onBegin(): void;
							public onCommit(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export module exception {
							export class SQLiteAbortException extends com.couchbase.lite.internal.database.sqlite.exception.SQLiteException {
								public constructor(param0: string, param1: javalangThrowable);
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export module exception {
							export class SQLiteAccessPermException extends com.couchbase.lite.internal.database.sqlite.exception.SQLiteException {
								public constructor(param0: string, param1: javalangThrowable);
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export module exception {
							export class SQLiteBindOrColumnIndexOutOfRangeException extends com.couchbase.lite.internal.database.sqlite.exception.SQLiteException {
								public constructor(param0: string, param1: javalangThrowable);
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export module exception {
							export class SQLiteBlobTooBigException extends com.couchbase.lite.internal.database.sqlite.exception.SQLiteException {
								public constructor(param0: string, param1: javalangThrowable);
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export module exception {
							export class SQLiteCantOpenDatabaseException extends com.couchbase.lite.internal.database.sqlite.exception.SQLiteException {
								public constructor(param0: string, param1: javalangThrowable);
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export module exception {
							export class SQLiteConstraintException extends com.couchbase.lite.internal.database.sqlite.exception.SQLiteException {
								public constructor(param0: string, param1: javalangThrowable);
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export module exception {
							export class SQLiteDatabaseCorruptException extends com.couchbase.lite.internal.database.sqlite.exception.SQLiteException {
								public constructor(param0: string, param1: javalangThrowable);
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export module exception {
							export class SQLiteDatabaseLockedException extends com.couchbase.lite.internal.database.sqlite.exception.SQLiteException {
								public constructor(param0: string, param1: javalangThrowable);
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export module exception {
							export class SQLiteDatatypeMismatchException extends com.couchbase.lite.internal.database.sqlite.exception.SQLiteException {
								public constructor(param0: string, param1: javalangThrowable);
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export module exception {
							export class SQLiteDiskIOException extends com.couchbase.lite.internal.database.sqlite.exception.SQLiteException {
								public constructor(param0: string, param1: javalangThrowable);
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export module exception {
							export class SQLiteDoneException extends com.couchbase.lite.internal.database.sqlite.exception.SQLiteException {
								public constructor(param0: string, param1: javalangThrowable);
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export module exception {
							export class SQLiteException extends com.couchbase.lite.internal.database.SQLException {
								public constructor(param0: string, param1: javalangThrowable);
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export module exception {
							export class SQLiteFullException extends com.couchbase.lite.internal.database.sqlite.exception.SQLiteException {
								public constructor(param0: string, param1: javalangThrowable);
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export module exception {
							export class SQLiteMisuseException extends com.couchbase.lite.internal.database.sqlite.exception.SQLiteException {
								public constructor(param0: string, param1: javalangThrowable);
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export module exception {
							export class SQLiteOutOfMemoryException extends com.couchbase.lite.internal.database.sqlite.exception.SQLiteException {
								public constructor(param0: string, param1: javalangThrowable);
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export module exception {
							export class SQLiteReadOnlyDatabaseException extends com.couchbase.lite.internal.database.sqlite.exception.SQLiteException {
								public constructor(param0: string, param1: javalangThrowable);
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module sqlite {
						export module exception {
							export class SQLiteTableLockedException extends com.couchbase.lite.internal.database.sqlite.exception.SQLiteException {
								public constructor(param0: string, param1: javalangThrowable);
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module util {
						export class CollatorUtils {
							public constructor();
							public static compareStringsUnicode(param0: string, param1: string): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.internal.database.ContentValues.d.ts" />
/// <reference path="./com.couchbase.lite.internal.database.cursor.Cursor.d.ts" />
/// <reference path="./com.couchbase.lite.internal.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./com.couchbase.lite.internal.database.sqlite.SQLiteProgram.d.ts" />
/// <reference path="./com.couchbase.lite.internal.database.sqlite.SQLiteStatement.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.StringBuilder.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module util {
						export class DatabaseUtils {
							public static STATEMENT_SELECT: number;
							public static STATEMENT_UPDATE: number;
							public static STATEMENT_ATTACH: number;
							public static STATEMENT_BEGIN: number;
							public static STATEMENT_COMMIT: number;
							public static STATEMENT_ABORT: number;
							public static STATEMENT_PRAGMA: number;
							public static STATEMENT_DDL: number;
							public static STATEMENT_UNPREPARED: number;
							public static STATEMENT_OTHER: number;
							public constructor();
							public static cursorStringToContentValuesIfPresent(param0: com.couchbase.lite.internal.database.cursor.Cursor, param1: com.couchbase.lite.internal.database.ContentValues, param2: string): void;
							public static cursorFloatToContentValuesIfPresent(param0: com.couchbase.lite.internal.database.cursor.Cursor, param1: com.couchbase.lite.internal.database.ContentValues, param2: string): void;
							public static bindObjectToProgram(param0: com.couchbase.lite.internal.database.sqlite.SQLiteProgram, param1: number, param2: javalangObject): void;
							public static cursorShortToContentValuesIfPresent(param0: com.couchbase.lite.internal.database.cursor.Cursor, param1: com.couchbase.lite.internal.database.ContentValues, param2: string): void;
							public static cursorIntToContentValuesIfPresent(param0: com.couchbase.lite.internal.database.cursor.Cursor, param1: com.couchbase.lite.internal.database.ContentValues, param2: string): void;
							public static findRowIdColumnIndex(param0: native.Array<string>): number;
							public static sqlEscapeString(param0: string): string;
							public static queryIsEmpty(param0: com.couchbase.lite.internal.database.sqlite.SQLiteDatabase, param1: string): boolean;
							public static queryNumEntries(param0: com.couchbase.lite.internal.database.sqlite.SQLiteDatabase, param1: string, param2: string): number;
							public static stringForQuery(param0: com.couchbase.lite.internal.database.sqlite.SQLiteDatabase, param1: string, param2: native.Array<string>): string;
							public static cursorDoubleToContentValuesIfPresent(param0: com.couchbase.lite.internal.database.cursor.Cursor, param1: com.couchbase.lite.internal.database.ContentValues, param2: string): void;
							public static stringForQuery(param0: com.couchbase.lite.internal.database.sqlite.SQLiteStatement, param1: native.Array<string>): string;
							public static cursorLongToContentValuesIfPresent(param0: com.couchbase.lite.internal.database.cursor.Cursor, param1: com.couchbase.lite.internal.database.ContentValues, param2: string): void;
							public static appendEscapedSQLString(param0: javalangStringBuilder, param1: string): void;
							public static longForQuery(param0: com.couchbase.lite.internal.database.sqlite.SQLiteDatabase, param1: string, param2: native.Array<string>): number;
							public static appendValueToSql(param0: javalangStringBuilder, param1: javalangObject): void;
							public static getTypeOfObject(param0: javalangObject): number;
							public static concatenateWhere(param0: string, param1: string): string;
							public static queryNumEntries(param0: com.couchbase.lite.internal.database.sqlite.SQLiteDatabase, param1: string, param2: string, param3: native.Array<string>): number;
							public static getSqlStatementType(param0: string): number;
							public static appendSelectionArgs(param0: native.Array<string>, param1: native.Array<string>): native.Array<string>;
							public static longForQuery(param0: com.couchbase.lite.internal.database.sqlite.SQLiteStatement, param1: native.Array<string>): number;
							public static queryNumEntries(param0: com.couchbase.lite.internal.database.sqlite.SQLiteDatabase, param1: string): number;
						}
						export module DatabaseUtils {
							export class InsertHelper {
								public static TABLE_INFO_PRAGMA_COLUMNNAME_INDEX: number;
								public static TABLE_INFO_PRAGMA_DEFAULT_INDEX: number;
								public constructor(param0: com.couchbase.lite.internal.database.sqlite.SQLiteDatabase, param1: string);
								public getColumnIndex(param0: string): number;
								public prepareForInsert(): void;
								public bindNull(param0: number): void;
								public bind(param0: number, param1: boolean): void;
								public prepareForReplace(): void;
								public replace(param0: com.couchbase.lite.internal.database.ContentValues): number;
								public bind(param0: number, param1: number): void;
								public execute(): number;
								public bind(param0: number, param1: string): void;
								public bind(param0: number, param1: native.Array<number>): void;
								public insert(param0: com.couchbase.lite.internal.database.ContentValues): number;
								public close(): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module util {
						export class LruCache {
							public get(param0: javalangObject): javalangObject;
							public trimToSize(param0: number): void;
							public evictAll(): void;
							public size(): number;
							public sizeOf(param0: javalangObject, param1: javalangObject): number;
							public create(param0: javalangObject): javalangObject;
							public maxSize(): number;
							public remove(param0: javalangObject): javalangObject;
							public missCount(): number;
							public put(param0: javalangObject, param1: javalangObject): javalangObject;
							public createCount(): number;
							public toString(): string;
							public constructor(param0: number);
							public snapshot(): javautilMap;
							public evictionCount(): number;
							public resize(param0: number): void;
							public putCount(): number;
							public hitCount(): number;
							public entryRemoved(param0: boolean, param1: javalangObject, param2: javalangObject, param3: javalangObject): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module util {
						export class Pair {
							public first: javalangObject;
							public second: javalangObject;
							public hashCode(): number;
							public equals(param0: javalangObject): boolean;
							public static create(param0: javalangObject, param1: javalangObject): com.couchbase.lite.internal.database.util.Pair;
							public constructor(param0: javalangObject, param1: javalangObject);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.internal.database.util.Printer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module util {
						export class PrefixPrinter {
							public println(param0: string): void;
							public static create(param0: com.couchbase.lite.internal.database.util.Printer, param1: string): com.couchbase.lite.internal.database.util.Printer;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module util {
						export class Printer {
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.database.util.Printer interface with the provided implementation.
							 */
							public constructor(implementation: {
								println(param0: string): void;
							});
							public println(param0: string): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.CharSequence.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module database {
					export module util {
						export class TextUtils {
							public constructor();
							public static isEmpty(param0: string): boolean;
						}
					}
				}
			}
		}
	}
}

import okhttp3MediaType = okhttp3.MediaType;
import okhttp3RequestBody = okhttp3.RequestBody;
/// <reference path="./com.couchbase.lite.BlobKey.d.ts" />
/// <reference path="./com.couchbase.lite.BlobStore.d.ts" />
/// <reference path="./okhttp3.MediaType.d.ts" />
/// <reference path="./okhttp3.RequestBody.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module replicator {
				export class BlobRequestBody {
					public static create(param0: okhttp3MediaType, param1: com.couchbase.lite.BlobStore, param2: com.couchbase.lite.BlobKey, param3: number, param4: boolean): okhttp3RequestBody;
					public constructor();
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.auth.Authenticator.d.ts" />
/// <reference path="./com.couchbase.lite.replicator.ChangeTrackerBackoff.d.ts" />
/// <reference path="./com.couchbase.lite.replicator.ChangeTrackerClient.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module replicator {
				export class ChangeTracker {
					public requestHeaders: javautilMap;
					public backoff: com.couchbase.lite.replicator.ChangeTrackerBackoff;
					public run(): void;
					public receivedPollResponse(param0: javautilMap): boolean;
					public isActiveOnly(): boolean;
					public receivedChange(param0: javautilMap): boolean;
					public getLastError(): javalangThrowable;
					public start(): boolean;
					public toString(): string;
					public isContinuous(): boolean;
					public getHeartbeatMilliseconds(): number;
					public changesFeedPOSTBodyMap(): javautilMap;
					public setContinuous(param0: boolean): void;
					public setDocIDs(param0: javautilList): void;
					public setPaused(param0: boolean): void;
					public setAuthenticator(param0: com.couchbase.lite.auth.Authenticator): void;
					public runLoop(): void;
					public constructor(param0: javanetURL, param1: com.couchbase.lite.replicator.ChangeTracker.ChangeTrackerMode, param2: boolean, param3: javalangObject, param4: com.couchbase.lite.replicator.ChangeTrackerClient);
					public setUpstreamError(param0: string): void;
					public changesFeedPOSTBody(): string;
					public getFeed(): string;
					public waitIfPaused(): void;
					public setFilterName(param0: string): void;
					public getChangesFeedURL(): javanetURL;
					public isRunning(): boolean;
					public stop(): void;
					public setFilterParams(param0: javautilMap): void;
					public setClient(param0: com.couchbase.lite.replicator.ChangeTrackerClient): void;
					public setRequestHeaders(param0: javautilMap): void;
					public setActiveOnly(param0: boolean): void;
				}
				export module ChangeTracker {
					export class ChangeTrackerMode {
						public static OneShot: com.couchbase.lite.replicator.ChangeTracker.ChangeTrackerMode;
						public static LongPoll: com.couchbase.lite.replicator.ChangeTracker.ChangeTrackerMode;
						public static Continuous: com.couchbase.lite.replicator.ChangeTracker.ChangeTrackerMode;
						public static values(): native.Array<com.couchbase.lite.replicator.ChangeTracker.ChangeTrackerMode>;
						public static valueOf(param0: string): com.couchbase.lite.replicator.ChangeTracker.ChangeTrackerMode;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module replicator {
				export class ChangeTrackerBackoff {
					public getSleepMilliseconds(): number;
					public constructor();
					public getNumAttempts(): number;
					public sleepAppropriateAmountOfTime(): void;
					public resetBackoff(): void;
				}
			}
		}
	}
}

import okhttp3OkHttpClient = okhttp3.OkHttpClient;
/// <reference path="./com.couchbase.lite.replicator.ChangeTracker.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./okhttp3.OkHttpClient.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module replicator {
				export class ChangeTrackerClient {
					/**
					 * Constructs a new instance of the com.couchbase.lite.replicator.ChangeTrackerClient interface with the provided implementation.
					 */
					public constructor(implementation: {
						getOkHttpClient(): okhttp3OkHttpClient;
						changeTrackerReceivedChange(param0: javautilMap): void;
						changeTrackerStopped(param0: com.couchbase.lite.replicator.ChangeTracker): void;
						changeTrackerFinished(param0: com.couchbase.lite.replicator.ChangeTracker): void;
						changeTrackerCaughtUp(): void;
					});
					public getOkHttpClient(): okhttp3OkHttpClient;
					public changeTrackerStopped(param0: com.couchbase.lite.replicator.ChangeTracker): void;
					public changeTrackerReceivedChange(param0: javautilMap): void;
					public changeTrackerFinished(param0: com.couchbase.lite.replicator.ChangeTracker): void;
					public changeTrackerCaughtUp(): void;
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.internal.Body.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module replicator {
				export class PulledRevision extends com.couchbase.lite.internal.RevisionInternal {
					public remoteSequenceID: string;
					public conflicted: boolean;
					public constructor(param0: javautilMap, param1: number);
					public getRemoteSequenceID(): string;
					public constructor(param0: javautilMap);
					public isConflicted(): boolean;
					public constructor(param0: com.couchbase.lite.internal.Body);
					public setRemoteSequenceID(param0: string): void;
					public setConflicted(param0: boolean): void;
					public constructor(param0: string, param1: string, param2: boolean);
				}
			}
		}
	}
}

import javautilconcurrentBlockingQueue = java.util.concurrent.BlockingQueue;
import javautilconcurrentatomicAtomicLong = java.util.concurrent.atomic.AtomicLong;
/// <reference path="./com.couchbase.lite.Database.d.ts" />
/// <reference path="./com.couchbase.lite.RevisionList.d.ts" />
/// <reference path="./com.couchbase.lite.internal.RevisionInternal.d.ts" />
/// <reference path="./com.couchbase.lite.replicator.ChangeTracker.d.ts" />
/// <reference path="./com.couchbase.lite.replicator.Replication.d.ts" />
/// <reference path="./com.couchbase.lite.support.Batcher.d.ts" />
/// <reference path="./com.couchbase.lite.support.HttpClientFactory.d.ts" />
/// <reference path="./com.couchbase.lite.support.SequenceMap.d.ts" />
/// <reference path="./java.lang.Boolean.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.concurrent.BlockingQueue.d.ts" />
/// <reference path="./java.util.concurrent.atomic.AtomicLong.d.ts" />
/// <reference path="./okhttp3.OkHttpClient.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module replicator {
				export class PullerInternal extends com.couchbase.lite.replicator.ReplicationInternal implements com.couchbase.lite.replicator.ChangeTrackerClient {
					public static MAX_REVS_TO_GET_IN_BULK: number;
					public static MAX_NUMBER_OF_ATTS_SINCE: number;
					public static CHANGE_TRACKER_RESTART_DELAY_MS: number;
					public static MAX_PENDING_DOCS: number;
					public pendingSequences: com.couchbase.lite.support.SequenceMap;
					public canBulkGet: javalangBoolean;
					public revsToPull: javautilList;
					public bulkRevsToPull: javautilList;
					public deletedRevsToPull: javautilList;
					public httpConnectionCount: number;
					public downloadsToInsert: com.couchbase.lite.support.Batcher;
					public queuedMemorySize: javautilconcurrentatomicAtomicLong;
					public changeTrackerReceivedChange(param0: javautilMap): void;
					public pullRemoteRevision(param0: com.couchbase.lite.internal.RevisionInternal): void;
					public shouldCreateTarget(): boolean;
					public changed(param0: com.couchbase.lite.support.BlockingQueueListener.EventType, param1: javalangObject, param2: javautilconcurrentBlockingQueue): void;
					public onBeforeScheduleRetry(): void;
					public goOffline(): void;
					public pauseOrResume(): void;
					public changeTrackerCaughtUp(): void;
					public insertDownloads(param0: javautilList): void;
					public constructor(param0: com.couchbase.lite.Database, param1: javanetURL, param2: com.couchbase.lite.support.HttpClientFactory, param3: com.couchbase.lite.replicator.Replication.Lifecycle, param4: com.couchbase.lite.replicator.Replication);
					public pullRemoteRevisions(): void;
					public getOkHttpClient(): okhttp3OkHttpClient;
					public setCreateTarget(param0: boolean): void;
					public toString(): string;
					public processInbox(param0: com.couchbase.lite.RevisionList): void;
					public static joinQuotedEscaped(param0: javautilList): string;
					public changeTrackerStopped(param0: com.couchbase.lite.replicator.ChangeTracker): void;
					public isPull(): boolean;
					public changeTrackerFinished(param0: com.couchbase.lite.replicator.ChangeTracker): void;
					public pullBulkRevisions(param0: javautilList): void;
					public maybeCreateRemoteDB(): void;
					public waitForAllTasksCompleted(): void;
					public startChangeTracker(): void;
					public pullBulkWithAllDocs(param0: javautilList): void;
					public processChangeTrackerChange(param0: javautilMap): void;
					public getLastSequence(): string;
					public stop(): void;
					public queueRemoteRevision(param0: com.couchbase.lite.internal.RevisionInternal): void;
					public waitDownloadsToInsertBatcherCompleted(): void;
					public beginReplicating(): void;
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.Database.d.ts" />
/// <reference path="./com.couchbase.lite.RevisionList.d.ts" />
/// <reference path="./com.couchbase.lite.replicator.Replication.d.ts" />
/// <reference path="./com.couchbase.lite.support.HttpClientFactory.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.concurrent.BlockingQueue.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module replicator {
				export class PusherInternal extends com.couchbase.lite.replicator.ReplicationInternal implements com.couchbase.lite.Database.ChangeListener {
					public static MAX_PENDING_DOCS: number;
					public isPull(): boolean;
					public finalize(): void;
					public shouldCreateTarget(): boolean;
					public changed(param0: com.couchbase.lite.support.BlockingQueueListener.EventType, param1: javalangObject, param2: javautilconcurrentBlockingQueue): void;
					public start(): void;
					public maybeCreateRemoteDB(): void;
					public goOffline(): void;
					public onBeforeScheduleRetry(): void;
					public constructor(param0: com.couchbase.lite.Database, param1: javanetURL, param2: com.couchbase.lite.support.HttpClientFactory, param3: com.couchbase.lite.replicator.Replication.Lifecycle, param4: com.couchbase.lite.replicator.Replication);
					public changed(param0: com.couchbase.lite.Database.ChangeEvent): void;
					public setCreateTarget(param0: boolean): void;
					public toString(): string;
					public processInbox(param0: com.couchbase.lite.RevisionList): void;
					public stop(): void;
					public uploadBulkDocs(param0: javautilList, param1: com.couchbase.lite.RevisionList): void;
					public beginReplicating(): void;
				}
			}
		}
	}
}

import okhttp3Request = okhttp3.Request;
/// <reference path="./com.couchbase.lite.Database.d.ts" />
/// <reference path="./com.couchbase.lite.replicator.RemoteRequestCompletion.d.ts" />
/// <reference path="./com.couchbase.lite.support.HttpClientFactory.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./okhttp3.OkHttpClient.d.ts" />
/// <reference path="./okhttp3.Request.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module replicator {
				export class RemoteBulkDownloaderRequest extends com.couchbase.lite.replicator.RemoteRequest implements com.couchbase.lite.support.MultipartReaderDelegate {
					public toString(): string;
					public startedPart(param0: javautilMap): void;
					public finishedPart(): void;
					public constructor(param0: com.couchbase.lite.support.HttpClientFactory, param1: string, param2: javanetURL, param3: boolean, param4: javautilMap, param5: javautilMap, param6: com.couchbase.lite.replicator.RemoteRequestCompletion);
					public executeRequest(param0: okhttp3OkHttpClient, param1: okhttp3Request): void;
					public addHeaders(param0: okhttp3RequestBuilder): okhttp3RequestBuilder;
					public appendToPart(param0: native.Array<number>): void;
					public cancel(): void;
					public appendToPart(param0: native.Array<number>, param1: number, param2: number): void;
					public constructor(param0: com.couchbase.lite.support.HttpClientFactory, param1: javanetURL, param2: boolean, param3: javautilList, param4: com.couchbase.lite.Database, param5: javautilMap, param6: com.couchbase.lite.replicator.RemoteBulkDownloaderRequest.BulkDownloaderDocument, param7: com.couchbase.lite.replicator.RemoteRequestCompletion);
				}
				export module RemoteBulkDownloaderRequest {
					export class BulkDownloaderDocument {
						/**
						 * Constructs a new instance of the com.couchbase.lite.replicator.RemoteBulkDownloaderRequest$BulkDownloaderDocument interface with the provided implementation.
						 */
						public constructor(implementation: {
							onDocument(param0: javautilMap, param1: number): void;
						});
						public onDocument(param0: javautilMap, param1: number): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.replicator.RemoteRequestCompletion.d.ts" />
/// <reference path="./com.couchbase.lite.support.HttpClientFactory.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module replicator {
				export class RemoteFormRequest extends com.couchbase.lite.replicator.RemoteRequest {
					public constructor(param0: com.couchbase.lite.support.HttpClientFactory, param1: string, param2: javanetURL, param3: boolean, param4: javautilMap, param5: javautilMap, param6: com.couchbase.lite.replicator.RemoteRequestCompletion);
					public setBody(param0: okhttp3RequestBuilder): okhttp3RequestBuilder;
					public cancel(): void;
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.Database.d.ts" />
/// <reference path="./com.couchbase.lite.replicator.RemoteRequestCompletion.d.ts" />
/// <reference path="./com.couchbase.lite.support.HttpClientFactory.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./okhttp3.OkHttpClient.d.ts" />
/// <reference path="./okhttp3.Request.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module replicator {
				export class RemoteMultipartDownloaderRequest extends com.couchbase.lite.replicator.RemoteRequest {
					public constructor(param0: com.couchbase.lite.support.HttpClientFactory, param1: string, param2: javanetURL, param3: boolean, param4: javautilMap, param5: com.couchbase.lite.Database, param6: javautilMap, param7: com.couchbase.lite.replicator.RemoteRequestCompletion);
					public constructor(param0: com.couchbase.lite.support.HttpClientFactory, param1: string, param2: javanetURL, param3: boolean, param4: javautilMap, param5: javautilMap, param6: com.couchbase.lite.replicator.RemoteRequestCompletion);
					public executeRequest(param0: okhttp3OkHttpClient, param1: okhttp3Request): void;
					public addHeaders(param0: okhttp3RequestBuilder): okhttp3RequestBuilder;
					public cancel(): void;
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.Database.d.ts" />
/// <reference path="./com.couchbase.lite.replicator.RemoteRequestCompletion.d.ts" />
/// <reference path="./com.couchbase.lite.support.HttpClientFactory.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module replicator {
				export class RemoteMultipartRequest extends com.couchbase.lite.replicator.RemoteRequest {
					public constructor(param0: com.couchbase.lite.support.HttpClientFactory, param1: string, param2: javanetURL, param3: boolean, param4: javautilMap, param5: javautilMap, param6: com.couchbase.lite.replicator.RemoteRequestCompletion);
					public constructor(param0: com.couchbase.lite.support.HttpClientFactory, param1: string, param2: javanetURL, param3: boolean, param4: boolean, param5: javautilMap, param6: javautilMap, param7: com.couchbase.lite.Database, param8: javautilMap, param9: com.couchbase.lite.replicator.RemoteRequestCompletion);
					public addHeaders(param0: okhttp3RequestBuilder): okhttp3RequestBuilder;
					public setBody(param0: okhttp3RequestBuilder): okhttp3RequestBuilder;
					public cancel(): void;
				}
			}
		}
	}
}

import okhttp3Response = okhttp3.Response;
import okhttp3Call = okhttp3.Call;
/// <reference path="./com.couchbase.lite.auth.Authenticator.d.ts" />
/// <reference path="./com.couchbase.lite.replicator.RemoteRequestCompletion.d.ts" />
/// <reference path="./com.couchbase.lite.support.HttpClientFactory.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./okhttp3.Call.d.ts" />
/// <reference path="./okhttp3.MediaType.d.ts" />
/// <reference path="./okhttp3.OkHttpClient.d.ts" />
/// <reference path="./okhttp3.Request.d.ts" />
/// <reference path="./okhttp3.RequestBody.d.ts" />
/// <reference path="./okhttp3.Response.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module replicator {
				export class RemoteRequest {
					public static TAG: string;
					public static MIN_JSON_LENGTH_TO_COMPRESS: number;
					public static JSON: okhttp3MediaType;
					public factory: com.couchbase.lite.support.HttpClientFactory;
					public method: string;
					public url: javanetURL;
					public body: javautilMap;
					public authenticator: com.couchbase.lite.auth.Authenticator;
					public onPreCompletion: com.couchbase.lite.replicator.RemoteRequestCompletion;
					public onCompletion: com.couchbase.lite.replicator.RemoteRequestCompletion;
					public onPostCompletion: com.couchbase.lite.replicator.RemoteRequestCompletion;
					public call: okhttp3Call;
					public requestHeaders: javautilMap;
					public dontLog404: boolean;
					public compressedRequest: boolean;
					public str: string;
					public setAuthenticator(param0: com.couchbase.lite.auth.Authenticator): void;
					public setCompressedRequest(param0: boolean): void;
					public constructor(param0: com.couchbase.lite.support.HttpClientFactory, param1: string, param2: javanetURL, param3: boolean, param4: javautilMap, param5: javautilMap, param6: com.couchbase.lite.replicator.RemoteRequestCompletion);
					public static parseAuthHeader(param0: string): javautilMap;
					public run(): void;
					public execute(): void;
					public request(): okhttp3Request;
					public addHeaders(param0: okhttp3RequestBuilder): okhttp3RequestBuilder;
					public setOnPostCompletion(param0: com.couchbase.lite.replicator.RemoteRequestCompletion): void;
					public cancel(): void;
					public setOnPreCompletion(param0: com.couchbase.lite.replicator.RemoteRequestCompletion): void;
					public toString(): string;
					public setCompressedBody(param0: native.Array<number>): okhttp3RequestBody;
					public executeRequest(param0: okhttp3OkHttpClient, param1: okhttp3Request): void;
					public isCompressedRequest(): boolean;
					public addRequestHeaders(param0: okhttp3RequestBuilder): okhttp3RequestBuilder;
					public setBody(param0: okhttp3RequestBuilder): okhttp3RequestBuilder;
					public storeCookie(param0: okhttp3Response): void;
					public setDontLog404(param0: boolean): void;
					public respondWithResult(param0: javalangObject, param1: javalangThrowable, param2: okhttp3Response): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./okhttp3.Response.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module replicator {
				export class RemoteRequestCompletion {
					/**
					 * Constructs a new instance of the com.couchbase.lite.replicator.RemoteRequestCompletion interface with the provided implementation.
					 */
					public constructor(implementation: {
						onCompletion(param0: okhttp3Response, param1: javalangObject, param2: javalangThrowable): void;
					});
					public onCompletion(param0: okhttp3Response, param1: javalangObject, param2: javalangThrowable): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module replicator {
				export class RemoteRequestResponseException {
					public static BAD_URL: number;
					public static USER_DENIED_AUTH: number;
					public toString(): string;
					public getUserInfo(): javautilMap;
					public constructor(param0: number, param1: string);
					public constructor(param0: number, param1: string, param2: javautilMap);
					public getCode(): number;
				}
			}
		}
	}
}

import javautilQueue = java.util.Queue;
import javautilconcurrentTimeUnit = java.util.concurrent.TimeUnit;
import javautilconcurrentExecutorService = java.util.concurrent.ExecutorService;
/// <reference path="./com.couchbase.lite.Database.d.ts" />
/// <reference path="./com.couchbase.lite.auth.Authenticator.d.ts" />
/// <reference path="./com.couchbase.lite.replicator.RemoteRequestCompletion.d.ts" />
/// <reference path="./com.couchbase.lite.support.CustomFuture.d.ts" />
/// <reference path="./com.couchbase.lite.support.HttpClientFactory.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Queue.d.ts" />
/// <reference path="./java.util.concurrent.ExecutorService.d.ts" />
/// <reference path="./java.util.concurrent.ScheduledExecutorService.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module replicator {
				export class RemoteRequestRetry {
					public static TAG: string;
					public static MAX_RETRIES: number;
					public static RETRY_DELAY_MS: number;
					public workExecutor: javautilconcurrentScheduledExecutorService;
					public requestExecutor: javautilconcurrentExecutorService;
					public clientFactory: com.couchbase.lite.support.HttpClientFactory;
					public method: string;
					public url: javanetURL;
					public body: javautilMap;
					public attachments: javautilMap;
					public authenticator: com.couchbase.lite.auth.Authenticator;
					public onCompletionCaller: com.couchbase.lite.replicator.RemoteRequestCompletion;
					public onPreCompletionCaller: com.couchbase.lite.replicator.RemoteRequestCompletion;
					public requestHeaders: javautilMap;
					public setAuthenticator(param0: com.couchbase.lite.auth.Authenticator): void;
					public submit(): com.couchbase.lite.support.CustomFuture;
					public get(): javalangObject;
					public submit(param0: boolean): com.couchbase.lite.support.CustomFuture;
					public setQueue(param0: javautilQueue): void;
					public isDone(): boolean;
					public get(param0: number, param1: javautilconcurrentTimeUnit): javalangObject;
					public isCancelled(): boolean;
					public setOnPreCompletionCaller(param0: com.couchbase.lite.replicator.RemoteRequestCompletion): void;
					public cancel(param0: boolean): boolean;
					public constructor(param0: com.couchbase.lite.replicator.RemoteRequestRetry.RemoteRequestType, param1: javautilconcurrentScheduledExecutorService, param2: javautilconcurrentScheduledExecutorService, param3: com.couchbase.lite.support.HttpClientFactory, param4: string, param5: javanetURL, param6: boolean, param7: boolean, param8: javautilMap, param9: javautilMap, param10: com.couchbase.lite.Database, param11: javautilMap, param12: com.couchbase.lite.replicator.RemoteRequestCompletion);
					public setDontLog404(param0: boolean): void;
				}
				export module RemoteRequestRetry {
					export class RemoteRequestType {
						public static REMOTE_REQUEST: com.couchbase.lite.replicator.RemoteRequestRetry.RemoteRequestType;
						public static REMOTE_MULTIPART_REQUEST: com.couchbase.lite.replicator.RemoteRequestRetry.RemoteRequestType;
						public static REMOTE_MULTIPART_DOWNLOADER_REQUEST: com.couchbase.lite.replicator.RemoteRequestRetry.RemoteRequestType;
						public static values(): native.Array<com.couchbase.lite.replicator.RemoteRequestRetry.RemoteRequestType>;
						public static valueOf(param0: string): com.couchbase.lite.replicator.RemoteRequestRetry.RemoteRequestType;
					}
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.Database.d.ts" />
/// <reference path="./com.couchbase.lite.Document.d.ts" />
/// <reference path="./com.couchbase.lite.auth.Authenticator.d.ts" />
/// <reference path="./com.couchbase.lite.replicator.Replication.d.ts" />
/// <reference path="./com.couchbase.lite.replicator.ReplicationInternal.d.ts" />
/// <reference path="./com.couchbase.lite.replicator.ReplicationStateTransition.d.ts" />
/// <reference path="./com.couchbase.lite.support.HttpClientFactory.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module replicator {
				export class Replication {
					public static REPLICATOR_DATABASE_NAME: string;
					public static DEFAULT_MAX_TIMEOUT_FOR_SHUTDOWN: number;
					public static DEFAULT_HEARTBEAT: number;
					public db: com.couchbase.lite.Database;
					public remote: javanetURL;
					public clientFactory: com.couchbase.lite.support.HttpClientFactory;
					public replicationInternal: com.couchbase.lite.replicator.ReplicationInternal;
					public lifecycle: com.couchbase.lite.replicator.Replication.Lifecycle;
					public lastError: javalangThrowable;
					public direction: com.couchbase.lite.replicator.Replication.Direction;
					public getCompletedChangesCount(): number;
					public remoteCheckpointDocID(): string;
					public setClientFactory(param0: com.couchbase.lite.support.HttpClientFactory): void;
					public getFilter(): string;
					public setCookie(param0: string, param1: string, param2: string, param3: Date, param4: boolean, param5: boolean): void;
					public getRemoteUUID(): string;
					public getUsername(): string;
					public setCreateTarget(param0: boolean): void;
					public getAuthenticator(): com.couchbase.lite.auth.Authenticator;
					public getPendingDocumentIDs(): javautilSet;
					public setAuthenticator(param0: com.couchbase.lite.auth.Authenticator): void;
					public getSessionID(): string;
					public setLastError(param0: javalangThrowable): void;
					public setChannels(param0: java.util.List<string>): void;
					public restart(): void;
					public getClientFactory(): com.couchbase.lite.support.HttpClientFactory;
					public clearAuthenticationStores(): boolean;
					public constructor(param0: com.couchbase.lite.Database, param1: javanetURL, param2: com.couchbase.lite.replicator.Replication.Direction, param3: com.couchbase.lite.support.HttpClientFactory);
					public networkUnreachable(): void;
					public stop(): void;
					public setFilterParams(param0: java.util.Map<string, any>): void;
					public getLocalDatabase(): com.couchbase.lite.Database;
					public addChangeListener(param0: com.couchbase.lite.replicator.Replication.ChangeListener): void;
					public getStatus(): com.couchbase.lite.replicator.Replication.ReplicationStatus;
					public getChannels(): javautilList;
					public getChangesCount(): number;
					public getRemoteUrl(): javanetURL;
					public shouldCreateTarget(): boolean;
					public setServerType(param0: string): void;
					public start(): void;
					public goOffline(): void;
					public getLastError(): javalangThrowable;
					public setRemoteUUID(param0: string): void;
					public getHeaders(): javautilMap;
					public toString(): string;
					public isContinuous(): boolean;
					public setDocIds(param0: java.util.List<string>): void;
					public goOnline(): void;
					public getDocIds(): javautilList;
					public setContinuous(param0: boolean): void;
					public changed(param0: com.couchbase.lite.replicator.Replication.ChangeEvent): void;
					public serverIsSyncGatewayVersion(param0: string): boolean;
					public setFilter(param0: string): void;
					public isPull(): boolean;
					public buildRelativeURLString(param0: string): string;
					public setHeaders(param0: javautilMap): void;
					public constructor(param0: com.couchbase.lite.Database, param1: javanetURL, param2: com.couchbase.lite.replicator.Replication.Direction);
					public removeChangeListener(param0: com.couchbase.lite.replicator.Replication.ChangeListener): void;
					public isRunning(): boolean;
					public deleteCookie(param0: string): void;
					public isDocumentPending(param0: com.couchbase.lite.Document): boolean;
					public setCookie(param0: string, param1: string, param2: string, param3: number, param4: boolean, param5: boolean): void;
					public networkReachable(): void;
					public getFilterParams(): javautilMap;
				}
				export module Replication {
					export class ChangeEvent {
						public getError(): javalangThrowable;
						public getStatus(): com.couchbase.lite.replicator.Replication.ReplicationStatus;
						public constructor(param0: com.couchbase.lite.replicator.ReplicationInternal, param1: javalangThrowable);
						public getTransition(): com.couchbase.lite.replicator.ReplicationStateTransition;
						public getSource(): com.couchbase.lite.replicator.Replication;
						public constructor(param0: com.couchbase.lite.replicator.ReplicationInternal, param1: com.couchbase.lite.replicator.ReplicationStateTransition);
						public constructor(param0: com.couchbase.lite.replicator.ReplicationInternal);
						public getChangeCount(): number;
						public getCompletedChangeCount(): number;
						public toString(): string;
					}
					export class ChangeListener {
						/**
						 * Constructs a new instance of the com.couchbase.lite.replicator.Replication$ChangeListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							changed(param0: com.couchbase.lite.replicator.Replication.ChangeEvent): void;
						});
						public changed(param0: com.couchbase.lite.replicator.Replication.ChangeEvent): void;
					}
					export class Direction {
						public static PULL: com.couchbase.lite.replicator.Replication.Direction;
						public static PUSH: com.couchbase.lite.replicator.Replication.Direction;
						public static values(): native.Array<com.couchbase.lite.replicator.Replication.Direction>;
						public static valueOf(param0: string): com.couchbase.lite.replicator.Replication.Direction;
					}
					export class Lifecycle {
						public static ONESHOT: com.couchbase.lite.replicator.Replication.Lifecycle;
						public static CONTINUOUS: com.couchbase.lite.replicator.Replication.Lifecycle;
						public static valueOf(param0: string): com.couchbase.lite.replicator.Replication.Lifecycle;
						public static values(): native.Array<com.couchbase.lite.replicator.Replication.Lifecycle>;
					}
					export class ReplicationField {
						public static FILTER_NAME: com.couchbase.lite.replicator.Replication.ReplicationField;
						public static FILTER_PARAMS: com.couchbase.lite.replicator.Replication.ReplicationField;
						public static DOC_IDS: com.couchbase.lite.replicator.Replication.ReplicationField;
						public static REQUEST_HEADERS: com.couchbase.lite.replicator.Replication.ReplicationField;
						public static AUTHENTICATOR: com.couchbase.lite.replicator.Replication.ReplicationField;
						public static CREATE_TARGET: com.couchbase.lite.replicator.Replication.ReplicationField;
						public static REMOTE_UUID: com.couchbase.lite.replicator.Replication.ReplicationField;
						public static CHANNELS: com.couchbase.lite.replicator.Replication.ReplicationField;
						public static valueOf(param0: string): com.couchbase.lite.replicator.Replication.ReplicationField;
						public static values(): native.Array<com.couchbase.lite.replicator.Replication.ReplicationField>;
					}
					export class ReplicationStatus {
						public static REPLICATION_STOPPED: com.couchbase.lite.replicator.Replication.ReplicationStatus;
						public static REPLICATION_OFFLINE: com.couchbase.lite.replicator.Replication.ReplicationStatus;
						public static REPLICATION_IDLE: com.couchbase.lite.replicator.Replication.ReplicationStatus;
						public static REPLICATION_ACTIVE: com.couchbase.lite.replicator.Replication.ReplicationStatus;
						public static values(): native.Array<com.couchbase.lite.replicator.Replication.ReplicationStatus>;
						public static valueOf(param0: string): com.couchbase.lite.replicator.Replication.ReplicationStatus;
					}
				}
			}
		}
	}
}

import javautilconcurrentatomicAtomicInteger = java.util.concurrent.atomic.AtomicInteger;
/// <reference path="./com.couchbase.lite.Database.d.ts" />
/// <reference path="./com.couchbase.lite.ReplicationFilter.d.ts" />
/// <reference path="./com.couchbase.lite.RevisionList.d.ts" />
/// <reference path="./com.couchbase.lite.Status.d.ts" />
/// <reference path="./com.couchbase.lite.auth.Authenticator.d.ts" />
/// <reference path="./com.couchbase.lite.internal.RevisionInternal.d.ts" />
/// <reference path="./com.couchbase.lite.replicator.RemoteRequestCompletion.d.ts" />
/// <reference path="./com.couchbase.lite.replicator.Replication.d.ts" />
/// <reference path="./com.couchbase.lite.replicator.ReplicationTrigger.d.ts" />
/// <reference path="./com.couchbase.lite.support.Batcher.d.ts" />
/// <reference path="./com.couchbase.lite.support.CustomFuture.d.ts" />
/// <reference path="./com.couchbase.lite.support.HttpClientFactory.d.ts" />
/// <reference path="./com.github.oxo42.stateless4j.StateMachine.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.concurrent.BlockingQueue.d.ts" />
/// <reference path="./java.util.concurrent.ScheduledExecutorService.d.ts" />
/// <reference path="./java.util.concurrent.atomic.AtomicInteger.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module replicator {
				export abstract class ReplicationInternal {
					public static BY_CHANNEL_FILTER_NAME: string;
					public static CHANNELS_QUERY_PARAM: string;
					public static EXECUTOR_THREAD_POOL_SIZE: number;
					public static MIN_EXECUTOR_THREAD_POOL_SIZE: number;
					public static SYNC_GATEWAY_PREFIX: string;
					public static RETRY_DELAY_SECONDS: number;
					public parentReplication: com.couchbase.lite.replicator.Replication;
					public db: com.couchbase.lite.Database;
					public remote: javanetURL;
					public clientFactory: com.couchbase.lite.support.HttpClientFactory;
					public lastSequence: string;
					public authenticator: com.couchbase.lite.auth.Authenticator;
					public authenticating: boolean;
					public filterName: string;
					public filterParams: javautilMap;
					public documentIDs: javautilList;
					public requestHeaders: javautilMap;
					public batcher: com.couchbase.lite.support.Batcher;
					public static PROCESSOR_DELAY: number;
					public static INBOX_CAPACITY: number;
					public remoteRequestExecutor: javautilconcurrentScheduledExecutorService;
					public remoteCheckpoint: javautilMap;
					public completedChangesCount: javautilconcurrentatomicAtomicInteger;
					public changesCount: javautilconcurrentatomicAtomicInteger;
					public revisionBodyTransformationBlock: com.couchbase.lite.util.CollectionUtils.Functor;
					public sessionID: string;
					public pendingFutures: javautilconcurrentBlockingQueue;
					public executor: javautilconcurrentScheduledExecutorService;
					public stateMachine: com.github.oxo42.stateless4j.StateMachine;
					public lifecycle: com.couchbase.lite.replicator.Replication.Lifecycle;
					public changeListenerNotifyStyle: com.couchbase.lite.replicator.ReplicationInternal.ChangeListenerNotifyStyle;
					public waitingForPendingFutures: boolean;
					public lockWaitForPendingFutures: javalangObject;
					public setLastSequence(param0: string): void;
					public sendAsyncRequest(param0: string, param1: string, param2: javautilMap, param3: com.couchbase.lite.replicator.RemoteRequestCompletion): com.couchbase.lite.support.CustomFuture;
					public finalize(): void;
					public sendAsyncRequest(param0: string, param1: string, param2: boolean, param3: javautilMap, param4: com.couchbase.lite.replicator.RemoteRequestCompletion): com.couchbase.lite.support.CustomFuture;
					public remoteCheckpointDocID(): string;
					public getFilter(): string;
					public compilePushReplicationFilter(): com.couchbase.lite.ReplicationFilter;
					public changed(param0: com.couchbase.lite.support.BlockingQueueListener.EventType, param1: javalangObject, param2: javautilconcurrentBlockingQueue): void;
					public onBeforeScheduleRetry(): void;
					public getLifecycle(): com.couchbase.lite.replicator.Replication.Lifecycle;
					public static statusFromBulkDocsResponseItem(param0: javautilMap): com.couchbase.lite.Status;
					public addToCompletedChangesCount(param0: number): void;
					public remoteCheckpointDocID(param0: string): string;
					public setCookie(param0: string, param1: string, param2: string, param3: Date, param4: boolean, param5: boolean): void;
					public getRemoteUUID(): string;
					public sendAsyncRequest(param0: string, param1: javanetURL, param2: boolean, param3: javautilMap, param4: boolean, param5: com.couchbase.lite.replicator.RemoteRequestCompletion): com.couchbase.lite.support.CustomFuture;
					public setCreateTarget(param0: boolean): void;
					public fireTrigger(param0: com.couchbase.lite.replicator.ReplicationTrigger): void;
					public waitBatcherCompleted(): void;
					public saveLastSequence(): void;
					public close(): void;
					public initializeRequestWorkers(): void;
					public getAuthenticator(): com.couchbase.lite.auth.Authenticator;
					public setAuthenticator(param0: com.couchbase.lite.auth.Authenticator): void;
					public stopNetworkReachabilityManager(): void;
					public getSessionID(): string;
					public initializeStateMachine(): void;
					public waitPendingFuturesCompleted(): void;
					public setChannels(param0: javautilList): void;
					public checkSessionAtPath(param0: string): void;
					public login(): void;
					public maybeCreateRemoteDB(): void;
					public setLifecycle(param0: com.couchbase.lite.replicator.Replication.Lifecycle): void;
					public getClientFactory(): com.couchbase.lite.support.HttpClientFactory;
					public sendAsyncRequest(param0: string, param1: string, param2: javautilMap, param3: boolean, param4: com.couchbase.lite.replicator.RemoteRequestCompletion): com.couchbase.lite.support.CustomFuture;
					public triggerStopImmediate(): void;
					public fetchRemoteCheckpointDoc(): void;
					public triggerGoOnline(): void;
					public stop(): void;
					public getLocalDatabase(): com.couchbase.lite.Database;
					public setFilterParams(param0: javautilMap): void;
					public triggerStopGraceful(): void;
					public getCompletedChangesCount(): javautilconcurrentatomicAtomicInteger;
					public getChannels(): javautilList;
					public retryIfReady(): void;
					public serverIsSyncGateway(): boolean;
					public initAuthorizer(): void;
					public static encodeDocumentId(param0: string): string;
					public shouldCreateTarget(): boolean;
					public initializeReplicationExecutor(): void;
					public setServerType(param0: string): void;
					public start(): void;
					public goOffline(): void;
					public triggerGoOffline(): void;
					public sendAsyncMultipartRequest(param0: string, param1: string, param2: javautilMap, param3: javautilMap, param4: com.couchbase.lite.replicator.RemoteRequestCompletion): com.couchbase.lite.support.CustomFuture;
					public startNetworkReachabilityManager(): void;
					public getHeaders(): javautilMap;
					public setRemoteUUID(param0: string): void;
					public processInbox(param0: com.couchbase.lite.RevisionList): void;
					public addToInbox(param0: com.couchbase.lite.internal.RevisionInternal): void;
					public isContinuous(): boolean;
					public addToChangesCount(param0: number): void;
					public setDocIds(param0: javautilList): void;
					public goOnline(): void;
					public triggerStart(): void;
					public getDocIds(): javautilList;
					public retry(): void;
					public serverIsSyncGatewayVersion(param0: string): boolean;
					public setFilter(param0: string): void;
					public isPull(): boolean;
					public waitForPendingFutures(): void;
					public isNetworkReachable(): boolean;
					public sendAsyncMultipartDownloaderRequest(param0: string, param1: string, param2: javautilMap, param3: com.couchbase.lite.Database, param4: com.couchbase.lite.replicator.RemoteRequestCompletion): com.couchbase.lite.support.CustomFuture;
					public transformRevision(param0: com.couchbase.lite.internal.RevisionInternal): com.couchbase.lite.internal.RevisionInternal;
					public setHeaders(param0: javautilMap): void;
					public buildRelativeURLString(param0: string): string;
					public static waitBatcherCompleted(param0: com.couchbase.lite.support.Batcher): void;
					public checkSession(): void;
					public canSendCompressedRequests(): boolean;
					public waitForAllTasksCompleted(): void;
					public initBatcher(): void;
					public sendAsyncRequest(param0: string, param1: string, param2: boolean, param3: javautilMap, param4: boolean, param5: com.couchbase.lite.replicator.RemoteRequestCompletion): com.couchbase.lite.support.CustomFuture;
					public setError(param0: javalangThrowable): void;
					public getChangesCount(): javautilconcurrentatomicAtomicInteger;
					public deleteCookie(param0: string): void;
					public isRunning(): boolean;
					public static serverIsSyncGatewayVersion(param0: string, param1: string): boolean;
					public setCookie(param0: string, param1: string, param2: string, param3: number, param4: boolean, param5: boolean): void;
					public setLastSequenceFromWorkExecutor(param0: string, param1: string): void;
					public retryReplicationIfError(): void;
					public getFilterParams(): javautilMap;
					public beginReplicating(): void;
				}
				export module ReplicationInternal {
					export class ChangeListener {
						/**
						 * Constructs a new instance of the com.couchbase.lite.replicator.ReplicationInternal$ChangeListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							changed(param0: com.couchbase.lite.replicator.Replication.ChangeEvent): void;
						});
						public changed(param0: com.couchbase.lite.replicator.Replication.ChangeEvent): void;
					}
					export class ChangeListenerNotifyStyle {
						public static SYNC: com.couchbase.lite.replicator.ReplicationInternal.ChangeListenerNotifyStyle;
						public static ASYNC: com.couchbase.lite.replicator.ReplicationInternal.ChangeListenerNotifyStyle;
						public static values(): native.Array<com.couchbase.lite.replicator.ReplicationInternal.ChangeListenerNotifyStyle>;
						public static valueOf(param0: string): com.couchbase.lite.replicator.ReplicationInternal.ChangeListenerNotifyStyle;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module replicator {
				export class ReplicationState {
					public static INITIAL: com.couchbase.lite.replicator.ReplicationState;
					public static RUNNING: com.couchbase.lite.replicator.ReplicationState;
					public static IDLE: com.couchbase.lite.replicator.ReplicationState;
					public static OFFLINE: com.couchbase.lite.replicator.ReplicationState;
					public static STOPPING: com.couchbase.lite.replicator.ReplicationState;
					public static STOPPED: com.couchbase.lite.replicator.ReplicationState;
					public static values(): native.Array<com.couchbase.lite.replicator.ReplicationState>;
					public static valueOf(param0: string): com.couchbase.lite.replicator.ReplicationState;
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.replicator.ReplicationState.d.ts" />
/// <reference path="./com.couchbase.lite.replicator.ReplicationTrigger.d.ts" />
/// <reference path="./com.github.oxo42.stateless4j.transitions.Transition.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module replicator {
				export class ReplicationStateTransition {
					public getTrigger(): com.couchbase.lite.replicator.ReplicationTrigger;
					public getSource(): com.couchbase.lite.replicator.ReplicationState;
					public constructor(param0: com.couchbase.lite.replicator.ReplicationState, param1: com.couchbase.lite.replicator.ReplicationState, param2: com.couchbase.lite.replicator.ReplicationTrigger);
					public equals(param0: javalangObject): boolean;
					public constructor(param0: com.github.oxo42.stateless4j.transitions.Transition);
					public getDestination(): com.couchbase.lite.replicator.ReplicationState;
					public hashCode(): number;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module replicator {
				export class ReplicationTrigger {
					public static START: com.couchbase.lite.replicator.ReplicationTrigger;
					public static WAITING_FOR_CHANGES: com.couchbase.lite.replicator.ReplicationTrigger;
					public static RESUME: com.couchbase.lite.replicator.ReplicationTrigger;
					public static GO_OFFLINE: com.couchbase.lite.replicator.ReplicationTrigger;
					public static GO_ONLINE: com.couchbase.lite.replicator.ReplicationTrigger;
					public static STOP_GRACEFUL: com.couchbase.lite.replicator.ReplicationTrigger;
					public static STOP_IMMEDIATE: com.couchbase.lite.replicator.ReplicationTrigger;
					public static values(): native.Array<com.couchbase.lite.replicator.ReplicationTrigger>;
					public static valueOf(param0: string): com.couchbase.lite.replicator.ReplicationTrigger;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module replicator {
				export class RequestUtils {
					public static TAG: string;
					public constructor();
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.router.BufferOutputStream.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module router {
				export class BufferInputStream {
					public constructor(param0: com.couchbase.lite.router.BufferOutputStream);
					public read(): number;
					public read(param0: native.Array<number>, param1: number, param2: number): number;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module router {
				export class BufferOutputStream {
					public constructor();
					public close(): void;
					public write(param0: number): void;
					public isClosed(): boolean;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Byte.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module router {
				export class ByteBuffer {
					public pop(): javalangByte;
					public isEmpty(): boolean;
					public constructor();
					public push(param0: number): void;
					public pop(param0: native.Array<number>, param1: number, param2: number): number;
					public push(param0: native.Array<number>): void;
					public push(param0: native.Array<number>, param1: number, param2: number): void;
					public pop(param0: native.Array<number>): number;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module router {
				export class Header {
					public constructor();
					public get(param0: number): string;
					public constructor(param0: javautilMap);
					public getFieldMap(): javautilMap;
					public add(param0: string, param1: string): void;
					public removeAll(param0: string): void;
					public set(param0: string, param1: string): void;
					public addIfAbsent(param0: string, param1: string): void;
					public addAll(param0: string, param1: javautilList): void;
					public getKey(param0: number): string;
					public get(param0: string): string;
					public length(): number;
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.Database.d.ts" />
/// <reference path="./com.couchbase.lite.Manager.d.ts" />
/// <reference path="./com.couchbase.lite.Status.d.ts" />
/// <reference path="./com.couchbase.lite.router.RouterCallbackBlock.d.ts" />
/// <reference path="./com.couchbase.lite.router.URLConnection.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module router {
				export class Router {
					public static TAG: string;
					public constructor(param0: com.couchbase.lite.Manager, param1: com.couchbase.lite.router.URLConnection);
					public do_GET_uuids(param0: com.couchbase.lite.Database, param1: string, param2: string): com.couchbase.lite.Status;
					public do_GET_Attachment(param0: com.couchbase.lite.Database, param1: string, param2: string): com.couchbase.lite.Status;
					public do_GET_DesignDocument(param0: com.couchbase.lite.Database, param1: string, param2: string): com.couchbase.lite.Status;
					public finalize(): void;
					public do_POST_Document_bulk_docs(param0: com.couchbase.lite.Database, param1: string, param2: string): com.couchbase.lite.Status;
					public start(): void;
					public do_GET_active_tasks(param0: com.couchbase.lite.Database, param1: string, param2: string): com.couchbase.lite.Status;
					public do_POST_Document_all_docs(param0: com.couchbase.lite.Database, param1: string, param2: string): com.couchbase.lite.Status;
					public do_POST_facebook_token(param0: com.couchbase.lite.Database, param1: string, param2: string): com.couchbase.lite.Status;
					public do_POST_Document_compact(param0: com.couchbase.lite.Database, param1: string, param2: string): com.couchbase.lite.Status;
					public do_GETRoot(param0: com.couchbase.lite.Database, param1: string, param2: string): com.couchbase.lite.Status;
					public do_POST_Document_revs_diff(param0: com.couchbase.lite.Database, param1: string, param2: string): com.couchbase.lite.Status;
					public toString(): string;
					public do_GET_Document_changes(param0: com.couchbase.lite.Database, param1: string, param2: string): com.couchbase.lite.Status;
					public do_UNKNOWN(param0: com.couchbase.lite.Database, param1: string, param2: string): com.couchbase.lite.Status;
					public databaseClosing(): void;
					public do_PUT_Database(param0: com.couchbase.lite.Database, param1: string, param2: string): com.couchbase.lite.Status;
					public do_GET_all_dbs(param0: com.couchbase.lite.Database, param1: string, param2: string): com.couchbase.lite.Status;
					public do_GET_Database(param0: com.couchbase.lite.Database, param1: string, param2: string): com.couchbase.lite.Status;
					public do_GET_Document_all_docs(param0: com.couchbase.lite.Database, param1: string, param2: string): com.couchbase.lite.Status;
					public static getVersionString(): string;
					public do_DELETE_Database(param0: com.couchbase.lite.Database, param1: string, param2: string): com.couchbase.lite.Status;
					public do_POST_DesignDocument(param0: com.couchbase.lite.Database, param1: string, param2: string): com.couchbase.lite.Status;
					public do_PUT_Document(param0: com.couchbase.lite.Database, param1: string, param2: string): com.couchbase.lite.Status;
					public do_PUT_Attachment(param0: com.couchbase.lite.Database, param1: string, param2: string): com.couchbase.lite.Status;
					public do_POST_Document_changes(param0: com.couchbase.lite.Database, param1: string, param2: string): com.couchbase.lite.Status;
					public do_POST_Document_ensure_full_commit(param0: com.couchbase.lite.Database, param1: string, param2: string): com.couchbase.lite.Status;
					public do_DELETE_Attachment(param0: com.couchbase.lite.Database, param1: string, param2: string): com.couchbase.lite.Status;
					public changed(param0: com.couchbase.lite.Database.ChangeEvent): void;
					public do_METHOD_NOT_ALLOWED(param0: com.couchbase.lite.Database, param1: string, param2: string): com.couchbase.lite.Status;
					public do_POST_persona_assertion(param0: com.couchbase.lite.Database, param1: string, param2: string): com.couchbase.lite.Status;
					public do_GET_session(param0: com.couchbase.lite.Database, param1: string, param2: string): com.couchbase.lite.Status;
					public do_POST_Database(param0: com.couchbase.lite.Database, param1: string, param2: string): com.couchbase.lite.Status;
					public setSource(param0: javanetURL): void;
					public stop(): void;
					public setCallbackBlock(param0: com.couchbase.lite.router.RouterCallbackBlock): void;
					public do_POST_Document_purge(param0: com.couchbase.lite.Database, param1: string, param2: string): com.couchbase.lite.Status;
					public do_DELETE_Document(param0: com.couchbase.lite.Database, param1: string, param2: string): com.couchbase.lite.Status;
					public do_POST_replicate(param0: com.couchbase.lite.Database, param1: string, param2: string): com.couchbase.lite.Status;
					public do_GET_Document(param0: com.couchbase.lite.Database, param1: string, param2: string): com.couchbase.lite.Status;
				}
				export module Router {
					export class TDContentOptions {
						public static TDIncludeAttachments: com.couchbase.lite.router.Router.TDContentOptions;
						public static TDIncludeConflicts: com.couchbase.lite.router.Router.TDContentOptions;
						public static TDIncludeRevs: com.couchbase.lite.router.Router.TDContentOptions;
						public static TDIncludeRevsInfo: com.couchbase.lite.router.Router.TDContentOptions;
						public static TDIncludeLocalSeq: com.couchbase.lite.router.Router.TDContentOptions;
						public static TDNoBody: com.couchbase.lite.router.Router.TDContentOptions;
						public static TDBigAttachmentsFollow: com.couchbase.lite.router.Router.TDContentOptions;
						public static TDNoAttachments: com.couchbase.lite.router.Router.TDContentOptions;
						public static values(): native.Array<com.couchbase.lite.router.Router.TDContentOptions>;
						public static valueOf(param0: string): com.couchbase.lite.router.Router.TDContentOptions;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module router {
				export class RouterCallbackBlock {
					/**
					 * Constructs a new instance of the com.couchbase.lite.router.RouterCallbackBlock interface with the provided implementation.
					 */
					public constructor(implementation: {
						onResponseReady(): void;
					});
					public onResponseReady(): void;
				}
			}
		}
	}
}

import javaioOutputStream = java.io.OutputStream;
/// <reference path="./com.couchbase.lite.internal.Body.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module router {
				export class URLConnection {
					public getHeaderFields(): javautilMap;
					public getHeaderFieldKey(param0: number): string;
					public getResponseBody(): com.couchbase.lite.internal.Body;
					public setResponseInputStream(param0: javaioInputStream): void;
					public getHeaderField(param0: number): string;
					public getResponseCode(): number;
					public constructor(param0: javanetURL);
					public getInputStream(): javaioInputStream;
					public getResponseInputStream(): javaioInputStream;
					public setRequestInputStream(param0: javaioInputStream): void;
					public getRequestProperty(param0: string): string;
					public getRequestProperties(): javautilMap;
					public setRequestProperty(param0: string, param1: string): void;
					public getOutputStream(): javaioOutputStream;
					public getResponseOutputStream(): javaioOutputStream;
					public getRequestInputStream(): javaioInputStream;
					public connect(): void;
					public isChunked(): boolean;
					public setResponseOutputStream(param0: javaioOutputStream): void;
					public disconnect(): void;
					public usingProxy(): boolean;
					public getHeaderField(param0: string): string;
					public setChunked(param0: boolean): void;
				}
			}
		}
	}
}

import javanetURLConnection = java.net.URLConnection;
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.net.URLConnection.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module router {
				export class URLHandler {
					public constructor();
					public openConnection(param0: javanetURL): javanetURLConnection;
				}
			}
		}
	}
}

import javanetURLStreamHandler = java.net.URLStreamHandler;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URLStreamHandler.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module router {
				export class URLStreamHandlerFactory {
					public static SCHEME: string;
					public createURLStreamHandler(param0: string): javanetURLStreamHandler;
					public constructor();
					public static registerSelfIgnoreError(): void;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module storage {
				export class Cursor {
					/**
					 * Constructs a new instance of the com.couchbase.lite.storage.Cursor interface with the provided implementation.
					 */
					public constructor(implementation: {
						moveToNext(): boolean;
						isAfterLast(): boolean;
						getString(param0: number): string;
						getInt(param0: number): number;
						getLong(param0: number): number;
						getBlob(param0: number): native.Array<number>;
						close(): void;
						isNull(param0: number): boolean;
					});
					public getLong(param0: number): number;
					public getBlob(param0: number): native.Array<number>;
					public getInt(param0: number): number;
					public isNull(param0: number): boolean;
					public close(): void;
					public moveToNext(): boolean;
					public getString(param0: number): string;
					public isAfterLast(): boolean;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module storage {
				export class SQLException {
					public static SQLITE_OK: number;
					public static SQLITE_ERROR: number;
					public static SQLITE_CONSTRAINT: number;
					public static SQLITE_ENCRYPTION_UNAUTHORIZED: number;
					public static SQLITE_ENCRYPTION_NOTAVAILABLE: number;
					public constructor(param0: string, param1: javalangThrowable);
					public constructor(param0: number, param1: javalangThrowable);
					public constructor(param0: string);
					public constructor();
					public constructor(param0: javalangThrowable);
					public constructor(param0: number, param1: string);
					public getCode(): number;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module storage {
				export class SQLiteJsonCollator {
					public static testDigitToInt(param0: number): number;
					public static testCollate(param0: number, param1: string, param2: string): number;
					public constructor();
					public static compareStringsUnicode(param0: string, param1: string): number;
					public static testCollate(param0: number, param1: string, param2: string, param3: string): number;
					public static register(param0: number, param1: string, param2: string): void;
					public static testEscape(param0: string): string;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module storage {
				export class SQLiteNativeLibrary {
					public static JNI_SQLITE_CUSTOM_LIBRARY: string;
					public static JNI_SQLCIPHER_LIBRARY: string;
					public static NATIVE_LIBRARY_OPTIONS: native.Array<string>;
					public static TEST_NATIVE_LIBRARY_NAME: string;
					public static load(): void;
					public constructor();
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module storage {
				export class SQLiteRevCollator {
					public constructor();
					public static testCollate(param0: string, param1: string): number;
					public static register(param0: number): void;
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.internal.database.ContentValues.d.ts" />
/// <reference path="./com.couchbase.lite.storage.Cursor.d.ts" />
/// <reference path="./com.couchbase.lite.support.security.SymmetricKey.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module storage {
				export class SQLiteStorageEngine {
					/**
					 * Constructs a new instance of the com.couchbase.lite.storage.SQLiteStorageEngine interface with the provided implementation.
					 */
					public constructor(implementation: {
						open(param0: string, param1: com.couchbase.lite.support.security.SymmetricKey): boolean;
						getVersion(): number;
						setVersion(param0: number): void;
						isOpen(): boolean;
						beginTransaction(): void;
						endTransaction(): void;
						setTransactionSuccessful(): void;
						execSQL(param0: string): void;
						execSQL(param0: string, param1: native.Array<javalangObject>): void;
						rawQuery(param0: string, param1: native.Array<string>): com.couchbase.lite.storage.Cursor;
						insert(param0: string, param1: string, param2: com.couchbase.lite.internal.database.ContentValues): number;
						insertOrThrow(param0: string, param1: string, param2: com.couchbase.lite.internal.database.ContentValues): number;
						insertWithOnConflict(param0: string, param1: string, param2: com.couchbase.lite.internal.database.ContentValues, param3: number): number;
						update(param0: string, param1: com.couchbase.lite.internal.database.ContentValues, param2: string, param3: native.Array<string>): number;
						delete(param0: string, param1: string, param2: native.Array<string>): number;
						close(): void;
						supportEncryption(): boolean;
						derivePBKDF2SHA256Key(param0: string, param1: native.Array<number>, param2: number): native.Array<number>;
					});
					public static CONFLICT_NONE: number;
					public static CONFLICT_IGNORE: number;
					public static CONFLICT_REPLACE: number;
					public insertOrThrow(param0: string, param1: string, param2: com.couchbase.lite.internal.database.ContentValues): number;
					public getVersion(): number;
					public beginTransaction(): void;
					public supportEncryption(): boolean;
					public execSQL(param0: string): void;
					public insertWithOnConflict(param0: string, param1: string, param2: com.couchbase.lite.internal.database.ContentValues, param3: number): number;
					public open(param0: string, param1: com.couchbase.lite.support.security.SymmetricKey): boolean;
					public delete(param0: string, param1: string, param2: native.Array<string>): number;
					public endTransaction(): void;
					public isOpen(): boolean;
					public rawQuery(param0: string, param1: native.Array<string>): com.couchbase.lite.storage.Cursor;
					public setVersion(param0: number): void;
					public close(): void;
					public insert(param0: string, param1: string, param2: com.couchbase.lite.internal.database.ContentValues): number;
					public execSQL(param0: string, param1: native.Array<javalangObject>): void;
					public derivePBKDF2SHA256Key(param0: string, param1: native.Array<number>, param2: number): native.Array<number>;
					public setTransactionSuccessful(): void;
					public update(param0: string, param1: com.couchbase.lite.internal.database.ContentValues, param2: string, param3: native.Array<string>): number;
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.internal.database.ContentValues.d.ts" />
/// <reference path="./com.couchbase.lite.internal.database.DatabasePlatformSupport.d.ts" />
/// <reference path="./com.couchbase.lite.internal.database.cursor.Cursor.d.ts" />
/// <reference path="./com.couchbase.lite.internal.database.sqlite.SQLiteConnection.d.ts" />
/// <reference path="./com.couchbase.lite.storage.Cursor.d.ts" />
/// <reference path="./com.couchbase.lite.storage.SQLiteStorageEngineBase.d.ts" />
/// <reference path="./com.couchbase.lite.support.security.SymmetricKey.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module storage {
				export abstract class SQLiteStorageEngineBase {
					public insertOrThrow(param0: string, param1: string, param2: com.couchbase.lite.internal.database.ContentValues): number;
					public getVersion(): number;
					public beginTransaction(): void;
					public supportEncryption(): boolean;
					public execSQL(param0: string): void;
					public insertWithOnConflict(param0: string, param1: string, param2: com.couchbase.lite.internal.database.ContentValues, param3: number): number;
					public getDatabasePlatformSupport(): com.couchbase.lite.internal.database.DatabasePlatformSupport;
					public getICUDatabasePath(): string;
					public open(param0: string, param1: com.couchbase.lite.support.security.SymmetricKey): boolean;
					public delete(param0: string, param1: string, param2: native.Array<string>): number;
					public endTransaction(): void;
					public toString(): string;
					public isOpen(): boolean;
					public rawQuery(param0: string, param1: native.Array<string>): com.couchbase.lite.storage.Cursor;
					public constructor();
					public getWALConnectionPoolSize(): number;
					public setVersion(param0: number): void;
					public close(): void;
					public insert(param0: string, param1: string, param2: com.couchbase.lite.internal.database.ContentValues): number;
					public execSQL(param0: string, param1: native.Array<javalangObject>): void;
					public derivePBKDF2SHA256Key(param0: string, param1: native.Array<number>, param2: number): native.Array<number>;
					public setTransactionSuccessful(): void;
					public update(param0: string, param1: com.couchbase.lite.internal.database.ContentValues, param2: string, param3: native.Array<string>): number;
				}
				export module SQLiteStorageEngineBase {
					export class ConnectionListener {
						public onOpen(param0: com.couchbase.lite.internal.database.sqlite.SQLiteConnection): void;
						public onClose(param0: com.couchbase.lite.internal.database.sqlite.SQLiteConnection): void;
					}
					export class SQLiteCursor {
						public constructor(param0: com.couchbase.lite.storage.SQLiteStorageEngineBase, param1: com.couchbase.lite.internal.database.cursor.Cursor);
						public getLong(param0: number): number;
						public getBlob(param0: number): native.Array<number>;
						public getString(param0: number): string;
						public close(): void;
						public getInt(param0: number): number;
						public isAfterLast(): boolean;
						public isNull(param0: number): boolean;
						public moveToNext(): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.storage.SQLiteStorageEngine.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module storage {
				export class SQLiteStorageEngineFactory {
					/**
					 * Constructs a new instance of the com.couchbase.lite.storage.SQLiteStorageEngineFactory interface with the provided implementation.
					 */
					public constructor(implementation: {
						createStorageEngine(): com.couchbase.lite.storage.SQLiteStorageEngine;
					});
					public createStorageEngine(): com.couchbase.lite.storage.SQLiteStorageEngine;
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.support.action.Action.d.ts" />
/// <reference path="./com.couchbase.lite.support.security.SymmetricKey.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module store {
				export class EncryptableStore {
					/**
					 * Constructs a new instance of the com.couchbase.lite.store.EncryptableStore interface with the provided implementation.
					 */
					public constructor(implementation: {
						setEncryptionKey(param0: com.couchbase.lite.support.security.SymmetricKey): void;
						getEncryptionKey(): com.couchbase.lite.support.security.SymmetricKey;
						actionToChangeEncryptionKey(param0: com.couchbase.lite.support.security.SymmetricKey): com.couchbase.lite.support.action.Action;
						derivePBKDF2SHA256Key(param0: string, param1: native.Array<number>, param2: number): native.Array<number>;
					});
					public actionToChangeEncryptionKey(param0: com.couchbase.lite.support.security.SymmetricKey): com.couchbase.lite.support.action.Action;
					public setEncryptionKey(param0: com.couchbase.lite.support.security.SymmetricKey): void;
					public derivePBKDF2SHA256Key(param0: string, param1: native.Array<number>, param2: number): native.Array<number>;
					public getEncryptionKey(): com.couchbase.lite.support.security.SymmetricKey;
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.Status.d.ts" />
/// <reference path="./com.couchbase.lite.storage.Cursor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module store {
				export class QueryRowBlock {
					/**
					 * Constructs a new instance of the com.couchbase.lite.store.QueryRowBlock interface with the provided implementation.
					 */
					public constructor(implementation: {
						onRow(param0: native.Array<number>, param1: native.Array<number>, param2: string, param3: com.couchbase.lite.storage.Cursor): com.couchbase.lite.Status;
					});
					public onRow(param0: native.Array<number>, param1: native.Array<number>, param2: string, param3: com.couchbase.lite.storage.Cursor): com.couchbase.lite.Status;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module store {
				export class QueryRowStore {
					/**
					 * Constructs a new instance of the com.couchbase.lite.store.QueryRowStore interface with the provided implementation.
					 */
					public constructor(implementation: {
						rowValueIsEntireDoc(param0: native.Array<number>): boolean;
						parseRowValue(param0: native.Array<number>): javalangObject;
						getDocumentProperties(param0: string, param1: number): javautilMap;
					});
					public parseRowValue(param0: native.Array<number>): javalangObject;
					public rowValueIsEntireDoc(param0: native.Array<number>): boolean;
					public getDocumentProperties(param0: string, param1: number): javautilMap;
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.internal.RevisionInternal.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module store {
				export class RevisionFilter {
					/**
					 * Constructs a new instance of the com.couchbase.lite.store.RevisionFilter interface with the provided implementation.
					 */
					public constructor(implementation: {
						filter(param0: com.couchbase.lite.internal.RevisionInternal): boolean;
					});
					public filter(param0: com.couchbase.lite.internal.RevisionInternal): boolean;
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.ChangesOptions.d.ts" />
/// <reference path="./com.couchbase.lite.Manager.d.ts" />
/// <reference path="./com.couchbase.lite.QueryOptions.d.ts" />
/// <reference path="./com.couchbase.lite.ReplicationFilter.d.ts" />
/// <reference path="./com.couchbase.lite.RevisionList.d.ts" />
/// <reference path="./com.couchbase.lite.Status.d.ts" />
/// <reference path="./com.couchbase.lite.TransactionalTask.d.ts" />
/// <reference path="./com.couchbase.lite.internal.RevisionInternal.d.ts" />
/// <reference path="./com.couchbase.lite.storage.SQLiteStorageEngine.d.ts" />
/// <reference path="./com.couchbase.lite.store.StorageValidation.d.ts" />
/// <reference path="./com.couchbase.lite.store.StoreDelegate.d.ts" />
/// <reference path="./com.couchbase.lite.store.ViewStore.d.ts" />
/// <reference path="./com.couchbase.lite.support.action.Action.d.ts" />
/// <reference path="./com.couchbase.lite.support.security.SymmetricKey.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
/// <reference path="./java.util.concurrent.atomic.AtomicBoolean.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module store {
				export class SQLiteStore {
					public TAG: string;
					public static kDBFilename: string;
					public static SCHEMA: string;
					public documentPropertiesFromJSON(param0: native.Array<number>, param1: string, param2: string, param3: boolean, param4: number): javautilMap;
					public setExpirationOfDocument(param0: number, param1: string): boolean;
					public pruneRevsToMaxDepth(param0: number): number;
					public endTransaction(param0: boolean): boolean;
					public findAllAttachmentKeys(): javautilSet;
					public getAutoCompact(): boolean;
					public close(): void;
					public findMissingRevisions(param0: com.couchbase.lite.RevisionList): number;
					public derivePBKDF2SHA256Key(param0: string, param1: native.Array<number>, param2: number): native.Array<number>;
					public compact(): void;
					public getLocalDocument(param0: string, param1: string): com.couchbase.lite.internal.RevisionInternal;
					public getRevisionHistory(param0: com.couchbase.lite.internal.RevisionInternal): javautilList;
					public forceInsert(param0: com.couchbase.lite.internal.RevisionInternal, param1: javautilList, param2: com.couchbase.lite.store.StorageValidation, param3: javanetURL): void;
					public actionToChangeEncryptionKey(param0: com.couchbase.lite.support.security.SymmetricKey): com.couchbase.lite.support.action.Action;
					public getParentRevision(param0: com.couchbase.lite.internal.RevisionInternal): com.couchbase.lite.internal.RevisionInternal;
					public getAllViewNames(): javautilList;
					public constructor(param0: string, param1: com.couchbase.lite.Manager, param2: com.couchbase.lite.store.StoreDelegate);
					public expirationOfDocument(param0: string): number;
					public optimizeSQLIndexes(): void;
					public getDelegate(): com.couchbase.lite.store.StoreDelegate;
					public getEncryptionKey(): com.couchbase.lite.support.security.SymmetricKey;
					public getLastSequence(): number;
					public databaseExists(param0: string): boolean;
					public setDelegate(param0: com.couchbase.lite.store.StoreDelegate): void;
					public purgeExpiredDocuments(): number;
					public setEncryptionKey(param0: com.couchbase.lite.support.security.SymmetricKey): void;
					public getInfo(param0: string): string;
					public purgeRevisions(param0: javautilMap): javautilMap;
					public getPossibleAncestorRevisionIDs(param0: com.couchbase.lite.internal.RevisionInternal, param1: number, param2: javautilconcurrentatomicAtomicBoolean): javautilList;
					public runInTransaction(param0: com.couchbase.lite.TransactionalTask): boolean;
					public getViewStorage(param0: string, param1: boolean): com.couchbase.lite.store.ViewStore;
					public getAllDocs(param0: com.couchbase.lite.QueryOptions): javautilMap;
					public winningRevIDOfDocNumericID(param0: number, param1: javautilconcurrentatomicAtomicBoolean, param2: javautilconcurrentatomicAtomicBoolean): string;
					public changesSince(param0: number, param1: com.couchbase.lite.ChangesOptions, param2: com.couchbase.lite.ReplicationFilter, param3: javautilMap): com.couchbase.lite.RevisionList;
					public getAllRevisions(param0: string, param1: boolean): com.couchbase.lite.RevisionList;
					public inTransaction(): boolean;
					public beginTransaction(): boolean;
					public getDocument(param0: string, param1: string, param2: boolean): com.couchbase.lite.internal.RevisionInternal;
					public setAutoCompact(param0: boolean): void;
					public static revision(param0: string, param1: string, param2: boolean, param3: number, param4: javautilMap): com.couchbase.lite.internal.RevisionInternal;
					public static revision(param0: string, param1: string, param2: boolean, param3: number, param4: native.Array<number>): com.couchbase.lite.internal.RevisionInternal;
					public open(): void;
					public setInfo(param0: string, param1: string): number;
					public add(param0: string, param1: string, param2: javautilMap, param3: boolean, param4: boolean, param5: com.couchbase.lite.store.StorageValidation, param6: com.couchbase.lite.Status): com.couchbase.lite.internal.RevisionInternal;
					public pruneDocument(param0: string, param1: number, param2: number): number;
					public getDocument(param0: string, param1: number): com.couchbase.lite.internal.RevisionInternal;
					public getMaxRevTreeDepth(): number;
					public setMaxRevTreeDepth(param0: number): void;
					public putLocalRevisionNoMVCC(param0: com.couchbase.lite.internal.RevisionInternal): com.couchbase.lite.internal.RevisionInternal;
					public putLocalRevision(param0: com.couchbase.lite.internal.RevisionInternal, param1: string, param2: boolean): com.couchbase.lite.internal.RevisionInternal;
					public findCommonAncestorOf(param0: com.couchbase.lite.internal.RevisionInternal, param1: javautilList): string;
					public getDocNumericID(param0: string): number;
					public nextDocumentExpiry(): number;
					public runStatements(param0: string): void;
					public getDocumentCount(): number;
					public loadRevisionBody(param0: com.couchbase.lite.internal.RevisionInternal): com.couchbase.lite.internal.RevisionInternal;
					public getStorageEngine(): com.couchbase.lite.storage.SQLiteStorageEngine;
				}
				export module SQLiteStore {
					export class TransactionLevel {
						public initialValue(): javalangInteger;
					}
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.QueryOptions.d.ts" />
/// <reference path="./com.couchbase.lite.Status.d.ts" />
/// <reference path="./com.couchbase.lite.store.SQLiteStore.d.ts" />
/// <reference path="./com.couchbase.lite.store.ViewStoreDelegate.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module store {
				export class SQLiteViewStore {
					public static TAG: string;
					public deleteView(): void;
					public rowValueIsEntireDoc(param0: native.Array<number>): boolean;
					public setVersion(param0: string): boolean;
					public dump(): javautilList;
					public setCollation(param0: com.couchbase.lite.View.TDViewCollation): void;
					public regularQuery(param0: com.couchbase.lite.QueryOptions): javautilList;
					public reducedQuery(param0: com.couchbase.lite.QueryOptions): javautilList;
					public getDocumentProperties(param0: string, param1: number): javautilMap;
					public parseRowValue(param0: native.Array<number>): javalangObject;
					public static groupKey(param0: javalangObject, param1: number): javalangObject;
					public constructor(param0: com.couchbase.lite.store.SQLiteStore, param1: string, param2: boolean);
					public deleteIndex(): void;
					public getName(): string;
					public close(): void;
					public getTotalRows(): number;
					public getLastSequenceIndexed(): number;
					public getDelegate(): com.couchbase.lite.store.ViewStoreDelegate;
					public emit(param0: javalangObject, param1: javalangObject, param2: number): void;
					public updateIndexes(param0: javautilList): com.couchbase.lite.Status;
					public setDelegate(param0: com.couchbase.lite.store.ViewStoreDelegate): void;
					public getLastSequenceChangedAt(): number;
				}
				export module SQLiteViewStore {
					export abstract class AbstractMapEmitBlock {
						public sequence: number;
						public emit(param0: javalangObject, param1: javalangObject): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.Status.d.ts" />
/// <reference path="./com.couchbase.lite.internal.RevisionInternal.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module store {
				export class StorageValidation {
					/**
					 * Constructs a new instance of the com.couchbase.lite.store.StorageValidation interface with the provided implementation.
					 */
					public constructor(implementation: {
						validate(param0: com.couchbase.lite.internal.RevisionInternal, param1: com.couchbase.lite.internal.RevisionInternal, param2: string): com.couchbase.lite.Status;
					});
					public validate(param0: com.couchbase.lite.internal.RevisionInternal, param1: com.couchbase.lite.internal.RevisionInternal, param2: string): com.couchbase.lite.Status;
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.ChangesOptions.d.ts" />
/// <reference path="./com.couchbase.lite.QueryOptions.d.ts" />
/// <reference path="./com.couchbase.lite.ReplicationFilter.d.ts" />
/// <reference path="./com.couchbase.lite.RevisionList.d.ts" />
/// <reference path="./com.couchbase.lite.Status.d.ts" />
/// <reference path="./com.couchbase.lite.TransactionalTask.d.ts" />
/// <reference path="./com.couchbase.lite.internal.RevisionInternal.d.ts" />
/// <reference path="./com.couchbase.lite.store.StorageValidation.d.ts" />
/// <reference path="./com.couchbase.lite.store.StoreDelegate.d.ts" />
/// <reference path="./com.couchbase.lite.store.ViewStore.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
/// <reference path="./java.util.concurrent.atomic.AtomicBoolean.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module store {
				export class Store {
					/**
					 * Constructs a new instance of the com.couchbase.lite.store.Store interface with the provided implementation.
					 */
					public constructor(implementation: {
						databaseExists(param0: string): boolean;
						open(): void;
						close(): void;
						setDelegate(param0: com.couchbase.lite.store.StoreDelegate): void;
						getDelegate(): com.couchbase.lite.store.StoreDelegate;
						setMaxRevTreeDepth(param0: number): void;
						getMaxRevTreeDepth(): number;
						setAutoCompact(param0: boolean): void;
						getAutoCompact(): boolean;
						setInfo(param0: string, param1: string): number;
						getInfo(param0: string): string;
						getDocumentCount(): number;
						getLastSequence(): number;
						inTransaction(): boolean;
						compact(): void;
						runInTransaction(param0: com.couchbase.lite.TransactionalTask): boolean;
						getDocument(param0: string, param1: string, param2: boolean): com.couchbase.lite.internal.RevisionInternal;
						loadRevisionBody(param0: com.couchbase.lite.internal.RevisionInternal): com.couchbase.lite.internal.RevisionInternal;
						getParentRevision(param0: com.couchbase.lite.internal.RevisionInternal): com.couchbase.lite.internal.RevisionInternal;
						getRevisionHistory(param0: com.couchbase.lite.internal.RevisionInternal): javautilList;
						getAllRevisions(param0: string, param1: boolean): com.couchbase.lite.RevisionList;
						getPossibleAncestorRevisionIDs(param0: com.couchbase.lite.internal.RevisionInternal, param1: number, param2: javautilconcurrentatomicAtomicBoolean): javautilList;
						findCommonAncestorOf(param0: com.couchbase.lite.internal.RevisionInternal, param1: javautilList): string;
						findMissingRevisions(param0: com.couchbase.lite.RevisionList): number;
						findAllAttachmentKeys(): javautilSet;
						getAllDocs(param0: com.couchbase.lite.QueryOptions): javautilMap;
						changesSince(param0: number, param1: com.couchbase.lite.ChangesOptions, param2: com.couchbase.lite.ReplicationFilter, param3: javautilMap): com.couchbase.lite.RevisionList;
						add(param0: string, param1: string, param2: javautilMap, param3: boolean, param4: boolean, param5: com.couchbase.lite.store.StorageValidation, param6: com.couchbase.lite.Status): com.couchbase.lite.internal.RevisionInternal;
						forceInsert(param0: com.couchbase.lite.internal.RevisionInternal, param1: javautilList, param2: com.couchbase.lite.store.StorageValidation, param3: javanetURL): void;
						purgeRevisions(param0: javautilMap): javautilMap;
						expirationOfDocument(param0: string): number;
						setExpirationOfDocument(param0: number, param1: string): boolean;
						nextDocumentExpiry(): number;
						purgeExpiredDocuments(): number;
						getViewStorage(param0: string, param1: boolean): com.couchbase.lite.store.ViewStore;
						getAllViewNames(): javautilList;
						getLocalDocument(param0: string, param1: string): com.couchbase.lite.internal.RevisionInternal;
						putLocalRevision(param0: com.couchbase.lite.internal.RevisionInternal, param1: string, param2: boolean): com.couchbase.lite.internal.RevisionInternal;
					});
					public runInTransaction(param0: com.couchbase.lite.TransactionalTask): boolean;
					public getViewStorage(param0: string, param1: boolean): com.couchbase.lite.store.ViewStore;
					public getAllDocs(param0: com.couchbase.lite.QueryOptions): javautilMap;
					public changesSince(param0: number, param1: com.couchbase.lite.ChangesOptions, param2: com.couchbase.lite.ReplicationFilter, param3: javautilMap): com.couchbase.lite.RevisionList;
					public getAllRevisions(param0: string, param1: boolean): com.couchbase.lite.RevisionList;
					public inTransaction(): boolean;
					public setExpirationOfDocument(param0: number, param1: string): boolean;
					public getDocument(param0: string, param1: string, param2: boolean): com.couchbase.lite.internal.RevisionInternal;
					public setAutoCompact(param0: boolean): void;
					public findAllAttachmentKeys(): javautilSet;
					public getAutoCompact(): boolean;
					public close(): void;
					public findMissingRevisions(param0: com.couchbase.lite.RevisionList): number;
					public open(): void;
					public setInfo(param0: string, param1: string): number;
					public add(param0: string, param1: string, param2: javautilMap, param3: boolean, param4: boolean, param5: com.couchbase.lite.store.StorageValidation, param6: com.couchbase.lite.Status): com.couchbase.lite.internal.RevisionInternal;
					public compact(): void;
					public getLocalDocument(param0: string, param1: string): com.couchbase.lite.internal.RevisionInternal;
					public getRevisionHistory(param0: com.couchbase.lite.internal.RevisionInternal): javautilList;
					public forceInsert(param0: com.couchbase.lite.internal.RevisionInternal, param1: javautilList, param2: com.couchbase.lite.store.StorageValidation, param3: javanetURL): void;
					public getMaxRevTreeDepth(): number;
					public getParentRevision(param0: com.couchbase.lite.internal.RevisionInternal): com.couchbase.lite.internal.RevisionInternal;
					public getAllViewNames(): javautilList;
					public setMaxRevTreeDepth(param0: number): void;
					public expirationOfDocument(param0: string): number;
					public getDelegate(): com.couchbase.lite.store.StoreDelegate;
					public putLocalRevision(param0: com.couchbase.lite.internal.RevisionInternal, param1: string, param2: boolean): com.couchbase.lite.internal.RevisionInternal;
					public getLastSequence(): number;
					public databaseExists(param0: string): boolean;
					public setDelegate(param0: com.couchbase.lite.store.StoreDelegate): void;
					public purgeExpiredDocuments(): number;
					public getInfo(param0: string): string;
					public findCommonAncestorOf(param0: com.couchbase.lite.internal.RevisionInternal, param1: javautilList): string;
					public nextDocumentExpiry(): number;
					public getDocumentCount(): number;
					public loadRevisionBody(param0: com.couchbase.lite.internal.RevisionInternal): com.couchbase.lite.internal.RevisionInternal;
					public purgeRevisions(param0: javautilMap): javautilMap;
					public getPossibleAncestorRevisionIDs(param0: com.couchbase.lite.internal.RevisionInternal, param1: number, param2: javautilconcurrentatomicAtomicBoolean): javautilList;
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.DocumentChange.d.ts" />
/// <reference path="./com.couchbase.lite.ReplicationFilter.d.ts" />
/// <reference path="./com.couchbase.lite.internal.RevisionInternal.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module store {
				export class StoreDelegate {
					/**
					 * Constructs a new instance of the com.couchbase.lite.store.StoreDelegate interface with the provided implementation.
					 */
					public constructor(implementation: {
						storageExitedTransaction(param0: boolean): void;
						databaseStorageChanged(param0: com.couchbase.lite.DocumentChange): void;
						generateRevID(param0: native.Array<number>, param1: boolean, param2: string): string;
						runFilter(param0: com.couchbase.lite.ReplicationFilter, param1: javautilMap, param2: com.couchbase.lite.internal.RevisionInternal): boolean;
					});
					public storageExitedTransaction(param0: boolean): void;
					public generateRevID(param0: native.Array<number>, param1: boolean, param2: string): string;
					public databaseStorageChanged(param0: com.couchbase.lite.DocumentChange): void;
					public runFilter(param0: com.couchbase.lite.ReplicationFilter, param1: javautilMap, param2: com.couchbase.lite.internal.RevisionInternal): boolean;
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.QueryOptions.d.ts" />
/// <reference path="./com.couchbase.lite.Status.d.ts" />
/// <reference path="./com.couchbase.lite.store.ViewStoreDelegate.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module store {
				export class ViewStore {
					/**
					 * Constructs a new instance of the com.couchbase.lite.store.ViewStore interface with the provided implementation.
					 */
					public constructor(implementation: {
						getName(): string;
						getDelegate(): com.couchbase.lite.store.ViewStoreDelegate;
						setDelegate(param0: com.couchbase.lite.store.ViewStoreDelegate): void;
						close(): void;
						deleteIndex(): void;
						deleteView(): void;
						setVersion(param0: string): boolean;
						getTotalRows(): number;
						getLastSequenceIndexed(): number;
						getLastSequenceChangedAt(): number;
						updateIndexes(param0: javautilList): com.couchbase.lite.Status;
						regularQuery(param0: com.couchbase.lite.QueryOptions): javautilList;
						reducedQuery(param0: com.couchbase.lite.QueryOptions): javautilList;
						dump(): javautilList;
						setCollation(param0: com.couchbase.lite.View.TDViewCollation): void;
					});
					public deleteView(): void;
					public setVersion(param0: string): boolean;
					public dump(): javautilList;
					public regularQuery(param0: com.couchbase.lite.QueryOptions): javautilList;
					public setCollation(param0: com.couchbase.lite.View.TDViewCollation): void;
					public reducedQuery(param0: com.couchbase.lite.QueryOptions): javautilList;
					public deleteIndex(): void;
					public getName(): string;
					public close(): void;
					public getTotalRows(): number;
					public getLastSequenceIndexed(): number;
					public getDelegate(): com.couchbase.lite.store.ViewStoreDelegate;
					public updateIndexes(param0: javautilList): com.couchbase.lite.Status;
					public setDelegate(param0: com.couchbase.lite.store.ViewStoreDelegate): void;
					public getLastSequenceChangedAt(): number;
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.Mapper.d.ts" />
/// <reference path="./com.couchbase.lite.Reducer.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module store {
				export class ViewStoreDelegate {
					/**
					 * Constructs a new instance of the com.couchbase.lite.store.ViewStoreDelegate interface with the provided implementation.
					 */
					public constructor(implementation: {
						getMap(): com.couchbase.lite.Mapper;
						getReduce(): com.couchbase.lite.Reducer;
						getMapVersion(): string;
						getDocumentType(): string;
					});
					public getDocumentType(): string;
					public getReduce(): com.couchbase.lite.Reducer;
					public getMapVersion(): string;
					public getMap(): com.couchbase.lite.Mapper;
				}
			}
		}
	}
}

import javanioByteBuffer = java.nio.ByteBuffer;
import javanioCharBuffer = java.nio.CharBuffer;
import javaioSerializable = java.io.Serializable;
import javalangClassLoader = java.lang.ClassLoader;
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.io.Serializable.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.nio.CharBuffer.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module support {
				export class Base64 {
					public static NO_OPTIONS: number;
					public static ENCODE: number;
					public static DECODE: number;
					public static GZIP: number;
					public static DONT_GUNZIP: number;
					public static DO_BREAK_LINES: number;
					public static URL_SAFE: number;
					public static ORDERED: number;
					public static encodeObject(param0: javaioSerializable, param1: number): string;
					public static encodeBytes(param0: native.Array<number>, param1: number): string;
					public static encodeBytesToBytes(param0: native.Array<number>): native.Array<number>;
					public static decodeFileToFile(param0: string, param1: string): void;
					public static encodeObject(param0: javaioSerializable): string;
					public static decodeToFile(param0: string, param1: string): void;
					public static encodeFromFile(param0: string): string;
					public static encodeToFile(param0: native.Array<number>, param1: string): void;
					public static decodeToObject(param0: string): javalangObject;
					public static decode(param0: native.Array<number>, param1: number, param2: number, param3: number): native.Array<number>;
					public static decodeToObject(param0: string, param1: number, param2: javalangClassLoader): javalangObject;
					public static encodeBytes(param0: native.Array<number>): string;
					public static encodeFileToFile(param0: string, param1: string): void;
					public static decode(param0: native.Array<number>): native.Array<number>;
					public static encodeBytes(param0: native.Array<number>, param1: number, param2: number, param3: number): string;
					public static encodeBytes(param0: native.Array<number>, param1: number, param2: number): string;
					public static decode(param0: string, param1: number): native.Array<number>;
					public static encode(param0: javanioByteBuffer, param1: javanioCharBuffer): void;
					public static encode(param0: javanioByteBuffer, param1: javanioByteBuffer): void;
					public static decode(param0: string): native.Array<number>;
					public static decodeFromFile(param0: string): native.Array<number>;
					public static encodeBytesToBytes(param0: native.Array<number>, param1: number, param2: number, param3: number): native.Array<number>;
				}
				export module Base64 {
					export class InputStream {
						public read(): number;
						public constructor(param0: javaioInputStream);
						public constructor(param0: javaioInputStream, param1: number);
						public read(param0: native.Array<number>, param1: number, param2: number): number;
					}
					export class OutputStream {
						public flushBase64(): void;
						public close(): void;
						public write(param0: number): void;
						public constructor(param0: javaioOutputStream, param1: number);
						public write(param0: native.Array<number>, param1: number, param2: number): void;
						public resumeEncoding(): void;
						public constructor(param0: javaioOutputStream);
						public suspendEncoding(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module support {
				export class BatchProcessor {
					/**
					 * Constructs a new instance of the com.couchbase.lite.support.BatchProcessor interface with the provided implementation.
					 */
					public constructor(implementation: {
						process(param0: javautilList): void;
					});
					public process(param0: javautilList): void;
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.support.BatchProcessor.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.concurrent.ScheduledExecutorService.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module support {
				export class Batcher {
					public getCapacity(): number;
					public queueObjects(param0: javautilList): void;
					public flushAll(param0: boolean): void;
					public waitForPendingFutures(): void;
					public isEmpty(): boolean;
					public getDelay(): number;
					public queueObject(param0: javalangObject): void;
					public clear(): void;
					public count(): number;
					public flushAllAndWait(): void;
					public constructor(param0: javautilconcurrentScheduledExecutorService, param1: number, param2: number, param3: com.couchbase.lite.support.BatchProcessor);
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.concurrent.BlockingQueue.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module support {
				export class BlockingQueueListener {
					/**
					 * Constructs a new instance of the com.couchbase.lite.support.BlockingQueueListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						changed(param0: com.couchbase.lite.support.BlockingQueueListener.EventType, param1: javalangObject, param2: javautilconcurrentBlockingQueue): void;
					});
					public changed(param0: com.couchbase.lite.support.BlockingQueueListener.EventType, param1: javalangObject, param2: javautilconcurrentBlockingQueue): void;
				}
				export module BlockingQueueListener {
					export class EventType {
						public static ADD: com.couchbase.lite.support.BlockingQueueListener.EventType;
						public static PUT: com.couchbase.lite.support.BlockingQueueListener.EventType;
						public static TAKE: com.couchbase.lite.support.BlockingQueueListener.EventType;
						public static POLL: com.couchbase.lite.support.BlockingQueueListener.EventType;
						public static values(): native.Array<com.couchbase.lite.support.BlockingQueueListener.EventType>;
						public static valueOf(param0: string): com.couchbase.lite.support.BlockingQueueListener.EventType;
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.Date.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module support {
				export class ClearableCookieJar {
					/**
					 * Constructs a new instance of the com.couchbase.lite.support.ClearableCookieJar interface with the provided implementation.
					 */
					public constructor(implementation: {
						clear(): void;
						clearExpired(param0: Date): boolean;
					});
					public clearExpired(param0: Date): boolean;
					public clear(): void;
				}
			}
		}
	}
}

import javaxnetsslSSLSocketFactory = javax.net.ssl.SSLSocketFactory;
import javaxnetsslHostnameVerifier = javax.net.ssl.HostnameVerifier;
import okhttp3CookieJar = okhttp3.CookieJar;
/// <reference path="./com.couchbase.lite.support.ClearableCookieJar.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./javax.net.ssl.HostnameVerifier.d.ts" />
/// <reference path="./javax.net.ssl.SSLSocketFactory.d.ts" />
/// <reference path="./okhttp3.CookieJar.d.ts" />
/// <reference path="./okhttp3.OkHttpClient.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module support {
				export class CouchbaseLiteHttpClientFactory {
					public static DEFAULT_SO_TIMEOUT_SECONDS: number;
					public static DEFAULT_CONNECTION_TIMEOUT_SECONDS: number;
					public static DEFAULT_READ_TIMEOUT: number;
					public static DEFAULT_WRITE_TIMEOUT: number;
					public getOkHttpClient(): okhttp3OkHttpClient;
					public getCookieStore(): okhttp3CookieJar;
					public addCookies(param0: javautilList): void;
					public allowSelfSignedSSLCertificates(): void;
					public isFollowRedirects(): boolean;
					public setSSLSocketFactory(param0: javaxnetsslSSLSocketFactory): void;
					public resetCookieStore(): void;
					public deleteCookie(param0: string): void;
					public constructor(param0: com.couchbase.lite.support.ClearableCookieJar);
					public setHostnameVerifier(param0: javaxnetsslHostnameVerifier): void;
					public setFollowRedirects(param0: boolean): void;
					public deleteCookie(param0: javanetURL): void;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module support {
				export class CustomByteArrayOutputStream {
					public buf(): native.Array<number>;
					public count(): number;
					public constructor(param0: number);
				}
			}
		}
	}
}

/// <reference path="./java.util.Queue.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module support {
				export class CustomFuture {
					/**
					 * Constructs a new instance of the com.couchbase.lite.support.CustomFuture interface with the provided implementation.
					 */
					public constructor(implementation: {
						setQueue(param0: javautilQueue): void;
					});
					public setQueue(param0: javautilQueue): void;
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.support.BlockingQueueListener.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module support {
				export class CustomLinkedBlockingQueue {
					public take(): javalangObject;
					public poll(param0: number, param1: javautilconcurrentTimeUnit): javalangObject;
					public constructor();
					public add(param0: javalangObject): boolean;
					public constructor(param0: com.couchbase.lite.support.BlockingQueueListener);
					public poll(): javalangObject;
					public setListener(param0: com.couchbase.lite.support.BlockingQueueListener): void;
					public put(param0: javalangObject): void;
					public getListener(): com.couchbase.lite.support.BlockingQueueListener;
					public constructor(param0: number);
					public constructor(param0: javautilCollection);
				}
			}
		}
	}
}

/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module support {
				export class FileDirUtils {
					public static deleteRecursive(param0: javaioFile): boolean;
					public constructor();
					public static copyFolder(param0: javaioFile, param1: javaioFile): void;
					public static removeItemIfExists(param0: string): boolean;
					public static cleanDirectory(param0: javaioFile): boolean;
					public static getDatabaseNameFromPath(param0: string): string;
					public static getPathWithoutExt(param0: string): string;
					public static copyFile(param0: javaioFile, param1: javaioFile): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./okhttp3.CookieJar.d.ts" />
/// <reference path="./okhttp3.OkHttpClient.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module support {
				export class HttpClientFactory {
					/**
					 * Constructs a new instance of the com.couchbase.lite.support.HttpClientFactory interface with the provided implementation.
					 */
					public constructor(implementation: {
						getOkHttpClient(): okhttp3OkHttpClient;
						addCookies(param0: javautilList): void;
						deleteCookie(param0: string): void;
						deleteCookie(param0: javanetURL): void;
						resetCookieStore(): void;
						getCookieStore(): okhttp3CookieJar;
					});
					public getOkHttpClient(): okhttp3OkHttpClient;
					public getCookieStore(): okhttp3CookieJar;
					public addCookies(param0: javautilList): void;
					public resetCookieStore(): void;
					public deleteCookie(param0: string): void;
					public deleteCookie(param0: javanetURL): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module support {
				export class JsonDocument {
					public constructor(param0: native.Array<number>);
					public jsonObject(): javalangObject;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module support {
				export class KMPMatch {
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module support {
				export class LazyJsonArray {
					public contains(param0: javalangObject): boolean;
					public constructor(param0: native.Array<number>);
					public toArray(): native.Array<javalangObject>;
					public iterator(): javautilIterator;
					public size(): number;
					public get(param0: number): javalangObject;
					public toArray(param0: native.Array<javalangObject>): native.Array<javalangObject>;
					public hashCode(): number;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module support {
				export class LazyJsonObject {
					public containsValue(param0: javalangObject): boolean;
					public values(): javautilCollection;
					public constructor(param0: native.Array<number>);
					public remove(param0: javalangObject): javalangObject;
					public clear(): void;
					public containsKey(param0: javalangObject): boolean;
					public size(): number;
					public put(param0: javalangObject, param1: javalangObject): javalangObject;
					public entrySet(): javautilSet;
					public keySet(): javautilSet;
					public get(param0: javalangObject): javalangObject;
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.Database.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module support {
				export class MultipartDocumentReader {
					public appendData(param0: native.Array<number>): void;
					public startedPart(param0: javautilMap): void;
					public finishedPart(): void;
					public appendData(param0: native.Array<number>, param1: number, param2: number): void;
					public setHeaders(param0: javautilMap): void;
					public appendToPart(param0: native.Array<number>): void;
					public finish(): void;
					public appendToPart(param0: native.Array<number>, param1: number, param2: number): void;
					public parseJsonBuffer(): void;
					public startJSONBufferWithHeaders(param0: javautilMap): void;
					public getDocumentProperties(): javautilMap;
					public getDocumentSize(): number;
					public constructor(param0: com.couchbase.lite.Database);
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.support.MultipartReaderDelegate.d.ts" />
/// <reference path="./com.couchbase.lite.support.Range.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module support {
				export class MultipartReader {
					public headers: javautilMap;
					public appendData(param0: native.Array<number>): void;
					public getBoundary(): native.Array<number>;
					public getBoundaryWithoutLeadingCRLF(): native.Array<number>;
					public appendData(param0: native.Array<number>, param1: number, param2: number): void;
					public searchFor(param0: native.Array<number>, param1: number): com.couchbase.lite.support.Range;
					public finished(): boolean;
					public parseHeaders(param0: string): void;
					public constructor(param0: string, param1: com.couchbase.lite.support.MultipartReaderDelegate);
				}
				export module MultipartReader {
					export class MultipartReaderState {
						public static kUninitialized: com.couchbase.lite.support.MultipartReader.MultipartReaderState;
						public static kAtStart: com.couchbase.lite.support.MultipartReader.MultipartReaderState;
						public static kInPrologue: com.couchbase.lite.support.MultipartReader.MultipartReaderState;
						public static kInBody: com.couchbase.lite.support.MultipartReader.MultipartReaderState;
						public static kInHeaders: com.couchbase.lite.support.MultipartReader.MultipartReaderState;
						public static kAtEnd: com.couchbase.lite.support.MultipartReader.MultipartReaderState;
						public static kFailed: com.couchbase.lite.support.MultipartReader.MultipartReaderState;
						public static valueOf(param0: string): com.couchbase.lite.support.MultipartReader.MultipartReaderState;
						public static values(): native.Array<com.couchbase.lite.support.MultipartReader.MultipartReaderState>;
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module support {
				export class MultipartReaderDelegate {
					/**
					 * Constructs a new instance of the com.couchbase.lite.support.MultipartReaderDelegate interface with the provided implementation.
					 */
					public constructor(implementation: {
						startedPart(param0: javautilMap): void;
						appendToPart(param0: native.Array<number>): void;
						appendToPart(param0: native.Array<number>, param1: number, param2: number): void;
						finishedPart(): void;
					});
					public startedPart(param0: javautilMap): void;
					public finishedPart(): void;
					public appendToPart(param0: native.Array<number>): void;
					public appendToPart(param0: native.Array<number>, param1: number, param2: number): void;
				}
			}
		}
	}
}

import okhttp3HttpUrl = okhttp3.HttpUrl;
import okhttp3Cookie = okhttp3.Cookie;
/// <reference path="./com.couchbase.lite.Database.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./okhttp3.Cookie.d.ts" />
/// <reference path="./okhttp3.HttpUrl.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module support {
				export class PersistentCookieJar {
					public deleteCookie(param0: okhttp3Cookie): void;
					public clearExpired(param0: Date): boolean;
					public clear(): void;
					public loadForRequest(param0: okhttp3HttpUrl): javautilList;
					public constructor(param0: com.couchbase.lite.Database);
					public saveFromResponse(param0: okhttp3HttpUrl, param1: javautilList): void;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module support {
				export class Range {
					public getLength(): number;
					public getLocation(): number;
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.internal.RevisionInternal.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module support {
				export class RevisionUtils {
					public static generateRevID(param0: native.Array<number>, param1: boolean, param2: string): string;
					public static makeRevisionHistoryDict(param0: javautilList): javautilMap;
					public static asCanonicalJSON(param0: javautilMap): native.Array<number>;
					public static asCanonicalJSON(param0: com.couchbase.lite.internal.RevisionInternal): native.Array<number>;
					public static parseRevIDSuffix(param0: string): string;
					public constructor();
					public static parseRevIDNumber(param0: string): number;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module support {
				export class SequenceMap {
					public isEmpty(): boolean;
					public constructor();
					public getCheckpointedSequence(): number;
					public addValue(param0: string): number;
					public count(): number;
					public getCheckpointedValue(): string;
					public removeSequence(param0: number): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./okhttp3.Cookie.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module support {
				export class SerializableCookie {
					public constructor();
					public encode(param0: okhttp3Cookie): string;
					public decode(param0: string): okhttp3Cookie;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module support {
				export class Version {
					public static SYNC_PROTOCOL_VERSION: string;
					public static VERSION: string;
					public static getVersionName(): string;
					public static getCommitHash(): string;
					public constructor();
					public static getVersion(): string;
					public static getVersionCode(): number;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module support {
				export class WeakValueHashMap {
					public containsValue(param0: javalangObject): boolean;
					public values(): javautilCollection;
					public constructor();
					public constructor(param0: javautilMap);
					public remove(param0: javalangObject): javalangObject;
					public clear(): void;
					public containsKey(param0: javalangObject): boolean;
					public size(): number;
					public put(param0: javalangObject, param1: javalangObject): javalangObject;
					public entrySet(): javautilSet;
					public keySet(): javautilSet;
					public get(param0: javalangObject): javalangObject;
				}
				export module WeakValueHashMap {
					export class WeakValue {
					}
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.support.action.ActionBlock.d.ts" />
/// <reference path="./com.couchbase.lite.support.action.AtomicAction.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module support {
				export module action {
					export class Action {
						public constructor(param0: com.couchbase.lite.support.action.ActionBlock, param1: com.couchbase.lite.support.action.ActionBlock, param2: com.couchbase.lite.support.action.ActionBlock);
						public constructor();
						public getFailedStep(): number;
						public run(): void;
						public backout(): void;
						public static moveAndReplaceFile(param0: string, param1: string, param2: string): com.couchbase.lite.support.action.Action;
						public getLastError(): javalangException;
						public static moveFileToEmptyPath(param0: string, param1: string): com.couchbase.lite.support.action.Action;
						public add(param0: com.couchbase.lite.support.action.AtomicAction): void;
						public cleanup(): void;
						public static deleteFile(param0: string, param1: string): com.couchbase.lite.support.action.Action;
						public add(param0: com.couchbase.lite.support.action.ActionBlock, param1: com.couchbase.lite.support.action.ActionBlock): void;
						public perform(): void;
						public add(param0: com.couchbase.lite.support.action.ActionBlock, param1: com.couchbase.lite.support.action.ActionBlock, param2: com.couchbase.lite.support.action.ActionBlock): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module support {
				export module action {
					export class ActionBlock {
						/**
						 * Constructs a new instance of the com.couchbase.lite.support.action.ActionBlock interface with the provided implementation.
						 */
						public constructor(implementation: {
							execute(): void;
						});
						public execute(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module support {
				export module action {
					export class ActionException {
						public constructor();
						public constructor(param0: javalangThrowable);
						public constructor(param0: string, param1: javalangThrowable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module support {
				export module action {
					export class AtomicAction {
						/**
						 * Constructs a new instance of the com.couchbase.lite.support.action.AtomicAction interface with the provided implementation.
						 */
						public constructor(implementation: {
							perform(): void;
							backout(): void;
							cleanup(): void;
						});
						public backout(): void;
						public cleanup(): void;
						public perform(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.support.security.SymmetricKey.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module support {
				export module security {
					export class SymmetricKey {
						public static KEY_SIZE: number;
						public constructor();
						public decryptData(param0: native.Array<number>): native.Array<number>;
						public constructor(param0: native.Array<number>);
						public decryptStream(param0: javaioInputStream): javaioInputStream;
						public getKey(): native.Array<number>;
						public toString(): string;
						public encryptData(param0: native.Array<number>): native.Array<number>;
						public createEncryptor(): com.couchbase.lite.support.security.SymmetricKey.Encryptor;
						public getHexData(): string;
					}
					export module SymmetricKey {
						export class EncryptedInputStream {
							public constructor(param0: com.couchbase.lite.support.security.SymmetricKey, param1: javaioInputStream);
							public getIv(): native.Array<number>;
						}
						export class Encryptor {
							public encrypt(param0: native.Array<number>): native.Array<number>;
							public encrypt(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
							public constructor(param0: com.couchbase.lite.support.security.SymmetricKey);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module support {
				export module security {
					export class SymmetricKeyException {
						public constructor();
						public constructor(param0: javalangThrowable);
						public constructor(param0: string, param1: javalangThrowable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module util {
				export abstract class ArrayUtils {
					public static cloneIfNotEmpty(param0: native.Array<string>): native.Array<string>;
					public static subarray(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
					public static nullToEmpty(param0: native.Array<string>): native.Array<string>;
					public static concat(param0: native.Array<number>, param1: number, param2: number, param3: native.Array<number>, param4: number, param5: number): native.Array<number>;
					public static concat(param0: native.Array<number>, param1: native.Array<number>): native.Array<number>;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module util {
				export class Base64 {
					public static DEFAULT: number;
					public static NO_PADDING: number;
					public static NO_WRAP: number;
					public static CRLF: number;
					public static URL_SAFE: number;
					public static NO_CLOSE: number;
					public static encodeToString(param0: native.Array<number>, param1: number): string;
					public static decode(param0: native.Array<number>, param1: number): native.Array<number>;
					public static decode(param0: string, param1: number): native.Array<number>;
					public static encode(param0: native.Array<number>, param1: number): native.Array<number>;
					public static encode(param0: native.Array<number>, param1: number, param2: number, param3: number): native.Array<number>;
					public static encodeToString(param0: native.Array<number>, param1: number, param2: number, param3: number): string;
					public static decode(param0: native.Array<number>, param1: number, param2: number, param3: number): native.Array<number>;
				}
				export module Base64 {
					export abstract class Coder {
						public output: native.Array<number>;
						public op: number;
						public process(param0: native.Array<number>, param1: number, param2: number, param3: boolean): boolean;
						public maxOutputSize(param0: number): number;
					}
					export class Decoder extends com.couchbase.lite.util.Base64.Coder {
						public process(param0: native.Array<number>, param1: number, param2: number, param3: boolean): boolean;
						public maxOutputSize(param0: number): number;
						public constructor(param0: number, param1: native.Array<number>);
					}
					export class Encoder extends com.couchbase.lite.util.Base64.Coder {
						public static LINE_GROUPS: number;
						public do_padding: boolean;
						public do_newline: boolean;
						public do_cr: boolean;
						public process(param0: native.Array<number>, param1: number, param2: number, param3: boolean): boolean;
						public maxOutputSize(param0: number): number;
						public constructor(param0: number, param1: native.Array<number>);
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module util {
				export class CancellableRunnable {
					/**
					 * Constructs a new instance of the com.couchbase.lite.util.CancellableRunnable interface with the provided implementation.
					 */
					public constructor(implementation: {
						cancel(): void;
					});
					public cancel(): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module util {
				export class CollectionUtils {
					public static transform(param0: javautilCollection, param1: com.couchbase.lite.util.CollectionUtils.Functor): javautilCollection;
					public constructor();
					public static filter(param0: javautilCollection, param1: com.couchbase.lite.util.CollectionUtils.Predicate): javautilCollection;
				}
				export module CollectionUtils {
					export class Functor {
						/**
						 * Constructs a new instance of the com.couchbase.lite.util.CollectionUtils$Functor interface with the provided implementation.
						 */
						public constructor(implementation: {
							invoke(param0: javalangObject): javalangObject;
						});
						public invoke(param0: javalangObject): javalangObject;
					}
					export class Predicate {
						/**
						 * Constructs a new instance of the com.couchbase.lite.util.CollectionUtils$Predicate interface with the provided implementation.
						 */
						public constructor(implementation: {
							apply(param0: javalangObject): boolean;
						});
						public apply(param0: javalangObject): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module util {
				export class ConversionUtils {
					public constructor();
					public static fromByteArray(param0: native.Array<number>): javautilMap;
					public static toByteArray(param0: javautilMap): native.Array<number>;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module util {
				export class CountDown {
					public countDown(): number;
					public toString(): string;
					public getCount(): number;
					public constructor(param0: number);
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module util {
				export class DeepClone {
					public static deepClone(param0: javalangObject): javalangObject;
				}
			}
		}
	}
}

/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module util {
				export class IOUtils {
					public static copyLarge(param0: javaioInputStream, param1: javaioOutputStream): number;
					public static toByteArray(param0: javanetURL): native.Array<number>;
					public constructor();
					public static toByteArray(param0: javaioInputStream): native.Array<number>;
					public static copy(param0: javaioInputStream, param1: javaioOutputStream): number;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module util {
				export class JSONUtils {
					public constructor();
					public static estimate(param0: javalangObject): number;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module util {
				export class Log {
					public static TAG: string;
					public static TAG_SYNC: string;
					public static TAG_BATCHER: string;
					public static TAG_SYNC_ASYNC_TASK: string;
					public static TAG_REMOTE_REQUEST: string;
					public static TAG_VIEW: string;
					public static TAG_QUERY: string;
					public static TAG_CHANGE_TRACKER: string;
					public static TAG_ROUTER: string;
					public static TAG_DATABASE: string;
					public static TAG_LISTENER: string;
					public static TAG_MULTI_STREAM_WRITER: string;
					public static TAG_BLOB_STORE: string;
					public static TAG_SYMMETRIC_KEY: string;
					public static TAG_ACTION: string;
					public static VERBOSE: number;
					public static DEBUG: number;
					public static INFO: number;
					public static WARN: number;
					public static ERROR: number;
					public static ASSERT: number;
					public static e(param0: string, param1: string, param2: javalangThrowable): void;
					public static i(param0: string, param1: string, param2: javalangThrowable): void;
					public static i(param0: string, param1: string): void;
					public static d(param0: string, param1: string, param2: native.Array<javalangObject>): void;
					public static e(param0: string, param1: string, param2: native.Array<javalangObject>): void;
					public static e(param0: string, param1: string): void;
					public static w(param0: string, param1: string, param2: javalangThrowable, param3: native.Array<javalangObject>): void;
					public static e(param0: string, param1: string, param2: javalangThrowable, param3: native.Array<javalangObject>): void;
					public static d(param0: string, param1: string, param2: javalangThrowable): void;
					public static i(param0: string, param1: string, param2: javalangThrowable, param3: native.Array<javalangObject>): void;
					public constructor();
					public static enableLogging(param0: string, param1: number): void;
					public static d(param0: string, param1: string, param2: javalangThrowable, param3: native.Array<javalangObject>): void;
					public static v(param0: string, param1: string, param2: javalangThrowable): void;
					public static d(param0: string, param1: string): void;
					public static i(param0: string, param1: string, param2: native.Array<javalangObject>): void;
					public static w(param0: string, param1: string, param2: javalangThrowable): void;
					public static w(param0: string, param1: string, param2: native.Array<javalangObject>): void;
					public static v(param0: string, param1: string, param2: native.Array<javalangObject>): void;
					public static v(param0: string, param1: string): void;
					public static v(param0: string, param1: string, param2: javalangThrowable, param3: native.Array<javalangObject>): void;
					public static w(param0: string, param1: string): void;
					public static w(param0: string, param1: javalangThrowable): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module util {
				export class Logger {
					/**
					 * Constructs a new instance of the com.couchbase.lite.util.Logger interface with the provided implementation.
					 */
					public constructor(implementation: {
						v(param0: string, param1: string): void;
						v(param0: string, param1: string, param2: javalangThrowable): void;
						d(param0: string, param1: string): void;
						d(param0: string, param1: string, param2: javalangThrowable): void;
						i(param0: string, param1: string): void;
						i(param0: string, param1: string, param2: javalangThrowable): void;
						w(param0: string, param1: string): void;
						w(param0: string, param1: javalangThrowable): void;
						w(param0: string, param1: string, param2: javalangThrowable): void;
						e(param0: string, param1: string): void;
						e(param0: string, param1: string, param2: javalangThrowable): void;
					});
					public d(param0: string, param1: string): void;
					public w(param0: string, param1: javalangThrowable): void;
					public e(param0: string, param1: string): void;
					public i(param0: string, param1: string, param2: javalangThrowable): void;
					public v(param0: string, param1: string, param2: javalangThrowable): void;
					public w(param0: string, param1: string, param2: javalangThrowable): void;
					public e(param0: string, param1: string, param2: javalangThrowable): void;
					public i(param0: string, param1: string): void;
					public d(param0: string, param1: string, param2: javalangThrowable): void;
					public w(param0: string, param1: string): void;
					public v(param0: string, param1: string): void;
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.util.Logger.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module util {
				export class LoggerFactory {
					public constructor();
					public static createLogger(): com.couchbase.lite.util.Logger;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module util {
				export class LruCache {
					public evictAll(): void;
					public putCount(): number;
					public create(param0: javalangObject): javalangObject;
					public evictionCount(): number;
					public size(): number;
					public put(param0: javalangObject, param1: javalangObject): javalangObject;
					public entryRemoved(param0: boolean, param1: javalangObject, param2: javalangObject, param3: javalangObject): void;
					public maxSize(): number;
					public sizeOf(param0: javalangObject, param1: javalangObject): number;
					public toString(): string;
					public hitCount(): number;
					public createCount(): number;
					public remove(param0: javalangObject): javalangObject;
					public snapshot(): javautilMap;
					public missCount(): number;
					public resize(param0: number): void;
					public constructor(param0: number);
					public get(param0: javalangObject): javalangObject;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module util {
				export class NativeLibraryUtils {
					public static loadLibrary(param0: string): boolean;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module util {
				export class RefCounter {
					public constructor();
					public await(): void;
					public count(): number;
					public retain(): void;
					public release(): void;
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.storage.SQLiteStorageEngine.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module util {
				export class SQLiteUtils {
					public static byteArrayResultForQuery(param0: com.couchbase.lite.storage.SQLiteStorageEngine, param1: string, param2: native.Array<string>): native.Array<number>;
					public static longForQuery(param0: com.couchbase.lite.storage.SQLiteStorageEngine, param1: string, param2: native.Array<string>): number;
					public constructor();
					public static intForQuery(param0: com.couchbase.lite.storage.SQLiteStorageEngine, param1: string, param2: native.Array<string>): number;
					public static booleanForQuery(param0: com.couchbase.lite.storage.SQLiteStorageEngine, param1: string, param2: native.Array<string>): boolean;
					public static executeUpdate(param0: com.couchbase.lite.storage.SQLiteStorageEngine, param1: string, param2: native.Array<string>): void;
					public static changes(param0: com.couchbase.lite.storage.SQLiteStorageEngine): number;
					public static stringForQuery(param0: com.couchbase.lite.storage.SQLiteStorageEngine, param1: string, param2: native.Array<string>): string;
				}
			}
		}
	}
}

/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module util {
				export class StreamUtils {
					public static copyStreamToFile(param0: javaioInputStream, param1: javaioFile): void;
					public constructor();
					public static copyStreamsToFolder(param0: javautilIterator, param1: javaioFile): void;
					public static copyStream(param0: javaioInputStream, param1: javaioOutputStream): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module util {
				export class SystemLogger {
					public d(param0: string, param1: string): void;
					public w(param0: string, param1: javalangThrowable): void;
					public e(param0: string, param1: string): void;
					public i(param0: string, param1: string, param2: javalangThrowable): void;
					public v(param0: string, param1: string, param2: javalangThrowable): void;
					public w(param0: string, param1: string, param2: javalangThrowable): void;
					public constructor();
					public e(param0: string, param1: string, param2: javalangThrowable): void;
					public i(param0: string, param1: string): void;
					public d(param0: string, param1: string, param2: javalangThrowable): void;
					public w(param0: string, param1: string): void;
					public v(param0: string, param1: string): void;
				}
			}
		}
	}
}

import javalangIterable = java.lang.Iterable;
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module util {
				export class TextUtils {
					public static joinQuoted(param0: javautilList): string;
					public static join(param0: string, param1: javalangIterable): string;
					public static write(param0: string, param1: javaioFile): void;
					public constructor();
					public static read(param0: javaioFile): string;
					public static read(param0: javaioInputStream): native.Array<number>;
					public static joinQuotedObjects(param0: javautilList): string;
					public static quote(param0: string): string;
				}
			}
		}
	}
}

import javaniocharsetCharset = java.nio.charset.Charset;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.charset.Charset.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module util {
				export class URIUtils {
					public static encode(param0: string): string;
					public static decode(param0: string, param1: boolean, param2: javaniocharsetCharset): string;
					public static decode(param0: string): string;
					public constructor();
					public static encode(param0: string, param1: string): string;
				}
			}
		}
	}
}

/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module util {
				export class URLUtils {
					public static getUser(param0: javanetURL): string;
					public constructor();
					public static splitQuery(param0: javanetURL): javautilMap;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.concurrent.ExecutorService.d.ts" />
/// <reference path="./okhttp3.Headers.d.ts" />
/// <reference path="./okhttp3.Response.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module util {
				export class Utils {
					public static DEFAULT_TIME_TO_WAIT_4_SHUTDOWN: number;
					public static DEFAULT_TIME_TO_WAIT_4_SHUTDOWNNOW: number;
					public static hexArray: native.Array<string>;
					public static CHUNK_SIZE: number;
					public static isDocumentError(param0: javalangThrowable): boolean;
					public static isTransientError(param0: javalangThrowable): boolean;
					public static assertNotNull(param0: javalangObject, param1: string): void;
					public static getStatusFromError(param0: javalangThrowable): number;
					public static isGzip(param0: okhttp3Response): boolean;
					public static isPermanentError(param0: okhttp3Response): boolean;
					public static is404(param0: javalangThrowable): boolean;
					public static compressByGzip(param0: native.Array<number>): native.Array<number>;
					public static isEqual(param0: javalangObject, param1: javalangObject): boolean;
					public static isPermanentError(param0: number): boolean;
					public static shutdownAndAwaitTermination(param0: javautilconcurrentExecutorService, param1: number, param2: number): void;
					public constructor();
					public static isPermanentError(param0: javalangThrowable): boolean;
					public static isTransientError(param0: okhttp3Response): boolean;
					public static getErrorMessageFromError(param0: javalangThrowable): string;
					public static isTransientError(param0: number): boolean;
					public static bytesToHex(param0: native.Array<number>): string;
					public static isGzip(param0: string): boolean;
					public static shutdownAndAwaitTermination(param0: javautilconcurrentExecutorService): void;
					public static isDocumentError(param0: number): boolean;
					public static shortenString(param0: string, param1: number): string;
					public static decompressByGzip(param0: native.Array<number>): native.Array<number>;
					public static headersToMap(param0: okhttp3Headers): javautilMap;
				}
			}
		}
	}
}

/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module util {
				export class ZipUtils {
					public constructor();
					public static unzip(param0: javaioInputStream, param1: javaioFile): void;
				}
			}
		}
	}
}

