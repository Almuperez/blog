// const mongoose = require('mongoose');
import mongoose from "mongoose";
import { parseIsolatedEntityName } from "typescript";
import { DB_URL } from "./config";
import { Category } from "./models/Category";
import { Entry } from "./models/Entry";

//no entiendo la difenrecia entre esto y el seed de infredientes

(async () => {
  //espera que esta promesa se resuelva
  await mongoose.connect(DB_URL).then(() => {
    console.log(`Connected to ${DB_URL}`);
  });

  try {
    await Category.collection.drop();
    await Entry.collection.drop();
  } catch (error) {
    console.log("Nada que vaciar de la base de datos");
  }

  const category = await Category.create({
      name: "planta"
  });

  const entry = await Entry.create({
      title: "mis plantas",
      body: "mis plantas son muy bonitas",
      category: category._id,
  })

  await mongoose.disconnect().then(() => console.log("bye")); // desconectar tras guardar la información
})();
