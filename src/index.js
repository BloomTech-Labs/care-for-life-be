const { GraphQLServer } = require('graphql-yoga')
const Query = require('./resolvers/query')
const Mutation = require('./resolvers/mutations')
const { prisma } = require('./generated/prisma-client')
const Family = require("./resolvers/Family")
const Person = require("./resolvers/Person")
const Employee = require("./resolvers/Employee")
const Survey = require("./resolvers/Survey")
const Question = require("./resolvers/Question")
const Answer = require("./resolvers/Answer")

const resolvers = {
    Query,
    Mutation,
    Family,
    Person,
    Employee,
    Survey,
    Question,
    Answer
}


const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: { prisma }
  })

server.start(() => console.log(`Server is running on localhost:4000`))