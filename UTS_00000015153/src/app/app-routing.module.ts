import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'ukm-detail', loadChildren: './ukm-detail/ukm-detail.module#UkmDetailPageModule' },
  { path: 'my-booking', loadChildren: './my-booking/my-booking.module#MyBookingPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
