import { prepareSyntheticPropertyName } from '@angular/compiler/src/render3/util';
import { APP_INITIALIZER, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../animal.model';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  
  // Initialize this variable in ngOnInit()
  allAnimals: Animal[] = [];

  toggleAdd: boolean = false;

  newAnimal: Animal = {
    // Bind properties from addAnimal form to newAnimal
    animalId: 0,
    name: "",
    species: "",
    genus: "",
    group: "",
    weight: 0,
    nativeContinent: "",
    imageUrl: ""

  }

  // Dependency Injection (DI)
  // The framework will take care of creating the object for me
  constructor(private animalService: AnimalService, private router: Router) {
    // Initialize an object of the service layer
    // not really necessary...
    // this.animalService = new AnimalService();
   }

  ngOnInit(): void {
    // Content the service layer and copy contents of array into allAnimals
    this.allAnimals = this.animalService.fetchAllAnimals();
  }

  toggleAddForm(){
    if(this.toggleAdd == true){
      this.toggleAdd = false;
    } else {
      this.toggleAdd = true;
    }
  }

  goToEditAnimal(animalId: number) {
    // here we have to route to edit animal component whose routepath is animal-edit
    // to use this.router.navigate(), inject Router in the constructor
    this.router.navigate(["animal-edit", animalId])
  }

  deleteAnimal(animalId: number){

    return this.animalService.deleteAnimal(animalId);
  }

  // takes in animal without primary key, returns animal with ID
  addAnimal(){
    let addNewAnimal: Animal = {
      animalId: 0,
      name: this.newAnimal.name,
      species: this.newAnimal.species,
      genus: this.newAnimal.genus,
      group: this.newAnimal.group,
      weight: this.newAnimal.weight,
      nativeContinent: this.newAnimal.nativeContinent,
      imageUrl: this.newAnimal.imageUrl      
    }

    this.animalService.addAnimal(addNewAnimal);
    // Refresh the Animal information
    this.allAnimals = this.animalService.fetchAllAnimals();
  }

  fetchAnAnimal(animalId: number): Animal{
    // make a call to the service layer
    return this.animalService.fetchAnAnimal(animalId);
  }
}
