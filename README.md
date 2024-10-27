# 💰 Expenses Overview App

This is a React-based web application for viewing expenses data. It fetches expense data from Google Sheets and allows users to select specific months and years to view and analyze their expenses.

## Features

- Fetches expense data from Google Sheets ✅
- Allows selection of month and year for expense viewing - ✅
- Table view of expenses - ✅
- Responsive design using Tailwind CSS - TBD
- Charts view of expenses - TBD

## Technologies Used

- React [https://react.dev/]
- Next.js [https://nextjs.org/docs]
- TypeScript [https://www.typescriptlang.org/docs]
- Tailwind CSS [https://tailwindcss.com/docs]
- Shadcn/UI (for components) [https://ui.shadcn.com/docs]

## Getting Started

### Prerequisites

- Node.js (version 20 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/jesspsilva/expenses-overview.git
   ```

2. Navigate to the project directory:

   ```
   cd expenses-overview
   ```

3. Install dependencies:

   ```
   npm install
   ```

   or

   ```
   yarn install
   ```

4. Set up your Google Sheets [https://workspace.google.com/products/sheets/]:

   - Create a Google Sheet with your expense data. The sheet should have a header row with the following columns: Date, Amount, Description, Category, Card and Owner.
   - Make sure the sheet is publicly accessible via a link (you can do this by sharing the sheet and setting the permissions to "Anyone with the link")
   - Copy the generatedlink

5. Create a `.env.local` file in the root directory and add your Google Sheet link:
   ```
   NEXT_PUBLIC_GOOGLE_SHEET_LINK=your_generated_link_here
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
