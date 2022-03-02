import { Injectable } from '@angular/core';
import { Animal } from './animal.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  allAnimals: Animal[] = [{
    animalId: 101,
    name: "Peafowl",
    species: "Crisatus",
    genus: "Pavo",
    group: "Bird",
    weight: 25,
    nativeContinent: "India",
    imageUrl: "https://images.unsplash.com/photo-1536514900905-0d5511b9d489?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"

  },{
    animalId: 102,
    name: "Giraffe",
    species: "G. g. giraffa",
    genus: "Giraffa",
    group: "mammal",
    weight: 680,
    nativeContinent: "Africa",
    imageUrl: "https://images.unsplash.com/photo-1549854233-ca0baec6fa74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"

  },{
    animalId: 103,
    name: "Bengal Tiger",
    species: "P. tigris",
    genus: "Panther",
    group: "mammal",
    weight: 261,
    nativeContinent: "India",
    imageUrl: "https://images.unsplash.com/photo-1615474286632-e31ac3633d58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"

  },{
    animalId: 104,
    name: "Prarie Dog",
    species: "Cynomys parvidens",
    genus: "rodent",
    group: "mammal",
    weight: 261,
    nativeContinent: "North America",
    imageUrl: "https://images.unsplash.com/photo-1637265748905-2ea6c29c7c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"

  }];

  constructor() { }

  fetchAllAnimals(): Animal[]{
    return this.allAnimals;
  }

  deleteAnimal(animalId: number){
    // Iterate through all elements in allAnimals array
    for (let i = 0; i < this.allAnimals.length; i++){
      // Check if the animal ID for the current object in iteration 
      // matches the animal ID which was passed in as argument
      if (this.allAnimals[i].animalId == animalId){
        // Remove the matching element from the array
        // this splice statement removes 1 element begining from index i
        this.allAnimals.splice(i,1);
        break;
      }
    }
    return this.allAnimals;
  }

  // takes in animal without primary key, returns animal with ID
  addAnimal(animalModel: Animal): Animal{
    // Logic fro generating a new ID
    let newAnimalId: number = this.allAnimals[this.allAnimals.length-1].animalId+1;
    animalModel.animalId = newAnimalId;
    this.allAnimals.push(animalModel);

    return animalModel;
  }

  updateAnimal(animalModel: Animal): Animal{
    // Iterate through all elements in allAnimals array
    for (let i = 0; i < this.allAnimals.length; i++){
      // Check if the animal ID for the current object in iteration 
      // matches the animal ID which was passed in as argument
      if (this.allAnimals[i].animalId == animalModel.animalId){
        // Update the matching element from the array
        this.allAnimals[i] = animalModel;
        break;
      }
    }
    return animalModel;
  }

  fetchAnAnimal(animalId: number): Animal{
    // Declare return variable
    let returnAnimal: Animal;
    // Iterate through all elements in allAnimals array
    for (let i = 0; i < this.allAnimals.length; i++){
      // Check if the animal ID for the current object in iteration 
      // matches the animal ID which was passed in as argument
      if (this.allAnimals[i].animalId == animalId){
        // Remove the matching element from the array
        // if match is found, return match
        return this.allAnimals[i];
      }
    }
    // if match is not found, return book with ID 0
    return {
      animalId: 0,
      name: "",
      species: "",
      genus: "",
      group: "",
      weight: 0,
      nativeContinent: "",
      imageUrl: ""
    };
  }
}
