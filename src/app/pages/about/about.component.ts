import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Thêm import CommonModule
import { MatCardModule } from '@angular/material/card'; // Thêm MatCardModule
import { MatButtonModule } from '@angular/material/button'; // Thêm MatButtonModule

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule], // Import các module của Angular Material
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  // Bạn có thể thêm bất kỳ logic nào ở đây
}
