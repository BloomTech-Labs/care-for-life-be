// @ts-check

/**
 * @param { import('../generated/prisma-client').Person } parent
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */

const family = async (parent, _, context) => {
    console.log("Person.family.parent: %j", parent)
  
    const family = await context.prisma.person({id: parent.id}).family();
  
    console.log("Person.family: %j", family)
    
    return family;
  };

module.exports = {
  family,
};