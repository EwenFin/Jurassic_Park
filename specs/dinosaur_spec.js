var assert = require("assert");
var Dinosaur = require("../dinosaur.js");

describe("Dinosaur", function(){
  var dinosaur1;
  var dinosaur2;
  var dinosaur3;

  beforeEach(function(){
    dinosaur1 = new Dinosaur("T-Rex", 1);
    dinosaur2 = new Dinosaur("Velociraptor", 4);
    dinosaur3 = new Dinosaur("Triceraptops", 2);
  });

  it("Dinosaur has type", function(){
    assert.strictEqual("T-Rex", dinosaur1.type);
  });

  it("Dinosaur has offspringRate", function(){
    assert.strictEqual(4, dinosaur2.offspringRate);
  })


});