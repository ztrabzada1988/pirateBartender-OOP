// Step 1: Define Functions

// create constructor function for questions
var Questions = function(question) {
  this.question = question;
}

// create constructor function for ingredients
var Ingredients = function(name, type) {
  this.name = name;
  this.type = type;
}

// create constructor function for pantry
var Pantry = function() {
  this.ingredients = {};
}

var Bartender = function(questionArray) {
  this.questionArray = [];
}

// Step 2: add methods to constructor functions as prototype
Bartender.prototype.addQuestion = function(question) {
  this.questionArray.push(question);
}

Pantry.prototype.addIngredient = function() {

}

// Step 2: Use Functions
