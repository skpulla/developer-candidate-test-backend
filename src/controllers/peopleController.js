const Datastore = require('nedb');
const appRoot = require('app-root-path');


const People = new Datastore({
  filename: `${appRoot.path}/data/db.json`,
  autoload: true,
});

function getPeople(req, res, filters) {
  People.find(
    filters,
  ).sort()
    .skip(req.query.skip ? req.query.skip : req.query.offset)
    .limit(req.query.limit)
    .exec((err, docs) => {
      res.contentType('application/json');
      res.status(200).send(docs);
    });
}

export default {
  getPeople,
};
