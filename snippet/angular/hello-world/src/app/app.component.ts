import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import type { PrismSDK } from '@patientprism/snippet-sdk';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-world';

  onClick() {
    if (!(window.$prism as PrismSDK)) {
      alert('Prism SDK is not loaded');
    }

    try {
      window.$prism.submission.init();

      alert('Successfully called out to the Prism SDK');
    } catch (e) {
      alert('Failed to call out to the Prism SDK. Error: ' + e);
    }
  }
}
