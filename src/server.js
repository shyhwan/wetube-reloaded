import express from "express";
import morgan from "morgan";

const PORT = 3000;

const app = express();
const logger = morgan("dev");

const handleHome = (req, res) => {
  return res.send("Hello");
};

app.use(logger);
app.get("/", handleHome);

const habdleListening = () =>
  console.log(`Start Server!! 🛜 listening on port http://localhost:${PORT}`);

app.listen(PORT, habdleListening);
