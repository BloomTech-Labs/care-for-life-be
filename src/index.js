const { GraphQLServer } = require('graphql-yoga')


// const resolvers = {}


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

server.start(() => console.log(`Server running on localhost:4000`))