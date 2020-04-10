// @ts-check
/**
 * @param { import('../generated/prisma-client').Answer } parent
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */

const survey = async (parent, _, context) => {
    console.log("Question.survey.parent: %j", parent)
  
    const survey = await context.prisma.answer({id: parent.id}).survey();
  
    console.log("User.profile: %j", survey)
    
    return survey;
  };

  const family = async (parent, _, context) => {
    console.log("Question.family.parent: %j", parent)
  
    const family = await context.prisma.answer({id: parent.id}).family();
  
    console.log("User.profile: %j", family)
    
    return family;
  };

  const question = async (parent, _, context) => {
    console.log("Question.survey.parent: %j", parent)
  
    const question = await context.prisma.answer({id: parent.id}).question();
  
    console.log("User.profile: %j", question)
    
    return question;
  };

  const respondent = async (parent, _, context) => {
    console.log("Question.survey.parent: %j", parent)
  
    const respondent = await context.prisma.answer({id: parent.id}).respondent();
  
    console.log("User.profile: %j", respondent)
    
    return respondent;
  };


  module.exports = {
  survey,
  family,
  question,
  respondent

};