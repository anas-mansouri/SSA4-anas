import { Routes } from '@angular/router';
<<<<<<< HEAD
import { Home } from './home/home';
import { ConferanceList } from './conferance-list/conferance-list';
import { NotFound } from './not-found/not-found';
import { ConferanceDetails } from './conferance-details/conferance-details';

export const routes: Routes = [

{path:'',redirectTo:'home',pathMatch:'full'},

{path:'details/:id',component:ConferanceDetails},

{path:'home',component:Home},
{path:'list',component:ConferanceList},
{path:'**',component:NotFound},
=======
import { Home} from './home/home';
import { ConferenceList} from './conference-list/conference-list';

export const routes: Routes = [
    {path:'home', component:Home},
    {path:'list', component:ConferenceList},
    {path:'', redirectTo:'home' , pathMatch:'full'},

>>>>>>> 0da46011c4d41811833ef7f32ded61b4167333ce
];
