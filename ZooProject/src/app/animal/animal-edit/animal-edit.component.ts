import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../animal.model';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animal-edit',
  templateUrl: './animal-edit.component.html',
  styleUrls: ['./animal-edit.component.css']
})
export class AnimalEditComponent implements OnInit {

  newAnimal: Animal = {
    // Bind properties from updateAnimal form to newAnimal
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
  constructor(private animalService: AnimalService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
      // to take out the route parameter, we need to inject ActivatedRoute in the constructor
      let animalId: any = this.activatedRoute.snapshot.paramMap.get("animalId");
      console.log(animalId);
      this.newAnimal = this.animalService.fetchAnAnimal(animalId);
  }

  test(myName: any){
    console.log(myName);
  }

  updateAnimal(){
  
    this.animalService.updateAnimal(this.newAnimal);
    // once update is over navigate back to ListBookComponent
    this.router.navigate(["animal-read"]);
  }

}
