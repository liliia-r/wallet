import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Transaction } from '@models/transaction.model';
import { TransactionsService } from '@services/transactions/transactions.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss'],
})
export class AddTransactionComponent implements OnInit, OnChanges {
  @Output() closeTransactionModal = new EventEmitter<void>();
  @Input() checkedId: number;

  expenses: string[];
  incomes: string[];

  checkedTransaction: Transaction;
  isEditMode: boolean;

  transactionForm = this.fb.group({
    type: 'income',
    category: ['', Validators.required],
    sum: ['', Validators.required],
    date: ['', Validators.required],
    comment: [''],
  });

  constructor(
    private transactionService: TransactionsService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.initForm();
  }

  ngOnInit(): void {
    this.expenses = this.transactionService.rangesExpense;
    this.incomes = this.transactionService.rangesIncome;
  }

  get transactionType() {
    return this.transactionForm.get('type');
  }

  onClose() {
    this.closeTransactionModal.emit();
  }

  initForm() {
    if (this.transactionService.isEditMode) {
      const transaction = this.transactionService.getTransaction(this.checkedId);

      this.transactionForm.controls['type'].setValue(transaction.type);
      this.transactionForm.controls['category'].setValue(transaction.category);
      this.transactionForm.controls['sum'].setValue(transaction.sum);
      this.transactionForm.controls['date'].setValue(transaction.date);
      this.transactionForm.controls['comment'].setValue(transaction.comment);

      this.isEditMode = this.transactionService.isEditMode;
    }
  }

  onTransactionFormSubmit() {
    const newTransaction = new Transaction(
      this.transactionForm.value.type,
      this.transactionForm.value.category,
      this.transactionForm.value.sum,
      this.transactionForm.value.date,
      this.transactionForm.value.comment === '' ? '-' : this.transactionForm.value.comment
    );

    if (this.transactionService.isEditMode) {
      this.transactionService.updateTransaction(this.checkedId, newTransaction);
      this.transactionService.isEditMode = false;
      this.onClose();
    } else {
      this.transactionService.addTransaction(newTransaction);
      this.onClose();
    }
  }
}
