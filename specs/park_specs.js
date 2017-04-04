var assert = require("assert");
var Park = require("../park.js");
var Dinosaur = require("../dinosaur.js")

describe("Jurassic Park", function(){
  var park;

  var dinosaur1;
  var dinosaur2;
  var dinosaur3;

  beforeEach(function(){
    park = new Park();

    dinosaur1 = new Dinosaur("T-Rex", 1);
    dinosaur2 = new Dinosaur("Velociraptor", 4);
    dinosaur3 = new Dinosaur("Triceraptops", 2);

  });

  it("Park starts empty", function(){
    assert.strictEqual(0, park.enclosure.length);
  });

  it("Park can add dinosaurs", function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    assert.strictEqual(2, park.enclosure.length);
  });



});