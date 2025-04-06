import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../../services/weather.service';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { WeatherItemComponent } from '../../shared/weather-item/weather-item.component';
import { FavoriteLocationsComponent } from '../../shared/favorite-locations/favorite-locations.component';

// Import các module của Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ScrollingModule } from '@angular/cdk/scrolling'; // Import module này


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, HeaderComponent, FooterComponent, WeatherItemComponent, FavoriteLocationsComponent,
    MatCardModule, MatButtonModule, MatIconModule, MatListModule, MatProgressSpinnerModule, CdkVirtualScrollViewport,ScrollingModule
  ],
  providers: [WeatherService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean = false;
  title = 'Thời tiết hôm nay';
  favoriteCities: any[] = [];
  cities = [
    { name: 'Hà Nội', temp: 29, status: 'Nắng', icon: '☀️' },
    { name: 'TP. Hồ Chí Minh', temp: 31, status: 'Nhiều mây', icon: '⛅' },
    { name: 'Đà Nẵng', temp: 27, status: 'Mưa nhẹ', icon: '🌧️' },
    { name: 'Hải Phòng', temp: 30, status: 'Mưa rào', icon: '🌦️' },
    { name: 'Cần Thơ', temp: 30, status: 'Nắng nóng', icon: '🔥' },
    { name: 'Bình Định', temp: 29, status: 'Nắng', icon: '☀️' },
    { name: 'Quảng Ngãi', temp: 31, status: 'Nhiều mây', icon: '⛅' },
    { name: 'Phú Yên', temp: 29, status: 'Nắng', icon: '☀️' },
  ];
  loading = true;

  constructor(private weatherService: WeatherService, private authService: AuthService) {}

  ngOnInit(): void {
    // Simulate API call
    setTimeout(() => {
      this.favoriteCities = this.weatherService.getFavoriteCities();
      this.isLoggedIn = this.authService.isLoggedIn();
      this.loading = false;
    }, 2000); // Simulate loading for 2 seconds
  }

  onAddToFavorites(city: { name: string, temp: number, status: string, icon: string }) {
    this.weatherService.addToFavorites(city);
    this.favoriteCities = [...this.weatherService.getFavoriteCities()];
  }

  onRemoveFromFavorites(cityName: string) {
    this.weatherService.removeFromFavorites(cityName);
    this.favoriteCities = [...this.weatherService.getFavoriteCities()];
  }
}
