// Cargar los podemos para poder usar el http
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// Cargar el models
import { Project } from '../models/project';

// Importar Global que es la config de la url del backend
import { Global } from './global';

@Injectable()
export class ProjectService{
	public url: string;

	constructor(
		private _http: HttpClient
		){
		this.url = Global.url;
	}

	testService(){
		return 'Probando el servicio de angular';
	}

	saveProject(project: Project): Observable<any>{
		let params = JSON.stringify(project);
		let headers = new HttpHeaders().set('Content-type', 'application/json');

		return this._http.post(this.url+'save-project', params, {headers: headers});

	}

	getProjects(): Observable<any>{
		let headers = new HttpHeaders().set('Content-type', 'application/json');

		return this._http.get(this.url+'projects', {headers: headers});
	}

	getOneProyect(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-type', 'application/json');

		return this._http.get(this.url+'project/'+id, {headers: headers});
	}

	deleteProject(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-type', 'application/json');
		
		return this._http.delete(this.url+'deleteProject/'+id, {headers: headers});
	}

	updateProject(project): Observable<any>{
		let params = JSON.stringify(project);
		let headers = new HttpHeaders().set('Content-type', 'application/json');

		return this._http.put(this.url+'updateProject/'+project._id, params, {headers: headers});
	}
}