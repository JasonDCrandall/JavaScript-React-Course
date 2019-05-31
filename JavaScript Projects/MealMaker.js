const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      };
    },
    get appetizers() {
      return this._courses.appetizers;
    },
    set appetizers(newAppetizer) {
      this._courses.appetizers = newAppetizer;
    },
    get mains() {
      return this._courses.mains;
    },
    set mains(newMain) {
      this._courses.mains = newMain;
    },
    get dessserts() {
      return this._courses.desserts;
    },
    set desserts(newDessert) {
      this._courses.desserts = newDessert;
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      }
      this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      let dishes = this._courses[courseName];
      let index = Math.floor(Math.random() * dishes.length);
      return dishes[index];
    },
    generateRandomMeal() {
      let appetizer = this.getRandomDishFromCourse('appetizers');
      let main = this.getRandomDishFromCourse('mains');
      let dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal will start with ${appetizer.name} as your appetizer, followed by ${main.name} for the main course, and will finish off with ${dessert.name} for dessert. The total cost is $${totalPrice}`;
    }
  };
  
  menu.addDishToCourse('appetizers', 'stuffed mushrooms', 7.00);
  menu.addDishToCourse('appetizers', 'coconut shrimp', 6.00);
  menu.addDishToCourse('appetizers', 'chips and salsa', 3.00);
  
  menu.addDishToCourse('mains', 'chicken alfredo', 12.00);
  menu.addDishToCourse('mains', 'fresh halibut', 16.00);
  menu.addDishToCourse('mains', 'spicy pork burrito', 7.00);
    
  menu.addDishToCourse('desserts', 'chocolate cake', 5.00);
  menu.addDishToCourse('desserts', 'oreo milkshake', 5.00)
  menu.addDishToCourse('desserts', 'vanilla ice cream', 3.00);
    
  let meal = menu.generateRandomMeal();
  console.log(meal);