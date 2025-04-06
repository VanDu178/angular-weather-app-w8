import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-weather-item',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent {
  @Input() city: { name: string, temp: number, status: string, icon: string } | undefined;
  @Input() isLoggedIn: boolean = false;
  @Output() addToFavorites = new EventEmitter<{ name: string, temp: number, status: string, icon: string }>();
  @Output() removeFromFavorites = new EventEmitter<string>();


  constructor() { }
  ngOnInit() {
    console.log("dư lieu khoi tao",this.city);
  }
  onAddToFavorites() {
    if (this.city) {
      alert(`Bạn đã thêm ${this.city.name} vào danh sách yêu thích!`);
      this.addToFavorites.emit(this.city);
    }
  }
}
