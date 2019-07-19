import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CharacterFrameData } from './data/framedata.interface';

import * as char from './data/frames';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor() { }

  getFrameData(character: string): Observable<CharacterFrameData[]> {
    switch (character) {
      case 'akuma': {
        return of(char.Akuma);
      }
      case 'alisa': {
        return of(char.Alisa);
      }
      case 'anna': {
        return of(char.Anna);
      }
      case 'armorking': {
        return of(char.ArmorKing);
      }
      case 'asuka': {
        return of(char.Asuka);
      }
      case 'leo': {
        return of(char.Leo);
      }
      // If all else fails, return Kazuya's data
      case 'kazuya':
      default: {
        return of(char.Kazuya);
      }
    }
  }
}
