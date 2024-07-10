import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { OurTeamPageComponent } from './pages/our-team-page/our-team-page.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
    {path:'', component:HomePageComponent},
    {path:'about', component:AboutPageComponent},
    // {path:'gallery', component:GalleryPageComponent},
    {path:'staff', component:OurTeamPageComponent},
    {path:'contact', component:ContactUsComponent}
];

