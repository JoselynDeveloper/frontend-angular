import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
// Cargar el models
import { Project } from '../../../models/project';
// Cargar el servicio para la peticiones ajax
import { ProjectService } from '../../../services/project.service';
import { UploadService } from '../../../services/upload.service';
// Cargar url
import { Global } from '../../../services/global';
var CreateProjectHomeComponent = /** @class */ (function () {
    function CreateProjectHomeComponent(_projectService, _uploadService) {
        this._projectService = _projectService;
        this._uploadService = _uploadService;
        this.title = "Crear proyecto";
        this.project = new Project('', '', '', '', 2019, '', '');
    }
    CreateProjectHomeComponent.prototype.ngOnInit = function () {
    };
    CreateProjectHomeComponent.prototype.onSubmit = function (Form) {
        var _this = this;
        // Guardar datos basicos
        this._projectService.saveProject(this.project).subscribe(function (response) {
            if (response.project) {
                // Subir la imagen
                _this._uploadService.makeFileRequest(Global.url + "upload-image/" + response.project._id, [], _this.filesToUpload, 'image')
                    .then(function (result) {
                    _this.status = 'success';
                    Form.reset();
                    console.log(result);
                });
            }
            else {
                _this.status = 'failed';
            }
        }, function (error) {
            console.log(error);
        });
    };
    CreateProjectHomeComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    CreateProjectHomeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-create-project-home',
            templateUrl: './create-project-home.component.html',
            styleUrls: ['./create-project-home.component.css'],
            providers: [ProjectService, UploadService]
        }),
        tslib_1.__metadata("design:paramtypes", [ProjectService,
            UploadService])
    ], CreateProjectHomeComponent);
    return CreateProjectHomeComponent;
}());
export { CreateProjectHomeComponent };
//# sourceMappingURL=create-project-home.component.js.map