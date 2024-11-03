# 💰 Expenses Overview App

A React-based web application for viewing expenses data. Fetches expense data from Google Sheets and allows users to select specific months and years to view and analyze their expenses.

## ✨ Features

- ✅ Fetches expense data from Google Sheets
- ✅ Date range selection for expense viewing
- ✅ Table view of expenses
- ✅ Add new expense form - saving data on Google Form
- ✅ Filter data by category, card, owner
- ✅ Hide/show columns
- ✅ Pagination
- 🚧 Fetch data by date range
- 🚧 Responsive design using Tailwind CSS
- 🚧 Charts view of expenses

## 🛠️ Technologies Used

- [React](https://react.dev/)
- [Next.js](https://nextjs.org/docs)
- [TypeScript](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn/UI](https://ui.shadcn.com/docs) (for components)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 20 or later)
- npm or yarn
- Google account with access to Google Sheets and Google Forms

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jesspsilva/expenses-overview.git
   ```

2. Navigate to project directory:
   ```bash
   cd expenses-overview
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

   or

   ```
   yarn install
   ```

4. Set up your Google Sheets and Form:

   #### Google Sheets Setup
   - Create a Google Sheet with your expense data
   - The sheet should have a header row with the following columns: Date, Amount, Description, Category, Card and Owner
   - Make sure the sheet is publicly accessible via a link
   - Go to File > Share > Publish to web
   - Select "Comma-separated values (.csv)" as the format
   - Copy the generated link

   #### Google Form Setup
   - Create a new Google Form
   - Add the following fields (exact names are important):
     - Date (Short answer)
     - Amount (Short answer)
     - Description (Short answer)
     - Category (Dropdown)
     - Card (Dropdown)
     - Owner (Dropdown)
   - Go to Send > Copy link
   - In the copied link, replace the field values with placeholders:
     Date, Value, Description, Category, Card, and Owner

   #### Connecting Form to Sheet
   - Open your Google Form
   - Click on "Responses" at the top
   - Click on the three dots menu (⋮)
   - Select "Select response destination"
   - Select your existing spreadsheet

5. Create a `.env.local` file in the root directory and add your Google Sheet link:
   ```
   NEXT_PUBLIC_GOOGLE_SHEET_LINK=your_generated_link_here
   NEXT_PUBLIC_GOOGLE_FORM_LINK=your_form_submit_link_here
   ```

### Running the App

To run the app in development mode:

```
npm run dev
```

or

```
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributing

Contributions to this project are welcome! If you have any ideas, bug fixes, or enhancements, please feel free to open an issue or submit a pull request. Make sure to follow the existing code style and provide clear documentation for your changes. Just take into account that this is an experimental project and a work in progress.
