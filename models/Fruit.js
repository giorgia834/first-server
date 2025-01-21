const fruits = require("../fruits.json")

//you will need to build a class 
//it will have a constructor to build instances of the fruit to return to the controller
//method showAll will access the fruits json file and return instances of all fruits to controller
//method show, use filter method to access one fruit, build one instance and return to controller

//this allows to create objects, which format is useful to work with 


class Fruit {
    constructor({genus, name, id, family, order, nutritions}){
        this.genus = genus
        this.name = name 
        this.id = id 
        this.family = family 
        this.order = order 
        this.nutritions = nutritions 
    }

    static showAll(){
        return fruits.map((fruit) => new Fruit(fruit)) 
        //creating different instance of the fruit class for each fruit
        

    }

    static show(name){
        const fruit = fruits.find(fruit => fruit.name.toLowerCase() === name.toLowerCase()) //belong to model
        if(fruit){
        //   res.status(200).send(fruit)
          return new Fruit(fruit)
        } else {
          throw Error("No fruit found")
        }
    }

    static create = (data) => {
      const newFruit = data
      const fruit = fruits.find(fruit => fruit.name.toLowerCase() === newFruit.name.toLowerCase())
      if(fruit){
        throw Error("The fruit already exists")
      } else {
        newFruit["id"] = fruits.length + 1 
        fruits.push(newFruit)
        return new Fruit(newFruit)
      }

    }

    update(data){
      const updatedFruit = fruits.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase())
      if(updatedFruit){
        updatedFruit.name = data.name
        updatedFruit.family = data.family
        return new Fruit(updatedFruit)
      } else {
        throw Error("Fruit not found")
      }
    }

    destroy(){
      const deletedFruit = fruits.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase())
      if(deletedFruit){
        const index = fruits.indexOf(deletedFruit)
        fruits.splice(index, 1)
      } else {
        throw Error("not found")
      }
    }
}

module.exports = Fruit

