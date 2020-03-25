import { Prisma } from 'prisma-binding'

const prisma = new Prisma({
    typeDefs: 'prisma/generated.graphql',
    endpoint: process.env.ENDPOINT
  })
export default prisma