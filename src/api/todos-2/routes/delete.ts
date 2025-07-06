module.exports = {
  routes: [
    {
      method: 'DELETE',
      path: '/todos/custom/:documentId',
      handler: 'custom-todos.deleteByDocumentId',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
