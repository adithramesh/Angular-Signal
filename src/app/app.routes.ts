import { Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { CounterComponent } from './counter/counter.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'todo', component:TodosComponent},
    {path:'counter', component:CounterComponent}
];
