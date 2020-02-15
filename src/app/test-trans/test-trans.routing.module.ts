import { TestTransComponent } from './test-trans.component'
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { Test2Component } from '../test2/test2.component';
export const routes:Routes=[
    {
        path:'',
        component:TestTransComponent,
        children:[
            {
                path:'test2',
                component:Test2Component
            }
        ]
    }
    
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TestRoutingModule{}
