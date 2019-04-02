import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
// Cargar el servicio para la peticiones ajax
import { ProjectService } from '../../../services/project.service';
// Cargar url
import { Global } from '../../../services/global';
var ProjectsHomeComponent = /** @class */ (function () {
    function ProjectsHomeComponent(_projectService) {
        this._projectService = _projectService;
        this.title = "Proyectos";
        this.url = Global.url;
    }
    ProjectsHomeComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    ProjectsHomeComponent.prototype.getProjects = function () {
        var _this = this;
        this._projectService.getProjects().subscribe(function (response) {
            if (response.projects) {
                _this.projects = response.projects;
            }
        }, function (error) {
            console.log(error);
        });
    }; // Fin getProjects
    ProjectsHomeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-projects-home',
            templateUrl: './projects-home.component.html',
            styleUrls: ['./projects-home.component.css'],
            providers: [ProjectService]
        }),
        tslib_1.__metadata("design:paramtypes", [ProjectService])
    ], ProjectsHomeComponent);
    return ProjectsHomeComponent;
}());
export { ProjectsHomeComponent };
//# sourceMappingURL=projects-home.component.js.map