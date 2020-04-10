// @ts-check
/**
 * @param { import('../generated/prisma-client').Question } parent
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */

const survey = async (parent, _, context) => {
    console.log("Question.survey.parent: %j", parent)
  
    const survey = await context.prisma.question({id: parent.id}).survey();
  
    console.log("User.profile: %j", survey)
    
    return survey;
  };

  const family = async (parent, _, context) => {
    console.log("Question.family.parent: %j", parent)
  
    const family = await context.prisma.question({id: parent.id}).family();
  
    console.log("User.profile: %j", family)
    
    return family;
  };


  module.exports = {
  survey,
  family

};