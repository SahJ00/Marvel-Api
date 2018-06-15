import { Component, OnInit } from '@angular/core';
import { ApiMarvelService } from '../api-marvel.service'

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
  comics = null;
  constructor(private ApiMarvelService: ApiMarvelService) { }

  ngOnInit() {
    var url = "https://gateway.marvel.com/v1/public/";
    var comic = "comics?dateRange=1990-01-01%2C1995-12-31";
    var key = "&apikey=d6cf293cd8d387f452b11349e849e0c5&ts=688608000&hash=5c0a490309dd8bdd031d9cf69a968a9a";
    this.ApiMarvelService.getAll(url, comic, key).subscribe(
      data => {
        this.comics = data;
        this.comics = this.comics.data.results
        console.log(this.comics);
        //console.log(this.comics[5].images[0].path + '.jpg')
        for (var i = 0; i < this.comics.length; i++) {
          //console.log(this.comics.length)
          if (this.comics[i].images.length === 0) {
            console.log(this.comics[i]);
            this.comics.splice(i, 1);
            i--;
          }
        }
      }
    )
  }

}
