# Money Tracker 
A TypeScript based app that helps to track different category of expense

## Demo
[![Click the image below to watch the demo!](money-trakcer.png)](https://youtu.be/Ep0aPpT0DnQ)

## 🏃 How to run

1. Run `npm start` in the `client` directory.
2. Run `npm run dev` in the `api` directory simultaneously in a different terminal.

## Features
**Home Page Overview**: Upon landing on the home page, you'll find a concise summary of your expenses neatly categorized by various spending categories.

**Adding Expenses**: Simply click the "Add Expenses" button to access a user-friendly form for entering your expense details. The expense history is displayed with the latest records conveniently positioned at the top.

**Submitting Expenses**: When adding a new expense, complete the necessary fields, including the amount (e.g., $103.5), and choose the relevant category (e.g., Bills). Once submitted, the new record will instantly appear at the top of your expense history. It's worth noting that these updates are synchronized across all connected screens in real-time.

**Real-time Updates**: Experiment with opening multiple tabs, and you'll notice that changes made in one tab are dynamically and instantaneously reflected on all other open tabs, providing you with a seamlessly synchronized experience.


## Code Structure

### Frontend
**Components**: A range of componenets including Button, ExpenseDetail, and TextInput are developed to suppport usability and reusability. 

### Backend: 
**Code Organization**: Organized into controllers, models. and routes. 

### Storybook
**Storybook**: Storybook is integrated to increase reusability of frontend components.

### Database: 
**Data**: All data are stored into MongoDB.
