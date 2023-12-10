import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';


@NgModule({
  declarations: [ModalComponent,],
  providers: [MessageService, ConfirmationService],
  imports: [
    FormsModule,
    ToastModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [ModalComponent]
})
export class SharedModule { }
