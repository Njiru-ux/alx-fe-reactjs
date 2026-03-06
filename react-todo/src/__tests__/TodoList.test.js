import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  beforeEach(() => {
    render(<TodoList />);
  });

  test('renders TodoList component with initial todos', () => {
    // Check if the title is rendered
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    
    // Check if input field and add button are rendered
    expect(screen.getByTestId('todo-input')).toBeInTheDocument();
    expect(screen.getByTestId('add-button')).toBeInTheDocument();
    
    // Check if initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
    
    // Check if stats are rendered correctly
    const stats = screen.getByTestId('todo-stats');
    expect(stats).toHaveTextContent('Total: 3 | Completed: 1');
  });

  test('adds a new todo when form is submitted', () => {
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    // Simulate user input
    fireEvent.change(input, { target: { value: 'New Test Todo' } });
    expect(input).toHaveValue('New Test Todo');
    
    // Submit the form
    fireEvent.click(addButton);
    
    // Check if new todo is added
    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
    
    // Check if input is cleared
    expect(input).toHaveValue('');
    
    // Check if stats are updated
    const stats = screen.getByTestId('todo-stats');
    expect(stats).toHaveTextContent('Total: 4 | Completed: 1');
  });

  test('does not add empty todo', () => {
    const initialTodos = screen.getAllByRole('listitem').length;
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    // Try to add empty todo
    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(addButton);
    
    // Check if no new todo is added
    expect(screen.getAllByRole('listitem').length).toBe(initialTodos);
  });

  test('toggles todo completion status when clicked', () => {
    // Find the first todo item
    const firstTodo = screen.getByText('Learn React');
    const firstTodoItem = firstTodo.closest('li');
    
    // Initially, it should not have completed class
    expect(firstTodoItem).not.toHaveClass('completed');
    
    // Click to toggle
    fireEvent.click(firstTodo);
    
    // After click, it should have completed class
    expect(firstTodoItem).toHaveClass('completed');
    
    // Click again to toggle back
    fireEvent.click(firstTodo);
    
    // Should not have completed class again
    expect(firstTodoItem).not.toHaveClass('completed');
    
    // Check if stats update correctly
    const stats = screen.getByTestId('todo-stats');
    expect(stats).toHaveTextContent('Total: 3 | Completed: 1');
  });

  test('deletes a todo when delete button is clicked', () => {
    // Get initial count of todos
    const initialTodos = screen.getAllByRole('listitem').length;
    
    // Find the delete button for the first todo
    const firstTodo = screen.getByText('Learn React');
    const firstTodoItem = firstTodo.closest('li');
    const deleteButton = within(firstTodoItem).getByText('Delete');
    
    // Click delete button
    fireEvent.click(deleteButton);
    
    // Check if todo is removed
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    
    // Check if number of todos decreased
    expect(screen.getAllByRole('listitem').length).toBe(initialTodos - 1);
    
    // Check if stats are updated
    const stats = screen.getByTestId('todo-stats');
    expect(stats).toHaveTextContent('Total: 2 | Completed: 1');
  });

  test('handles multiple todo operations correctly', () => {
    // Add a new todo
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    fireEvent.change(input, { target: { value: 'Multiple Operations Todo' } });
    fireEvent.click(addButton);
    
    const newTodo = screen.getByText('Multiple Operations Todo');
    const newTodoItem = newTodo.closest('li');
    
    // Toggle the new todo
    fireEvent.click(newTodo);
    expect(newTodoItem).toHaveClass('completed');
    
    // Delete the new todo
    const deleteButton = within(newTodoItem).getByText('Delete');
    fireEvent.click(deleteButton);
    
    // Verify it's gone
    expect(screen.queryByText('Multiple Operations Todo')).not.toBeInTheDocument();
    
    // Verify original todos are still there
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });
});

// Additional tests for edge cases
describe('TodoList Edge Cases', () => {
  test('handles todos with special characters', () => {
    render(<TodoList />);
    
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    // Add todo with special characters
    fireEvent.change(input, { target: { value: 'Todo with @#$% special chars!' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText('Todo with @#$% special chars!')).toBeInTheDocument();
  });

  test('handles very long todo text', () => {
    render(<TodoList />);
    
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    const longText = 'A'.repeat(100);
    fireEvent.change(input, { target: { value: longText } });
    fireEvent.click(addButton);
    
    expect(screen.getByText(longText)).toBeInTheDocument();
  });
});