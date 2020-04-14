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

  const surveys = async (parent, _, context) => {
    console.log("Person.surveys.parent: %j", parent)
  
    const surveys = await context.prisma.person({id: parent.id}).surveys();
  
    console.log("User.profile: %j", surveys)
    
    return surveys;
  };

module.exports = {
  family,
  surveys
};