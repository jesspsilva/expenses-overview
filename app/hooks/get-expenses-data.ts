import { Expense } from "../types/expense";
import { parseCSV } from "../utils/parse-csv";
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

    const parsedData = parseCSV(csvText);
    return parsedData.map((row: string[]) => ({
      date: row[0],
      amount: row[1],
      description: row[2],
      category: row[3],
      card: row[4],
      owner: row[5],
    }));
  } catch (err) {
    console.error("Fail to load expenses data", err);
    throw new Error("Fail to load expenses data");
  }
}
