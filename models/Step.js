const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    testCase: {type: Schema.Types.ObjectId, required: true, ref: "TestCase"},
    stepAction: {type: String},
    stepExpectedResult: {type: String}
});

module.exports = model('Step', schema);