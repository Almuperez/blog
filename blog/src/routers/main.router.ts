import { FastifyPluginAsync, FastifyRequest, FastifyReply } from "fastify";
import mongoose from "mongoose";
import { DB_URL } from "../config";
import { Entry } from "../models/Entry";

const home = async (request: FastifyRequest, reply: FastifyReply) => {
    await mongoose.connect(DB_URL).then(() => console.log(`Connected to ${DB_URL}`));

    //no entienod bien que hace fin()
    const entry = await Entry.find().lean();
    console.log("We have entrys");
    const data = { title: "My blog", entry }
    reply.view("views/home", data);
}

export const main_router: FastifyPluginAsync = async (app) => {
    app.get("/", home)
}