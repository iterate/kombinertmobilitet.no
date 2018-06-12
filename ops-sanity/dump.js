const prod = require('./sanity.prod');
const dev = require('./sanity.dev');

const documentTypes = [
  'author',
  'blockContent',
  'category',
  'experimentChapter',
  'introChapter',
  'post',
  'summaryChapter',
  'website',
];

documentTypes.map(type => {
  prod
    .fetch(`*[_type == '${type}']`)
    .then(
      documents => {
        if (!documents) {
          console.error(`No ${type}-documents found. Is there a typo?`);
          return;
        }

        documents
          .reduce(
            (transaction, doc) => transaction.create(doc),
            dev.transaction()
          )
          .commit()
          .then(
            success => console.log(`Dumped ${documents.length} ${type}-documents`),
            error => console.log(`Failed to dump ${type}-documents:`, error),
          );
      },
      error => {
        console.error(`Failed to fetch ${type}-documents:`, error);
      }
    );
});
