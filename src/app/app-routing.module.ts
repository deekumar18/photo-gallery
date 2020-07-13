import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'colorvision',
    loadChildren: () => import('./colorvision/colorvision.module').then( m => m.ColorvisionPageModule)
  },
  {
    path: 'cvcalc',
    loadChildren: () => import('./cvcalc/cvcalc.module').then( m => m.CvcalcPageModule)
  },  {
    path: 'visual',
    loadChildren: () => import('./visual/visual.module').then( m => m.VisualPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
