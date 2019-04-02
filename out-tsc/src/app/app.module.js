import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Importar el httpclientmodule para poder hacer la peticiones ajax
import { HttpClientModule } from '@angular/common/http';
// Para los formularios y el chuild data binding
import { FormsModule } from '@angular/forms';
// Cargar la routing y appRoutingProviders
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { AboutHomeComponent } from './components/about/about-home/about-home.component';
import { ProjectsHomeComponent } from './components/projects/projects-home/projects-home.component';
import { CreateProjectHomeComponent } from './components/createProjects/create-project-home/create-project-home.component';
import { ContactHomeComponent } from './components/contact/contact-home/contact-home.component';
import { ErrorComponent } from './components/404/error/error.component';
import { ProjectDetailComponent } from './components/projects/project-detail/project-detail.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                AboutHomeComponent,
                ProjectsHomeComponent,
                CreateProjectHomeComponent,
                ContactHomeComponent,
                ErrorComponent,
                ProjectDetailComponent,
            ],
            imports: [
                BrowserModule,
                routing,
                HttpClientModule,
                FormsModule
            ],
            providers: [
                appRoutingProviders
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map