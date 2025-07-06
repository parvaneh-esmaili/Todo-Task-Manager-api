export default {
  async deleteByDocumentId(ctx) {
    const { documentId } = ctx.params;
    const deleted = await strapi.service('api::todos-2.todos-2').deleteByDocumentId(documentId);
    ctx.body = deleted;
  }
};
