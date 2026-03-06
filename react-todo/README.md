# React Todo List Application

A fully functional Todo List application built with React, featuring comprehensive tests using Jest and React Testing Library.

## Features

- Display list of todo items
- Add new todos
- Toggle todo completion status by clicking
- Delete individual todos
- Display statistics (total todos and completed count)
- Responsive and clean UI

## Testing

The application includes comprehensive tests covering:

- Initial render and state verification
- Adding new todos
- Preventing empty todo submissions
- Toggling todo completion status
- Deleting todos
- Multiple operations sequence
- Edge cases (special characters, long text)

## Technologies Used

- React 18
- Jest
- React Testing Library
- CSS3

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the application: `npm start`
4. Run tests: `npm test`
5. Run tests with coverage: `npm test -- --coverage`

## Project Structure
src/
├── components/
│ ├── TodoList.js
│ └── TodoList.css
├── tests/
│ └── TodoList.test.js
├── App.js
└── index.js