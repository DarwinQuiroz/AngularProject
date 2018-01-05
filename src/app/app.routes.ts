import { RouterModule, Routes } from '@angular/router';
import { AboutComponent, HomeComponent, PortfolioItemComponent } from './components/index.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'portfolio-item', component: PortfolioItemComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(appRoutes, { useHash: true });
