const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} = require('./handler');

const routes = [
  // Menambahkan notes
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },

  // Menampilkan notes ke halaman utama
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },

  // Melihat detail notes
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },

  // Mengubah notes
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },

  // Menghapus notes
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
