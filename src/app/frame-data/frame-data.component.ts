import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CharacterService } from '../characterservice.service';
import { CharacterFrameDataHeaders, CharacterFrameData } from 'src/app/data/framedata.interface';
import { fn_sortFrameData } from '../data/sortFrameData';
import { fn_applyFilter } from '../data/applyFilter';

@Component({
  selector: 'app-frame-data',
  templateUrl: './frame-data.component.html',
  styleUrls: ['./frame-data.component.css']
})
export class FrameDataComponent implements OnInit {
  title = 'tekken7-framedata';
  displayedColumns: string[] = Object.keys(CharacterFrameDataHeaders);
  dataSource = new MatTableDataSource<CharacterFrameData>();
  defaultFilterPredicateFn: ((data: CharacterFrameData, filter: string) => boolean);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CharacterService
  ) { }

  ngOnInit() {
    this.refreshDataSource();
  }

  refreshDataSource() {
    const characterData = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const character = params.get('character');
        this.title = character;
        return this.service.getFrameData(character);
      })
    );
    characterData.subscribe(value => {
      this.dataSource.data = value;
      this.dataSource.sort = this.sort;
      this.dataSource.sortingDataAccessor = fn_sortFrameData;
      this.defaultFilterPredicateFn = this.dataSource.filterPredicate;
      this.dataSource.filterPredicate = fn_applyFilter(this.defaultFilterPredicateFn);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSpecialCounterHitStatus(isChecked: boolean) {
    const regex = /( \?specialCounterHitStatus\? )/;
    if (!!this.dataSource.filter.match(regex)) {
      this.dataSource.filter = this.dataSource.filter.replace(regex, '');
    } else {
      this.dataSource.filter += ' ?specialCounterHitStatus? ';
    }
  }

  onToggleWhiffPunishFilter(isChecked: boolean) {
    const regex = /( \?whiffPunisher\? )/;
    if (!!this.dataSource.filter.match(regex)) {
      this.dataSource.filter = this.dataSource.filter.replace(regex, '');
    } else {
      this.dataSource.filter += ' ?whiffPunisher? ';
    }
  }
}
