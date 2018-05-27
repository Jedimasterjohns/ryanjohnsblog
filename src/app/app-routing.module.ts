import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: 'app/modules/reader/reader.module.ts#ReaderModule'
  },
  {
    path: 'editor',
    loadChildren: 'app/modules/editor/editor.module.ts#EditorModule'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
