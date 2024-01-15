import { connectToMongoDB } from "@/libs/connectDB";
import { MongoClient, ServerApiVersion } from "mongodb";

async function handler(req, res) {
    if (req.method === "POST") {
        console.log("body = ",req.body)
        const name = req.body.name;
        const uri = process.env.MONGODB_URI;
        console.log("process.env.MONGODB_URI = ", uri);
        const dbName = "database";
        const collectionName = "foods";
        const { client , database } = await connectToMongoDB(uri,dbName);
        try {
            
            const collection = database.collection(collectionName);
            const datas = await collection.find({
                name: { 
                    $regex: name,
                    $options: 'i' 
                } 
            }).toArray();

            res.status(200).json({
                message: "Connected table = " + collectionName,
                data: datas
            });

        } catch (e) {
            console.log("Error fetching data from MongoDB:", e);
            res.status(500).json({ message: "Failed to fetch data from MongoDB" });
        } finally {
            await client.close();
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}

export default handler;
