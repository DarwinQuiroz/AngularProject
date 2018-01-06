import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Rutas
import { appRouting } from './app.routes';

// Servicios
import { InfoService } from './services/info.service';
import { ProductosService } from './services/productos.service';

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioItemComponent } from './components/portfolio-item/portfolio-item.component';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    PortfolioItemComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule, HttpModule, appRouting
  ],
  providers: [InfoService, ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
