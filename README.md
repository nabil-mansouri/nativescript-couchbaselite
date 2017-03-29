# nativescript-couchbaselite
A nativescript plugin that brings you all couchbase features:
- CRUD (with ttl...)
- conflict management
- CRUD attachment (file, image...)
- View (map, mapreduce...)
- Queries (full query features, live queries, all docs, group levels)
- Replication (pull and push, filters, authentication, channels, listeners...)
- Database encryption
- Typescript mapping object (return objects with getters/setters...)

# Author

* Nabil MANSOURI
* My blog <http://e-devservice.com>

# How to use it

## 1- Import dependency

```

npm install --save nativescript-couchbaselite
	
```	

		
## 2- Samples


### Import lib 
```typescript
import {
    QueryResult, LiveQuery, QueryListener, Revision,
    DatabaseManager, Document, Database, AttachmentFactory, Emitter, AttachmentImage
} from 'nativescript-couchbaselite';

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
```

### Create Database encrypted

```typescript
let dbTest = DatabaseManager.getOrCreate({ name: "test", encryptionKey: "SECURE", create: true });
```

### Map Typescript Objects

```typescript
let mapping = new Map<string, any>();
mapping.set("USER", User);
dbTest.setMapping(mapping);
```

### CRUD Document

```typescript
let user = new User;
user.name = "user1";
user.group.name = "group1";
user.registerAtDate = now;
user.secure = true;       
dbTest.createDocument(user, "ID", { ttl: new Date() });
let fetched: User = <User>dbTest.getDocument(user.docId);
console.log(fetched.getName()); 
fetched.group.name = "group2";
dbTest.updateDocument(fetched.docId, fetched);               
let success = dbTest.deleteDocument(user.docId);
```

### Crud Attachment

```typescript
let source = fromResource("icon");
let attach = AttachmentFactory.fromSource(source, "yeah", AttachmentImage.PNG);
dbTest.setAttachment("ID", attach);
let attachments = dbTest.getAttachmentNames("ID");
let attach = dbTest.getAttachment("ID", "yeah");
removeAttachment("ID","yeah")
```

### Create view

```typescript
dbTest.createView({
    name: "users",
    revision: "1",
    map: (doc: User, emitter) => {
        if (doc.docType == "USER") {
            emitter.emit(doc.name.toLowerCase(), null);
        }
    }
})
```

### Query View

```typescript
let founded = dbTest.queryView("users", { mapOnly: true });
founded = dbTest.queryView("users", { mapOnly: true, startKey: "user4" });
founded = dbTest.queryView("users", { mapOnly: true, endKey: "user0" });
founded = dbTest.queryView("users", { mapOnly: true, startKeyDocID: "ID4" });
founded = dbTest.queryView("users", { mapOnly: true, endKeyDocID: "ID0" });
founded = dbTest.queryView("users", { mapOnly: true, descending: true });
founded = dbTest.queryView("users", { mapOnly: true, limit: 2 });
founded = dbTest.queryView("users", { mapOnly: true, skip: 3 });
founded = dbTest.queryView("users", { mapOnly: true, keys: ["user1", "user2"] });
```

### Use compound keys

```typescript
dbTest.createView({
    name: "users_compound",
    revision: "1",
    map: (doc: User, emitter) => {
        if (doc.docType == "USER") { 
            emitter.emit([doc.getName().toLowerCase(), doc.group.name.toLowerCase(), doc.registerAt, doc.registerAtDate, doc.secure], null); 
        }
    }
})
```

### Use MapReduce

```typescript
dbTest.createView({
    name: "users_bygroup",
    revision: "1",
    map: (doc: User, emitter) => {
        if (doc.docType == "USER") {
            emitter.emit([doc.group.name, doc.getName().toLowerCase()], doc.name);
        }
    },
    reduce: (keys: any[], values: any[], rereduce: boolean) => {
        return values.length;
    }
});
```

### Group by levels

```typescript
let founded = dbTest.queryView("users_bygroup", { mapOnly: false, groupLevel: 1 });
let groups = founded.getValues();
```

### Query Result manager

```typescript
let founded = dbTest.queryView("users_bygroup", { mapOnly: false, groupLevel: 1 });
let groups = founded.getValues();
let value = founded.firstValue();
let docs = <User[]>founded.getDocuments();
let doc = founded.firstDocument();
let docIds = founded.getDocumentIds();
```

### Query all docs

```typescript
let founded = dbTest.queryAllDocuments({ mapOnly: true });
```

### Use LiveQuery

```typescript
let listener = { 
    onRows(rows: QueryResult) { 
    }
};
let live = dbTest.liveQuery("users_live", { mapOnly: true }, l);
live.start();
live.waitForRows();
live.stop();
```

### Push Replication

```typescript 
let url = "http://localhost:4984/test/";
let push = dbTest.createPushReplication(url);
push.setBasicAuthenticator("user", "password");
dbTest.createFilter({
    name: "filter",
    filter: (doc: Revision<Document>, params: Map<string, any>) => {
        return doc.id == "ID1";
    }
});
push.setFilter("filter");
let listener = {
    count: 0,
    onChange: (p) => {
        l.count = p.changesCount;
    }
};
push.addChangeListener(listener)
push.start();
```

### Pull replication

```typescript
let url = "http://localhost:4984/test/";
let pull = dbTest.createPullReplication(url);
pull.setBasicAuthenticator("user", "password");
let pullCallback = {
    countEvent: 0,
    onChange: (p) => {
        pullCallback.countEvent++;
    }
}
pull.channels(["channel4"]);
pull.setDocIds(["ID1"]);
pull.addChangeListener(pullCallback);
pull.start();
```

### Conflict management

```typescript
let conflicts = dbTest.getConflicts("ID");
let merged = mergeConflict(conflicts);
dbTest.resolveConflict("ID", merged);
```

### Listen database events

```typescript
dbTest.addChangeListener({
    onChange:(params:DatabaseListenerParam[])=>{

    }
});
```

### Add any kind of attachment


```typescript
class CustomAttachment implements Attachment{
    getName() => {
        return name;//String
    },
    getStream () => {
        return bs;//InputStream or NSData
    },
    getType () => {
        return "any/any";//Content Type
    }
}
```
