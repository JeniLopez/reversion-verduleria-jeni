const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const ejs = require("ejs");
const app = express();
const port = 2500;

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.listen(port, () => {
    console.log("Hi! Server running on localhost:2500 :D");
});

app.get("/", (req, res) => {
    res.render("verduleria", { productos: productos });
});

let productos = [
    {
        nombre: "manzana",
        tipo: "fruta",
        precio: "180",
        stock: "true",
        ruta: "/img/manzana.jpg",
    },
    {
        nombre: "banana",
        tipo: "fruta",
        precio: "180",
        stock: "true",
        ruta: "/img/banana.jpg",
    },
    {
        nombre: "pera",
        tipo: "fruta",
        precio: "180",
        stock: "true",
        ruta: "/img/pera.jpg",
    },
    {
        nombre: "naranja",
        tipo: "fruta",
        precio: "180",
        stock: "false",
        ruta: "/img/naranja.jpg",
    },
    {
        nombre: "uvas",
        tipo: "fruta",
        precio: "180",
        stock: "true",
        ruta: "/img/uvas.jpg",
    },
    {
        nombre: "sandia",
        tipo: "fruta",
        precio: "180",
        stock: "true",
        ruta: "/img/sandia.jpg",
    },
    {
        nombre: "frutilla",
        tipo: "fruta",
        precio: "180",
        stock: "true",
        ruta: "/img/frutilla.jpg",
    },
    {
        nombre: "durazno",
        tipo: "fruta",
        precio: "180",
        stock: "true",
        ruta: "/img/durazno.jpg",
    },
    {
        nombre: "kiwi",
        tipo: "fruta",
        precio: "180",
        stock: "false",
        ruta: "/img/kiwi.jpg",
    },
    {
        nombre: "limon",
        tipo: "fruta",
        precio: "180",
        stock: "true",
        ruta: "/img/limon.jpg",
    },
    {
        nombre: "tomate",
        tipo: "fruta",
        precio: "180",
        stock: "true",
        ruta: "/img/tomate.jpg",
    },
    {
        nombre: "papa",
        tipo: "verdura",
        precio: "180",
        stock: "true",
        ruta: "/img/papa.jpg",
    },
    {
        nombre: "lechuga",
        tipo: "verdura",
        precio: "180",
        stock: "false",
        ruta: "/img/lechuga.jpg",
    },
    {
        nombre: "cebolla",
        tipo: "verdura",
        precio: "180",
        stock: "true",
        ruta: "/img/cebolla.jpg",
    },
    {
        nombre: "zapallitos",
        tipo: "verdura",
        precio: "180",
        stock: "true",
        ruta: "/img/zapallitos.jpg",
    },
    {
        nombre: "choclo",
        tipo: "verdura",
        precio: "180",
        stock: "true",
        ruta: "/img/choclo.jpg",
    },
    {
        nombre: "berenjena",
        tipo: "verdura",
        precio: "180",
        stock: "false",
        ruta: "/img/berenjena.jpg",
    },
    {
        nombre: "brocoli",
        tipo: "verdura",
        precio: "180",
        stock: "true",
        ruta: "/img/brocoli.jpg",
    },
    {
        nombre: "palta",
        tipo: "verdura",
        precio: "180",
        stock: "false",
        ruta: "/img/palta.jpg",
    },
    {
        nombre: "morron",
        tipo: "verdura",
        precio: "180",
        stock: "true",
        ruta: "/img/morron.jpg",
    },
    {
        nombre: "remolacha",
        tipo: "verdura",
        precio: "180",
        stock: "false",
        ruta: "/img/remolacha.jpg",
    },
];
