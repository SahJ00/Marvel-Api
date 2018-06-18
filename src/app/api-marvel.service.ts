import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class ApiMarvelService {
  url = "https://gateway.marvel.com/v1/public/";
  key = "apikey=d6cf293cd8d387f452b11349e849e0c5&ts=688608000&hash=5c0a490309dd8bdd031d9cf69a968a9a";
  constructor(private http: HttpClient) { }

  public getAll(comic) {
      var urlComics = this.url + comic + this.key;
      return this.http.get(urlComics)
  }

  getCharacter(characters) {
    var urlCharacter = this.url + characters + this.key;
    return this.http.get(urlCharacter)
  }

  getCharacterComic(characters) {
    var urlCharacterComic = this.url + characters + this.key;
    return this.http.get(urlCharacterComic)
  }

  getComics(title) {
    var urlComics = this.url + title + this.key;
    return this.http.get(urlComics)
  }

}
