import { RouterModule, Routes } from '@angular/router';
import { AboutComponent, HomeComponent, PortfolioItemComponent, SearchComponent } from './components/index.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'producto/:item', component: PortfolioItemComponent },
    { path: 'buscar/:termino', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(appRoutes, { useHash: true });
