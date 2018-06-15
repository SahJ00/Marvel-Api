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
  param = null
  constructor(
    private route: ActivatedRoute,
    private ApiMarvelService: ApiMarvelService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loadData();
    })
  }
  loadData() {
    let id = this.route.snapshot.params["id"]
    var url = "https://gateway.marvel.com/v1/public/characters/";
    var comic = `${id}/comics?`
    var key = "apikey=d6cf293cd8d387f452b11349e849e0c5&ts=688608000&hash=5c0a490309dd8bdd031d9cf69a968a9a";
    this.ApiMarvelService.getAll(url, comic, key).subscribe(
      data => {
        this.comics = data;
        this.comics = this.comics.data.results
        console.log(this.comics);
      })
  }

}
