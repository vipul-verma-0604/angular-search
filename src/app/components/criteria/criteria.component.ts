import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.css']
})
export class CriteriaComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  search(e, start, end) {
    e.preventDefault();
    this.dataService.getResult(start, end);
  }

}
