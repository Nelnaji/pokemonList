import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokeResult } from '../../shared/models/pokemon';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private _http: HttpClient,) { }

  getInfos(url:string): Observable<PokeResult> {
    return this._http.get<PokeResult>(url);
  }
}
