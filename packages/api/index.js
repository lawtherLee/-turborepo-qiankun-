const express = require("express");
const app = express();
const microApp = express();
const port = 18088;
const microPort = 18089;
const cors = require("cors");
const corsOptions = {
  // origin: "http://localhost:5173", // 允许来自 http://localhost:5174 的请求
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // 如果需要携带 Cookie，设置为 true
};
const microCorsOptions = {
  origin: "http://localhost:8341", // 允许来自 http://localhost:5174 的请求
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // 如果需要携带 Cookie，设置为 true
};
app.use(cors(corsOptions));
microApp.use(cors(corsOptions));

microApp.use(express.json());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.send("Hello from TurboRepo API!");
});
microApp.get("/api/micro", (req, res) => {
  res.send("Hello from TurboRepoMicroApp API!");
});

app.listen(port, () => {
  console.log(`API server is running on port ${port}`);
});

microApp.listen(microPort, () => {
  console.log(`API server is running on port ${microPort}`);
});
