import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from './animal.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalHttpService {

  // to work with HttpClient, we should include HttpClientModule in app.module.ts file
  constructor(private http: HttpClient) { }

  fetchAllAnimals(): Observable<Animal[]> {
    // We need to work with HttpClient to consume an endpoint
    return this.http.get<Animal[]>('http://localhost:4040/api/animals');
  }

  deleteAnimal(animalId: number): Observable<Animal> {
    return this.http.get<Animal>('http://localhost:4040/api/animals'+animalId);
  }

  // takes in animal without primary key, returns animal with ID
  addAnimal(animalModel: Animal): Observable<Animal> {
    return this.http.post<Animal>('http://localhost:4040/api/animals',JSON.stringify(animalModel));
  }

  updateAnimal(animalModel: Animal): Observable<Animal>{
    return this.http.put<Animal>('http://localhost:4040/api/animals',JSON.stringify(animalModel));
  }

  fetchAnAnimal(animalId: number): Observable<Animal>{
    return this.http.get<Animal>(`http://localhost:4040/api/animals/${animalId}`);
  }
  
}
