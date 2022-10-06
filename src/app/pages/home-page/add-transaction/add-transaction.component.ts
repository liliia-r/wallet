import { Transaction } from './../../../shared/models/transaction.model';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { TransactionsService } from './../../../shared/services/transactions/transactions.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss'],
})
export class AddTransactionComponent implements OnInit {
  @Output() closeTransactionModal = new EventEmitter<void>();

  id: number;

  expenses: { value: string; label: string }[];
  incomes: { value: string; label: string }[];

  transactionForm = this.fb.group({
    type: new FormControl(['', Validators.required]),
    category: new FormControl(['', Validators.required]),
    sum: new FormControl(['', Validators.required]),
    date: new FormControl(['', Validators.required]),
    comment: new FormControl(['']),
  });

  constructor(
    private transactionService: TransactionsService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.expenses = this.transactionService.rangesExpense;
    this.incomes = this.transactionService.rangesIncome;
  }

  // Getter method to access form control
  get transactionType() {
    return this.transactionForm.get('type');
  }

  onClose() {
    this.closeTransactionModal.emit();
  }

  onTransactionFormSubmit() {
    const newTransaction = new Transaction(
      this.transactionForm.value.type,
      this.transactionForm.value.category,
      this.transactionForm.value.sum,
      this.transactionForm.value.date,
      this.transactionForm.value.comment
    );

    if (this.transactionService.isEditMode) {
      this.transactionService.updateTransaction(this.id, newTransaction);
    } else {
      this.transactionService.addTransaction(newTransaction);
    }
    this.transactionForm.reset();
  }
}
