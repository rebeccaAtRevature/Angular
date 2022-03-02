// must export to be used in animal-list.component.ts
export interface Animal{
    animalId: number,
    name: string,
    species: string,
    genus: string,
    group: string,
    weight: number,
    nativeContinent: string,
    imageUrl: string
    
}