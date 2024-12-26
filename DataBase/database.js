const { MongoClient } = require("mongodb");
const url = "mongodb+srv://prithvi312:fsfO7jyoofuv0jz5@cluster0.wrm4e.mongodb.net/";
const client = new MongoClient(url);
const dbName = "HelloWorld";
const collectionName = "Users";

async function main() {
    try {
        await client.connect();
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        const collection = db.collection(collectionName);       
        // Add any operations you want to perform with the collection here.

        // The following example inserts a new document in the collection
        const data={
            "Name":"Rahul Raj",
            "Age":25,
            "Phone Number":7654321098,
            "Address":{
                Country:"India",
                State:"Uttar Pradesh",
                City:"Delhi"
            }
        }
        // const insertResult = await collection.insertOne(data); //insertOne is used to insert a single document We can use insertMany to insert multiple documents
        // console.log('Inserted documents =>', insertResult);


        // The following example delete a document in the collection
        // const deleteResult = await collection.deleteOne({ "Name": "Rahul Raj" }); //deleteOne is used to delete a single document We can use deleteMany to delete multiple documents
        // console.log('Deleted documents =>', deleteResult);


        // The following example update a document in the collection
        // const updateResult= await collection.updateOne({"Name":"Rahul Raj"},{$set:{"Age":29}}); //updateOne is used to update a single document We can use updateMany to update multiple documents
        // console.log('Updated documents =>', updateResult);

        // The following example finds all the documents in the collection
        const findResult = await collection.find({}).toArray();
        console.log('Found documents =>', findResult);

        const count=await collection.countDocuments();
        console.log('Total documents =>', count);

        //find all the document with age greater than 25
        const findResult1=await collection.find({"Age":{$gt:25}}).toArray();
        console.log('Found documents with age greater than 25 =>', findResult1);
        
        //find all the document whose name starts with Rahul Raj
        const findResult2=await collection.find({Name:"Rahul Raj"}).toArray();
        console.log('Found documents whose name starts with Rahul Raj =>', findResult2);

        return 'done'; // Indicates the operation completed successfully
    } catch (error) {
        console.error("An error occurred:", error);
        throw error; // Rethrow the error for further handling if needed
    } finally {
        // Ensure the client connection is closed
        await client.close();
        console.log("Connection closed");
    }
}
// Execute the main function
main()
    .then(console.log)
    .catch(console.error);
