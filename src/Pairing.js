function Restaurant(name, rating, price, id, url, categories, score){
    this.name = name;
    this.rating = rating;
    this.price = price;
    this.id = id;
    this.url = url;
    this.categories = categories;
    this.score = 0;
    
    this.link = link;
    }
    
    //shuffle array randomly
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
    
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    
      return array;
    }
    
    //check-expect
    var arr = [2, 11, 37, 42];
    arr = shuffle(arr);
    console.log(arr);
    
    
    //create tuple pairs of the restaurants (array must have an even amount of objects)
    function pair(array) {
    
      var currentIndex = 0;
      var list = [];
        // While there remain elements to pair
         while (currentIndex < array.length) {
    
          // Pick a remaining element...
          tuple = [currentIndex, currentIndex + 1];
          list.push(tuple);
          currentIndex = currentIndex + 2;
    
         }
    
         return list;
    }
