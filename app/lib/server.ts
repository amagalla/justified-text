import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";
import yml from "js-yaml";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import swaggerUI from "swagger-ui-express";
import swaggerDoc, { Options } from "swagger-jsdoc";

dotenv.config();

// swagger initialization
const swaggerFile = fs.readFileSync(
  "./app/lib/config/swaggerOptions.yml",
  "utf-8"
);
const options: swaggerDoc.Options = yml.load(swaggerFile) as Options;
const docs = swaggerDoc(options);

// Express server setup
const app = express();
const PORT = process.env.SERVER_PORT || 3000;

// error handler
import errorhandler from "./error-handling/error-handler";

// parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// swagger doc route
app.use("/admin/swagger", swaggerUI.serve, swaggerUI.setup(docs));

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, '../build')));

// routes imports
import setupRoutes from "./routes/setupRoutes";

setupRoutes(app);

// Default route to serve index.html (for client-side routing in SPA)
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "..", 'build', 'index.html'));
});

app.use(errorhandler);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
