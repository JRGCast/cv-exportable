import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportableToolbarComponent } from '../exportable-toolbar/exportable-toolbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ExportableToolbarComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
