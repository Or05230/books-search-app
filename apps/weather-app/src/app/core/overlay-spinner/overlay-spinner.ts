import { Injectable } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { MatSpinner } from '@angular/material/progress-spinner';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class OverlaySpinner {
  private spinnerRef: OverlayRef = this.cdkSpinnerCreate();

  constructor(private overlay: Overlay) {}

  private cdkSpinnerCreate() {
    return this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'spinner-overlay-backdrop',
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically()
    });
  }

  showSpinner() {
    if(!this.spinnerRef.hasAttached()) {
      this.spinnerRef.attach(new ComponentPortal(MatSpinner));
    }
  }

  hideSpinner() {
    this.spinnerRef.detach();
  }
}
