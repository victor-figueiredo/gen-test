import { Component, inject, Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-edit-dialog",
  template: `
    <h3 mat-dialog-title>Hello User.</h3>
    <h2 mat-dialog-subtitle>Would you like to edit this info?</h2>
    <div mat-dialog-actions>
      <button mat-button (click)="onYes()">Yes, I'd like to!</button>
      <button mat-button (click)="onNo()">Not yet.</button>
    </div>
  `,
})
export class EditDialogComponent {
  matDialogRef = inject(MatDialogRef);
  router = inject(Router);

  onNo() {
    this.matDialogRef.close(false);
  }

  onYes() {
    this.matDialogRef.close(true);
  }
}

@Injectable({
  providedIn: "root",
})
export class EditDialogService {
  matDialog = inject(MatDialog);

  openDialog(): Observable<boolean> {
    return this.matDialog.open(EditDialogComponent).afterClosed();
  }
}
