import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-eligibility',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, MatProgressSpinnerModule],
  templateUrl: './eligibility.component.html',
  styleUrl: './eligibility.component.css'
})
export class EligibilityComponent {
  stepIndex = 0;

  isLoading = false;
  showResults = false;

  isUKRegistered?: boolean;
  tradingDuration?: boolean;
  annualTurnover?: number;
  receivedFunding?: boolean;
  loanAmount?: number;
  eligible?: boolean;
  showNextQuestions = false;

  resultMessage: 'eligible' | 'notEligible' | 'possiblyEligible' | null = null;


  // Progress control
  continue() {
    if (this.stepIndex < 4) {
      this.stepIndex++;
    } else {
      this.checkEligibility();
    }
  }

  calculateProgress(): number {
    return ((this.stepIndex + 1) / 5) * 100;
  }

  checkEligibility(): void {
    this.isLoading = true;
    this.showResults = false;

    setTimeout(() => {
      this.isLoading = false;
      this.showResults = true;

      // Logic for resultMessage
      if (this.isUKRegistered === false) {
        this.resultMessage = 'notEligible';
      } else if (
        this.isUKRegistered === true &&
        this.tradingDuration === true &&
        this.loanAmount === 250000
      ) {
        this.resultMessage = 'possiblyEligible';
      } else if (
        this.isUKRegistered === true &&
        this.tradingDuration === true &&
        (this.annualTurnover ?? 0) > 50000 &&
        this.receivedFunding === false &&
        this.loanAmount! >= 25000 &&
        this.loanAmount! < 250000
      ) {
        this.resultMessage = 'eligible';
      } else {
        this.resultMessage = 'notEligible';
      }
    }, 1500);
  }


  continueToNext() {
    if (this.isUKRegistered !== undefined) {
      this.showNextQuestions = true;
    }
  }

  goBack() {
    if (this.stepIndex > 0) {
      this.stepIndex--;
    }
  }

  checkAlternativeOptions() {
    // TODO: Add real logic, e.g. navigate to alternatives page or open modal
    alert('Redirecting to alternative loan options...');
  }

  resetForm() {
    this.stepIndex = 0;
    this.isLoading = false;
    this.showResults = false;

    // reset all form fields:
    this.isUKRegistered = undefined;
    this.tradingDuration = undefined;
    this.annualTurnover = undefined;
    this.receivedFunding = undefined;
    this.loanAmount = undefined;
  }


}
