import { Component, OnInit } from '@angular/core';

// Cargar el models
import { Project } from '../../../models/project';

// Cargar el servicio para la peticiones ajax
import { ProjectService } from '../../../services/project.service';
import { UploadService } from '../../../services/upload.service';

// Cargar para poder recoger params url
import { Router, ActivatedRoute, Params } from '@angular/router';

// Cargar url
import { Global } from '../../../services/global';

@Component({
	selector: 'app-edit-project',
	templateUrl: './edit-project.component.html',
	styleUrls: ['./edit-project.component.css'],
	providers: [ProjectService, UploadService]
})
export class EditProjectComponent implements OnInit {
	public title: string;
	public project: Project;
	public status: string;
	public filesToUpload: Array<File>;
	public save_project;
	public url: string;

	constructor(
		private _projectService: ProjectService,
		private _uploadService: UploadService,
		private _router: Router,
		private _route: ActivatedRoute
		) {
		this.title = "Editar proyecto";
		this.project = new Project('','','','',2019,'','');
		this.url = Global.url;
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
			});
	}

	onSubmit(){
		this._projectService.updateProject(this.project).subscribe(
			response => {
				if(this.filesToUpload){
					this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image')
					.then((result:any) => {

						this.save_project = result.project;
						this.status = 'success';

					});
					
				}else{
					this.save_project = response.project;
					this.status = 'success';
				}
			}, 
			error => {
				console.log(<any>error);
			});
	}

	fileChangeEvent(fileInput: any){

		this.filesToUpload = <Array<File>>fileInput.target.files;
	}

}
