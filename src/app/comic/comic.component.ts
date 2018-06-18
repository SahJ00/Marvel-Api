import { Component, OnInit } from '@angular/core';
import { ApiMarvelService } from '../api-marvel.service'

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
  comics = null;
  loading: boolean;
  dateRange = "";
  name = "";
  comic = "comics?";
  constructor(private ApiMarvelService: ApiMarvelService) { }

  ngOnInit() {

    // Loading spinner
    this.loading = true;
    var html = "<option style='display:none' value class>select a date</option>"
    // Ajax
    this.ApiMarvelService.getAll(this.comic).subscribe(
      data => {
        this.comics = data;
        this.comics = this.comics.data.results
        // Delete comic that does not have frontpage
        for (var i = 0; i < this.comics.length; i++) {
          if (this.comics[i].images.length === 0) {
            this.comics.splice(i, 1);
            i--;
          }
        }
        this.loading = false;
      }
    )

    // Loop for year filter
    for (var y = 1990; y <= 2018; y++) {
      html += "<option>" + y + "</option>"
    }

    // Print year in the html
    document.getElementById("year-from").innerHTML = html;
    document.getElementById("year-to").innerHTML = html;
  }

  // Function filter
  searchComics(name, format, formatType, orderBy, dateFrom, dateTo, limit) {
    this.comics = null
    this.comic = "comics?"

    // Stop loading spinner
    this.loading = true;

    // Replace spaces
    this.name = name.replace(" ", "%20");

    // 
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

        // Change img not found
        for (var i = 0; i < this.comics.length; i++) {
          if (this.comics[i].thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") {
            this.comics[i].thumbnail.path = "../../assets/images/img-not-found"
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
