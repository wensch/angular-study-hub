import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';



@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [UserProfileComponent] // Permitindo que outros módulos o utilizem
})
export class UserModule { }
