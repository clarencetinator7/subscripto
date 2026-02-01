# Subscripto

A modern, interactive web application for managing and visualizing your subscriptions using an interactive **treemap layout**

## Features

- 📊 **Interactive Treemap Visualization** - Visualize all your subscriptions at a glance with D3-powered treemap charts
- ➕ **Add & Edit Subscriptions** - Easily add new subscriptions or edit existing ones through a clean dialog interface
- 💰 **Cost Tracking** - Monitor both monthly and yearly costs automatically calculated based on billing cycle
- 📱 **Responsive Design** - Fully responsive interface that works seamlessly on desktop and mobile devices
- 📈 **Subscription Metrics** - Get detailed statistics including total costs and average spending per subscription
- 🔄 **State Management** - Persistent state management with Zustand for smooth user experience

## Tech Stack

- **Frontend Framework**: React 19
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Form Handling**: React Hook Form
- **State Management**: Zustand
- **Visualization**: D3.js (d3-hierarchy)

## Project Structure

```
src/
├── components/           # React components
│   ├── Subscription/    # Subscription display components
│   ├── SubscriptionForm/ # Form for adding/editing subscriptions
│   ├── TreeMap/         # D3 treemap visualization
│   └── ui/              # Reusable UI components
├── store/               # Zustand state management
├── types/               # TypeScript type definitions
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── const/               # Application constants
└── lib/                 # Library functions and helpers
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd subscripto
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances

## Usage

### Adding a Subscription

1. Click the "Add Subscription" button
2. Fill in the subscription details:
   - **Name**: The name of the service
   - **Cost**: The amount you pay
   - **Billing Cycle**: Select Monthly or Yearly
   - **Website** (optional): The service's website
   - **Visual Identifier**: Automatically fetched using google's favicon api
3. Click Save

<!-- ### Viewing Subscriptions

- **Treemap View**: Visual representation showing all subscriptions proportional to their monthly cost
- **List View**: Detailed list of all subscriptions with full information
- **Statistics**: View total monthly and yearly costs, plus average spending -->

### Editing a Subscription

1. Click the Edit button on any subscription
2. Update the details
3. Click Save

### Deleting a Subscription

1. Click the Delete button on any subscription
2. Confirm the deletion

## Data Model

### Subscription Type

```typescript
type Subscription = {
  Id: string;
  Website?: string;
  Name: string;
  Cost: number;
  Cycle: BillingCycle;
  VisualIdentifier: string;
};

type BillingCycle = "Monthly" | "Yearly";
```

### Subscription Metrics

Automatically calculated for each subscription:

- Monthly Cost
- Yearly Cost
- Monthly Ratio (proportion of total monthly cost)

## Future Enhancements

- 📤 Export data to CSV/PDF
- 📈 More detailed dashboard
- 🏷️ Categories and Tag
