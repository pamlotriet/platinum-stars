// src/app/services/custom-message.service.ts
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class CustomMessageService {
  constructor(
    private messageService: MessageService,
    private translateService: TranslateService
  ) {}

  async showSuccess(summaryKey: string, detailKey: string) {
    const [summary, detail] = await Promise.all([
      this.translateService.get(summaryKey).toPromise(),
      this.translateService.get(detailKey).toPromise(),
    ]);
    this.messageService.add({ severity: 'success', summary, detail });
  }

  async showError(summaryKey: string, detailKey: string) {
    const [summary, detail] = await Promise.all([
      this.translateService.get(summaryKey).toPromise(),
      this.translateService.get(detailKey).toPromise(),
    ]);
    this.messageService.add({ severity: 'error', summary, detail });
  }

  async showInfo(summaryKey: string, detailKey: string) {
    const [summary, detail] = await Promise.all([
      this.translateService.get(summaryKey).toPromise(),
      this.translateService.get(detailKey).toPromise(),
    ]);
    this.messageService.add({ severity: 'info', summary, detail });
  }

  async showWarn(summaryKey: string, detailKey: string) {
    const [summary, detail] = await Promise.all([
      this.translateService.get(summaryKey).toPromise(),
      this.translateService.get(detailKey).toPromise(),
    ]);
    this.messageService.add({ severity: 'warn', summary, detail });
  }
}
