import { Component, OnInit } from '@angular/core';
import { ApiMarvelService } from '../api-marvel.service'

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
  comics = null;
  dateRange = "";
  name = "";
  constructor(private ApiMarvelService: ApiMarvelService) { }

  ngOnInit() {
    var html = "<option style='display:none' value class>select a date</option>"
    var url = "https://gateway.marvel.com/v1/public/";
    var comic = "comics?";
    var key = "&apikey=d6cf293cd8d387f452b11349e849e0c5&ts=688608000&hash=5c0a490309dd8bdd031d9cf69a968a9a";
    this.ApiMarvelService.getAll(url, comic, key).subscribe(
      data => {
        this.comics = data;
        this.comics = this.comics.data.results
        // console.log(this.comics);
        for (var i = 0; i < this.comics.length; i++) {
          if (this.comics[i].images.length === 0) {
            // console.log(this.comics[i]);
            this.comics.splice(i, 1);
            i--;
          }
        }
      }
    )
    for (var y = 1990; y <= 2018; y++) {
      html += "<option>" + y + "</option>"
    }
    document.getElementById("year-from").innerHTML = html;
    document.getElementById("year-to").innerHTML = html;

  }

  searchComics(name, format, formatType, orderBy, dateFrom, dateTo, limit) {
    this.dateRange = `${dateFrom}-01-30%2C${dateTo}-12-30`;
    this.name = name.replace(" ", "%20");
    var url = "https://gateway.marvel.com/v1/public/";
    var comic = "comics?";
    var key = "apikey=d6cf293cd8d387f452b11349e849e0c5&ts=688608000&hash=5c0a490309dd8bdd031d9cf69a968a9a";
    var filters = {
      title: this.name,
      format: format,
      formatType: formatType,
      orderBy: orderBy,
      dateRange: this.dateRange,
      limit: limit
    }

    for (let filter in filters) {

      if (filters[filter] != "") {
        console.log("soy  " + name)
       
        console.log("titleNmae  " + this.name)
        console.log(comic + filter + "=" + filters[filter] + "&")
        comic += filter + "=" + filters[filter] + "&"
      }
    }

    try {
      this.ApiMarvelService.getComics(url, comic, key).subscribe(
        data => {
          document.getElementById("error").setAttribute("style", "display: none;");
          this.comics = data;
          this.comics = this.comics.data.results
          // console.log(this.comics);
          for (var i = 0; i < this.comics.length; i++) {
            if (this.comics[i].images.length === 0) {
              //console.log(this.comics[i]);
              this.comics.splice(i, 1);
              i--;
            }
          }
          if (this.comics.length === 0) {
            document.getElementById("error").setAttribute("style", "display: block;");
            document.getElementById("error").innerHTML = "there are no comics available with the filters"
          }
        })
    } catch (error) {
      document.getElementById("error").innerHTML = error.message;
    }
  }
}
