import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  beforeEach(() => {
    render(<TodoList />);
  });

  test('renders TodoList component with initial todos', () => {
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByTestId('todo-input')).toBeInTheDocument();
    expect(screen.getByTestId('add-button')).toBeInTheDocument();
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  test('adds a new todo when form is submitted', () => {
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    fireEvent.change(input, { target: { value: 'New Test Todo' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
    expect(input).toHaveValue('');
  });

  test('toggles todo completion status when clicked', () => {
    const todo = screen.getByText('Learn React');
    fireEvent.click(todo);
    expect(todo.closest('li')).toHaveClass('completed');
    fireEvent.click(todo);
    expect(todo.closest('li')).not.toHaveClass('completed');
  });

  test('deletes a todo when delete button is clicked', () => {
    const todo = screen.getByText('Learn React');
    const deleteButton = screen.getByTestId('delete-button-1');
    fireEvent.click(deleteButton);
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});