import { Component, OnInit } from '@angular/core';

// Cargar el models
import { Project } from '../../../models/project';

// Cargar el servicio para la peticiones ajax
import { ProjectService } from '../../../services/project.service';
import { UploadService } from '../../../services/upload.service';

// Cargar url
import { Global } from '../../../services/global';


@Component({
	selector: 'app-create-project-home',
	templateUrl: './create-project-home.component.html',
	styleUrls: ['./create-project-home.component.css'],
	providers: [ProjectService, UploadService]
})
export class CreateProjectHomeComponent implements OnInit {
	public title: string;
	public project: Project;
	public status: string;
	public filesToUpload: Array<File>;
	public save_project;

	constructor(
		private _projectService: ProjectService,
		private _uploadService: UploadService
		) {
		this.title = "Crear proyecto";
		this.project = new Project('','','','',2019,'','');
	}

	ngOnInit() {
	}

	onSubmit(Form){

		// Guardar datos basicos
		this._projectService.saveProject(this.project).subscribe(
			response => {
				if(response.project){
					
					// Subir la imagen
					if(this.filesToUpload){
						this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image')
						.then((result:any) => {

							this.save_project = result.project;
							this.status = 'success';
							Form.reset();

						});

						}else{
							this.save_project = response.project;
							this.status = 'success';
							Form.reset();
						}

					}else{
						this.status = 'failed';
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


