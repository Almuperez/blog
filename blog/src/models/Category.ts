import mongoose, { Document, Schema } from "mongoose";

export interface Category extends Document {
    // Creamos un nuevo interface que extienda de documentos (el tipo por defecto de mongoose)
    name: String;
}

const schema = new Schema({
    // Creamos un nuevo esquema
    name: String,

});

export const Category = mongoose.model<Category>("Category", schema)