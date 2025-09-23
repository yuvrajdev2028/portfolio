import { Routes } from '@angular/router';
import { ContactPage } from './pages/contact-page/contact-page';
import { BlogPage } from './pages/blog-page/blog-page';
import { HomePage } from './pages/home-page/home-page';

export const routes: Routes = [
    {path:'',component:HomePage},
    {path:'contact',component:ContactPage},
    {path:'blog',component:BlogPage},
    {path:'**',redirectTo:''}
];
