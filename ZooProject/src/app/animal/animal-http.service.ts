import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from './animal.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalHttpService {

  constructor(private animalHttpService: AnimalHttpService, private router: Router) { }

  ngOnInit(): void {
    // keeps checking if the get function in the service layer has fetched the data from the end point
    // the moment the data is fetched, we will receive it in the subscribe method.
    // subscribe function takes in an arrow function
    this.animalHttpService.fetchAllAnimals().subscribe((response)=>{

    });
  }

  allAnimals: Animal[] = [];

  fetchAllAnimals(): Observable<Animal[]> {
    // We need to make an http request to
    return this.http.get<Animal[]>('http://localhost:4040/api/animals');
  }

  deleteAnimal(animalId: number){
    return this.http.get<Animal>('http://localhost:4040/api/animals'+animalId);
  }

  // takes in animal without primary key, returns animal with ID
  addAnimal(animalModel: Animal): Animal{
    return this.http.post<Animal>('http://localhost:4040/api/animals',JSON.stringify(animalModel));
  }

  updateAnimal(animalModel: Animal): Animal{
    return this.http.put<Animal>('http://localhost:4040/api/animals',JSON.stringify(animalModel));
  }

  fetchAnAnimal(animalId: number): Animal{
    return this.http.post<Animal>('http://localhost:4040/api/animals',JSON.stringify(animalModel));
}
