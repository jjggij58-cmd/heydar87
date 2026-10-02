const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Panel is running"
  });
});

app.listen(PORT, () => {
  console.log(Panel running on port ${PORT});
});
