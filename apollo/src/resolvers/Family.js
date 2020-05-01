// @ts-check

/**
 * @param { import('../generated/prisma-client').Family } parent
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */

const family_members = async (parent, _, context) => {
    console.log("Family.person.parent: %j", parent)
  
    const family_members = await context.prisma.family({id: parent.id}).family_members();
  
    console.log("User.profile: %j", family_members)
    
    return family_members;
  };

  const completed_surveys = async (parent, _, context) => {
    console.log("Family.person.parent: %j", parent)
  
    const completed_surveys = await context.prisma.family({id: parent.id}).completed_surveys();
  
    console.log("User.profile: %j", completed_surveys)
    
    return completed_surveys;
  };

  module.exports = {
  family_members,
  completed_surveys
};