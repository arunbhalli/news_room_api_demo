module.exports = (factory, Models) => {
  factory.define('Article', Models.Article, {
    title: 'My awesome title',
    content: 'Lorem ipsum etcetcetc...',
    createdAt: new Date(),
    updatedAt: new Date(),
  });
};
