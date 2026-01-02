// require("dotenv").config({path: "/.env"});
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./.env" });


connectDB()
    .then(() => {

        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error

        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(` Server is running on port ${process.env.PORT || 8000} `);
        })
    })
    .catch((err) => {
        console.log("MONGODB connection failed !!! Error: ", err);
    })









/*
import express from "express";
const app = express();
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("DB connected successfully");
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error

        });
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("Error in DB connection", error);
        throw error;
    }
})()
*/