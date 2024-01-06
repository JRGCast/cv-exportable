import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ExportableToolbarComponent } from '../exportable-toolbar/exportable-toolbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ExportableToolbarComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
