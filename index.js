import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

app.listen(PORT, () => console.log(`localhost:${PORT}`));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => res.send("hello from get!!"));
app.get("/profiles", (req, res) => res.send("you r on my profile"));