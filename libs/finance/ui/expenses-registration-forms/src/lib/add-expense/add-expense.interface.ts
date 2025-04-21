export interface AddExpense {
  description?: string;
  amount?: {
    amountExclVat?: number;
    vatPercentage?: number;
  };
  date?: string[];
  tags?: string[];
}
