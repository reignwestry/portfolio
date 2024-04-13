// import React from 'react';
import express from 'express';
import ViteExpress from 'vite-express';
// import Home from './../src/pages/HomePage'; 

const app = express();
//? REACT ROUTING is auto implemented
app.get("/message", (_, res) => res.send("Hello from express!"));
// app.get("/message", (_, res) => res.send("Hello from express!"));
// app.get("/message", (_, res) => res.send("Hello from express!"));


ViteExpress.listen(app, 3000, () => console.log("[BACKEND] EXPRESS Server is listening... http://localhost:3000"));