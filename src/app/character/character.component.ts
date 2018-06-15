import { Component, OnInit } from '@angular/core';
import { ApiMarvelService } from '../api-marvel.service'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  characters = null;
  constructor(private ApiMarvelService: ApiMarvelService) { }

  ngOnInit() {

  }

  getCharacter(name) {
    var url = "https://gateway.marvel.com/v1/public/";
    var characters = `characters?name=${name}`;
    var key = "&apikey=d6cf293cd8d387f452b11349e849e0c5&ts=688608000&hash=5c0a490309dd8bdd031d9cf69a968a9a";

    try {this.ApiMarvelService.getCharacter(url, characters, key).subscribe(
      data => {
        document.getElementById("error").setAttribute("style", "display: none;");
        this.characters = data;
        this.characters = this.characters.data.results
        console.log(this.characters);
        if(this.characters.length === 0) {
          document.getElementById("error").setAttribute("style", "display: block;");
          document.getElementById("error").innerHTML = "enter the name correctly"
        }
      })
    } catch(error) {
      document.getElementById("error").innerHTML = error.message;
    }
  }
}
