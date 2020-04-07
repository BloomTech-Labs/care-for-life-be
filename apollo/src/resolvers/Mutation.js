// @ts-check

/**
 * @param {{ data: import('../generated/prisma-client').FamilyCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { import('../generated/prisma-client').FamilyPromise }
 */
const createFamily = (_, args, context) => {
  console.log("createFamily.args: %j", args)

  const family = context.prisma.createFamily(args.data);  

  return family;
};

/**
 * @param {{ data: import('../generated/prisma-client').PersonCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { import('../generated/prisma-client').PersonPromise }
 */

 const createPerson = (_, args, context) => {
   console.log("createPerson.args: %j", args)

   const person = context.prisma.createPerson(args.data)

   return person
 }

module.exports = {
  createFamily,
  createPerson,
};
