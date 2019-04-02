import * as tslib_1 from "tslib";
// Cargar los podemos para poder usar el http
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Importar Global que es la config de la url del backend
import { Global } from './global';
var ProjectService = /** @class */ (function () {
    function ProjectService(_http) {
        this._http = _http;
        this.url = Global.url;
    }
    ProjectService.prototype.testService = function () {
        return 'Probando el servicio de angular';
    };
    ProjectService.prototype.saveProject = function (project) {
        var params = JSON.stringify(project);
        var headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http.post(this.url + 'save-project', params, { headers: headers });
    };
    ProjectService.prototype.getProjects = function () {
        var headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http.get(this.url + 'projects', { headers: headers });
    };
    ProjectService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ProjectService);
    return ProjectService;
}());
export { ProjectService };
//# sourceMappingURL=project.service.js.map