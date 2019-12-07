import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck, flatMap, tap } from 'rxjs/operators';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CharacterService } from '../characterservice.service';
import { CharacterFrameDataHeaders, CharacterFrameData } from 'src/app/data/framedata.interface';
import { CharacterName } from '../data/frames';
import { fn_sortFrameData } from '../data/sortFrameData';
import { fn_applyFilter } from '../data/applyFilter';

@Component({
  selector: 'app-frame-data',
  templateUrl: './frame-data.component.html',
  styleUrls: ['./frame-data.component.css']
})
export class FrameDataComponent implements OnInit {
  title = '';
  displayedColumns: string[] = Object.keys(CharacterFrameDataHeaders);
  displayedColumnNames: string[] = Object.values(CharacterFrameDataHeaders);
  dataSource = new MatTableDataSource<CharacterFrameData>();
  filterColumn: string = "All";
  availableCharacters = CharacterName;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private characterService: CharacterService
  ) { }

  ngOnInit() {
    this.route.params.pipe(
      pluck('character'),
      tap(char => { this.title = this.availableCharacterKeys.map(x => x.toLowerCase()).includes(char.toLowerCase()) ? char.toLowerCase() : "[Error] Character in URL not found"; }),
      flatMap((char: string) => this.characterService.getFrameData(CharacterName[char.toLowerCase()]))
    ).subscribe(value => {
      this.dataSource.data = value;
      this.dataSource.sort = this.sort;
      this.dataSource.sortingDataAccessor = fn_sortFrameData;
      this.updateFilterType('');
    });
  }

  /* Used by the side-nav menu to correlate the actual route with the character name */
  get availableCharacterKeys() {
    return Object.keys(this.availableCharacters);
  }

  /* A trick to trigger the native event emitter for the filter */
  forceFilterUpdate() {
    this.dataSource.filter = " " + this.dataSource.filter;
    this.dataSource.filter = this.dataSource.filter.slice(1);
  }

  updateFilterType(filterValue: string) {
    this.dataSource.filterPredicate = fn_applyFilter(filterValue);
  }

  /* Used for manual, user-entered filter keywords */
  applyNormalFilter(filterValue: string) {
    this.updateFilterType(filterValue);
    this.dataSource.filter = filterValue;
  }

  /* Used to apply the special check box filter keywords */
  onToggleSpecialFilter(isChecked: boolean, filter: string) {
    const filterToken = ` ?${filter}? `;
    if (this.dataSource.filter.indexOf(filterToken) !== -1 || !isChecked) {
      this.dataSource.filter = this.dataSource.filter.replace(filterToken, '');
    } else {
      this.dataSource.filter += filterToken;
    }
  }

  /* Used as a way to tell the user that they've switch to another character */
  openSnackBar(message: string) {
    this._snackBar.open(message, null, {
      duration: 1250,
      verticalPosition: "top",
      horizontalPosition: "center"
    });
  }
}
