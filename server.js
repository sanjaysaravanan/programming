// server.js
//

const express = require("express");

const PORT = process.env.PORT || 4001;
const app = express();

// Sample
app.get("/flower", (req, res) => {
  res.json({
    name: "Dandelion",
    colour: "Blue-ish",
  });
});

app.post("/flower", (req, res) => {
  console.log(req.body);
  res.json({
    status: "Success!!!",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});
