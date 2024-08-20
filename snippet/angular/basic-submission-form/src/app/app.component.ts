import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import type { Submission } from '@patientprism/snippet-sdk';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'basic-submission-form';

  submissionForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  })

  save() {
    const submission: Submission = {
      firstName: {
        type: 'text',
        label: 'First Name',
        value: this.submissionForm.get('firstName')!.value as string,
      },
      lastName: {
        type: 'text',
        label: 'Last Name',
        value: this.submissionForm.get('lastName')!.value as string,
      },
      email: {
        type: 'email',
        label: 'Email',
        value: this.submissionForm.get('email')!.value as string,
      },
    }

    window.$prism.submission.send(submission, 'my-form-id')

    alert('Successfully sent the submission to the Prism SDK')
  }
}
