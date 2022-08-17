const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (request, respond) {
  respond.sendFile(__dirname + "/index.html");
});

app.post("/", function (request, respond) {
  var num1 = Number(request.body.num1);
  var num2 = Number(request.body.num2);
  var result = num1 + num2;

  respond.send("The result of the calcultor is " + result);
});

app.get("/bmicalculator", function (request, respond) {
  respond.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (request, respond) {
  var weight = parseFloat(request.body.n1);
  var height = parseFloat(request.body.n2);

  var bmi = weight / (height * height);
  respond.send("Your BMI is" + bmi);
});

app.listen(3000, function () {
  console.log("Server has started on port 3000");
});
