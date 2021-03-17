const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    testCaseId: {type: String, required: true, unique: true},
    testCaseName: {type: String, require: true},
    testCasePrecondition: {type: String, require: true},
    testCaseDescription: {type: String, require: true},
    testCaseSteps: {type: String, require: true},
});

module.exports = model('User', schema);