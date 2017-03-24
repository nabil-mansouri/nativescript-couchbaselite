import javalangreflectType = java.lang.reflect.Type;
/// <reference path="./com.google.gson.JsonDeserializationContext.d.ts" />
/// <reference path="./com.google.gson.JsonElement.d.ts" />
/// <reference path="./com.google.gson.JsonSerializationContext.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare module com {
	export module google {
		export module gson {
			export class DefaultDateTypeAdapter {
				public constructor(param0: number, param1: number);
				public serialize(param0: Object, param1: javalangreflectType, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
				public serialize(param0: Date, param1: javalangreflectType, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
				public toString(): string;
				public deserialize(param0: com.google.gson.JsonElement, param1: javalangreflectType, param2: com.google.gson.JsonDeserializationContext): Date;
				public deserialize(param0: com.google.gson.JsonElement, param1: javalangreflectType, param2: com.google.gson.JsonDeserializationContext): Object;
			}
		}
	}
}

import javalangClass = java.lang.Class;
/// <reference path="./com.google.gson.FieldAttributes.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
declare module com {
	export module google {
		export module gson {
			export class ExclusionStrategy {
				/**
				 * Constructs a new instance of the com.google.gson.ExclusionStrategy interface with the provided implementation.
				 */
				public constructor(implementation: {
					shouldSkipField(param0: com.google.gson.FieldAttributes): boolean;
					shouldSkipClass(param0: javalangClass): boolean;
				});
				public shouldSkipField(param0: com.google.gson.FieldAttributes): boolean;
				public shouldSkipClass(param0: javalangClass): boolean;
			}
		}
	}
}

import javalangreflectField = java.lang.reflect.Field;
import javalangannotationAnnotation = java.lang.annotation.Annotation;
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.annotation.Annotation.d.ts" />
/// <reference path="./java.lang.reflect.Field.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
declare module com {
	export module google {
		export module gson {
			export class FieldAttributes {
				public getDeclaredClass(): javalangClass;
				public getAnnotations(): javautilCollection;
				public hasModifier(param0: number): boolean;
				public getDeclaringClass(): javalangClass;
				public getDeclaredType(): javalangreflectType;
				public constructor(param0: javalangreflectField);
				public getName(): string;
				public getAnnotation(param0: javalangClass): javalangannotationAnnotation;
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.reflect.Field.d.ts" />
declare module com {
	export module google {
		export module gson {
			export abstract class FieldNamingPolicy {
				public static IDENTITY: com.google.gson.FieldNamingPolicy;
				public static UPPER_CAMEL_CASE: com.google.gson.FieldNamingPolicy;
				public static UPPER_CAMEL_CASE_WITH_SPACES: com.google.gson.FieldNamingPolicy;
				public static LOWER_CASE_WITH_UNDERSCORES: com.google.gson.FieldNamingPolicy;
				public static LOWER_CASE_WITH_DASHES: com.google.gson.FieldNamingPolicy;
				public static valueOf(param0: string): com.google.gson.FieldNamingPolicy;
				public static values(): native.Array<com.google.gson.FieldNamingPolicy>;
				public translateName(param0: javalangreflectField): string;
			}
		}
	}
}

/// <reference path="./java.lang.reflect.Field.d.ts" />
declare module com {
	export module google {
		export module gson {
			export class FieldNamingStrategy {
				/**
				 * Constructs a new instance of the com.google.gson.FieldNamingStrategy interface with the provided implementation.
				 */
				public constructor(implementation: {
					translateName(param0: javalangreflectField): string;
				});
				public translateName(param0: javalangreflectField): string;
			}
		}
	}
}

import javalangAppendable = java.lang.Appendable;
import javaioWriter = java.io.Writer;
import javaioReader = java.io.Reader;
/// <reference path="./com.google.gson.FieldNamingStrategy.d.ts" />
/// <reference path="./com.google.gson.JsonElement.d.ts" />
/// <reference path="./com.google.gson.TypeAdapter.d.ts" />
/// <reference path="./com.google.gson.TypeAdapterFactory.d.ts" />
/// <reference path="./com.google.gson.internal.Excluder.d.ts" />
/// <reference path="./com.google.gson.reflect.TypeToken.d.ts" />
/// <reference path="./com.google.gson.stream.JsonReader.d.ts" />
/// <reference path="./com.google.gson.stream.JsonWriter.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
/// <reference path="./java.io.Writer.d.ts" />
/// <reference path="./java.lang.Appendable.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
declare module com {
	export module google {
		export module gson {
			export class Gson {
				public excluder(): com.google.gson.internal.Excluder;
				public getDelegateAdapter(param0: com.google.gson.TypeAdapterFactory, param1: com.google.gson.reflect.TypeToken): com.google.gson.TypeAdapter;
				public toJson(param0: Object): string;
				public fromJson(param0: com.google.gson.JsonElement, param1: javalangreflectType): Object;
				public serializeNulls(): boolean;
				public toJson(param0: Object, param1: javalangreflectType, param2: com.google.gson.stream.JsonWriter): void;
				public toJson(param0: com.google.gson.JsonElement, param1: com.google.gson.stream.JsonWriter): void;
				public htmlSafe(): boolean;
				public constructor();
				public fieldNamingStrategy(): com.google.gson.FieldNamingStrategy;
				public fromJson(param0: com.google.gson.stream.JsonReader, param1: javalangreflectType): Object;
				public fromJson(param0: string, param1: java.lang.Class<any>): Object;
				public newJsonWriter(param0: javaioWriter): com.google.gson.stream.JsonWriter;
				public fromJson(param0: javaioReader, param1: javalangClass): Object;
				public newJsonReader(param0: javaioReader): com.google.gson.stream.JsonReader;
				public toJson(param0: Object, param1: javalangAppendable): void;
				public toJson(param0: com.google.gson.JsonElement, param1: javalangAppendable): void;
				public fromJson(param0: string, param1: javalangreflectType): Object;
				public toString(): string;
				public toJsonTree(param0: Object, param1: javalangreflectType): com.google.gson.JsonElement;
				public toJson(param0: Object, param1: javalangreflectType): string;
				public toJson(param0: com.google.gson.JsonElement): string;
				public fromJson(param0: javaioReader, param1: javalangreflectType): Object;
				public getAdapter(param0: com.google.gson.reflect.TypeToken): com.google.gson.TypeAdapter;
				public toJsonTree(param0: Object): com.google.gson.JsonElement;
				public fromJson(param0: com.google.gson.JsonElement, param1: javalangClass): Object;
				public toJson(param0: Object, param1: javalangreflectType, param2: javalangAppendable): void;
				public getAdapter(param0: javalangClass): com.google.gson.TypeAdapter;
			}
			export module Gson {
				export class FutureTypeAdapter extends com.google.gson.TypeAdapter {
					public setDelegate(param0: com.google.gson.TypeAdapter): void;
					public write(param0: com.google.gson.stream.JsonWriter, param1: Object): void;
					public read(param0: com.google.gson.stream.JsonReader): Object;
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.ExclusionStrategy.d.ts" />
/// <reference path="./com.google.gson.FieldNamingPolicy.d.ts" />
/// <reference path="./com.google.gson.FieldNamingStrategy.d.ts" />
/// <reference path="./com.google.gson.Gson.d.ts" />
/// <reference path="./com.google.gson.LongSerializationPolicy.d.ts" />
/// <reference path="./com.google.gson.TypeAdapterFactory.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
declare module com {
	export module google {
		export module gson {
			export class GsonBuilder {
				public setPrettyPrinting(): com.google.gson.GsonBuilder;
				public setDateFormat(param0: number, param1: number): com.google.gson.GsonBuilder;
				public setLenient(): com.google.gson.GsonBuilder;
				public constructor();
				public registerTypeHierarchyAdapter(param0: javalangClass, param1: Object): com.google.gson.GsonBuilder;
				public generateNonExecutableJson(): com.google.gson.GsonBuilder;
				public excludeFieldsWithoutExposeAnnotation(): com.google.gson.GsonBuilder;
				public setDateFormat(param0: number): com.google.gson.GsonBuilder;
				public addSerializationExclusionStrategy(param0: com.google.gson.ExclusionStrategy): com.google.gson.GsonBuilder;
				public serializeNulls(): com.google.gson.GsonBuilder;
				public serializeSpecialFloatingPointValues(): com.google.gson.GsonBuilder;
				public addDeserializationExclusionStrategy(param0: com.google.gson.ExclusionStrategy): com.google.gson.GsonBuilder;
				public setExclusionStrategies(param0: native.Array<com.google.gson.ExclusionStrategy>): com.google.gson.GsonBuilder;
				public registerTypeAdapter(param0: javalangreflectType, param1: Object): com.google.gson.GsonBuilder;
				public enableComplexMapKeySerialization(): com.google.gson.GsonBuilder;
				public create(): com.google.gson.Gson;
				public registerTypeAdapterFactory(param0: com.google.gson.TypeAdapterFactory): com.google.gson.GsonBuilder;
				public disableInnerClassSerialization(): com.google.gson.GsonBuilder;
				public disableHtmlEscaping(): com.google.gson.GsonBuilder;
				public setFieldNamingPolicy(param0: com.google.gson.FieldNamingPolicy): com.google.gson.GsonBuilder;
				public excludeFieldsWithModifiers(param0: native.Array<number>): com.google.gson.GsonBuilder;
				public setFieldNamingStrategy(param0: com.google.gson.FieldNamingStrategy): com.google.gson.GsonBuilder;
				public setLongSerializationPolicy(param0: com.google.gson.LongSerializationPolicy): com.google.gson.GsonBuilder;
				public setDateFormat(param0: string): com.google.gson.GsonBuilder;
				public setVersion(param0: number): com.google.gson.GsonBuilder;
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
declare module com {
	export module google {
		export module gson {
			export class InstanceCreator {
				/**
				 * Constructs a new instance of the com.google.gson.InstanceCreator interface with the provided implementation.
				 */
				public constructor(implementation: {
					createInstance(param0: javalangreflectType): Object;
				});
				public createInstance(param0: javalangreflectType): Object;
			}
		}
	}
}

import Boolean = java.lang.Boolean;
import javalangCharacter = java.lang.Character;
import javalangNumber = java.lang.Number;
import javamathBigDecimal = java.math.BigDecimal;
import javamathBigInteger = java.math.BigInteger;
/// <reference path="./com.google.gson.JsonElement.d.ts" />
/// <reference path="./java.lang.Boolean.d.ts" />
/// <reference path="./java.lang.Character.d.ts" />
/// <reference path="./java.lang.Number.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.math.BigDecimal.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
declare module com {
	export module google {
		export module gson {
			export class JsonArray extends com.google.gson.JsonElement {
				public addAll(param0: com.google.gson.JsonArray): void;
				public getAsLong(): number;
				public getAsShort(): number;
				public add(param0: Boolean): void;
				public constructor();
				public remove(param0: number): com.google.gson.JsonElement;
				public iterator(): javautilIterator;
				public getAsBigDecimal(): javamathBigDecimal;
				public getAsInt(): number;
				public getAsBoolean(): boolean;
				public add(param0: com.google.gson.JsonElement): void;
				public hashCode(): number;
				public getAsDouble(): number;
				public getAsString(): string;
				public set(param0: number, param1: com.google.gson.JsonElement): com.google.gson.JsonElement;
				public getAsCharacter(): string;
				public add(param0: javalangCharacter): void;
				public contains(param0: com.google.gson.JsonElement): boolean;
				public add(param0: string): void;
				public size(): number;
				public getAsByte(): number;
				public remove(param0: com.google.gson.JsonElement): boolean;
				public get(param0: number): com.google.gson.JsonElement;
				public equals(param0: Object): boolean;
				public getAsBigInteger(): javamathBigInteger;
				public add(param0: javalangNumber): void;
				public getAsNumber(): javalangNumber;
				public getAsFloat(): number;
			}
		}
	}
}

/// <reference path="./com.google.gson.JsonElement.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
declare module com {
	export module google {
		export module gson {
			export class JsonDeserializationContext {
				/**
				 * Constructs a new instance of the com.google.gson.JsonDeserializationContext interface with the provided implementation.
				 */
				public constructor(implementation: {
					deserialize(param0: com.google.gson.JsonElement, param1: javalangreflectType): Object;
				});
				public deserialize(param0: com.google.gson.JsonElement, param1: javalangreflectType): Object;
			}
		}
	}
}

/// <reference path="./com.google.gson.JsonDeserializationContext.d.ts" />
/// <reference path="./com.google.gson.JsonElement.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
declare module com {
	export module google {
		export module gson {
			export class JsonDeserializer {
				/**
				 * Constructs a new instance of the com.google.gson.JsonDeserializer interface with the provided implementation.
				 */
				public constructor(implementation: {
					deserialize(param0: com.google.gson.JsonElement, param1: javalangreflectType, param2: com.google.gson.JsonDeserializationContext): Object;
				});
				public deserialize(param0: com.google.gson.JsonElement, param1: javalangreflectType, param2: com.google.gson.JsonDeserializationContext): Object;
			}
		}
	}
}

/// <reference path="./com.google.gson.JsonArray.d.ts" />
/// <reference path="./com.google.gson.JsonNull.d.ts" />
/// <reference path="./com.google.gson.JsonObject.d.ts" />
/// <reference path="./com.google.gson.JsonPrimitive.d.ts" />
/// <reference path="./java.lang.Number.d.ts" />
/// <reference path="./java.math.BigDecimal.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />
declare module com {
	export module google {
		export module gson {
			export abstract class JsonElement {
				public isJsonArray(): boolean;
				public getAsJsonArray(): com.google.gson.JsonArray;
				public getAsJsonPrimitive(): com.google.gson.JsonPrimitive;
				public getAsLong(): number;
				public getAsCharacter(): string;
				public isJsonPrimitive(): boolean;
				public getAsShort(): number;
				public toString(): string;
				public constructor();
				public getAsJsonNull(): com.google.gson.JsonNull;
				public getAsByte(): number;
				public getAsBigDecimal(): javamathBigDecimal;
				public getAsBoolean(): boolean;
				public getAsInt(): number;
				public isJsonObject(): boolean;
				public getAsBigInteger(): javamathBigInteger;
				public getAsJsonObject(): com.google.gson.JsonObject;
				public getAsNumber(): javalangNumber;
				public isJsonNull(): boolean;
				public getAsDouble(): number;
				public getAsFloat(): number;
				public getAsString(): string;
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module google {
		export module gson {
			export class JsonIOException extends com.google.gson.JsonParseException {
				public constructor(param0: any);
				public constructor(param0: string, param1: any);
				public constructor(param0: string);
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module gson {
			export class JsonNull extends com.google.gson.JsonElement {
				public static INSTANCE: com.google.gson.JsonNull;
				public equals(param0: Object): boolean;
				public hashCode(): number;
				public constructor();
			}
		}
	}
}

/// <reference path="./com.google.gson.JsonArray.d.ts" />
/// <reference path="./com.google.gson.JsonElement.d.ts" />
/// <reference path="./com.google.gson.JsonPrimitive.d.ts" />
/// <reference path="./java.lang.Boolean.d.ts" />
/// <reference path="./java.lang.Character.d.ts" />
/// <reference path="./java.lang.Number.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module google {
		export module gson {
			export class JsonObject extends com.google.gson.JsonElement {
				public getAsJsonArray(): com.google.gson.JsonArray;
				public getAsJsonPrimitive(): com.google.gson.JsonPrimitive;
				public get(param0: string): com.google.gson.JsonElement;
				public getAsJsonPrimitive(param0: string): com.google.gson.JsonPrimitive;
				public getAsJsonObject(param0: string): com.google.gson.JsonObject;
				public remove(param0: string): com.google.gson.JsonElement;
				public addProperty(param0: string, param1: Boolean): void;
				public constructor();
				public addProperty(param0: string, param1: javalangCharacter): void;
				public size(): number;
				public getAsJsonArray(param0: string): com.google.gson.JsonArray;
				public addProperty(param0: string, param1: javalangNumber): void;
				public equals(param0: Object): boolean;
				public hashCode(): number;
				public getAsJsonObject(): com.google.gson.JsonObject;
				public add(param0: string, param1: com.google.gson.JsonElement): void;
				public addProperty(param0: string, param1: string): void;
				public has(param0: string): boolean;
				public entrySet(): javautilSet;
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module google {
		export module gson {
			export class JsonParseException {
				public constructor(param0: any);
				public constructor(param0: string, param1: any);
				public constructor(param0: string);
			}
		}
	}
}

/// <reference path="./com.google.gson.JsonElement.d.ts" />
/// <reference path="./com.google.gson.stream.JsonReader.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module gson {
			export class JsonParser {
				public parse(param0: javaioReader): com.google.gson.JsonElement;
				public parse(param0: string): com.google.gson.JsonElement;
				public parse(param0: com.google.gson.stream.JsonReader): com.google.gson.JsonElement;
				public constructor();
			}
		}
	}
}

/// <reference path="./java.lang.Boolean.d.ts" />
/// <reference path="./java.lang.Character.d.ts" />
/// <reference path="./java.lang.Number.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.math.BigDecimal.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />
declare module com {
	export module google {
		export module gson {
			export class JsonPrimitive extends com.google.gson.JsonElement {
				public getAsLong(): number;
				public constructor(param0: javalangCharacter);
				public getAsCharacter(): string;
				public isNumber(): boolean;
				public getAsShort(): number;
				public constructor(param0: string);
				public constructor();
				public getAsBigDecimal(): javamathBigDecimal;
				public getAsByte(): number;
				public getAsBoolean(): boolean;
				public getAsInt(): number;
				public equals(param0: Object): boolean;
				public getAsBigInteger(): javamathBigInteger;
				public hashCode(): number;
				public getAsNumber(): javalangNumber;
				public isString(): boolean;
				public constructor(param0: Boolean);
				public constructor(param0: number);
				public getAsDouble(): number;
				public getAsFloat(): number;
				public isBoolean(): boolean;
				public getAsString(): string;
			}
		}
	}
}

/// <reference path="./com.google.gson.JsonElement.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
declare module com {
	export module google {
		export module gson {
			export class JsonSerializationContext {
				/**
				 * Constructs a new instance of the com.google.gson.JsonSerializationContext interface with the provided implementation.
				 */
				public constructor(implementation: {
					serialize(param0: Object): com.google.gson.JsonElement;
					serialize(param0: Object, param1: javalangreflectType): com.google.gson.JsonElement;
				});
				public serialize(param0: Object): com.google.gson.JsonElement;
				public serialize(param0: Object, param1: javalangreflectType): com.google.gson.JsonElement;
			}
		}
	}
}

/// <reference path="./com.google.gson.JsonElement.d.ts" />
/// <reference path="./com.google.gson.JsonSerializationContext.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
declare module com {
	export module google {
		export module gson {
			export class JsonSerializer {
				/**
				 * Constructs a new instance of the com.google.gson.JsonSerializer interface with the provided implementation.
				 */
				public constructor(implementation: {
					serialize(param0: Object, param1: javalangreflectType, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
				});
				public serialize(param0: Object, param1: javalangreflectType, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
			}
		}
	}
}

/// <reference path="./com.google.gson.JsonElement.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module gson {
			export class JsonStreamParser {
				public remove(): void;
				public hasNext(): boolean;
				public constructor(param0: javaioReader);
				public next(): com.google.gson.JsonElement;
				public constructor(param0: string);
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module google {
		export module gson {
			export class JsonSyntaxException extends com.google.gson.JsonParseException {
				public constructor(param0: any);
				public constructor(param0: string, param1: any);
				public constructor(param0: string);
			}
		}
	}
}

/// <reference path="./com.google.gson.JsonElement.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module gson {
			export abstract class LongSerializationPolicy {
				public static DEFAULT: com.google.gson.LongSerializationPolicy;
				public static STRING: com.google.gson.LongSerializationPolicy;
				public static values(): native.Array<com.google.gson.LongSerializationPolicy>;
				public serialize(param0: number): com.google.gson.JsonElement;
				public static valueOf(param0: string): com.google.gson.LongSerializationPolicy;
			}
		}
	}
}

/// <reference path="./com.google.gson.JsonElement.d.ts" />
/// <reference path="./com.google.gson.stream.JsonReader.d.ts" />
/// <reference path="./com.google.gson.stream.JsonWriter.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
/// <reference path="./java.io.Writer.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module gson {
			export abstract class TypeAdapter {
				public toJson(param0: javaioWriter, param1: Object): void;
				public fromJson(param0: string): Object;
				public write(param0: com.google.gson.stream.JsonWriter, param1: Object): void;
				public read(param0: com.google.gson.stream.JsonReader): Object;
				public fromJsonTree(param0: com.google.gson.JsonElement): Object;
				public toJson(param0: Object): string;
				public nullSafe(): com.google.gson.TypeAdapter;
				public toJsonTree(param0: Object): com.google.gson.JsonElement;
				public fromJson(param0: javaioReader): Object;
				public constructor();
			}
		}
	}
}

/// <reference path="./com.google.gson.Gson.d.ts" />
/// <reference path="./com.google.gson.TypeAdapter.d.ts" />
/// <reference path="./com.google.gson.reflect.TypeToken.d.ts" />
declare module com {
	export module google {
		export module gson {
			export class TypeAdapterFactory {
				/**
				 * Constructs a new instance of the com.google.gson.TypeAdapterFactory interface with the provided implementation.
				 */
				public constructor(implementation: {
					create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken): com.google.gson.TypeAdapter;
				});
				public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken): com.google.gson.TypeAdapter;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module annotations {
				export class Expose {
					/**
					 * Constructs a new instance of the com.google.gson.annotations.Expose interface with the provided implementation.
					 */
					public constructor(implementation: {
						serialize(): boolean;
						deserialize(): boolean;
					});
					public deserialize(): boolean;
					public serialize(): boolean;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Class.d.ts" />
declare module com {
	export module google {
		export module gson {
			export module annotations {
				export class JsonAdapter {
					/**
					 * Constructs a new instance of the com.google.gson.annotations.JsonAdapter interface with the provided implementation.
					 */
					public constructor(implementation: {
						value(): javalangClass;
						nullSafe(): boolean;
					});
					public value(): javalangClass;
					public nullSafe(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module annotations {
				export class SerializedName {
					/**
					 * Constructs a new instance of the com.google.gson.annotations.SerializedName interface with the provided implementation.
					 */
					public constructor(implementation: {
						value(): string;
						alternate(): native.Array<string>;
					});
					public value(): string;
					public alternate(): native.Array<string>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module annotations {
				export class Since {
					/**
					 * Constructs a new instance of the com.google.gson.annotations.Since interface with the provided implementation.
					 */
					public constructor(implementation: {
						value(): number;
					});
					public value(): number;
				}
			}
		}
	}
}

import javalangreflectParameterizedType = java.lang.reflect.ParameterizedType;
import javalangreflectGenericArrayType = java.lang.reflect.GenericArrayType;
import javalangreflectWildcardType = java.lang.reflect.WildcardType;
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.reflect.GenericArrayType.d.ts" />
/// <reference path="./java.lang.reflect.ParameterizedType.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
/// <reference path="./java.lang.reflect.WildcardType.d.ts" />
declare module com {
	export module google {
		export module gson {
			export module annotations {
				export class Until {
					/**
					 * Constructs a new instance of the com.google.gson.annotations.Until interface with the provided implementation.
					 */
					public constructor(implementation: {
						value(): number;
					});
					public value(): number;
				}
				export module internal {
					export module Gson {
						export module Until {
							export class Preconditions {
								public static checkNotNull(param0: Object): Object;
								public static checkArgument(param0: boolean): void;
							}
							export class Types {
								public static newParameterizedTypeWithOwner(param0: javalangreflectType, param1: javalangreflectType, param2: native.Array<javalangreflectType>): javalangreflectParameterizedType;
								public static typeToString(param0: javalangreflectType): string;
								public static getMapKeyAndValueTypes(param0: javalangreflectType, param1: javalangClass): native.Array<javalangreflectType>;
								public static canonicalize(param0: javalangreflectType): javalangreflectType;
								public static getArrayComponentType(param0: javalangreflectType): javalangreflectType;
								public static getRawType(param0: javalangreflectType): javalangClass;
								public static getCollectionElementType(param0: javalangreflectType, param1: javalangClass): javalangreflectType;
								public static supertypeOf(param0: javalangreflectType): javalangreflectWildcardType;
								public static equals(param0: javalangreflectType, param1: javalangreflectType): boolean;
								public static arrayOf(param0: javalangreflectType): javalangreflectGenericArrayType;
								public static subtypeOf(param0: javalangreflectType): javalangreflectWildcardType;
								public static resolve(param0: javalangreflectType, param1: javalangClass, param2: javalangreflectType): javalangreflectType;
							}
							export module Types {
								export class GenericArrayTypeImpl {
									public constructor(param0: javalangreflectType);
									public equals(param0: Object): boolean;
									public toString(): string;
									public getGenericComponentType(): javalangreflectType;
									public hashCode(): number;
								}
								export class ParameterizedTypeImpl {
									public constructor(param0: javalangreflectType, param1: javalangreflectType, param2: native.Array<javalangreflectType>);
									public equals(param0: Object): boolean;
									public toString(): string;
									public getRawType(): javalangreflectType;
									public getActualTypeArguments(): native.Array<javalangreflectType>;
									public getOwnerType(): javalangreflectType;
									public hashCode(): number;
								}
								export class WildcardTypeImpl {
									public equals(param0: Object): boolean;
									public toString(): string;
									public constructor(param0: native.Array<javalangreflectType>, param1: native.Array<javalangreflectType>);
									public getUpperBounds(): native.Array<javalangreflectType>;
									public getLowerBounds(): native.Array<javalangreflectType>;
									public hashCode(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}
 
/// <reference path="./com.google.gson.internal.ObjectConstructor.d.ts" />
/// <reference path="./com.google.gson.reflect.TypeToken.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module gson {
			export module internal {
				export class ConstructorConstructor {
					public toString(): string;
					public constructor(param0: javautilMap);
					public get(param0: com.google.gson.reflect.TypeToken): com.google.gson.internal.ObjectConstructor;
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.ExclusionStrategy.d.ts" />
/// <reference path="./com.google.gson.Gson.d.ts" />
/// <reference path="./com.google.gson.TypeAdapter.d.ts" />
/// <reference path="./com.google.gson.reflect.TypeToken.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.reflect.Field.d.ts" />
declare module com {
	export module google {
		export module gson {
			export module internal {
				export class Excluder {
					public static DEFAULT: com.google.gson.internal.Excluder;
					public disableInnerClassSerialization(): com.google.gson.internal.Excluder;
					public excludeClass(param0: javalangClass, param1: boolean): boolean;
					public clone(): com.google.gson.internal.Excluder;
					public excludeField(param0: javalangreflectField, param1: boolean): boolean;
					public constructor();
					public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken): com.google.gson.TypeAdapter;
					public excludeFieldsWithoutExposeAnnotation(): com.google.gson.internal.Excluder;
					public withExclusionStrategy(param0: com.google.gson.ExclusionStrategy, param1: boolean, param2: boolean): com.google.gson.internal.Excluder;
					public withVersion(param0: number): com.google.gson.internal.Excluder;
					public withModifiers(param0: native.Array<number>): com.google.gson.internal.Excluder;
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.stream.JsonReader.d.ts" />
declare module com {
	export module google {
		export module gson {
			export module internal {
				export abstract class JsonReaderInternalAccess {
					public static INSTANCE: com.google.gson.internal.JsonReaderInternalAccess;
					public constructor();
					public promoteNameToValue(param0: com.google.gson.stream.JsonReader): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module gson {
			export module internal {
				export class LazilyParsedNumber {
					public intValue(): number;
					public toString(): string;
					public constructor(param0: string);
					public doubleValue(): number;
					public equals(param0: Object): boolean;
					public floatValue(): number;
					public longValue(): number;
					public hashCode(): number;
				}
			}
		}
	}
}

import javautilComparator = java.util.Comparator;
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Comparator.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module google {
		export module gson {
			export module internal {
				export class LinkedHashTreeMap {
					public constructor();
					public remove(param0: Object): Object;
					public containsKey(param0: Object): boolean;
					public clear(): void;
					public size(): number;
					public constructor(param0: javautilComparator);
					public put(param0: Object, param1: Object): Object;
					public entrySet(): javautilSet;
					public keySet(): javautilSet;
					public get(param0: Object): Object;
				}
				export module LinkedHashTreeMap {
					export class AvlBuilder {
					}
					export class AvlIterator {
						public next(): com.google.gson.internal.LinkedHashTreeMap.Node;
					}
					export class EntrySet {
						public iterator(): javautilIterator;
						public remove(param0: Object): boolean;
						public clear(): void;
						public size(): number;
						public contains(param0: Object): boolean;
					}
					export class KeySet {
						public iterator(): javautilIterator;
						public remove(param0: Object): boolean;
						public clear(): void;
						public size(): number;
						public contains(param0: Object): boolean;
					}
					export abstract class LinkedTreeMapIterator {
						public hasNext(): boolean;
						public remove(): void;
					}
					export class Node {
						public first(): com.google.gson.internal.LinkedHashTreeMap.Node;
						public setValue(param0: Object): Object;
						public equals(param0: Object): boolean;
						public getValue(): Object;
						public last(): com.google.gson.internal.LinkedHashTreeMap.Node;
						public hashCode(): number;
						public toString(): string;
						public getKey(): Object;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Comparator.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module google {
		export module gson {
			export module internal {
				export class LinkedTreeMap {
					public constructor();
					public remove(param0: Object): Object;
					public containsKey(param0: Object): boolean;
					public clear(): void;
					public size(): number;
					public constructor(param0: javautilComparator);
					public put(param0: Object, param1: Object): Object;
					public entrySet(): javautilSet;
					public keySet(): javautilSet;
					public get(param0: Object): Object;
				}
				export module LinkedTreeMap {
					export class EntrySet {
						public iterator(): javautilIterator;
						public remove(param0: Object): boolean;
						public clear(): void;
						public size(): number;
						public contains(param0: Object): boolean;
					}
					export class KeySet {
						public iterator(): javautilIterator;
						public remove(param0: Object): boolean;
						public clear(): void;
						public size(): number;
						public contains(param0: Object): boolean;
					}
					export abstract class LinkedTreeMapIterator {
						public hasNext(): boolean;
						public remove(): void;
					}
					export class Node {
						public setValue(param0: Object): Object;
						public equals(param0: Object): boolean;
						public getValue(): Object;
						public hashCode(): number;
						public last(): com.google.gson.internal.LinkedTreeMap.Node;
						public first(): com.google.gson.internal.LinkedTreeMap.Node;
						public toString(): string;
						public getKey(): Object;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module gson {
			export module internal {
				export class ObjectConstructor {
					/**
					 * Constructs a new instance of the com.google.gson.internal.ObjectConstructor interface with the provided implementation.
					 */
					public constructor(implementation: {
						construct(): Object;
					});
					public construct(): Object;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
declare module com {
	export module google {
		export module gson {
			export module internal {
				export class Primitives {
					public static wrap(param0: javalangClass): javalangClass;
					public static isWrapperType(param0: javalangreflectType): boolean;
					public static isPrimitive(param0: javalangreflectType): boolean;
					public static unwrap(param0: javalangClass): javalangClass;
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.JsonElement.d.ts" />
/// <reference path="./com.google.gson.stream.JsonReader.d.ts" />
/// <reference path="./com.google.gson.stream.JsonWriter.d.ts" />
/// <reference path="./java.io.Writer.d.ts" />
/// <reference path="./java.lang.Appendable.d.ts" />
declare module com {
	export module google {
		export module gson {
			export module internal {
				export class Streams {
					public static write(param0: com.google.gson.JsonElement, param1: com.google.gson.stream.JsonWriter): void;
					public static parse(param0: com.google.gson.stream.JsonReader): com.google.gson.JsonElement;
					public static writerForAppendable(param0: javalangAppendable): javaioWriter;
				}
				export module Streams {
					export class AppendableWriter {
						public close(): void;
						public write(param0: number): void;
						public flush(): void;
						public write(param0: native.Array<string>, param1: number, param2: number): void;
					}
					export module AppendableWriter {
						export class CurrentWrite {
							public charAt(param0: number): string;
							public length(): number;
							public subSequence(param0: number, param1: number): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module gson {
			export module internal {
				export abstract class UnsafeAllocator {
					public static create(): com.google.gson.internal.UnsafeAllocator;
					public constructor();
					public newInstance(param0: javalangClass): Object;
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.Gson.d.ts" />
/// <reference path="./com.google.gson.TypeAdapter.d.ts" />
/// <reference path="./com.google.gson.TypeAdapterFactory.d.ts" />
/// <reference path="./com.google.gson.stream.JsonReader.d.ts" />
/// <reference path="./com.google.gson.stream.JsonWriter.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class ArrayTypeAdapter extends com.google.gson.TypeAdapter {
						public static FACTORY: com.google.gson.TypeAdapterFactory;
						public read(param0: com.google.gson.stream.JsonReader): Object;
						public constructor();
						public write(param0: com.google.gson.stream.JsonWriter, param1: Object): void;
						public constructor(param0: com.google.gson.Gson, param1: com.google.gson.TypeAdapter, param2: javalangClass);
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.Gson.d.ts" />
/// <reference path="./com.google.gson.TypeAdapter.d.ts" />
/// <reference path="./com.google.gson.internal.ConstructorConstructor.d.ts" />
/// <reference path="./com.google.gson.internal.ObjectConstructor.d.ts" />
/// <reference path="./com.google.gson.reflect.TypeToken.d.ts" />
/// <reference path="./com.google.gson.stream.JsonReader.d.ts" />
/// <reference path="./com.google.gson.stream.JsonWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class CollectionTypeAdapterFactory {
						public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken): com.google.gson.TypeAdapter;
						public constructor(param0: com.google.gson.internal.ConstructorConstructor);
					}
					export module CollectionTypeAdapterFactory {
						export class Adapter extends com.google.gson.TypeAdapter {
							public constructor();
							public constructor(param0: com.google.gson.Gson, param1: javalangreflectType, param2: com.google.gson.TypeAdapter, param3: com.google.gson.internal.ObjectConstructor);
							public write(param0: com.google.gson.stream.JsonWriter, param1: javautilCollection): void;
							public write(param0: com.google.gson.stream.JsonWriter, param1: Object): void;
							public read(param0: com.google.gson.stream.JsonReader): javautilCollection;
							public read(param0: com.google.gson.stream.JsonReader): Object;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.TypeAdapterFactory.d.ts" />
/// <reference path="./com.google.gson.stream.JsonReader.d.ts" />
/// <reference path="./com.google.gson.stream.JsonWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class DateTypeAdapter extends com.google.gson.TypeAdapter {
						public static FACTORY: com.google.gson.TypeAdapterFactory;
						public read(param0: com.google.gson.stream.JsonReader): Object;
						public constructor();
						public read(param0: com.google.gson.stream.JsonReader): Date;
						public write(param0: com.google.gson.stream.JsonWriter, param1: Object): void;
						public write(param0: com.google.gson.stream.JsonWriter, param1: Date): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.Gson.d.ts" />
/// <reference path="./com.google.gson.TypeAdapter.d.ts" />
/// <reference path="./com.google.gson.internal.ConstructorConstructor.d.ts" />
/// <reference path="./com.google.gson.reflect.TypeToken.d.ts" />
declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class JsonAdapterAnnotationTypeAdapterFactory {
						public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken): com.google.gson.TypeAdapter;
						public constructor(param0: com.google.gson.internal.ConstructorConstructor);
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.JsonElement.d.ts" />
/// <reference path="./com.google.gson.stream.JsonToken.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class JsonTreeReader extends com.google.gson.stream.JsonReader {
						public nextNull(): void;
						public beginObject(): void;
						public promoteNameToValue(): void;
						public nextBoolean(): boolean;
						public close(): void;
						public constructor(param0: javaioReader);
						public endArray(): void;
						public getPath(): string;
						public beginArray(): void;
						public endObject(): void;
						public toString(): string;
						public nextInt(): number;
						public peek(): com.google.gson.stream.JsonToken;
						public nextLong(): number;
						public nextName(): string;
						public skipValue(): void;
						public hasNext(): boolean;
						public constructor(param0: com.google.gson.JsonElement);
						public nextDouble(): number;
						public nextString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.JsonElement.d.ts" />
/// <reference path="./com.google.gson.stream.JsonWriter.d.ts" />
/// <reference path="./java.io.Writer.d.ts" />
/// <reference path="./java.lang.Boolean.d.ts" />
/// <reference path="./java.lang.Number.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class JsonTreeWriter extends com.google.gson.stream.JsonWriter {
						public value(param0: Boolean): com.google.gson.stream.JsonWriter;
						public nullValue(): com.google.gson.stream.JsonWriter;
						public constructor();
						public name(param0: string): com.google.gson.stream.JsonWriter;
						public value(param0: boolean): com.google.gson.stream.JsonWriter;
						public value(param0: number): com.google.gson.stream.JsonWriter;
						public close(): void;
						public flush(): void;
						public endObject(): com.google.gson.stream.JsonWriter;
						public beginArray(): com.google.gson.stream.JsonWriter;
						public endArray(): com.google.gson.stream.JsonWriter;
						public beginObject(): com.google.gson.stream.JsonWriter;
						public constructor(param0: javaioWriter);
						public value(param0: javalangNumber): com.google.gson.stream.JsonWriter;
						public get(): com.google.gson.JsonElement;
						public value(param0: string): com.google.gson.stream.JsonWriter;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.Gson.d.ts" />
/// <reference path="./com.google.gson.TypeAdapter.d.ts" />
/// <reference path="./com.google.gson.internal.ConstructorConstructor.d.ts" />
/// <reference path="./com.google.gson.internal.ObjectConstructor.d.ts" />
/// <reference path="./com.google.gson.internal.bind.MapTypeAdapterFactory.d.ts" />
/// <reference path="./com.google.gson.reflect.TypeToken.d.ts" />
/// <reference path="./com.google.gson.stream.JsonReader.d.ts" />
/// <reference path="./com.google.gson.stream.JsonWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class MapTypeAdapterFactory {
						public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken): com.google.gson.TypeAdapter;
						public constructor(param0: com.google.gson.internal.ConstructorConstructor, param1: boolean);
					}
					export module MapTypeAdapterFactory {
						export class Adapter extends com.google.gson.TypeAdapter {
							public constructor();
							public read(param0: com.google.gson.stream.JsonReader): javautilMap;
							public constructor(param0: com.google.gson.internal.bind.MapTypeAdapterFactory, param1: com.google.gson.Gson, param2: javalangreflectType, param3: com.google.gson.TypeAdapter, param4: javalangreflectType, param5: com.google.gson.TypeAdapter, param6: com.google.gson.internal.ObjectConstructor);
							public write(param0: com.google.gson.stream.JsonWriter, param1: Object): void;
							public read(param0: com.google.gson.stream.JsonReader): Object;
							public write(param0: com.google.gson.stream.JsonWriter, param1: javautilMap): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.TypeAdapterFactory.d.ts" />
/// <reference path="./com.google.gson.stream.JsonReader.d.ts" />
/// <reference path="./com.google.gson.stream.JsonWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class ObjectTypeAdapter extends com.google.gson.TypeAdapter {
						public static FACTORY: com.google.gson.TypeAdapterFactory;
						public read(param0: com.google.gson.stream.JsonReader): Object;
						public write(param0: com.google.gson.stream.JsonWriter, param1: Object): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.FieldNamingStrategy.d.ts" />
/// <reference path="./com.google.gson.Gson.d.ts" />
/// <reference path="./com.google.gson.TypeAdapter.d.ts" />
/// <reference path="./com.google.gson.internal.ConstructorConstructor.d.ts" />
/// <reference path="./com.google.gson.internal.Excluder.d.ts" />
/// <reference path="./com.google.gson.internal.bind.JsonAdapterAnnotationTypeAdapterFactory.d.ts" />
/// <reference path="./com.google.gson.reflect.TypeToken.d.ts" />
/// <reference path="./com.google.gson.stream.JsonReader.d.ts" />
/// <reference path="./com.google.gson.stream.JsonWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.reflect.Field.d.ts" />
declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class ReflectiveTypeAdapterFactory {
						public constructor(param0: com.google.gson.internal.ConstructorConstructor, param1: com.google.gson.FieldNamingStrategy, param2: com.google.gson.internal.Excluder, param3: com.google.gson.internal.bind.JsonAdapterAnnotationTypeAdapterFactory);
						public excludeField(param0: javalangreflectField, param1: boolean): boolean;
						public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken): com.google.gson.TypeAdapter;
					}
					export module ReflectiveTypeAdapterFactory {
						export class Adapter extends com.google.gson.TypeAdapter {
							public write(param0: com.google.gson.stream.JsonWriter, param1: Object): void;
							public read(param0: com.google.gson.stream.JsonReader): Object;
						}
						export abstract class BoundField {
							public constructor(param0: string, param1: boolean, param2: boolean);
						}
					}
				}
			}
		}
	}
}

import javasqlDate = java.sql.Date;
/// <reference path="./com.google.gson.TypeAdapterFactory.d.ts" />
/// <reference path="./com.google.gson.stream.JsonReader.d.ts" />
/// <reference path="./com.google.gson.stream.JsonWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.sql.Date.d.ts" />
declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class SqlDateTypeAdapter extends com.google.gson.TypeAdapter {
						public static FACTORY: com.google.gson.TypeAdapterFactory;
						public read(param0: com.google.gson.stream.JsonReader): Object;
						public constructor();
						public read(param0: com.google.gson.stream.JsonReader): javasqlDate;
						public write(param0: com.google.gson.stream.JsonWriter, param1: javasqlDate): void;
						public write(param0: com.google.gson.stream.JsonWriter, param1: Object): void;
					}
				}
			}
		}
	}
}

import javasqlTime = java.sql.Time;
/// <reference path="./com.google.gson.TypeAdapterFactory.d.ts" />
/// <reference path="./com.google.gson.stream.JsonReader.d.ts" />
/// <reference path="./com.google.gson.stream.JsonWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.sql.Time.d.ts" />
declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class TimeTypeAdapter extends com.google.gson.TypeAdapter {
						public static FACTORY: com.google.gson.TypeAdapterFactory;
						public read(param0: com.google.gson.stream.JsonReader): Object;
						public constructor();
						public write(param0: com.google.gson.stream.JsonWriter, param1: javasqlTime): void;
						public write(param0: com.google.gson.stream.JsonWriter, param1: Object): void;
						public read(param0: com.google.gson.stream.JsonReader): javasqlTime;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.Gson.d.ts" />
/// <reference path="./com.google.gson.JsonDeserializer.d.ts" />
/// <reference path="./com.google.gson.JsonElement.d.ts" />
/// <reference path="./com.google.gson.JsonSerializer.d.ts" />
/// <reference path="./com.google.gson.TypeAdapter.d.ts" />
/// <reference path="./com.google.gson.TypeAdapterFactory.d.ts" />
/// <reference path="./com.google.gson.reflect.TypeToken.d.ts" />
/// <reference path="./com.google.gson.stream.JsonReader.d.ts" />
/// <reference path="./com.google.gson.stream.JsonWriter.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class TreeTypeAdapter extends com.google.gson.TypeAdapter {
						public read(param0: com.google.gson.stream.JsonReader): Object;
						public constructor(param0: com.google.gson.JsonSerializer, param1: com.google.gson.JsonDeserializer, param2: com.google.gson.Gson, param3: com.google.gson.reflect.TypeToken, param4: com.google.gson.TypeAdapterFactory);
						public static newFactoryWithMatchRawType(param0: com.google.gson.reflect.TypeToken, param1: Object): com.google.gson.TypeAdapterFactory;
						public constructor();
						public static newTypeHierarchyFactory(param0: javalangClass, param1: Object): com.google.gson.TypeAdapterFactory;
						public write(param0: com.google.gson.stream.JsonWriter, param1: Object): void;
						public static newFactory(param0: com.google.gson.reflect.TypeToken, param1: Object): com.google.gson.TypeAdapterFactory;
					}
					export module TreeTypeAdapter {
						export class GsonContextImpl {
							public serialize(param0: Object, param1: javalangreflectType): com.google.gson.JsonElement;
							public serialize(param0: Object): com.google.gson.JsonElement;
							public deserialize(param0: com.google.gson.JsonElement, param1: javalangreflectType): Object;
						}
						export class SingleTypeFactory {
							public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken): com.google.gson.TypeAdapter;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.stream.JsonReader.d.ts" />
/// <reference path="./com.google.gson.stream.JsonWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class TypeAdapterRuntimeTypeWrapper extends com.google.gson.TypeAdapter {
						public read(param0: com.google.gson.stream.JsonReader): Object;
						public write(param0: com.google.gson.stream.JsonWriter, param1: Object): void;
					}
				}
			}
		}
	}
}

import javalangEnum = java.lang.Enum;
/// <reference path="./com.google.gson.TypeAdapter.d.ts" />
/// <reference path="./com.google.gson.TypeAdapterFactory.d.ts" />
/// <reference path="./com.google.gson.reflect.TypeToken.d.ts" />
/// <reference path="./com.google.gson.stream.JsonReader.d.ts" />
/// <reference path="./com.google.gson.stream.JsonWriter.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class TypeAdapters {
						public static CLASS: com.google.gson.TypeAdapter;
						public static CLASS_FACTORY: com.google.gson.TypeAdapterFactory;
						public static BIT_SET: com.google.gson.TypeAdapter;
						public static BIT_SET_FACTORY: com.google.gson.TypeAdapterFactory;
						public static BOOLEAN: com.google.gson.TypeAdapter;
						public static BOOLEAN_AS_STRING: com.google.gson.TypeAdapter;
						public static BOOLEAN_FACTORY: com.google.gson.TypeAdapterFactory;
						public static BYTE: com.google.gson.TypeAdapter;
						public static BYTE_FACTORY: com.google.gson.TypeAdapterFactory;
						public static SHORT: com.google.gson.TypeAdapter;
						public static SHORT_FACTORY: com.google.gson.TypeAdapterFactory;
						public static INTEGER: com.google.gson.TypeAdapter;
						public static INTEGER_FACTORY: com.google.gson.TypeAdapterFactory;
						public static ATOMIC_INTEGER: com.google.gson.TypeAdapter;
						public static ATOMIC_INTEGER_FACTORY: com.google.gson.TypeAdapterFactory;
						public static ATOMIC_BOOLEAN: com.google.gson.TypeAdapter;
						public static ATOMIC_BOOLEAN_FACTORY: com.google.gson.TypeAdapterFactory;
						public static ATOMIC_INTEGER_ARRAY: com.google.gson.TypeAdapter;
						public static ATOMIC_INTEGER_ARRAY_FACTORY: com.google.gson.TypeAdapterFactory;
						public static LONG: com.google.gson.TypeAdapter;
						public static FLOAT: com.google.gson.TypeAdapter;
						public static DOUBLE: com.google.gson.TypeAdapter;
						public static NUMBER: com.google.gson.TypeAdapter;
						public static NUMBER_FACTORY: com.google.gson.TypeAdapterFactory;
						public static CHARACTER: com.google.gson.TypeAdapter;
						public static CHARACTER_FACTORY: com.google.gson.TypeAdapterFactory;
						public static STRING: com.google.gson.TypeAdapter;
						public static BIG_DECIMAL: com.google.gson.TypeAdapter;
						public static BIG_INTEGER: com.google.gson.TypeAdapter;
						public static STRING_FACTORY: com.google.gson.TypeAdapterFactory;
						public static STRING_BUILDER: com.google.gson.TypeAdapter;
						public static STRING_BUILDER_FACTORY: com.google.gson.TypeAdapterFactory;
						public static STRING_BUFFER: com.google.gson.TypeAdapter;
						public static STRING_BUFFER_FACTORY: com.google.gson.TypeAdapterFactory;
						public static URL: com.google.gson.TypeAdapter;
						public static URL_FACTORY: com.google.gson.TypeAdapterFactory;
						public static URI: com.google.gson.TypeAdapter;
						public static URI_FACTORY: com.google.gson.TypeAdapterFactory;
						public static INET_ADDRESS: com.google.gson.TypeAdapter;
						public static INET_ADDRESS_FACTORY: com.google.gson.TypeAdapterFactory;
						public static UUID: com.google.gson.TypeAdapter;
						public static UUID_FACTORY: com.google.gson.TypeAdapterFactory;
						public static CURRENCY: com.google.gson.TypeAdapter;
						public static CURRENCY_FACTORY: com.google.gson.TypeAdapterFactory;
						public static TIMESTAMP_FACTORY: com.google.gson.TypeAdapterFactory;
						public static CALENDAR: com.google.gson.TypeAdapter;
						public static CALENDAR_FACTORY: com.google.gson.TypeAdapterFactory;
						public static LOCALE: com.google.gson.TypeAdapter;
						public static LOCALE_FACTORY: com.google.gson.TypeAdapterFactory;
						public static JSON_ELEMENT: com.google.gson.TypeAdapter;
						public static JSON_ELEMENT_FACTORY: com.google.gson.TypeAdapterFactory;
						public static ENUM_FACTORY: com.google.gson.TypeAdapterFactory;
						public static newFactoryForMultipleTypes(param0: javalangClass, param1: javalangClass, param2: com.google.gson.TypeAdapter): com.google.gson.TypeAdapterFactory;
						public static newFactory(param0: javalangClass, param1: com.google.gson.TypeAdapter): com.google.gson.TypeAdapterFactory;
						public static newFactory(param0: com.google.gson.reflect.TypeToken, param1: com.google.gson.TypeAdapter): com.google.gson.TypeAdapterFactory;
						public static newFactory(param0: javalangClass, param1: javalangClass, param2: com.google.gson.TypeAdapter): com.google.gson.TypeAdapterFactory;
						public static newTypeHierarchyFactory(param0: javalangClass, param1: com.google.gson.TypeAdapter): com.google.gson.TypeAdapterFactory;
					}
					export module TypeAdapters {
						export class EnumTypeAdapter extends com.google.gson.TypeAdapter {
							public constructor();
							public constructor(param0: javalangClass);
							public read(param0: com.google.gson.stream.JsonReader): javalangEnum;
							public write(param0: com.google.gson.stream.JsonWriter, param1: Object): void;
							public write(param0: com.google.gson.stream.JsonWriter, param1: javalangEnum): void;
							public read(param0: com.google.gson.stream.JsonReader): Object;
						}
					}
				}
			}
		}
	}
}

import javautilTimeZone = java.util.TimeZone;
import javatextParsePosition = java.text.ParsePosition;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.text.ParsePosition.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.TimeZone.d.ts" />
declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export module util {
						export class ISO8601Utils {
							public constructor();
							public static format(param0: Date, param1: boolean): string;
							public static format(param0: Date, param1: boolean, param2: javautilTimeZone): string;
							public static format(param0: Date): string;
							public static parse(param0: string, param1: javatextParsePosition): Date;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
declare module com {
	export module google {
		export module gson {
			export module reflect {
				export class TypeToken<T> {
					public equals(param0: Object): boolean;
					public static get(param0: java.lang.Class<any>): com.google.gson.reflect.TypeToken<any>;
					public isAssignableFrom(param0: javalangClass): boolean;
					public isAssignableFrom(param0: com.google.gson.reflect.TypeToken): boolean;
					public static getArray(param0: javalangreflectType): com.google.gson.reflect.TypeToken;
					public getRawType(): javalangClass;
					public toString(): string;
					public getType(): java.lang.reflect.Type;
					public constructor();
					public isAssignableFrom(param0: javalangreflectType): boolean;
					public static getParameterized(param0: javalangreflectType, param1: native.Array<javalangreflectType>): com.google.gson.reflect.TypeToken;
					public hashCode(): number;
					public static get(param0: java.lang.reflect.Type): com.google.gson.reflect.TypeToken<any>;
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.stream.JsonToken.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
declare module com {
	export module google {
		export module gson {
			export module stream {
				export class JsonReader {
					public beginArray(): void;
					public nextBoolean(): boolean;
					public isLenient(): boolean;
					public nextNull(): void;
					public nextString(): string;
					public nextDouble(): number;
					public nextLong(): number;
					public setLenient(param0: boolean): void;
					public hasNext(): boolean;
					public beginObject(): void;
					public getPath(): string;
					public peek(): com.google.gson.stream.JsonToken;
					public toString(): string;
					public constructor(param0: javaioReader);
					public endObject(): void;
					public nextInt(): number;
					public close(): void;
					public endArray(): void;
					public skipValue(): void;
					public nextName(): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module stream {
				export class JsonScope {
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module gson {
			export module stream {
				export class JsonToken {
					public static BEGIN_ARRAY: com.google.gson.stream.JsonToken;
					public static END_ARRAY: com.google.gson.stream.JsonToken;
					public static BEGIN_OBJECT: com.google.gson.stream.JsonToken;
					public static END_OBJECT: com.google.gson.stream.JsonToken;
					public static NAME: com.google.gson.stream.JsonToken;
					public static STRING: com.google.gson.stream.JsonToken;
					public static NUMBER: com.google.gson.stream.JsonToken;
					public static BOOLEAN: com.google.gson.stream.JsonToken;
					public static NULL: com.google.gson.stream.JsonToken;
					public static END_DOCUMENT: com.google.gson.stream.JsonToken;
					public static values(): native.Array<com.google.gson.stream.JsonToken>;
					public static valueOf(param0: string): com.google.gson.stream.JsonToken;
				}
			}
		}
	}
}

/// <reference path="./java.io.Writer.d.ts" />
/// <reference path="./java.lang.Boolean.d.ts" />
/// <reference path="./java.lang.Number.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module google {
		export module gson {
			export module stream {
				export class JsonWriter {
					public isHtmlSafe(): boolean;
					public beginArray(): com.google.gson.stream.JsonWriter;
					public jsonValue(param0: string): com.google.gson.stream.JsonWriter;
					public isLenient(): boolean;
					public setSerializeNulls(param0: boolean): void;
					public constructor(param0: javaioWriter);
					public flush(): void;
					public setLenient(param0: boolean): void;
					public beginObject(): com.google.gson.stream.JsonWriter;
					public value(param0: number): com.google.gson.stream.JsonWriter;
					public name(param0: string): com.google.gson.stream.JsonWriter;
					public setHtmlSafe(param0: boolean): void;
					public getSerializeNulls(): boolean;
					public endArray(): com.google.gson.stream.JsonWriter;
					public nullValue(): com.google.gson.stream.JsonWriter;
					public close(): void;
					public setIndent(param0: string): void;
					public value(param0: string): com.google.gson.stream.JsonWriter;
					public endObject(): com.google.gson.stream.JsonWriter;
					public value(param0: Boolean): com.google.gson.stream.JsonWriter;
					public value(param0: boolean): com.google.gson.stream.JsonWriter;
					public value(param0: javalangNumber): com.google.gson.stream.JsonWriter;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module google {
		export module gson {
			export module stream {
				export class MalformedJsonException {
					public constructor(param0: string, param1: any);
					public constructor(param0: string);
					public constructor(param0: any);
				}
			}
		}
	}
} 