import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exportable-toolbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exportable-toolbar.component.html',
  styleUrls: ['./exportable-toolbar.component.scss'],
})
export class ExportableToolbarComponent {}
