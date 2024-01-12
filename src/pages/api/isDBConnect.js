import { MongoClient, ServerApiVersion } from "mongodb";

export default async function handler(req, res) {
    if (req.method === "GET") {
        const uri = process.env.MONGODB_URI;
        const dbName = "database"
        const collectionName = "foods"

        console.log("process.env.MONGODB_URI = ", uri);
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
            const collection = database.collection(collectionName);
            const data = await collection.find({}).toArray();

            res.status(200).json({
                message: "Connected table = " + collectionName,
                data: data
            });
        } catch (e) {
            console.log("Error = ", e);
            console.dir;
            res.status(500).json({ message: "Connect Fail !!!" });
        } finally {
            await client.close();
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}
