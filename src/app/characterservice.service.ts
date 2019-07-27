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
      case CharacterName.claudio: {
        return of(char.Claudio);
      }
      case CharacterName.eddy: {
        return of(char.Eddy);
      }
      case CharacterName.heihachi: {
        return of(char.Heihachi);
      }
      case CharacterName.hwoarang: {
        return of(char.Hwoarang);
      }
      case CharacterName.jin: {
        return of(char.Jin);
      }
      case CharacterName.josie: {
        return of(char.Josie);
      }
      case CharacterName.julia: {
        return of(char.Julia);
      }
      case CharacterName.kuma: {
        return of(char.Kuma);
      }
      case CharacterName.leo: {
        return of(char.Leo);
      }
      case CharacterName.lili: {
        return of(char.Lili);
      }
      case CharacterName.luckychloe: {
        return of(char.LuckyChloe);
      }
      case CharacterName.marduk: {
        return of(char.Marduk);
      }
      case CharacterName.masterraven: {
        return of(char.MasterRaven);
      }
      case CharacterName.miguel: {
        return of(char.Miguel);
      }
      case CharacterName.nina: {
        return of(char.Nina);
      }
      case CharacterName.panda: {
        return of(char.Panda);
      }
      case CharacterName.paul: {
        return of(char.Paul);
      }
      case CharacterName.shaheen: {
        return of(char.Shaheen);
      }
      case CharacterName.steve: {
        return of(char.Steve);
      }
      case CharacterName.xiaoyu: {
        return of(char.Xiaoyu);
      }
      case CharacterName.yoshimitsu: {
        return of(char.Yoshimitsu);
      }

      // If all else fails, return Kazuya's data
      case CharacterName.kazuya:
      default: {
        return of(char.Kazuya);
      }
    }
  }
}
