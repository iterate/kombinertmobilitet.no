const prod = require('./sanity.prod');
const dev = require('./sanity.dev');

const imageExtensions = [
  'png'
];

imageExtensions.map(ext => {
  prod
    .fetch(`*[_id === *-'${ext}']`)
    .then(
      images => {
        if (!images) {
          console.error(`No ${ext}-images found. Is there a typo?`);
          return;
        }

        images
          .reduce(
            (transaction, doc) => transaction.create(doc),
            dev.transaction()
          )
          .commit()
          .then(
            success => console.log(`Dumped ${images.length} ${ext}-images`),
            error => console.log(`Failed to dump ${ext}-images:`, error),
          );
      },
      error => {
        console.error(`Failed to fetch ${ext}-images:`, error);
      }
    );
});

// const documentTypes = [
//   // 'blockContent',
//   'image',
//   // 'experimentChapter',
//   // 'introChapter',
//   // 'post',
//   // 'summaryChapter',
//   // 'website',
// ];

// documentTypes.map(type => {
//   prod
//     .fetch(`*[_type == '${type}']`)
//     .then(
//       documents => {
//         if (!documents) {
//           console.error(`No ${type}-documents found. Is there a typo?`);
//           return;
//         }

//         documents
//           .reduce(
//             (transaction, doc) => transaction.create(doc),
//             dev.transaction()
//           )
//           .commit()
//           .then(
//             success => console.log(`Dumped ${documents.length} ${type}-documents`),
//             error => console.log(`Failed to dump ${type}-documents:`, error),
//           );
//       },
//       error => {
//         console.error(`Failed to fetch ${type}-documents:`, error);
//       }
//     );
// });
