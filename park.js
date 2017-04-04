var Park = function(){
  this.enclosure = []
}

Park.prototype = {

  addDinosaur: function(dinosaur){
    this.enclosure.push(dinosaur);
  },

  removeDinosaurByType: function(dinosaur){
    for(var i=this.enclosure.length - 1; i >= 0; i--){
      if(this.enclosure[i].type === dinosaur.type){
        this.enclosure.splice(i, 1);
      }
    }
  },

  getDinosOffspringCount2OrMore: function(){
    var result = []
    for(var i=this.enclosure.length - 1; i >= 0; i--){
      if(this.enclosure[i].offspringRate > 1){
        result.push(this.enclosure[i]);
      }
    }
    return result;  
  } 


  
};

module.exports = Park;
