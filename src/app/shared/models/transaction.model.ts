export class Transaction {
  id?: number;
  type: string;
  category: string;
  sum: number;
  date: Date | any;
  comment: string;
  color?: string;

  constructor(type: string, category: string, sum: number, date: any, comment: string) {
    this.type = type;
    this.category = category;
    this.sum = sum;
    this.date = date;
    this.comment = comment;
  }
}
