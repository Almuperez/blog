import { FastifyPluginAsync } from "fastify";
import formBodyPlugin from "fastify-formbody";
import fastifyStatic from "fastify-static";
import mongoose from "mongoose";
import path from "path"
import pointOfView from "point-of-view";
import { DB_URL } from "./config";
// import { add_router } from "./routers/add.router";
import { main_router } from "./routers/main.router"

export const main_app: FastifyPluginAsync = async (app) => {
    //añadir mongoose.connect para ejecutar server typescritp
    mongoose.connect(DB_URL).then(()=>(`💎Connected to ${DB_URL}`))

    app.register(fastifyStatic, {
        root: path.join(__dirname, "../public"),
        prefix: "/staticFiles/",
    });
    app.register(pointOfView, {
        engine: {
            handlebars: require("handlebars"),
        },
        layout: "./views/layouts/main.hbs"
    });
    app.register((formBodyPlugin));

    //pluggin inventados, el de add_router va añadir prefijo /list cada vez que hagamos peticion
    app.register(main_router)
    // app.register(add_router, { prefix: "/list" })
}