import { NgModule } from '@angular/core';
import {
  MatTableModule,
  MatStepperModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatPaginatorModule,
  MatSortModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCardModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
  MatTabsModule,
} from '@angular/material';

@NgModule({
  exports: [
    MatTableModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatTabsModule,
  ],
})
export class MaterialModule {}
