import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './pages/map/component/map.component';
import { ProspectComponent } from './pages/prospect/component/prospect.component';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  {
    path: 'map',
    loadChildren: './pages/map/map.module#MapModule'
  },
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: LayoutComponent,
        loadChildren: './pages/prospect/prospect.module#ProspectModule'
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
