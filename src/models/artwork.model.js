const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { toJSON, paginate } = require('./plugins');

const artworkSchema = Schema({
  name: String,
  mint: String,
  account: String,
  parent: { type: Schema.Types.ObjectId, ref: 'Collection' },
});
// add plugin that converts mongoose to json
artworkSchema.plugin(toJSON);
artworkSchema.plugin(paginate);


const Artwork = mongoose.model('Artwork', artworkSchema);

module.exports = Artwork;
