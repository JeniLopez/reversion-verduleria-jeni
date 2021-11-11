const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const ejs = require("ejs");
const app = express();
const port = 2500;

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
    console.log("hi! Server running on localhost:2500");
});

app.get("/", (req, res) => {
    res.render("galeria", { productos: productos });
});

let productos = [
    { nombre: "manzana", tipo: "fruta", precio: "180", stock: "true" },
    { nombre: "manzana", tipo: "fruta", precio: "180", stock: "true" },
    { nombre: "manzana", tipo: "fruta", precio: "180", stock: "true" },
    { nombre: "manzana", tipo: "fruta", precio: "180", stock: "true" },
    { nombre: "manzana", tipo: "fruta", precio: "180", stock: "true" },
    { nombre: "manzana", tipo: "fruta", precio: "180", stock: "true" },
    { nombre: "manzana", tipo: "fruta", precio: "180", stock: "true" },
    { nombre: "manzana", tipo: "fruta", precio: "180", stock: "true" },
    { nombre: "manzana", tipo: "fruta", precio: "180", stock: "true" },
    { nombre: "manzana", tipo: "fruta", precio: "180", stock: "true" },
    { nombre: "manzana", tipo: "fruta", precio: "180", stock: "true" },
    { nombre: "manzana", tipo: "fruta", precio: "180", stock: "true" },
    { nombre: "manzana", tipo: "fruta", precio: "180", stock: "true" },
    { nombre: "manzana", tipo: "fruta", precio: "180", stock: "true" },
    { nombre: "manzana", tipo: "fruta", precio: "180", stock: "true" },
    { nombre: "manzana", tipo: "fruta", precio: "180", stock: "true" },
    { nombre: "manzana", tipo: "fruta", precio: "180", stock: "true" },
    { nombre: "manzana", tipo: "fruta", precio: "180", stock: "true" },
    { nombre: "manzana", tipo: "fruta", precio: "180", stock: "true" },
    { nombre: "manzana", tipo: "fruta", precio: "180", stock: "true" },
    { nombre: "manzana", tipo: "fruta", precio: "180", stock: "true" },
];
