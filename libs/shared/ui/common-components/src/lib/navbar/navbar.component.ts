import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'ng-libs-ui-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Input({ transform: addHome, required: true }) navbarItems: NavbarItem[] = [];
}

function addHome(items: NavbarItem[]) {
  console.log(items);
  return [{ label: 'Home', route: '/' }, ...items];
}

export interface NavbarItem {
  label: string;
  route: string;
}
