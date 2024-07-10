import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs from '@emailjs/browser';
import { LoaderComponent } from '../../components/loader/loader.component';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { CustomMessageService } from '../../services/message.service';
import { MessageService } from 'primeng/api';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    LoaderComponent,
    CommonModule,
    ToastModule,
    TranslateModule,
  ],
  providers: [CustomMessageService, MessageService],
})
export class ContactUsComponent {
  constructor(
    private customMessageService: CustomMessageService,
    private cdr: ChangeDetectorRef,
    private translateService: TranslateService
  ) {
    this.subscribeToValueChanges();
  }
  isLoading: boolean = false;
  destroyRef = inject(DestroyRef);

  parentForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  subscribeToValueChanges(): void {
    this.parentForm.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.cdr.detectChanges();
        console.log(this.parentForm);
      });
  }

  onSubmit() {
    this.isLoading = true;

    emailjs.init('user_kig9hwNSt8MhkuitTcb50');
    emailjs
      .send('service_ff3ffiu', 'template_xxco64d', {
        from_name: this.parentForm.get('name')?.value,
        from_email: this.parentForm.get('email')?.value,
        message: this.parentForm.get('message')?.value,
        contact: this.parentForm.get('phone')?.value,
      })
      .then(
        () => {
          this.translateService
            .get('contact')
            .subscribe((translations: any) => {
              const successMsg = translations['success'];
              const emailSent = translations['emailSent'];
              this.customMessageService.showSuccess(successMsg, emailSent);
            });
        },
        (error) => {
          this.translateService
            .get('contact')
            .subscribe((translations: any) => {
              const errorMsg = translations['error'].value;
              const emailNotSent = translations['emailNotSent'];
              this.customMessageService.showSuccess(errorMsg, emailNotSent);
            });
        }
      )
      .finally(() => {
        this.isLoading = false;

        this.parentForm.controls.message.setValue('');
        this.parentForm.controls.message.markAsUntouched();
        this.parentForm.controls.message.markAsPristine();

        this.parentForm.controls.name.setValue('');
        this.parentForm.controls.name.markAsUntouched();
        this.parentForm.controls.name.markAsPristine();

        this.parentForm.controls.email.setValue('');
        this.parentForm.controls.email.markAsUntouched();
        this.parentForm.controls.email.markAsPristine();

        this.parentForm.controls.phone.setValue('');
        this.parentForm.controls.phone.markAsUntouched();
        this.parentForm.controls.phone.markAsPristine();

        this.parentForm.updateValueAndValidity();
      });
  }
}
