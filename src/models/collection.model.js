const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { toJSON, paginate } = require('./plugins');

const collectionSchema = Schema({
  name: String,
  description: String,
  account: String,
});

// add plugin that converts mongoose to json
collectionSchema.plugin(toJSON);
collectionSchema.plugin(paginate);


const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;
