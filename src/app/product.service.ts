import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  private  _albumUrl = '../assets/album.json';

  constructor(private _http: Http) { }

   /**
    * 
    * @param id That getAlbum() method should return the result of 
    * a call to this._http.get(), and that get() method should take 
    * _albumUrl as a parameter.
    */
   getAlbum(id: number) {
    return this._http.get(this._albumUrl)
              .map(response => response.json());
   }

}