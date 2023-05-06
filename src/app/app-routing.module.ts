import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './ui';
import { PhotoPageComponent } from './ui/photo-page/photo-page.component';
import { RandomComponent } from './ui/random/random.component';
import { TestComponent } from './shared/test/test.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'random',
        component: RandomComponent,
      },
      {
        path: 'test',
        component: TestComponent,
      },
      {
        path: 'photo/:id',
        component: PhotoPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
