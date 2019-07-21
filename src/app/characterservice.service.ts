import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CharacterFrameData } from './data/framedata.interface';
import { CharacterName } from './data/frames';

import * as char from './data/frames';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor() { }

  getFrameData(character: CharacterName): Observable<CharacterFrameData[]> {
    switch (character) {
      case CharacterName.akuma: {
        return of(char.Akuma);
      }
      case CharacterName.alisa: {
        return of(char.Alisa);
      }
      case CharacterName.anna: {
        return of(char.Anna);
      }
      case CharacterName.armorking: {
        return of(char.ArmorKing);
      }
      case CharacterName.asuka: {
        return of(char.Asuka);
      }
      case CharacterName.hwoarang: {
        return of(char.Hwoarang);
      }
      case CharacterName.leo: {
        return of(char.Leo);
      }
      // If all else fails, return Kazuya's data
      case CharacterName.kazuya:
      default: {
        return of(char.Kazuya);
      }
    }
  }
}
