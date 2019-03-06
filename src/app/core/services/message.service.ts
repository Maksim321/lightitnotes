import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material'

@Injectable()
export class MessageService {

  constructor(private snackBar: MatSnackBar) { }

  messageError(message) {
    this.openSnackBar(message, 'style-error')
  }

  messageSuccess(message) {
    this.openSnackBar(message, 'style-success')
  }

  openSnackBar(message, style) {
    this.snackBar.open(message, 'close', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass:[style]
    });
  }
}
