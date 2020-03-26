"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Family",
    embedded: false
  },
  {
    name: "Person",
    embedded: false
  },
  {
    name: "Survey",
    embedded: false
  },
  {
    name: "Employee",
    embedded: false
  },
  {
    name: "Question",
    embedded: false
  },
  {
    name: "Answer",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/peter-gambino/care-for-life-test-3/dev`
});
exports.prisma = new exports.Prisma();
