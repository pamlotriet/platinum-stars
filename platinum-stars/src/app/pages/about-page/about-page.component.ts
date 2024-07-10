import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    CommonModule,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    TranslateModule
  ],
  templateUrl: './about-page.component.html',
})
export class AboutPageComponent {
  socialCategories: any[] = [];
  intellectualCategories: any[] = [];

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    forkJoin({
      socialCategoriesItems: this.translateService.get('about.socialCategories.items'),
      intellectualCategoriesItems: this.translateService.get('about.intellectualCategoriesItems'),
    }).subscribe(translations => {
      this.socialCategories = translations.socialCategoriesItems;
      this.intellectualCategories = translations.intellectualCategoriesItems;
    });
  }
}
