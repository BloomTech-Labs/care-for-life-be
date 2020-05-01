// @ts-check

/**
 * @param { import('../generated/prisma-client').Person } parent
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */

const family = async (parent, _, context) => {
  console.log("CompletedSurvey.family.parent: %j", parent)

  const family = await context.prisma.person({id: parent.id}).family();

  console.log("CompletedSurvey.family: %j", family)
  
  return family;
};

const completed_surveys = async (parent, _, context) => {
  console.log("Person.completedSurveys.parent: %j", parent)

  const completed_surveys = await context.prisma.person({id: parent.id}).completed_surveys();

  console.log("Person.completedSurveys: %j", completed_surveys)
  
  return completed_surveys;
};

module.exports = {
  family,
  completed_surveys

};