import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import authRoute from "./routes/auth.js"
import adminRoute from "./routes/admin.js"
import eventsRoute from "./routes/events.js"
import mediasRoute from "./routes/medias.js"
import bedroomsRoute from "./routes/bedrooms.js"
import dormsRoute from "./routes/dorms.js"
import jobOffersRoute from "./routes/jobOffers.js"
import roomsToRentRoute from "./routes/roomsToRent.js"
import partnersRoute from "./routes/partners.js"
import busRoute from "./routes/bus.js"
import pricesVisitRoute from "./routes/pricesVisit.js"
import timeTableRoute from "./routes/timeTable.js"
import privateEventsRoute from "./routes/privateEvents.js"
import breakfastRoute from "./routes/breakfast.js"
import foodRoute from "./routes/food.js"

const app = express()
dotenv.config()

// façon d'écrire de base, avant d'ajouter le "type": "module", dans le package.json
// const express = require("express")

const connect = async () => {
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB")
  } catch (error) {
    throw error
  }
}

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected!")
})

//middlewares
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/admin", adminRoute)
app.use("/api/events", eventsRoute)
app.use("/api/medias", mediasRoute)
app.use("/api/bedrooms", bedroomsRoute)
app.use("/api/dorms", dormsRoute)
app.use("/api/jobOffers", jobOffersRoute)
app.use("/api/roomsToRent", roomsToRentRoute)
app.use("/api/partners", partnersRoute)
app.use("/api/bus", busRoute)
app.use("/api/pricesVisit", pricesVisitRoute)
app.use("/api/timeTable", timeTableRoute)
app.use("/api/privateEvents", privateEventsRoute)
app.use("/api/breakfast", breakfastRoute)
app.use("/api/food", foodRoute)

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Un problème est survenu.";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
    connect()
})