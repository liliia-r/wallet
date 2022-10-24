import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  @Input() message!: string;
  @Output() closeModal = new EventEmitter<void>();

  constructor() {}

  onClose() {
    this.closeModal.emit();
  }
}
