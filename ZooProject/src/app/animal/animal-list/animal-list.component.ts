import { prepareSyntheticPropertyName } from '@angular/compiler/src/render3/util';
import { APP_INITIALIZER, Component, OnInit } from '@angular/core';
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
  // Dependency Injection (DI)
  // The framework will take care of creating the object for me
  constructor(private animalService: AnimalService) {
    // Initialize an object of the service layer
    // not really necessary...
    // this.animalService = new AnimalService();
   }

  ngOnInit(): void {
    // Content the service layer and copy contents of array into allAnimals
    this.allAnimals = this.animalService.fetchAllAnimals();
  }

  deleteAnimal(animalId: number){

    return this.animalService.deleteAnimal(animalId);
  }

  // takes in animal without primary key, returns animal with ID
  addAnimal(animalModel: Animal): Animal{

    return this.animalService.addAnimal(animalModel);
  }

  updateAnimal(animalModel: Animal): Animal{
  
    return this.animalService.updateAnimal(animalModel);
  }

  fetchAnAnimal(animalId: number): Animal{
    // make a call to the service layer
    return this.animalService.fetchAnAnimal(animalId);
  }
}
