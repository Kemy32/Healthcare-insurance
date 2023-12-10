import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  /*Radio*/
  Star1Rate:'';
  Star2Rate:'';
  Star3Rate:'';
  Star4Rate:'';
  Star5Rate:'';

  /*Radio*/
  MaleFilter:'';
  FemaleFilter:'';
  
  /*Radio*/
  Any:'';
  LessThan100:'';
  From100To200:'';
  GreaterThan200:'';

  /*Select*/
  SortSearch:'';

  constructor() { }

  ngOnInit(): void {
  }

}
