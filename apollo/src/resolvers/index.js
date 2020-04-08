// @ts-check

// All resolvers must be imported here and declared in the resolvers
// object in order to be received by the client. If you are logging
// your resolvers but not seeing anything print to stdout, this is
// the most likely culprit

const Query = require('./Query');
const Mutation = require('./Mutation');
const Family = require('./Family.js');
const Person = require('./Person');

const resolvers = {
  Query,
  Mutation,
  Family,
  Person,

};

module.exports = resolvers;
