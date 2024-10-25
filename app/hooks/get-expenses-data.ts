import { Expense } from "../types/expense";

export default async function getGoogleSheetsExpensesData(): Promise<
  Expense[]
> {
  try {
    const googleSheetLink = process.env.NEXT_PUBLIC_GOOGLE_SHEET_LINK;

    if (!googleSheetLink) {
      throw new Error("Google sheet link is not defined");
    }

    const response = await fetch(googleSheetLink);
    const csvText = await response.text();

    const rows = csvText.split("\n").slice(1); // Remove header row
    return rows.map((row) => {
      const [date, amount, description, category, card, owner] = row.split(",");
      return {
        date,
        amount: parseFloat(amount),
        description,
        category,
        card,
        owner,
      };
    });
  } catch (err) {
    console.error("Fail to load expenses data", err);
    throw new Error("Fail to load expenses data");
  }
}
