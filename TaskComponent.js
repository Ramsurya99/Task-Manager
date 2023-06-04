import React, { useState } from 'react';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [newDueDate, setNewDueDate] = useState('');
  const [newPriority, setNewPriority] = useState('');

  const TaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const CategoryChange = (event) => {
    setNewCategory(event.target.value);
  };

  const DueDateChange = (event) => {
    setNewDueDate(event.target.value);
  };

  const PriorityChange = (event) => {
    setNewPriority(event.target.value);
  };

  const AddTask = () => {
    if (newTask && newCategory && newDueDate && newPriority) {
      const newTaskObject = {
        id: Date.now(),
        task: newTask,
        category: newCategory,
        dueDate: newDueDate,
        priority: newPriority,
      };
      setTasks([...tasks, newTaskObject]);
      setNewTask('');
      setNewCategory('');
      setNewDueDate('');
      setNewPriority('');
    }
  };

  const DeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <form>
        <input
          type="text"
          placeholder="Task"
          value={newTask}
          onChange={TaskChange}
        />
        <input
          type="text"
          placeholder="Category"
          value={newCategory}
          onChange={CategoryChange}
        />
        <input
          type="text"
          placeholder="Due Date"
          value={newDueDate}
          onChange={DueDateChange}
        />
        <input
          type="text"
          placeholder="Priority"
          value={newPriority}
          onChange={PriorityChange}
        />
        <button type="button" onClick={AddTask}>
          Add Task
        </button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.task}</span> |
            <span>{task.category}</span> |
            <span>{task.dueDate}</span> |
            <span>{task.priority}</span>
            <button onClick={() => DeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;