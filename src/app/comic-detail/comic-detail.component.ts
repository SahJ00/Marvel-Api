import { Component, OnInit } from '@angular/core';
import { ApiMarvelService } from '../api-marvel.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.css']
})
export class ComicDetailComponent implements OnInit {

  comics: any = null;
  loading: boolean;
  id: number = null;
  comic: string = null;
  obj: Object = {path:  "../../assets/images/img-not-found"}

  constructor(
    private route: ActivatedRoute,
    private ApiMarvelService: ApiMarvelService,
  ) { }

  ngOnInit() {
    // Capture params
    this.route.params.subscribe(params => {

      // Loading spinner
      this.loading = true;

      // Load this function
      this.loadData();
    })
  }

  // Load the comics with their id
  loadData() {

    // Capture ID params
    this.id = this.route.snapshot.params["id"]

    // URL characters comic
    this.comic = `comics/${this.id}?`

    // Ajax
    this.ApiMarvelService.getAll(this.comic).subscribe(
      data => {
        this.comics = data;
        this.comics = this.comics.data.results

        // Change img not found
        for (var i = 0; i < this.comics.length; i++) {
          if (this.comics[i].images.length == 0) {
           this.comics[i].images.push(this.obj)
          } else if(this.comics[i].images["0"].path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") {
            this.comics[i].images["0"].path = "../../assets/images/img-not-found";
          }
        }
        this.loading = false
      }
    )
  }
}
