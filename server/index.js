const express = require("express");
const cors = require("cors");
const morgan = require("morgan"); //Morgan é utlizado para exibir os http request detalhados no console.
const helmet = require("helmet"); //Helmet remove informações do cabeçalho que podem prejudicar a segurança do app.
const mongoose = require("mongoose");

require("dotenv").config();

const middlewares = require("./middleware/middlewares");
const items = require('./api/items');

const port = process.env.PORT || 5000;

const app = express();

mongoose.connect(
  "mongodb+srv://klausdg:kpkx8swu@items-s5d9q.gcp.mongodb.net/items?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// Middleware
app.use(express.json())
app.use(morgan("common"));
app.use(helmet());
app.use(cors());


// app.get("/", function (req, res) {
//     res.send("Hello World");
// });

app.use("/api/items", items);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});
