import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Kazuya } from "../../data/frames/kazuya.data";
import { CharacterFrameDataHeaders, CharacterFrameData } from 'src/data/framedata.interface';
import { fn_sortFrameData } from "../../data/sortFrameData";
import { fn_applyFilter } from "../../data/applyFilter";

@Component({
  selector: 'app-frame-data',
  templateUrl: './frame-data.component.html',
  styleUrls: ['./frame-data.component.css']
})
export class FrameDataComponent implements OnInit {
  title = 'tekken7-framedata';
  displayedColumns: string[] = Object.keys(CharacterFrameDataHeaders);
  dataSource = new MatTableDataSource(Kazuya);
  defaultFilterPredicateFn: ((data: CharacterFrameData, filter: string) => boolean);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = fn_sortFrameData;
    this.defaultFilterPredicateFn = this.dataSource.filterPredicate;
    this.dataSource.filterPredicate = fn_applyFilter(this.defaultFilterPredicateFn);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSpecialCounterHitStatus(isChecked: boolean) {
    const regex = /( \?specialCounterHitStatus\? )/;
    if (!!this.dataSource.filter.match(regex)) {
      this.dataSource.filter = this.dataSource.filter.replace(regex, "");
    } else {
      this.dataSource.filter += " ?specialCounterHitStatus? ";
    }
  }

  onToggleWhiffPunishFilter(isChecked: boolean) {
    const regex = /( \?whiffPunisher\? )/;
    if (!!this.dataSource.filter.match(regex)) {
      this.dataSource.filter = this.dataSource.filter.replace(regex, "");
    } else {
      this.dataSource.filter += " ?whiffPunisher? ";
    }
  }
}
