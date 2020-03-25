const { GraphQLServer } = require('graphql-yoga')
const Query = require('./resolvers/query')
const Mutation = require('./resolvers/mutations')
// const { prisma } = require('./generated/prisma-client')
import prisma from './prisma-dist'
const resolvers = {
    Query,
    Mutation,
}


const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
        return {
            ...request,
            prisma,
        } 
    },
})

const port = process.env.PORT || 3000

server.start(port, () => console.log(`Server running on localhost:3000`))