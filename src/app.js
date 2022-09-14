'use strict';

const currentNotes = [
  {
    id: 1,
    created: new Date().toString().slice(4, 15),
    title: 'How to implement HTML in JS?',
    content: 'sssss',
    category: 'Random Thought',
    archived: false,
  },
  {
    id: 2,
    created: new Date().toString().slice(4, 15),
    title: 'Google how to implement HTML in JS',
    content: 'sssss',
    category: 'Idea',
    archived: false,
  },
  {
    id: 3,
    created: new Date().toString().slice(4, 15),
    title: 'Create table with notes',
    content: 'sssss',
    category: 'Task',
    archived: false,
  },
  {
    id: 4,
    created: new Date().toString().slice(4, 15),
    title: 'How to add ability to create new note',
    content: 'sssss',
    category: 'Random Thought',
    archived: false,
  },
  {
    id: 5,
    created: new Date().toString().slice(4, 15),
    title: 'Implement ability to create new note',
    content: 'sssss',
    category: 'Task',
    archived: false,
  },
  {
    id: 6,
    created: new Date().toString().slice(4, 15),
    title: 'How to add ability to edit and archive the note',
    content: 'sssss',
    category: 'Random Thought',
    archived: false,
  },
  {
    id: 7,
    created: new Date().toString().slice(4, 15),
    title: 'Create summary table with categories',
    content: 'sssss',
    category: 'Task',
    archived: false,
  },
];

const visibleNotes = currentNotes.filter(note => !note.archived);
const root = document.querySelector('.notesapp');
const notesList = root.querySelector('.table-body');
const addForm = root.querySelector('.add-note-form');

function initNotes(notes) {
  visibleNotes.map(note => {
    notesList.insertAdjacentHTML('beforeend', `
    <tr class="table-row">
      <td class="table-cell"></td>
      <td class="table-cell">${note.title}</td>
      <td class="table-cell">${note.created}</td>
      <td class="table-cell">${note.category}</td>
      <td class="table-cell">${note.content}</td>
      <td class="table-cell"></td>
      <td class="table-cell"></td>
      <td class="table-cell">
        <div class="table-icon-cell body-icon-archive">
          <img src="./icons/arc.png" alt="archive">
        </div>
      </td>
      <td class="table-cell">
        <div class="table-icon-cell body-icon-delete">
          <img src="./icons/bin.png" alt="delete">
        </div>
      </td>
    </tr>
    `);
  });
}

initNotes(visibleNotes);

addForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = addForm.querySelector('.new-name');
  const content = addForm.querySelector('.new-content');
  const category = addForm.querySelector('.new-category');
  const newNote = {
    id: +new Date(),
    created: new Date().toString().slice(4, 15),
    title: title.value,
    content: content.value,
    category: category.value,
    archived: false,
  };

  currentNotes.push(newNote);

  title.value = '';
  content.value = '';
  category.value = '';

  notesList.insertAdjacentHTML('beforeend', `
    <tr class="table-row">
      <td class="table-cell"></td>
      <td class="table-cell">${newNote.title}</td>
      <td class="table-cell">${newNote.created}</td>
      <td class="table-cell">${newNote.category}</td>
      <td class="table-cell">${newNote.content}</td>
      <td class="table-cell"></td>
      <td class="table-cell"></td>
      <td class="table-cell">
        <div class="table-icon-cell body-icon-archive">
          <img src="./icons/arc.png" alt="archive">
        </div>
      </td>
      <td class="table-cell">
        <div class="table-icon-cell body-icon-delete">
          <img src="./icons/bin.png" alt="delete">
        </div>
      </td>
    </tr>
  `);
});
