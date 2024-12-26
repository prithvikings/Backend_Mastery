const { MongoClient } = require("mongodb");
require("dotenv").config();
// MongoDB connection details
const url = process.env.MONGO_URI;
const client = new MongoClient(url);
const dbName = "HelloWorld";
const collectionName = "Users";

// Main function to perform database operations
async function main() {
    try {
        // Connect to MongoDB
        await client.connect();
        console.log("Connected successfully to server");

        // Access the database and collection
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Example data to insert
        const data = {
            "Name": "Rahul Raj",
            "Age": 25,
            "Phone Number": 7654321098,
            "Address": {
                Country: "India",
                State: "Uttar Pradesh",
                City: "Delhi"
            }
        };

        // Uncomment the following block to insert a document
        /*
        const insertResult = await collection.insertOne(data);
        console.log("Inserted document =>", insertResult);
        */

        // Uncomment the following block to delete a document
        /*
        const deleteResult = await collection.deleteOne({ "Name": "Rahul Raj" });
        console.log("Deleted document =>", deleteResult);
        */

        // Uncomment the following block to update a document
        /*
        const updateResult = await collection.updateOne(
            { "Name": "Rahul Raj" },
            { $set: { "Age": 29 } }
        );
        console.log("Updated document =>", updateResult);
        */

        // Find all documents in the collection
        const findResult = await collection.find({}).toArray();
        console.log("Found documents =>", findResult);

        // Count the total number of documents in the collection
        const count = await collection.countDocuments();
        console.log("Total documents =>", count);

        // Find documents with Age > 25
        const findResult1 = await collection.find({ "Age": { $gt: 25 } }).toArray();
        console.log("Found documents with Age > 25 =>", findResult1);

        // Find documents whose Name is "Rahul Raj"
        const findResult2 = await collection.find({ Name: "Rahul Raj" }).toArray();
        console.log("Found documents whose Name is 'Rahul Raj' =>", findResult2);

        return "done"; // Indicates successful completion
    } catch (error) {
        // Log any errors that occur
        console.error("An error occurred:", error);
        throw error;
    } finally {
        // Close the MongoDB connection
        await client.close();
        console.log("Connection closed");
    }
}

// Execute the main function
main()
    .then(console.log)
    .catch(console.error);
