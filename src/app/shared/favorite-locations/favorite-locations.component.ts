import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule để sử dụng các directive như ngFor
import { MatButtonModule } from '@angular/material/button';  // Đảm bảo import MatButtonModule cho các button
import { MatIconModule } from '@angular/material/icon';  // Import MatIconModule cho icon
import { MatListModule } from '@angular/material/list';  // Import MatListModule nếu bạn sử dụng danh sách

@Component({
  selector: 'app-favorite-locations',
  standalone: true,  // Đảm bảo đây là component standalone
  imports: [CommonModule, MatButtonModule, MatIconModule,MatListModule],  // Import thêm các module của Angular Material
  templateUrl: './favorite-locations.component.html',
  styleUrls: ['./favorite-locations.component.css']
})
export class FavoriteLocationsComponent implements OnChanges {
  @Input() favoriteCities: { name: string, temp: number, status: string, icon: string }[] = [];
  @Output() removeFromFavorites = new EventEmitter<string>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['favoriteCities']) {
      console.log("favoriteCities đã được cập nhật:", this.favoriteCities);
    }
  }

  onRemoveFromFavorites(cityName: string) {
    this.removeFromFavorites.emit(cityName);
  }
}
