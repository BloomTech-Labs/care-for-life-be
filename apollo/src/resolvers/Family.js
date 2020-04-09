// @ts-check

/**
 * @param { import('../generated/prisma-client').Family } parent
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */

const family_members = async (parent, _, context) => {
    console.log("Family.person.parent: %j", parent)
  
    const person = await context.prisma.family({id: parent.id}).family_members();
  
    console.log("User.profile: %j", family_members)
    
    return family_members;
  };

  module.exports = {
  family_members,
};