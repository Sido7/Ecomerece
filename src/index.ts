import express, {Express,Request,Response} from "express";
import { secrets } from "./secrets";
import router from "./routes/index";
import { PrismaClient } from "@prisma/client";
import errorHandler from "./middleware/globalErrorHandler.middleware";

const app: Express = express();

app.use(express.static('public'));

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
  console.log(__dirname + '/public/index.html');
  res.sendFile('/app/src/public/index.html');
  
});

app.use('/api',router)
app.use(errorHandler)

export const prismaClient = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

console.log(secrets.Port);
app.listen(secrets.Port, () => {
  console.log("Server started on port 3000");
});
