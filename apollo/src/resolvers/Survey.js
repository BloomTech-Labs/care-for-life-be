// @ts-check
/**
 * @param { import('../generated/prisma-client').Survey } parent
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */


  const employee = async (parent, _, context) => {
    console.log("Survey.employee.parent: %j", parent)
  
    const employee = await context.prisma.survey({id: parent.id}).employee();
  
    console.log("User.profile: %j", employee)
    
    return employee;
  };

  const questions = async (parent, _, context) => {
    console.log("Survey.questions.parent: %j", parent)
  
    const questions = await context.prisma.survey({id: parent.id}).questions();
  
    console.log("User.profile: %j", questions)
    
    return questions;
  };

  const answers = async (parent, _, context) => {
    console.log("Survey.answers.parent: %j", parent)
  
    const answers = await context.prisma.survey({id: parent.id}).answers();
  
    console.log("User.profile: %j", answers)
    
    return answers;
  };

  module.exports = {
  employee,
  questions,
  answers

};