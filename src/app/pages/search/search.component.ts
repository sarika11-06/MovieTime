import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor( private service: MovieApiServiceService ) {}

  ngOnInit(): void {}

  searchResult: any;

  searchForm = new FormGroup({
    movieName: new FormControl(null),
  });

  submitForm() {
    console.log(this.searchForm.value, 'search');
    this.service.getSearchMovie(this.searchForm.value).subscribe(result => {
      console.log(result, 'result');
      this.searchResult = result.results;

    })
  }
}
