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
  displayedColumnNames: string[] = Object.values(CharacterFrameDataHeaders);
  dataSource = new MatTableDataSource<CharacterFrameData>();
  filterColumn: string = "None";
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
      this.dataSource.filterPredicate = this.filterPredicate(this.defaultFilterPredicateFn);
    });
  }

  forceFilterUpdate() {
    this.dataSource.filter = " " + this.dataSource.filter;
    this.dataSource.filter = this.dataSource.filter.slice(1);
  }

  filterPredicate(fn: Function) {
    // We pass in "this" because it's the only way I can think of to dynamically reference the chosen filterColumn
    return fn_applyFilter(fn, this);
  }

  applyNormalFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
  }

  onToggleSpecialFilter(isChecked: boolean, filter: string) {
    const filterToken = ` ?${filter}? `;
    if (this.dataSource.filter.indexOf(filterToken) !== -1 || !isChecked) {
      this.dataSource.filter = this.dataSource.filter.replace(filterToken, '');
    } else {
      this.dataSource.filter += filterToken;
    }
  }
}
