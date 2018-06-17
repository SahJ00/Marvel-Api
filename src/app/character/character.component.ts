import { Component, OnInit } from '@angular/core';
import { ApiMarvelService } from '../api-marvel.service'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  characters = null;
  loading: boolean;
  constructor(private ApiMarvelService: ApiMarvelService) { }

  ngOnInit() {

  }

  // Function Character
  getCharacter(name) {

    // // Loading spinner
    this.loading = true;

    // Generate character url
    var characters = `characters?name=${name}&`;

    // Ajax
    this.ApiMarvelService.getCharacter(characters).subscribe(
      data => {
        document.getElementById("error").setAttribute("style", "display: none;");
        this.characters = data;
        this.characters = this.characters.data.results

        // Message
        if (this.characters.length === 0) {
          document.getElementById("error").setAttribute("style", "display: block;");
          document.getElementById("error").innerHTML = "enter the name correctly"
        }

        // Stop loading spinner
        this.loading = false;
      }
    )
    this.characters = null
  }
}
