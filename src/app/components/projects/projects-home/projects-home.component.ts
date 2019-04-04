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
	selector: 'app-projects-home',
	templateUrl: './projects-home.component.html',
	styleUrls: ['./projects-home.component.css'],
	providers: [ProjectService]
})
export class ProjectsHomeComponent implements OnInit {
	public projects: Project;
	public title: string;
	public url: string;
	public modalTitle: string;
	public modalMessage: string;
	public modalAcepto: string;
	public projectName;
	public projectId;
	public indice;

	constructor(
		private _router: Router,
		private _route: ActivatedRoute,
		private _projectService: ProjectService
		) { 
		this.title = "Proyectos";
		this.url = Global.url;
		this.modalTitle = "";
		this.modalMessage = "";
		this.modalAcepto = "";
	}

	ngOnInit() {
		this.getProjects();
	}

	getProjects(){
		this._projectService.getProjects().subscribe(
			response => {
				if(response.projects){
					this.projects = response.projects;
				}
			},
			error => {
				console.log(<any>error);
			});

	}// Fin getProjects

	setTitle(value, projectName, ids, indice){

		if(value){
			this.modalTitle = "Editar";
			this.modalMessage = "Estas seguro que desea editar este proyecto?";
			this.modalAcepto = "Si, editar";
			this.projectName = projectName;
			this.projectId = ids;

		}else{
			this.modalTitle = "Eliminar";
			this.modalMessage = "Estas seguro que desea eliminar este proyecto?";
			this.modalAcepto = "Si, eliminar";
			this.projectName = projectName;
			this.projectId = ids;
			this.indice = indice;
		}

	}

	getDeleteProject(){
		
		this._projectService.deleteProject(this.projectId).subscribe(
			response => {
				if(response.project){
					this.projects.splice(this.indice, 1);
					//delete this.projects[this.indice];				
				}
			},
			error => {
				console.log(<any>error);
			});

	}

}
