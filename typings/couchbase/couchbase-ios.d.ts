
declare const enum CBLAllDocsMode {

	kCBLAllDocs = 0,

	kCBLIncludeDeleted = 1,

	kCBLShowConflicts = 2,

	kCBLOnlyConflicts = 3,

	kCBLBySequence = 4
}

declare class CBLAttachment extends NSObject {

	static alloc(): CBLAttachment; // inherited from NSObject

	static new(): CBLAttachment; // inherited from NSObject

	readonly content: NSData;

	readonly contentAvailable: boolean;

	readonly contentType: string;

	readonly contentURL: NSURL;

	readonly document: CBLDocument;

	readonly encodedLength: number;

	readonly length: number;

	readonly metadata: NSDictionary<string, any>;

	readonly name: string;

	readonly revision: CBLRevision;

	openContentStream(): NSInputStream;

	purge(): boolean;
}

declare class CBLAuthenticator extends NSObject {

	static OAuth1AuthenticatorWithConsumerKeyConsumerSecretTokenTokenSecretSignatureMethod(consumerKey: string, consumerSecret: string, token: string, tokenSecret: string, signatureMethod: string): CBLAuthenticatorProtocol;

	static OpenIDConnectAuthenticator(callback: (p1: NSURL, p2: NSURL, p3: (p1: NSURL, p2: NSError) => void) => void): CBLAuthenticatorProtocol;

	static SSLClientCertAuthenticatorWithAnonymousIdentity(label: string): CBLAuthenticatorProtocol;

	static SSLClientCertAuthenticatorWithIdentitySupportingCerts(identity: any, certs: NSArray<any>): CBLAuthenticatorProtocol;

	static alloc(): CBLAuthenticator; // inherited from NSObject

	static basicAuthenticatorWithNamePassword(name: string, password: string): CBLAuthenticatorProtocol;

	static facebookAuthenticatorWithToken(token: string): CBLAuthenticatorProtocol;

	static new(): CBLAuthenticator; // inherited from NSObject

	static personaAuthenticatorWithAssertion(assertion: string): CBLAuthenticatorProtocol;
}

interface CBLAuthenticatorProtocol extends NSObjectProtocol {
}
declare var CBLAuthenticatorProtocol: {

	prototype: CBLAuthenticatorProtocol;
};

declare function CBLClassFromType(propertyType: string, relativeToClass: typeof NSObject): typeof NSObject;

declare class CBLDatabase extends NSObject {

	static alloc(): CBLDatabase; // inherited from NSObject

	static filterCompiler(): CBLFilterCompiler;

	static new(): CBLDatabase; // inherited from NSObject

	static setFilterCompiler(compiler: CBLFilterCompiler): void;

	readonly documentCount: number;

	readonly internalURL: NSURL;

	readonly lastSequenceNumber: number;

	readonly manager: CBLManager;

	maxRevTreeDepth: number;

	modelFactory: CBLModelFactory;

	readonly name: string;

	readonly unsavedModels: NSArray<CBLModel>;

	allReplications(): NSArray<CBLReplication>;

	autosaveAllModels(): boolean;

	changeEncryptionKeyError(keyOrPassword: any): boolean;

	close(): boolean;

	compact(): boolean;

	createAllDocumentsQuery(): CBLQuery;

	createDocument(): CBLDocument;

	createPullReplication(url: NSURL): CBLReplication;

	createPushReplication(url: NSURL): CBLReplication;

	deleteDatabase(): boolean;

	deleteLocalDocumentWithIDError(localDocID: string): boolean;

	doAsync(block: () => void): void;

	doSync(block: () => void): void;

	documentWithID(docID: string): CBLDocument;

	existingDocumentWithID(docID: string): CBLDocument;

	existingLocalDocumentWithID(localDocID: string): NSDictionary<string, any>;

	existingViewNamed(name: string): CBLView;

	filterNamed(filterName: string): (p1: CBLSavedRevision, p2: NSDictionary<any, any>) => boolean;

	inTransaction(block: () => boolean): boolean;

	objectForKeyedSubscript(key: string): CBLDocument;

	putLocalDocumentWithIDError(properties: NSDictionary<string, any>, localDocID: string): boolean;

	replaceUUIDs(): boolean;

	saveAllModels(): boolean;

	setFilterNamedAsBlock(filterName: string, filterBlock: (p1: CBLSavedRevision, p2: NSDictionary<any, any>) => boolean): void;

	setValidationNamedAsBlock(validationName: string, validationBlock: (p1: CBLRevision, p2: CBLValidationContext) => void): void;

	slowQueryWithMap(mapBlock: (p1: NSDictionary<string, any>, p2: (p1: any, p2: any) => void) => void): CBLQuery;

	validationNamed(validationName: string): (p1: CBLRevision, p2: CBLValidationContext) => void;

	viewNamed(name: string): CBLView;
}

declare class CBLDatabaseChange extends NSObject implements NSCopying {

	static alloc(): CBLDatabaseChange; // inherited from NSObject

	static new(): CBLDatabaseChange; // inherited from NSObject

	readonly documentID: string;

	readonly inConflict: boolean;

	readonly isCurrentRevision: boolean;

	readonly isDeletion: boolean;

	readonly revisionID: string;

	readonly source: NSURL;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class CBLDatabaseOptions extends NSObject {

	static alloc(): CBLDatabaseOptions; // inherited from NSObject

	static new(): CBLDatabaseOptions; // inherited from NSObject

	create: boolean;

	encryptionKey: any;

	readOnly: boolean;

	storageType: string;
}

declare class CBLDocument extends NSObject {

	static alloc(): CBLDocument; // inherited from NSObject

	static new(): CBLDocument; // inherited from NSObject

	readonly abbreviatedID: string;

	readonly currentRevision: CBLSavedRevision;

	readonly currentRevisionID: string;

	readonly database: CBLDatabase;

	readonly documentID: string;

	expirationDate: Date;

	readonly isDeleted: boolean;

	readonly isGone: boolean;

	modelObject: CBLDocumentModel;

	readonly properties: NSDictionary<string, any>;

	readonly userProperties: NSDictionary<string, any>;

	deleteDocument(): boolean;

	getConflictingRevisions(): NSArray<CBLSavedRevision>;

	getLeafRevisions(): NSArray<CBLSavedRevision>;

	getRevisionHistory(): NSArray<CBLSavedRevision>;

	newRevision(): CBLUnsavedRevision;

	objectForKeyedSubscript(key: string): any;

	propertyForKey(key: string): any;

	purgeDocument(): boolean;

	putExistingRevisionWithPropertiesAttachmentsRevisionHistoryFromURLError(properties: NSDictionary<string, any>, attachments: NSDictionary<any, any>, revIDs: NSArray<string>, sourceURL: NSURL): boolean;

	putPropertiesError(properties: NSDictionary<string, any>): CBLSavedRevision;

	revisionWithID(revisionID: string): CBLSavedRevision;

	updateError(block: (p1: CBLUnsavedRevision) => boolean): CBLSavedRevision;
}

interface CBLDocumentModel extends NSObjectProtocol {

	documentDidChange(doc: CBLDocument, change: CBLDatabaseChange): void;
}
declare var CBLDocumentModel: {

	prototype: CBLDocumentModel;
};

declare class CBLDynamicObject extends NSObject {

	static alloc(): CBLDynamicObject; // inherited from NSObject

	static classOfProperty(propertyName: string): typeof NSObject;

	static getterKey(sel: string): string;

	static impForGetterOfPropertyOfClass(property: string, propertyClass: typeof NSObject): interop.FunctionReference<(p1: any, p2: string) => any>;

	static impForGetterOfPropertyOfProtocol(property: string, propertyProtocol: any /* Protocol */): interop.FunctionReference<(p1: any, p2: string) => any>;

	static impForGetterOfPropertyOfType(property: string, propertyType: string): interop.FunctionReference<(p1: any, p2: string) => any>;

	static impForSetterOfPropertyOfClass(property: string, propertyClass: typeof NSObject): interop.FunctionReference<(p1: any, p2: string) => any>;

	static impForSetterOfPropertyOfProtocol(property: string, propertyProtocol: any /* Protocol */): interop.FunctionReference<(p1: any, p2: string) => any>;

	static impForSetterOfPropertyOfType(property: string, propertyType: string): interop.FunctionReference<(p1: any, p2: string) => any>;

	static new(): CBLDynamicObject; // inherited from NSObject

	static propertyNames(): NSSet<any>;

	static setterKey(sel: string): string;

	getValueOfProperty(property: string): any;

	setValueOfProperty(value: any, property: string): boolean;
}

interface CBLFilterCompiler extends NSObjectProtocol {

	compileFilterFunctionLanguage(filterSource: string, language: string): (p1: CBLSavedRevision, p2: NSDictionary<any, any>) => boolean;
}
declare var CBLFilterCompiler: {

	prototype: CBLFilterCompiler;
};

declare class CBLFullTextQueryRow extends CBLQueryRow {

	static alloc(): CBLFullTextQueryRow; // inherited from NSObject

	static new(): CBLFullTextQueryRow; // inherited from NSObject

	readonly fullText: string;

	readonly matchCount: number;

	snippetWithWordStartWordEnd(wordStart: string, wordEnd: string): string;

	termIndexOfMatch(matchNumber: number): number;

	textRangeOfMatch(matchNumber: number): NSRange;
}

declare function CBLGeoCoordPairToPoint(coords: NSArray<any>, outPoint: interop.Pointer | interop.Reference<CBLGeoPoint>): boolean;

declare function CBLGeoCoordsStringToRect(coordsStr: string, outRect: interop.Pointer | interop.Reference<CBLGeoRect>): boolean;

declare function CBLGeoCoordsToRect(coords: NSArray<any>, outRect: interop.Pointer | interop.Reference<CBLGeoRect>): boolean;

declare function CBLGeoJSONBoundingBox(geoJSON: NSDictionary<any, any>, outBBox: interop.Pointer | interop.Reference<CBLGeoRect>): boolean;

declare function CBLGeoJSONKey(geoJSON: NSDictionary<any, any>): any;

interface CBLGeoPoint {
	x: number;
	y: number;
}
declare var CBLGeoPoint: interop.StructType<CBLGeoPoint>;

declare function CBLGeoPointKey(x: number, y: number): any;

declare function CBLGeoPointToCoordPair(pt: CBLGeoPoint): NSArray<number>;

declare function CBLGeoPointToJSON(pt: CBLGeoPoint): NSDictionary<string, any>;

declare class CBLGeoQueryRow extends CBLQueryRow {

	static alloc(): CBLGeoQueryRow; // inherited from NSObject

	static new(): CBLGeoQueryRow; // inherited from NSObject

	readonly boundingBox: CBLGeoRect;

	readonly geometry: NSDictionary<string, any>;

	readonly geometryType: string;
}

interface CBLGeoRect {
	min: CBLGeoPoint;
	max: CBLGeoPoint;
}
declare var CBLGeoRect: interop.StructType<CBLGeoRect>;

declare function CBLGeoRectKey(x0: number, y0: number, x1: number, y1: number): any;

declare function CBLGeoRectToJSON(rect: CBLGeoRect): NSDictionary<string, any>;

declare function CBLGetPropertyInfo(cls: typeof NSObject, propertyName: string, setter: boolean, declaredInClass: interop.Pointer | interop.Reference<typeof NSObject>, propertyType: interop.Pointer | interop.Reference<string>): boolean;

declare var CBLHTTPErrorDomain: string;

declare const enum CBLIndexUpdateMode {

	kCBLUpdateIndexBefore = 0,

	kCBLUpdateIndexNever = 1,

	kCBLUpdateIndexAfter = 2
}

declare class CBLJSON extends NSJSONSerialization {

	static JSONObjectWithData(data: NSData): any;

	static JSONObjectWithDate(date: Date): string;

	static JSONObjectWithDateTimeZone(date: Date, tz: NSTimeZone): string;

	static absoluteTimeWithJSONObject(jsonObject: any): number;

	static alloc(): CBLJSON; // inherited from NSObject

	static appendDictionaryToJSONDictionaryData(dict: NSDictionary<string, any>, json: NSData): NSData;

	static appendJSONDictionaryDataToJSONDictionaryData(extraJson: NSData, json: NSData): NSData;

	static base64StringWithData(data: NSData): string;

	static dataWithBase64String(jsonObject: any): NSData;

	static dataWithJSONObject(obj: any): NSData;

	static dateWithJSONObject(jsonObject: any): Date;

	static estimateMemorySize(object: any): number;

	static new(): CBLJSON; // inherited from NSObject

	static stringWithJSONObjectOptionsError(obj: any, opt: number): string;

	static valueAtPointerInObject(pointer: string, object: any): any;
}

interface CBLJSONEncoding extends NSObjectProtocol {

	encodeAsJSON(): any;

	initWithJSON?(jsonObject: any): CBLJSONEncoding;

	setOnMutate?(onMutate: () => void): void;
}
declare var CBLJSONEncoding: {

	prototype: CBLJSONEncoding;
};

declare const CBLJSONReadingAllowFragments: number;

declare const CBLJSONReadingMutableContainers: number;

declare const CBLJSONReadingMutableLeaves: number;

declare const CBLJSONWritingAllowFragments: number;

declare const CBLJSONWritingPrettyPrinted: number;

declare class CBLLazyArrayOfJSON extends NSArray<NSObject> {

	static alloc(): CBLLazyArrayOfJSON; // inherited from NSObject

	static array(): CBLLazyArrayOfJSON; // inherited from NSArray

	static arrayWithArray(array: NSArray<ObjectType>): CBLLazyArrayOfJSON; // inherited from NSArray

	static arrayWithObject(anObject: ObjectType): CBLLazyArrayOfJSON; // inherited from NSArray

	static arrayWithObjects(firstObj: ObjectType): CBLLazyArrayOfJSON; // inherited from NSArray

	static arrayWithObjectsCount(objects: interop.Reference<ObjectType>, cnt: number): CBLLazyArrayOfJSON; // inherited from NSArray

	static new(): CBLLazyArrayOfJSON; // inherited from NSObject

	constructor(o: { mutableArray: NSMutableArray<any>; });

	initWithMutableArray(array: NSMutableArray<any>): this;
}

declare class CBLLiveQuery extends CBLQuery {

	static alloc(): CBLLiveQuery; // inherited from NSObject

	static new(): CBLLiveQuery; // inherited from NSObject

	readonly lastError: NSError;

	readonly rows: CBLQueryEnumerator;

	updateInterval: number;

	queryOptionsChanged(): void;

	start(): void;

	stop(): void;

	waitForRows(): boolean;
}

declare class CBLManager extends NSObject implements NSCopying {

	static alloc(): CBLManager; // inherited from NSObject

	static defaultDirectory(): string;

	static enableLogging(type: string): void;

	static isValidDatabaseName(name: string): boolean;

	static new(): CBLManager; // inherited from NSObject

	static redirectLogging(callback: (p1: string, p2: string) => void): void;

	static sharedInstance(): CBLManager;

	readonly allDatabaseNames: NSArray<string>;

	readonly customHTTPHeaders: NSMutableDictionary<any, any>;

	readonly directory: string;

	dispatchQueue: NSObject;

	excludedFromBackup: boolean;

	readonly internalURL: NSURL;

	storageType: string;

	constructor(o: { directory: string; options: interop.Pointer | interop.Reference<CBLManagerOptions>; });

	backgroundTellDatabaseNamedTo(dbName: string, block: (p1: CBLDatabase) => void): void;

	close(): void;

	copy(): this;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	databaseExistsNamed(name: string): boolean;

	databaseNamedError(name: string): CBLDatabase;

	doAsync(block: () => void): void;

	existingDatabaseNamedError(name: string): CBLDatabase;

	initWithDirectoryOptionsError(directory: string, options: interop.Pointer | interop.Reference<CBLManagerOptions>): this;

	objectForKeyedSubscript(key: string): CBLDatabase;

	openDatabaseNamedWithOptionsError(name: string, options: CBLDatabaseOptions): CBLDatabase;

	registerEncryptionKeyForDatabaseNamed(keyOrPassword: any, name: string): boolean;

	replaceDatabaseNamedWithDatabaseDirError(databaseName: string, databaseDir: string): boolean;

	replaceDatabaseNamedWithDatabaseFileWithAttachmentsError(databaseName: string, databasePath: string, attachmentsPath: string): boolean;
}

interface CBLManagerOptions {
	readOnly: boolean;
	fileProtection: NSDataWritingOptions;
}
declare var CBLManagerOptions: interop.StructType<CBLManagerOptions>;

declare class CBLModel extends CBLDynamicObject implements CBLDocumentModel {

	static alloc(): CBLModel; // inherited from NSObject

	static inverseRelationForArrayProperty(property: string): string;

	static itemClassForArrayProperty(property: string): typeof NSObject;

	static modelForDocument(document: CBLDocument): CBLModel;

	static modelForNewDocumentInDatabase(database: CBLDatabase): CBLModel;

	static new(): CBLModel; // inherited from NSObject

	static saveModelsError(models: NSArray<CBLModel>): boolean;

	readonly attachmentNames: NSArray<string>;

	readonly autosaveDelay: number;

	autosaves: boolean;

	database: CBLDatabase;

	readonly document: CBLDocument;

	readonly isNew: boolean;

	readonly needsSave: boolean;

	readonly timeSinceExternallyChanged: number;

	type: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	attachmentNamed(name: string): CBLAttachment;

	awakeFromInitializer(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	databaseForModelProperty(propertyName: string): CBLDatabase;

	deleteDocument(): boolean;

	didLoadFromDocument(): void;

	documentDidChange(doc: CBLDocument, change: CBLDatabaseChange): void;

	findInverseOfRelationFromClass(relation: string, fromClass: typeof NSObject): NSArray<CBLModel>;

	idForNewDocumentInDatabase(db: CBLDatabase): string;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	markExternallyChanged(): void;

	markNeedsSave(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	propertiesToSave(): NSDictionary<any, any>;

	propertiesToSaveForDeletion(): NSDictionary<any, any>;

	removeAttachmentNamed(name: string): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	revertChanges(): void;

	save(): boolean;

	self(): this;

	setAttachmentNamedWithContentTypeContent(name: string, mimeType: string, content: NSData): void;

	setAttachmentNamedWithContentTypeContentURL(name: string, mimeType: string, fileURL: NSURL): void;

	willSave(changedPropertyNames: NSSet<any>): void;
}

declare class CBLModelFactory extends NSObject {

	static alloc(): CBLModelFactory; // inherited from NSObject

	static new(): CBLModelFactory; // inherited from NSObject

	static sharedInstance(): CBLModelFactory;

	classForDocument(document: CBLDocument): typeof NSObject;

	classForDocumentType(type: string): typeof NSObject;

	documentTypeForClass(modelClass: typeof NSObject): string;

	documentTypesForClass(modelClass: typeof NSObject): NSArray<string>;

	modelForDocument(document: CBLDocument): any;

	registerClassForDocumentType(classOrName: any, type: string): void;
}

declare function CBLProtocolFromType(propertyType: string, relativeToClass: typeof NSObject): any /* Protocol */;

declare class CBLQuery extends NSObject {

	static alloc(): CBLQuery; // inherited from NSObject

	static new(): CBLQuery; // inherited from NSObject

	allDocsMode: CBLAllDocsMode;

	boundingBox: CBLGeoRect;

	readonly database: CBLDatabase;

	descending: boolean;

	endKey: any;

	endKeyDocID: string;

	fullTextQuery: string;

	fullTextRanking: boolean;

	fullTextSnippets: boolean;

	groupLevel: number;

	inclusiveEnd: boolean;

	inclusiveStart: boolean;

	indexUpdateMode: CBLIndexUpdateMode;

	keys: NSArray<any>;

	limit: number;

	mapOnly: boolean;

	postFilter: NSPredicate;

	prefetch: boolean;

	prefixMatchLevel: number;

	skip: number;

	sortDescriptors: NSArray<NSSortDescriptor>;

	startKey: any;

	startKeyDocID: string;

	readonly view: CBLView;

	asLiveQuery(): CBLLiveQuery;

	run(): CBLQueryEnumerator;

	runAsync(onComplete: (p1: CBLQueryEnumerator, p2: NSError) => void): void;
}

declare class CBLQueryBuilder extends NSObject {

	static alloc(): CBLQueryBuilder; // inherited from NSObject

	static new(): CBLQueryBuilder; // inherited from NSObject

	readonly explanation: string;

	readonly view: CBLView;

	constructor(o: { database: CBLDatabase; select: NSArray<any>; where: string; orderBy: NSArray<any>; });

	constructor(o: { database: CBLDatabase; select: NSArray<any>; wherePredicate: NSPredicate; orderBy: NSArray<any>; });

	constructor(o: { view: CBLView; select: NSArray<any>; wherePredicate: NSPredicate; orderBy: NSArray<any>; });

	createQueryWithContext(context: NSDictionary<string, any>): CBLQuery;

	initWithDatabaseSelectWhereOrderByError(database: CBLDatabase, valueTemplate: NSArray<any>, predicateStr: string, sortDescriptors: NSArray<any>): this;

	initWithDatabaseSelectWherePredicateOrderByError(database: CBLDatabase, valueTemplate: NSArray<any>, predicate: NSPredicate, sortDescriptors: NSArray<any>): this;

	initWithViewSelectWherePredicateOrderByError(view: CBLView, valueTemplate: NSArray<any>, predicate: NSPredicate, sortDescriptors: NSArray<any>): this;

	runQueryWithContextError(context: NSDictionary<string, any>): CBLQueryEnumerator;
}

declare class CBLQueryEnumerator extends NSEnumerator<NSObject> implements NSCopying {

	static alloc(): CBLQueryEnumerator; // inherited from NSObject

	static new(): CBLQueryEnumerator; // inherited from NSObject

	readonly count: number;

	readonly sequenceNumber: number;

	readonly stale: boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	nextObject(): CBLQueryRow;

	nextRow(): CBLQueryRow;

	reset(): void;

	rowAtIndex(index: number): CBLQueryRow;

	sortUsingDescriptors(sortDescriptors: NSArray<any>): void;
}

declare class CBLQueryRow extends NSObject {

	static alloc(): CBLQueryRow; // inherited from NSObject

	static new(): CBLQueryRow; // inherited from NSObject

	readonly conflictingRevisions: NSArray<CBLSavedRevision>;

	readonly database: CBLDatabase;

	readonly document: CBLDocument;

	readonly documentID: string;

	readonly documentProperties: NSDictionary<string, any>;

	readonly documentRevisionID: string;

	readonly key: any;

	readonly key0: any;

	readonly key1: any;

	readonly key2: any;

	readonly key3: any;

	readonly sequenceNumber: number;

	readonly sourceDocumentID: string;

	readonly value: any;

	keyAtIndex(index: number): any;
}

declare class CBLReplication extends NSObject {

	static alloc(): CBLReplication; // inherited from NSObject

	static new(): CBLReplication; // inherited from NSObject

	static setAnchorCertsOnlyThese(certs: NSArray<any>, onlyThese: boolean): void;

	OAuth: NSDictionary<string, any>;

	authenticator: CBLAuthenticatorProtocol;

	readonly changesCount: number;

	channels: NSArray<string>;

	readonly completedChangesCount: number;

	continuous: boolean;

	createTarget: boolean;

	credential: NSURLCredential;

	customProperties: NSDictionary<string, any>;

	documentIDs: NSArray<string>;

	downloadsAttachments: boolean;

	filter: string;

	filterParams: NSDictionary<string, any>;

	headers: NSDictionary<string, string>;

	readonly lastError: NSError;

	readonly localDatabase: CBLDatabase;

	network: string;

	readonly pendingDocumentIDs: NSSet<any>;

	readonly personaOrigin: NSURL;

	readonly pull: boolean;

	readonly remoteURL: NSURL;

	readonly running: boolean;

	readonly serverCertificate: any;

	readonly status: CBLReplicationStatus;

	suspended: boolean;

	readonly username: string;

	clearAuthenticationStores(): boolean;

	deleteCookieNamed(name: string): void;

	downloadAttachment(attachment: CBLAttachment): NSProgress;

	isDocumentPending(doc: CBLDocument): boolean;

	restart(): void;

	setCookieNamedWithValuePathExpirationDateSecure(name: string, value: string, path: string, expirationDate: Date, secure: boolean): void;

	start(): void;

	stop(): void;
}

declare const enum CBLReplicationStatus {

	kCBLReplicationStopped = 0,

	kCBLReplicationOffline = 1,

	kCBLReplicationIdle = 2,

	kCBLReplicationActive = 3
}

declare class CBLRevision extends NSObject {

	static alloc(): CBLRevision; // inherited from NSObject

	static new(): CBLRevision; // inherited from NSObject

	readonly attachmentNames: NSArray<string>;

	readonly attachments: NSArray<CBLAttachment>;

	readonly database: CBLDatabase;

	readonly document: CBLDocument;

	readonly isDeletion: boolean;

	readonly isGone: boolean;

	readonly parentRevision: CBLSavedRevision;

	readonly parentRevisionID: string;

	readonly properties: NSDictionary<string, any>;

	readonly revisionID: string;

	readonly userProperties: NSDictionary<string, any>;

	attachmentNamed(name: string): CBLAttachment;

	getRevisionHistory(): NSArray<CBLRevision>;

	objectForKeyedSubscript(key: string): any;

	propertyForKey(key: string): any;
}

declare class CBLSavedRevision extends CBLRevision {

	static alloc(): CBLSavedRevision; // inherited from NSObject

	static new(): CBLSavedRevision; // inherited from NSObject

	readonly propertiesAvailable: boolean;

	createRevision(): CBLUnsavedRevision;

	createRevisionWithPropertiesError(properties: NSDictionary<string, any>): CBLSavedRevision;

	deleteDocument(): CBLSavedRevision;
}

declare function CBLTextKey(text: string): any;

interface CBLUITableDelegate extends UITableViewDelegate {

	couchTableSourceCellForRowAtIndexPath?(source: CBLUITableSource, indexPath: NSIndexPath): UITableViewCell;

	couchTableSourceDeleteFailed?(source: CBLUITableSource, error: NSError): void;

	couchTableSourceDeleteRow?(source: CBLUITableSource, row: CBLQueryRow): boolean;

	couchTableSourceUpdateFromQueryPreviousRows?(source: CBLUITableSource, query: CBLLiveQuery, previousRows: NSArray<CBLQueryRow>): void;

	couchTableSourceWillUpdateFromQuery?(source: CBLUITableSource, query: CBLLiveQuery): void;

	couchTableSourceWillUseCellForRow?(source: CBLUITableSource, cell: UITableViewCell, row: CBLQueryRow): void;
}
declare var CBLUITableDelegate: {

	prototype: CBLUITableDelegate;
};

declare class CBLUITableSource extends NSObject implements UIDataSourceModelAssociation, UITableViewDataSource {

	static alloc(): CBLUITableSource; // inherited from NSObject

	static new(): CBLUITableSource; // inherited from NSObject

	deletionAllowed: boolean;

	labelProperty: string;

	query: CBLLiveQuery;

	rowDeleteAnimation: UITableViewRowAnimation;

	rowInsertAnimation: UITableViewRowAnimation;

	rowReplaceAnimation: UITableViewRowAnimation;

	readonly rows: NSArray<CBLQueryRow>;

	tableView: UITableView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	deleteDocumentsAtIndexesError(indexPaths: NSArray<NSIndexPath>): boolean;

	deleteDocumentsError(documents: NSArray<CBLDocument>): boolean;

	documentAtIndexPath(path: NSIndexPath): CBLDocument;

	indexPathForDocument(document: CBLDocument): NSIndexPath;

	indexPathForElementWithModelIdentifierInView(identifier: string, view: UIView): NSIndexPath;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	modelIdentifierForElementAtIndexPathInView(idx: NSIndexPath, view: UIView): string;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	reloadFromQuery(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	rowAtIndex(index: number): CBLQueryRow;

	rowAtIndexPath(path: NSIndexPath): CBLQueryRow;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;
}

declare class CBLUnsavedRevision extends CBLRevision {

	static alloc(): CBLUnsavedRevision; // inherited from NSObject

	static new(): CBLUnsavedRevision; // inherited from NSObject

	isDeletion: boolean;

	properties: NSMutableDictionary<any, any>;

	userProperties: NSDictionary<string, any>;

	removeAttachmentNamed(name: string): void;

	save(): CBLSavedRevision;

	saveAllowingConflict(): CBLSavedRevision;

	setAttachmentNamedWithContentTypeContent(name: string, mimeType: string, content: NSData): void;

	setAttachmentNamedWithContentTypeContentURL(name: string, mimeType: string, fileURL: NSURL): void;

	setObjectForKeyedSubscript(object: any, key: string): void;
}

interface CBLValidationContext extends NSObjectProtocol {

	changedKeys: NSArray<string>;

	currentRevision: CBLSavedRevision;

	source: NSURL;

	reject(): void;

	rejectWithMessage(message: string): void;

	validateChanges(enumerator: (p1: string, p2: any, p3: any) => boolean): boolean;
}
declare var CBLValidationContext: {

	prototype: CBLValidationContext;
};

declare function CBLVersion(): string;

declare class CBLView extends NSObject {

	static alloc(): CBLView; // inherited from NSObject

	static compiler(): CBLViewCompiler;

	static new(): CBLView; // inherited from NSObject

	static setCompiler(compiler: CBLViewCompiler): void;

	static totalValues(values: NSArray<any>): number;

	readonly database: CBLDatabase;

	documentType: string;

	readonly lastSequenceIndexed: number;

	readonly mapBlock: (p1: NSDictionary<string, any>, p2: (p1: any, p2: any) => void) => void;

	readonly name: string;

	readonly reduceBlock: (p1: NSArray<any>, p2: NSArray<any>, p3: boolean) => any;

	readonly stale: boolean;

	readonly totalRows: number;

	createQuery(): CBLQuery;

	deleteIndex(): void;

	deleteView(): void;

	setMapBlockReduceBlockVersion(mapBlock: (p1: NSDictionary<string, any>, p2: (p1: any, p2: any) => void) => void, reduceBlock: (p1: NSArray<any>, p2: NSArray<any>, p3: boolean) => any, version: string): boolean;

	setMapBlockVersion(mapBlock: (p1: NSDictionary<string, any>, p2: (p1: any, p2: any) => void) => void, version: string): boolean;

	updateIndex(): void;

	updateIndexAsync(onComplete: () => void): void;
}

interface CBLViewCompiler extends NSObjectProtocol {

	compileMapFunctionLanguage(mapSource: string, language: string): (p1: NSDictionary<string, any>, p2: (p1: any, p2: any) => void) => void;

	compileReduceFunctionLanguage(reduceSource: string, language: string): (p1: NSArray<any>, p2: NSArray<any>, p3: boolean) => any;
}
declare var CBLViewCompiler: {

	prototype: CBLViewCompiler;
};

declare const enum CBLViewIndexType {

	kCBLMapReduceIndex = 1,

	kCBLFullTextIndex = 2,

	kCBLGeoIndex = 3
}

declare var kCBLDatabaseChangeNotification: string;

declare var kCBLDocumentChangeNotification: string;

declare var kCBLForestDBStorage: string;

declare var kCBLProgressErrorKey: string;

declare var kCBLReplicationChangeNotification: string;

declare var kCBLSQLiteStorage: string;
