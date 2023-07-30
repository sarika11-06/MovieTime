import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: MovieApiServiceService) {}
  @ViewChildren('rowposter') rowposters!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.rowposters.forEach((rowposter: ElementRef) => {
      rowposter.nativeElement.addEventListener('wheel', (event: WheelEvent) => {
        this.handleHorizontalScroll(event, rowposter.nativeElement);
      });
    });
  }

  handleHorizontalScroll(event: WheelEvent, element: HTMLElement) {
    event.preventDefault();
    const scrollAmount = event.deltaY;
    element.scrollLeft += scrollAmount;
  }

  bannerResult: any = [];
  trendingMovieResult: any = [];
  actionMovieresult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  thrillerMovieResult: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.animationMovie();
    this.comedyMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
  }

  // bannerData

  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
    });
  }

  // trendingData
  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingData#');
      this.trendingMovieResult = result.results;
    });
  }

  // Action

  actionMovie() {
    this.service.fetchActionMovies().subscribe((result) => {
      console.log(result, 'action');
      this.actionMovieresult = result.results;
    });
  }

  // Adventure

  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((result) => {
      console.log(result, 'action');
      this.adventureMovieResult = result.results;
    });
  }

  // Animation

  animationMovie() {
    this.service.fetchAnimationMovies().subscribe((result) => {
      console.log(result, 'action');
      this.animationMovieResult = result.results;
    });
  }

  // Comedy

  comedyMovie() {
    this.service.fetchComedyMovies().subscribe((result) => {
      console.log(result, 'action');
      this.comedyMovieResult = result.results;
    });
  }

  // Documentary

  documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      console.log(result, 'action');
      this.documentaryMovieResult = result.results;
    });
  }

  // ScienceFiction

  sciencefictionMovie() {
    this.service.fetchScienceFictionMovies().subscribe((result) => {
      console.log(result, 'action');
      this.sciencefictionMovieResult = result.results;
    });
  }

  // Thriller

  thrillerMovie() {
    this.service.fetchThrillerMovies().subscribe((result) => {
      console.log(result, 'action');
      this.thrillerMovieResult = result.results;
    });
  }
}
