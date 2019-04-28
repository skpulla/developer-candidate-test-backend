const Datastore = require('nedb');
const appRoot = require('app-root-path');


const People = new Datastore({
  filename: `${appRoot.path}/data/db.json`,
  autoload: true,
});

function getPeople(req, res) {
  People.find({}).skip(req.query.skip).limit(req.query.limit).exec((err, docs) => {
    res.contentType('application/json');
    res.status(200).send(docs);
  });
}

export default {
  getPeople,
};
