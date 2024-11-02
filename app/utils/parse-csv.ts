export const parseCSV = (csvString: string) => {
  const rows = csvString.trim().split("\n");
  return rows.slice(1).map(parseCSVRow);
};

const parseCSVRow = (row: string) => {
  const values = [];
  let inQuotes = false;
  let value = "";

  for (let i = 0; i < row.length; i++) {
    const char = row[i];

    if (char === '"' && (i === 0 || row[i - 1] !== "\\")) {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      values.push(value.trim());
      value = "";
    } else {
      value += char;
    }
  }

  values.push(value.trim());
  return values;
};
