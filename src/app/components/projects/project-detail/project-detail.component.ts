import { Component, OnInit } from '@angular/core';

// Cargar el models
import { Project } from '../../../models/project';

// Cargar el servicio para la peticiones ajax
import { ProjectService } from '../../../services/project.service';

// Cargar url
import { Global } from '../../../services/global';

// Cargar para poder recoger params url
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'app-project-detail',
	templateUrl: './project-detail.component.html',
	styleUrls: ['./project-detail.component.css'],
	providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
	public url: string;
	public project: Project;
	public modalTitle: string;
	public modalMessage: string;
	public modalAcepto: string;
	public projectName;

	constructor(
		private _projectService: ProjectService,
		private _router: Router,
		private _route: ActivatedRoute
		) {
		this.url = Global.url;
		this.project = new Project('','','','',2019,'','');
		this.modalTitle = "";
		this.modalMessage = "";
		this.modalAcepto = "";

	}

	ngOnInit() {
		this._route.params.subscribe(params => {
			let id = params.id;

			this.getProject(id);
		});
	}

	getProject(id){
		this._projectService.getOneProyect(id).subscribe(
			response => {
				this.project = response.project;
			}, 
			error => {
				console.log(<any>error);
			}
			)
	}

	setTitle(value, name){

		if(value){
			this.modalTitle = "Editar";
			this.modalMessage = "Estas seguro que desea editar este proyecto?";
			this.modalAcepto = "Si, editar";
			this.projectName = name;
		}else{
			this.modalTitle = "Eliminar";
			this.modalMessage = "Estas seguro que desea eliminar este proyecto?";
			this.modalAcepto = "Si, eliminar";
			this.projectName = name;
		}

	}

	getDeleteProject(id){
		
		this._projectService.deleteProject(id).subscribe(
			response => {
				if(response.project){
					this._router.navigate(['/proyectos'], {relativeTo: this._route});
				}
			},
			error => {
				console.log(<any>error);
			});
			
	}

}
