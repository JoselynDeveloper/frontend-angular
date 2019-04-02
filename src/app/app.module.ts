import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importar el httpclientmodule para poder hacer la peticiones ajax
import {  HttpClientModule } from '@angular/common/http';

// Para los formularios y el chuild data binding
import { FormsModule } from '@angular/forms';


// Cargar la routing y appRoutingProviders
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { AboutHomeComponent } from './components/about/about-home/about-home.component';
import { ProjectsHomeComponent } from './components/projects/projects-home/projects-home.component';
import { CreateProjectHomeComponent } from './components/createProjects/create-project-home/create-project-home.component';
import { ContactHomeComponent } from './components/contact/contact-home/contact-home.component';
import { ProjectDetailComponent } from "./components/projects/project-detail/project-detail.component";
import { ErrorComponent } from './components/404/error/error.component';
import { EditProjectComponent } from './components/projects/edit-project/edit-project.component';

@NgModule({
	declarations: [
		AppComponent,
		AboutHomeComponent,
		ProjectsHomeComponent,
		CreateProjectHomeComponent,
		ContactHomeComponent,
		ProjectDetailComponent,
		ErrorComponent,
		EditProjectComponent,
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
export class AppModule { }
