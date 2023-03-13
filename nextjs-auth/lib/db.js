import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://faris:7rvjAir0zNjBvmsh@cluster0.ywhoyfh.mongodb.net/?retryWrites=true&w=majority"
  );

  return client;
}
