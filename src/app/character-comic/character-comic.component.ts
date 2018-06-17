import { Component, OnInit } from '@angular/core';
import { ApiMarvelService } from '../api-marvel.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character-comic',
  templateUrl: './character-comic.component.html',
  styleUrls: ['./character-comic.component.css']
})
export class CharacterComicComponent implements OnInit {
  comics = null
  loading: boolean;
  dateRange = "";
  name = "";
  id = null;
  comic = null;
  constructor(
    private route: ActivatedRoute,
    private ApiMarvelService: ApiMarvelService,
    private router: Router
  ) { }

  ngOnInit() {
    var html = "<option style='display:none' value class>select a date</option>"

    // Capture params
    this.route.params.subscribe(params => {

      // Loading spinner
      this.loading = true;

      // Load this function
      this.loadData();
    })

    // Loop for year filter
    for (var y = 1990; y <= 2018; y++) {
      html += "<option>" + y + "</option>"
    }

    // Print year in the html
    document.getElementById("year-from").innerHTML = html;
    document.getElementById("year-to").innerHTML = html;
  }

  // Load the character comics with their id
  loadData() {

    // Capture ID params
    this.id = this.route.snapshot.params["id"]

    // URL characters comic
    this.comic = `characters/${this.id}/comics?`

    // Ajax
    this.ApiMarvelService.getAll(this.comic).subscribe(
      data => {
        this.comics = data;
        this.comics = this.comics.data.results
        this.loading = false;
      })
  }
  // Function filter
  searchCharacterComics(format, formatType, orderBy, dateFrom, dateTo, limit) {
    this.comics = null

    // Stop loading spinner
    this.loading = true;
    if (dateFrom != "" && dateTo != "") {
      this.dateRange = `${dateFrom}-01-30%2C${dateTo}-12-30`;
    }

    // Filter Dictionary 
    var filters = {
      title: this.name,
      format: format,
      formatType: formatType,
      orderBy: orderBy,
      dateRange: this.dateRange,
      limit: limit
    }

    // Generate de url with filters
    for (let filter in filters) {
      if (filters[filter] != "") {
        this.comic += filter + "=" + filters[filter] + "&"
      }
    }
    
    // Ajax
    this.ApiMarvelService.getComics(this.comic).subscribe(
      data => {
        document.getElementById("error").setAttribute("style", "display: none;");
        this.comics = data;
        this.comics = this.comics.data.results

        // Delete comic that does not have frontpage
        for (var i = 0; i < this.comics.length; i++) {
          if (this.comics[i].images.length === 0) {
            this.comics.splice(i, 1);
            i--;
          }
        }

        // Message
        if (this.comics.length === 0) {
          document.getElementById("error").setAttribute("style", "display: block;");
          document.getElementById("error").innerHTML = "there are no comics available with the filters"
        }

        // Stop loading spinner
        this.loading = false;
      }
    )
  }
}
