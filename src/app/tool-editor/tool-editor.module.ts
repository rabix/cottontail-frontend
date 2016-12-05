import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {CoreModule} from "../core/core.module";
import {EditorCommonModule} from "../editor-common/editor-common.module";
import {ArgumentListComponent} from "./sections/arguments/argument-list.component";
import {FileDefListComponent} from "./sections/file-def-list/file-def-list.component";
import {ResourcesComponent} from "./sections/resources/resources.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        ArgumentListComponent,
        FileDefListComponent,
        ResourcesComponent
    ],
    exports: [
        ArgumentListComponent,
        FileDefListComponent,
        ResourcesComponent
    ],
    imports: [
        BrowserModule,
        EditorCommonModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class ToolEditorModule {

}