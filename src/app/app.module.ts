import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EntityDataModule, HttpUrlGenerator } from '@ngrx/data';
import { HttpClientModule } from '@angular/common/http';
import { CustomUrlGeneratorService } from './shared/custom-url-generator.service';
import { DepartmentService } from './shared/department.service';
import { UserService } from './shared/user.service';

import { MatIconModule } from '@angular/material/icon';
import { UserListComponent } from './users/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatIconModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(
      { maxAge: 25, // Retains last 25 states
        logOnly: environment.production, // Restrict extension to log-only mode
        autoPause: true, // Pauses recording actions and state changes when the extension window is not open 
      }
    ),
    EntityDataModule.forRoot({})
  ],
  providers: [
    {
      provide: HttpUrlGenerator,
      useClass: CustomUrlGeneratorService
    }, 
    DepartmentService, UserService
  ],
  bootstrap: [AppComponent],
  entryComponents: [UserListComponent]
})
export class AppModule { }
