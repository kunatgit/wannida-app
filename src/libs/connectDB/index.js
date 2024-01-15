import { MongoClient, ServerApiVersion } from "mongodb";

export async function connectToMongoDB(uri,dbName) {
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
    });

    try {
        await client.connect();
        const database = client.db(dbName);

        return { client, database };
    } catch (e) {
        console.log("Error connecting to MongoDB:", e);
        throw e; // You may want to handle the error appropriately for your application
    }
}
