const mongodb = require('mongodb').MongoClient;
const connectionUrl =
  '*****';

const clearLinkCollection = () => {
  mongodb.connect(
    connectionUrl,
    function(err, client) {
      const db = client.db('moviedb');
      const collection = db.collection('linkcollection');
      collection.deleteMany({});
      client.close();
    }
  );
};
module.exports.clearLinkCollection = clearLinkCollection;

const getLinkCollection = callBack => {
  const links = [];
  mongodb.connect(
    connectionUrl,
    function(err, client) {
      const db = client.db('moviedb');
      const collection = db.collection('linkcollection');
      let cursor = collection.find({});
      collection.find({}).toArray(function(err, docs) {
        callBack(docs);
      });
    }
  );
};
module.exports.getLinkCollection = getLinkCollection;

const setLinkCollection = (links, callBack) => {
  mongodb.connect(
    connectionUrl,
    function(err, client) {
      const db = client.db('moviedb');
      db.collection('linkcollection').insertMany(links, (err, result) => {
        callBack(result);
        client.close();
      });
    }
  );
};
module.exports.setLinkCollection = setLinkCollection;

const clearMovieCollection = cb => {
  mongodb.connect(
    connectionUrl,
    function(err, client) {
      const db = client.db('moviedb');
      const collection = db.collection('movieollection');
      collection.deleteMany({});
      client.close();
      if (cb) {
        cb();
      }
    }
  );
};
module.exports.clearMovieCollection = clearMovieCollection;

const setMovieCollection = (links, callBack) => {
  mongodb.connect(
    connectionUrl,
    function(err, client) {
      const db = client.db('moviedb');
      db.collection('moviecollection').insertMany(links, (err, result) => {
        callBack(result);
        client.close();
      });
    }
  );
};
module.exports.setMovieCollection = setMovieCollection;

const getMovies = callBack => {
  const links = [];
  mongodb.connect(
    connectionUrl,
    function(err, client) {
      const db = client.db('moviedb');
      const collection = db.collection('moviecollection');
      let cursor = collection.find().limit(5);
      collection.find({}).toArray(function(err, docs) {
        callBack(docs);
      });
    }
  );
};
module.exports.getMovies = getMovies;
