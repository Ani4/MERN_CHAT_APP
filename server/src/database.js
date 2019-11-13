import { MongoClient } from "mongodb";
import mongoose from "mongoose";

const URL =
  "mongodb+srv://chatapp:chatapp@sandbox-jzo0x.mongodb.net/Chatapp?retryWrites=true&w=majority";

export default class Database {
  connect() {
    return new Promise((resolve, reject) => {
      mongoose.connect(
        URL,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err, db) => {
          return err ? reject(err) : resolve(db);
        }
      );
    });
  }
}
