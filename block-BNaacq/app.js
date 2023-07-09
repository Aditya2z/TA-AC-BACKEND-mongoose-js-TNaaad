// var express = require("express");
// var mongoose = require("mongoose");
// var User = require("./models/user");

// var app = express();

// mongoose
//   .connect("mongodb://127.0.0.1/sample", {})
//   .then(() => {
//     console.log("Connected Successfully to database sample");
//   })
//   .catch((err) => {
//     console.log("Error connecting to the database", err);
//   });

// // Capturing incoming json data
// app.use(express.json());

// app.post("/users", (req, res, next) => {
//   User.create(req.body)
//     .then((user) => {
//       res.json(user);
//     })
//     .catch((err) => {
//       next(err);
//     });
// });

// app.get("/users", (req, res, next) => {
//   User.find()
//     .then((usersList) => {
//       res.json(usersList);
//     })
//     .catch((err) => {
//       next(err);
//     });
// });

// app.get("/users/:user_id", (req, res, next) => {
//   User.findById(req.params.user_id)
//     .then((usersList) => {
//       res.json(usersList);
//     })
//     .catch((err) => {
//       next(err);
//     });
// });

// // Model.find() returns an array of documents, Model.findOne() returns a single document (or null), and Model.findById() also returns a single document (or null) but is specifically used for finding documents by their _id field.
// // Model.find() and Model.findOne() require query criteria to match the documents, whereas Model.findById() only requires the _id value.

// app.put("/users/:user_id", (req, res, next) => {
//     User.findByIdAndUpdate(req.params.user_id, req.body, {new: true})
//       .then((updatedUser) => {
//         res.json(updatedUser);
//       })
//       .catch((err) => {
//         next(err);
//       });
//   });

//   app.delete("/users/:user_id", (req, res, next) => {
//     User.findByIdAndDelete(req.params.user_id)
//       .then((updatedUser) => {
//         res.send(`User deleted successfully`);
//       })
//       .catch((err) => {
//         next(err);
//       });
//   });

// // Error handler for handling 404 Not Found errors
// app.use(function (req, res, next) {
//   res.status(404).json({ error: "Page Not Found!" });
// });

// // Error handler for handling general server errors
// app.use(function (err, req, res, next) {
//   console.error(err);
//   res.status(500).json({ error: "Internal Server Error" });
// });

// app.listen(3000, () => {
//   console.log("Server is listening to port 3000");
// });