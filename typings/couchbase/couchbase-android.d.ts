/// <reference path="./couchbase.d.ts" /> 
declare module com {
	export module couchbase {
		export module lite {
			export class BuildConfig {
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

import androidcontentContext = android.content.Context;
declare var javaioFile: any;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.couchbase.lite.NetworkReachabilityManager.d.ts" />
/// <reference path="./com.couchbase.lite.storage.SQLiteStorageEngineFactory.d.ts" />
/// <reference path="./java.io.File.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module android {
				export class AndroidContext {
					public setNetworkReachabilityManager(param0: com.couchbase.lite.NetworkReachabilityManager): void;
					public getNetworkReachabilityManager(): com.couchbase.lite.NetworkReachabilityManager;
					public getTempDir(): javaioFile;
					public getFilesDir(): javaioFile;
					public getSQLiteStorageEngineFactory(): com.couchbase.lite.storage.SQLiteStorageEngineFactory;
					public getUserAgent(): string;
					public constructor(param0: androidcontentContext);
					public getWrappedContext(): androidcontentContext;
				}
			}
		}
	}
}

import androidcontentIntent = android.content.Intent;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./com.couchbase.lite.android.AndroidContext.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module android {
				export class AndroidNetworkReachabilityManager {
					public constructor(param0: com.couchbase.lite.android.AndroidContext);
					public startListening(): void;
					public stopListening(): void;
					public isOnline(): boolean;
				}
				export module AndroidNetworkReachabilityManager {
					export class ConnectivityBroadcastReceiver {
						public onReceive(param0: androidcontentContext, param1: androidcontentIntent): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.couchbase.lite.internal.database.DatabasePlatformSupport.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module android {
				export class AndroidSQLiteStorageEngine {
					public getWALConnectionPoolSize(): number;
					public constructor(param0: androidcontentContext);
					public getDatabasePlatformSupport(): com.couchbase.lite.internal.database.DatabasePlatformSupport;
					public getICUDatabasePath(): string;
				}
				export module AndroidSQLiteStorageEngine {
					export class AndroidPlatformSupport {
						public isMainThread(): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.couchbase.lite.storage.SQLiteStorageEngine.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module android {
				export class AndroidSQLiteStorageEngineFactory {
					public createStorageEngine(): com.couchbase.lite.storage.SQLiteStorageEngine;
					public constructor(param0: androidcontentContext);
				}
			}
		}
	}
}

declare var javanetURL: any;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module auth {
				export class AESSecureTokenStore {
					public static TAG: string;
					public saveTokens(param0: javanetURL, param1: string, param2: Map<string, Object>): boolean;
					public loadTokens(param0: javanetURL, param1: string): Map<string, Object>;
					public constructor(param0: androidcontentContext);
					public deleteTokens(param0: javanetURL, param1: string): boolean;
				}
			}
		}
	}
}

/// <reference path="./com.couchbase.lite.Context.d.ts" />
/// <reference path="./com.couchbase.lite.auth.Authenticator.d.ts" />
/// <reference path="./com.couchbase.lite.auth.OIDCLoginCallback.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module auth {
				export class OpenIDConnectAuthenticatorFactory {
					public static createOpenIDConnectAuthenticator(param0: com.couchbase.lite.auth.OIDCLoginCallback, param1: com.couchbase.lite.Context): com.couchbase.lite.auth.Authenticator;
					public constructor();
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module auth {
				export interface TokenStore { }
				export class RSASecureTokenStore implements TokenStore {
					public saveTokens(param0: javanetURL, param1: string, param2: Map<string, Object>): boolean;
					public loadTokens(param0: javanetURL, param1: string): Map<string, Object>;
					public constructor(param0: androidcontentContext);
					public deleteTokens(param0: javanetURL, param1: string): boolean;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module auth {
				export class TokenStoreFactory {
					public constructor();
					public static build(param0: com.couchbase.lite.Context): com.couchbase.lite.auth.TokenStore;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module util {
				export class ICUUtils {
					public constructor();
					public static getICUDatabasePath(param0: androidcontentContext): string;
				}
			}
		}
	}
}

declare var javalangThrowable: any;
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module couchbase {
		export module lite {
			export module util {
				export class SimpleLogger {
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

