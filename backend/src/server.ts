import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("Listagem de Usuarios");

  res.json({
    usuarios: ["Wayter", "Walber"],
  });
});

app.listen(3333);
