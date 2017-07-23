import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'
@Injectable()
export class TodoService {

  constructor(private _http:Http) {
  }

  getAllTaks() {
    return this._http.get('/api/todo').map(res => res.json());
  }

  addTask(value:string) {
    var h = new Headers()
    h.append('Content-Type', 'application/json')
    return this._http.post('/api/todo', JSON.stringify({name: value}), {headers: h}).map(res => res.json());
  }

  deleteTask(id:string) {
    return this._http.get('/api/todo/delete/' + id).map(res => res.json());
  }
}
