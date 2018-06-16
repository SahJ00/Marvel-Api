import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class ApiMarvelService {
  constructor(private http: HttpClient) { }

  public getAll(url, comic, key) {
    var urlComics = url + comic + key;
    return this.http.get(urlComics)
  }

  getCharacter(url, characters, key) {
    var urlCharacter = url + characters + key;
    return this.http.get(urlCharacter)
  }

  getCharacterComic(url, characters, key) {
    var urlCharacterComic = url + characters + key;
    return this.http.get(urlCharacterComic)
  }

  getComics(url, title, key) {
    var urlComics = url + title + key;
    console.log(urlComics)
    return this.http.get(urlComics)
  }

}
