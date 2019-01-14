import { Component, OnInit } from '@angular/core';
import { search } from 'src/app/search.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  data: search[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getDefault().subscribe(
      (resp: search[]) => {      
        this.data = resp;
      }
    )

    this.dataService.result.subscribe(
      (resp: search[]) => {
        this.data = resp;
      }
    )
  }

}
