import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
    clientName: string = "Esraa Bassiouny";
    isPurchased: boolean = false;

    togglePurchase() {
    this.isPurchased = !this.isPurchased;
   }
}
