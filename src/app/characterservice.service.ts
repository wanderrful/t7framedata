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
      case CharacterName.bob: {
        return of(char.Bob);
      }
      case CharacterName.bryan: {
        return of(char.Bryan);
      }
      case CharacterName.claudio: {
        return of(char.Claudio);
      }
      case CharacterName.deviljin: {
        return of(char.DevilJin);
      }
      case CharacterName.dragunov: {
        return of(char.Dragunov);
      }
      case CharacterName.eddy: {
        return of(char.Eddy);
      }
      case CharacterName.eliza: {
        return of(char.Eliza);
      }
      case CharacterName.feng: {
        return of(char.Feng);
      }
      case CharacterName.geese: {
        return of(char.Geese);
      }
      case CharacterName.gigas: {
        return of(char.Gigas);
      }
      case CharacterName.heihachi: {
        return of(char.Heihachi);
      }
      case CharacterName.hwoarang: {
        return of(char.Hwoarang);
      }
      case CharacterName.jack7: {
        return of(char.Jack7);
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
      case CharacterName.katarina: {
        return of(char.Katarina);
      }
      case CharacterName.kazumi: {
        return of(char.Kazumi);
      }
      case CharacterName.king: {
        return of(char.King);
      }
      case CharacterName.kuma: {
        return of(char.Kuma);
      }
      case CharacterName.law: {
        return of(char.Law);
      }
      case CharacterName.lee: {
        return of(char.Lee);
      }
      case CharacterName.lei: {
        return of(char.Lei);
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
      case CharacterName.negan: {
        return of(char.Negan);
      }
      case CharacterName.nina: {
        return of(char.Nina);
      }
      case CharacterName.noctis: {
        return of(char.Noctis);
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
      case CharacterName.zafina: {
        return of(char.Zafina);
      }

      // If all else fails, return Kazuya's data
      case CharacterName.kazuya:
      default: {
        return of(char.Kazuya);
      }
    }
  }
}
