// so many imports, so few tarrifs
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

// config the env variables
dotenv.config();

// app and db setup
const app = express();
const db = new pg.Pool({
  connectionString: process.env.DB_CONN,
});

// midleEarth?  no, just some middlewares
app.use(express.json());
app.use(cors());

// routes, because we need 'em  (I gets it)
app.get("/", (req, res) => {
  res.status(200);
  res.send("Top of the world to ya!");
});

// a bit of fun
app.get("/Connor", (req, res) => {
  res.send(
    "I'm a lumberjack and I'm okay. I sleep all night and I <s>work</s> code all day!"
  );
});

// admin messages
app.get("/messages", (req, res) => {
  res.send(
    "<h1>Messages</h1><br>=======<br><br>No messges at present.<br><br>=======<br>End Of Line"
  );
});
// ===========================================

// ============================================
// queriying our database is asynchronous.
app.get("/reviews", async (req, res) => {
  // fetch all reviews from sql table
  const result = await db.query(`SELECT * FROM reviews`);

  res.json(result.rows);
});

// post reviews to the database
app.post("/reviews", async (req, res) => {
  // REMEBER! When the client sends up infromation it is always in the request.body
  const body = req.body;
  const nameFromClient = req.body.name;
  const reviewFromClient = req.body.review;
  const starratingFromClient = req.body.starrating;
  // debugging / checking
  console.log(nameFromClient, reviewFromClient, starratingFromClient);

  // we use $1, $2 as placeholders so we aren't just putting whatever sends us in the string. (read up on SQL injection).
  // the second parameter is an array of values that will replace the placeholders in order.
  // this is called a parameterized query.
  const data = await db.query(
    `INSERT INTO reviews (name, review, starrating) VALUES ($1, $2, $3)`,
    [nameFromClient, reviewFromClient, starratingFromClient]
  );

  res.json({ status: "Opinions enteredS" }); // let the client know it worked,  (but where is it going to go?  dont see it in console.log)
});

// ============================================
// is anybody there?
app.listen(8080, () => {
  console.log(`Server is running on port http://localhost:8080`);
});
