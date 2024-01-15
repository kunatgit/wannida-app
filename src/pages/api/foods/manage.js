import { connectToMongoDB } from "@/libs/connectDB";
import { ObjectId } from "mongodb";

async function handler(req, res) {
    if (req.method === "POST") {
        console.log("body = ", req.body);
        const name = req.body.name;
        const uri = process.env.MONGODB_URI;
        console.log("process.env.MONGODB_URI = ", uri);
        const dbName = "database";
        const collectionName = "foods";
        const { client, database } = await connectToMongoDB(uri, dbName);
        try {
            var response = {
                message: "",
            };
            const collection = database.collection(collectionName);
            const { _id, name, calorie, ingredients } = req.body;

            var objectID;
            try {
                objectID = new ObjectId(_id)
            } catch (error) {
                objectID = new ObjectId()
            }
            
            const existingFood = await collection.findOne({ _id: objectID })

            if (existingFood) {
                await collection.updateOne({ _id: objectID }, { $set: { name, calorie, ingredients } });
                response.message = "แก้ไข ข้อมูลสำเร็จ"
            }else {
                await collection.insertOne({ _id: objectID, name, calorie, ingredients });
                response.message = "เพิ่ม เมนูสำเร็จ"
            }
            res.status(200).json(response);
        } catch (e) {
            console.log("Error fetching data from MongoDB:", e);
            res.status(500).json({
                message: "Failed to fetch data from MongoDB",
            });
        } finally {
            await client.close();
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}

export default handler;
