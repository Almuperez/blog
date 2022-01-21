import mongoose, { Document, Schema } from "mongoose";
import { Category } from "./Category";

export interface Entry extends Document {
    // Creamos un nuevo interface que extienda de documentos (el tipo por defecto de mongoose)
    title: String;
    body: String;
    category: Category ["_id"];
}

const schema = new Schema({
    // Creamos un nuevo esquema
    title: String,
    body: String ,
    category: { type:Schema.Types.ObjectId, ref:"Category" }
});

export const Entry = mongoose.model<Entry>("Entry", schema)