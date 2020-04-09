// @ts-check

/**
 * @param {{ where: import('../generated/prisma-client').FamilyWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const family = async (_, args, context) => {
  console.log("Query.family.args: %j", args)

  const family = await context.prisma.family(args.where);

  console.log("Query.family: %j", family)
  
  return family;
};

/**
 * @param {{ where: import('../generated/prisma-client').FamilyWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const families = async (_, args, context) => {
  console.log("Query.families.args: %j", args)

  const family = await context.prisma.families(args);

  console.log("Query.user: %j", family)
  
  return family;
};

// Single person
/**
 * @param {{ where: import('../generated/prisma-client').PersonWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const person = async (_, args, context) => {
  console.log("Query.person.args: %j", args)

  const person = await context.prisma.person(args.where);

  console.log("Query.person: %j", person)
  
  return person;
};


module.exports = {
  family,
  families,
  person
};
