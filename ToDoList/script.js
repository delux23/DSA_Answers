document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
    const filterOptions = document.getElementsByName('filter');
  
    // Load todos from localStorage
    const loadTodos = () => {
      return JSON.parse(localStorage.getItem('todos')) || [];
    };
  
    // Save todos to localStorage
    const saveTodos = (todos) => {
      localStorage.setItem('todos', JSON.stringify(todos));
    };
  
    // Render todos
    const renderTodos = (filter = 'all') => {
      const todos = loadTodos();
      todoList.innerHTML = '';
  
      const filteredTodos = todos.filter((todo) => {
        if (filter === 'complete') return todo.completed;
        if (filter === 'incomplete') return !todo.completed;
        return true;
      });
  
      filteredTodos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = todo.completed ? 'completed' : '';
        li.innerHTML = `
          <span>${todo.text}</span>
          <div>
            <button class="complete-btn">${todo.completed ? 'Undo' : 'Complete'}</button>
            <button class="delete-btn">Delete</button>
          </div>
        `;
  
        // Mark as complete/undo
        li.querySelector('.complete-btn').addEventListener('click', () => {
          todos[index].completed = !todos[index].completed;
          saveTodos(todos);
          renderTodos(filter);
        });
  
        // Delete todo
        li.querySelector('.delete-btn').addEventListener('click', () => {
          todos.splice(index, 1);
          saveTodos(todos);
          renderTodos(filter);
        });
  
        todoList.appendChild(li);
      });
    };
  
    // Add a new todo
    addBtn.addEventListener('click', () => {
      const text = todoInput.value.trim();
      if (text) {
        const todos = loadTodos();
        todos.push({ text, completed: false });
        saveTodos(todos);
        todoInput.value = '';
        renderTodos();
      }
    });
  
    // Filter todos
    filterOptions.forEach((option) => {
      option.addEventListener('change', (e) => {
        renderTodos(e.target.value);
      });
    });
  
    // Initial render
    renderTodos();
  });
  