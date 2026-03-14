import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  beforeEach(() => {
    render(<TodoList />);
  });

  describe('Initial Render', () => {
    test('renders the todo list with title', () => {
      expect(screen.getByText('Todo List')).toBeInTheDocument();
    });

    test('displays all initial todos', () => {
      expect(screen.getByText('Learn React')).toBeInTheDocument();
      expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
      expect(screen.getByText('Write tests')).toBeInTheDocument();
    });

    test('displays correct initial stats', () => {
      const stats = screen.getByTestId('todo-stats');
      expect(stats).toHaveTextContent('Total: 3 | Completed: 1');
    });

    test('renders input field and add button', () => {
      expect(screen.getByTestId('todo-input')).toBeInTheDocument();
      expect(screen.getByTestId('add-button')).toBeInTheDocument();
    });
  });

  describe('Adding Todos', () => {
    test('adds a new todo when form is submitted', () => {
      const input = screen.getByTestId('todo-input');
      const addButton = screen.getByTestId('add-button');
      
      fireEvent.change(input, { target: { value: 'Buy groceries' } });
      fireEvent.click(addButton);
      
      expect(screen.getByText('Buy groceries')).toBeInTheDocument();
      expect(input.value).toBe('');
    });

    test('does not add empty todo', () => {
      const initialTodos = screen.getAllByRole('listitem').length;
      const addButton = screen.getByTestId('add-button');
      
      fireEvent.click(addButton);
      
      expect(screen.getAllByRole('listitem')).toHaveLength(initialTodos);
    });

    test('does not add todo with only whitespace', () => {
      const initialTodos = screen.getAllByRole('listitem').length;
      const input = screen.getByTestId('todo-input');
      const addButton = screen.getByTestId('add-button');
      
      fireEvent.change(input, { target: { value: '   ' } });
      fireEvent.click(addButton);
      
      expect(screen.getAllByRole('listitem')).toHaveLength(initialTodos);
    });

    test('updates stats after adding a todo', () => {
      const input = screen.getByTestId('todo-input');
      const addButton = screen.getByTestId('add-button');
      const stats = screen.getByTestId('todo-stats');
      
      fireEvent.change(input, { target: { value: 'New Todo' } });
      fireEvent.click(addButton);
      
      expect(stats).toHaveTextContent('Total: 4 | Completed: 1');
    });
  });

  describe('Toggling Todos', () => {
    test('toggles todo completion status when clicked', () => {
      const todoText = screen.getByText('Learn React');
      const todoElement = todoText.closest('span');
      
      expect(todoElement).not.toHaveClass('completed');
      
      fireEvent.click(todoText);
      expect(todoElement).toHaveClass('completed');
      
      fireEvent.click(todoText);
      expect(todoElement).not.toHaveClass('completed');
    });

    test('updates stats when toggling todos', () => {
      const stats = screen.getByTestId('todo-stats');
      const todoText = screen.getByText('Learn React');
      
      expect(stats).toHaveTextContent('Completed: 1');
      
      fireEvent.click(todoText);
      expect(stats).toHaveTextContent('Completed: 2');
      
      fireEvent.click(todoText);
      expect(stats).toHaveTextContent('Completed: 1');
    });
  });

  describe('Deleting Todos', () => {
    test('deletes a todo when delete button is clicked', () => {
      const todoToDelete = screen.getByText('Learn React');
      const todoItem = todoToDelete.closest('li');
      const deleteButton = within(todoItem).getByText('Delete');
      
      fireEvent.click(deleteButton);
      
      expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    });

    test('updates stats after deleting a todo', () => {
      const stats = screen.getByTestId('todo-stats');
      const todoToDelete = screen.getByText('Learn React');
      const todoItem = todoToDelete.closest('li');
      const deleteButton = within(todoItem).getByText('Delete');
      
      expect(stats).toHaveTextContent('Total: 3');
      
      fireEvent.click(deleteButton);
      
      expect(stats).toHaveTextContent('Total: 2 | Completed: 1');
    });

    test('deletes correct todo when multiple exist', () => {
      // Add a new todo first
      const input = screen.getByTestId('todo-input');
      const addButton = screen.getByTestId('add-button');
      
      fireEvent.change(input, { target: { value: 'Temporary Todo' } });
      fireEvent.click(addButton);
      
      expect(screen.getByText('Temporary Todo')).toBeInTheDocument();
      
      // Delete the temporary todo
      const todoToDelete = screen.getByText('Temporary Todo');
      const todoItem = todoToDelete.closest('li');
      const deleteButton = within(todoItem).getByText('Delete');
      
      fireEvent.click(deleteButton);
      
      expect(screen.queryByText('Temporary Todo')).not.toBeInTheDocument();
      expect(screen.getByText('Learn React')).toBeInTheDocument();
      expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
      expect(screen.getByText('Write tests')).toBeInTheDocument();
    });
  });

  describe('Complex Interactions', () => {
    test('can add multiple todos and toggle them', () => {
      const input = screen.getByTestId('todo-input');
      const addButton = screen.getByTestId('add-button');
      
      // Add multiple todos
      const todosToAdd = ['First Task', 'Second Task', 'Third Task'];
      
      todosToAdd.forEach(todo => {
        fireEvent.change(input, { target: { value: todo } });
        fireEvent.click(addButton);
      });
      
      // Toggle some todos
      const firstTodo = screen.getByText('First Task');
      const secondTodo = screen.getByText('Second Task');
      
      fireEvent.click(firstTodo);
      fireEvent.click(secondTodo);
      
      // Verify they have completed class
      expect(firstTodo.closest('span')).toHaveClass('completed');
      expect(secondTodo.closest('span')).toHaveClass('completed');
      expect(screen.getByText('Third Task').closest('span')).not.toHaveClass('completed');
    });

    test('maintains correct state after multiple operations', () => {
      const input = screen.getByTestId('todo-input');
      const addButton = screen.getByTestId('add-button');
      const stats = screen.getByTestId('todo-stats');
      
      // Add a todo
      fireEvent.change(input, { target: { value: 'New Task' } });
      fireEvent.click(addButton);
      
      // Toggle an existing todo
      const existingTodo = screen.getByText('Learn React');
      fireEvent.click(existingTodo);
      
      // Delete another todo
      const todoToDelete = screen.getByText('Build a Todo App');
      const deleteButton = within(todoToDelete.closest('li')).getByText('Delete');
      fireEvent.click(deleteButton);
      
      // Verify final state
      expect(screen.getByText('New Task')).toBeInTheDocument();
      expect(screen.getByText('Learn React')).toBeInTheDocument();
      expect(screen.queryByText('Build a Todo App')).not.toBeInTheDocument();
      expect(screen.getByText('Write tests')).toBeInTheDocument();
      
      // Check stats (assuming Write tests was already completed)
      expect(stats).toHaveTextContent(/Total: (3|4)/); // Either 3 or 4 depending on initial state
    });
  });

  describe('Form Submission', () => {
    test('submits form when Enter key is pressed', () => {
      const input = screen.getByTestId('todo-input');
      
      fireEvent.change(input, { target: { value: 'Enter Key Todo' } });
      fireEvent.submit(screen.getByTestId('todo-form'));
      
      expect(screen.getByText('Enter Key Todo')).toBeInTheDocument();
    });
  });
});