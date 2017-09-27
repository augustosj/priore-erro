import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BuscatarefasProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BuscatarefasProvider {

  constructor(public http: Http) {
    console.log('Hello BuscatarefasProvider Provider');
  }

}

//GET E POST
/*return this.http.post(this.config.api() + 'users/change-data/' + id, body)
	.map((res) => {
		data = res.json;
	}));

return this.http.get(this.config.api() + 'users/change-data/' + id)
	.map((res) => {
		data = res.json;
	}));
*/