# ALX React App - Props vs Context API

This project demonstrates the difference between prop drilling and Context API for state management in React.

## Features

- Demonstrates prop drilling with nested components
- Refactors the application to use Context API
- Shows how Context API eliminates prop drilling

## Prop Drilling Approach

In the initial implementation, user data is passed through multiple components:
- App → ProfilePage → UserInfo → UserDetails

## Context API Approach

After refactoring, user data is provided at the top level and consumed directly where needed:
- App provides data via UserContext.Provider
- UserDetails consumes data via useContext hook

## How to Run

1. Install dependencies:
   ```bash
   npm install