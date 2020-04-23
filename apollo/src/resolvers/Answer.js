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
  question,
  respondent

};