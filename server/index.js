const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
const pool = new Pool({
    user: "mmocddfklbigyg",
    host: "ec2-54-74-35-87.eu-west-1.compute.amazonaws.com",
    port: 5432,
    database: "d1olh40ibqautr",
    password: "500d30c1d2446a34bde69282c09d6d96584214f44e079dbb0bf269088893a170",
    ssl: {
        rejectUnauthorized: false,
    },
    // user: "postgres",
    // host: "localhost",
    // port: 5432,
    // database: "db_todolist",
});

var port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//get all todos
app.get("/", async (req, res) => {
    try {
        const getTasks = await pool.query("select * from todolist order by id asc");
        res.json(getTasks.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//insert new todos
app.post("/", async (req, res) => {
    try {
        const { task } = req.body;
        const insertTask = await pool.query(`insert into todolist (task) values ('${task}')`);
        res.json(insertTask);
    } catch (err) {
        console.error(err.message);
    }
});

//update todo
app.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { task } = req.body;
        const updateTask = await pool.query(`update todolist set task = '${task}' where id = ${id}`);
        res.json(`To do id =  ${id} was updated`);
    } catch (err) {
        console.error(err.message);
    }
});

//delete todo
app.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTask = await pool.query(`delete from todolist where id = ${id}`);
        res.json(`To do id =  ${id} was deleted`);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(port, () => {
    console.log(`Program is running at port ${port}`);
});
