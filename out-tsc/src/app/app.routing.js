import { RouterModule } from '@angular/router';
// Importar los componentes 
import { AboutHomeComponent } from './components/about/about-home/about-home.component';
import { ProjectsHomeComponent } from './components/projects/projects-home/projects-home.component';
import { CreateProjectHomeComponent } from './components/createProjects/create-project-home/create-project-home.component';
import { ContactHomeComponent } from './components/contact/contact-home/contact-home.component';
import { ErrorComponent } from './components/404/error/error.component';
import { ProjectDetailComponent } from './components/projects/project-detail/project-detail.component';
var appRoutes = [
    { path: '', component: AboutHomeComponent },
    { path: 'sobre-mi', component: AboutHomeComponent },
    { path: 'proyectos', component: ProjectsHomeComponent },
    { path: 'detalle', component: ProjectDetailComponent },
    { path: 'crear-proyecto', component: CreateProjectHomeComponent },
    { path: 'contacto', component: ContactHomeComponent },
    { path: '**', component: ErrorComponent }
];
export var appRoutingProviders = [];
export var routing = RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map