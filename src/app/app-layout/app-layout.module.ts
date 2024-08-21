import { RouterModule, Routes } from "@angular/router";
import { FormComponent } from "./form/form.component";
import { ListComponent } from "./list/list.component";
import { AppLayoutComponent } from "./app-layout.component";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

const pages : any =[
    FormComponent,ListComponent
]

const routes : Routes = [
     {
        path:'',
        component:AppLayoutComponent,
        children:[
            {
                path:'',
                pathMatch:'full',
                redirectTo:'list'
            },
            {
                path:'list',
                component:ListComponent
            },
            {
                path:'form',
                component:FormComponent
            }
        ]
,     }
]

@NgModule({
    declarations:[
        ...pages,
        AppLayoutComponent
    ],
    imports:[
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule
    ]
})

export class AppLayoutModule{}