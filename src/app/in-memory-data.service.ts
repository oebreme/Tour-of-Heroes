import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 10, name: "Captain America" },
      { id: 11, name: "Ironman" },
      { id: 12, name: "Hulk" },
      { id: 13, name: "Thor" },
      { id: 14, name: "Black Widow" },
      { id: 15, name: "Spiderman" },
      { id: 16, name: "Hawkeye" },
      { id: 17, name: "Dr. Strange" },
      { id: 18, name: "Groot" },
      { id: 19, name: "Black Panther" },
      { id: 20, name: "Starlord" },
      { id: 21, name: "Antman" },
      { id: 22, name: "Nick Fury" },
      { id: 23, name: "Captain Marvel" },
      { id: 24, name: "Scarlet Witch" },
      { id: 25, name: "Falcon" }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
