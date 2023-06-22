import express from "express";

const PORT = 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

application.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
