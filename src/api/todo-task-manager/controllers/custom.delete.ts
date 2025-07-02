import { Context } from 'koa';

export default {
  async deleteByDocumentId(ctx: Context) {
    const { documentId } = ctx.params;

    if (!documentId) {
      ctx.throw(400, 'Document ID is required');
      return;
    }

    try {
      await strapi.documents('api::todo-task-manager.todo-task-manager').delete({
        documentId
      });

      ctx.send({ message: 'Deleted successfully' });
    } catch (error) {
      console.error('Failed to delete document:', error);
      ctx.throw(500, 'Failed to delete document');
    }
  }
};