const express = require("express");
const app = express();
const port = 18088;

app.use(express.json());
app.get("/api/hello", (req, res) => {
  res.send("Hello from TurboRepo API!");
});
app.listen(port, () => {
  console.log(`API server is running on port ${port}`);
});
