// Cargar los modulos de la rutas
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar los componentes 
import { AboutHomeComponent } from './components/about/about-home/about-home.component';
import { ProjectsHomeComponent } from './components/projects/projects-home/projects-home.component';
import { CreateProjectHomeComponent } from './components/createProjects/create-project-home/create-project-home.component';
import { ContactHomeComponent } from './components/contact/contact-home/contact-home.component';
import { ProjectDetailComponent } from "./components/projects/project-detail/project-detail.component";
import { EditProjectComponent } from './components/projects/edit-project/edit-project.component';
import { ErrorComponent } from './components/404/error/error.component';

const appRoutes: Routes = [
	{path: '', component: AboutHomeComponent},
	{path: 'sobre-mi', component: AboutHomeComponent},
	{path: 'proyectos', component: ProjectsHomeComponent},
	{path: 'proyecto/:name/:id', component: ProjectDetailComponent},
	{path: 'proyecto/:name/:actualizar/:id', component: EditProjectComponent},
	{path: 'crear-proyecto', component: CreateProjectHomeComponent},
	{path: 'contacto', component: ContactHomeComponent},
	{path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);