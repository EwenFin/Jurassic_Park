var assert = require("assert");
var Park = require("../park.js");

describe("Jurassic Park", function(){
  var park;
  beforeEach(function(){
    park = new Park();

  });

  it("Park starts empty", function(){
    assert.strictEqual(0, park.enclosure.length)
  })

});