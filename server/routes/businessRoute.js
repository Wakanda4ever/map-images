import express from "express";
const database = require("./../../database/index.js");
// const test = require("./../../database/index-mongo.js");

let businessRoute = express.Router();

/*--------------------MongoDB Routing---------------------*/
// businessRoute.get("/:id", (req, res) => {
//   let numberId = req.params.id * 1;
//   test.Business.find({ _id: numberId }).then(results => {
//     console.log("mongo sent business!");
//     res.send(results);
//   });
// });

// businessRoute.get("/:id/photos", (req, res) => {
//   test.Photo.find({ _id: req.params.id }).then(results => {
//     console.log("mongo sent photo!");
//     res.send(results);
//   });
// });

/*--------------------MySQL Routing----------------------*/
businessRoute.get("/:id", (req, res) => {
  database
    .query(
      `
		SELECT * FROM business WHERE id='${req.params.id}' LIMIT 1;
	`
    )
    .then(data => {
      // console.log(data[0][0]);
      return data[0][0];
    })
    .then(business => {
      res.send(business);
    })
    .catch(error => {
      console.error(error);
      res.end();
    });
});

businessRoute.get("/:id/photos", (req, res) => {
  database
    .query(
      `
		SELECT * FROM photo2 WHERE unique_id='${req.params.id}' LIMIT 64;
`
    )
    .then(data => {
      console.log(data);
      return data[0];
    })
    .then(photos => {
      res.send(photos);
    })
    .catch(error => {
      console.error(error);
      res.end();
    });
});

export { businessRoute };
