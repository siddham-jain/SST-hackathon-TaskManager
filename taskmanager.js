// Get references to the necessary elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Listen for click event on "Add Task" button
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

// Function to add a new task
function addTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="completeButton">Complete</button>
        <button class="removeButton">Remove</button>
        <div class="schedule">
            <input type="datetime-local" class="scheduleInput">
            <button class="scheduleButton">Schedule</button>
        </div>
    `;

    // Listen for "Complete" button click
    taskItem.querySelector('.completeButton').addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    // Listen for "Remove" button click
    taskItem.querySelector('.removeButton').addEventListener('click', () => {
        taskItem.remove();
    });

    // Schedule a task using Luxon library
    const scheduleButton = taskItem.querySelector('.scheduleButton');
    scheduleButton.addEventListener('click', () => {
        const scheduleInput = taskItem.querySelector('.scheduleInput');
        const scheduleTime = luxon.DateTime.fromISO(scheduleInput.value);
        const formattedTime = scheduleTime.toFormat('yyyy-MM-dd HH:mm');
        const scheduledInfo = document.createElement('span');
        scheduledInfo.textContent = `Scheduled: ${formattedTime}`;
        taskItem.appendChild(scheduledInfo);
    });

    // Append the task item to the task list
    taskList.appendChild(taskItem);
}


