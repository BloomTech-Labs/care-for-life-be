// @ts-check
/**
 * @param { import('../generated/prisma-client').CompletedSurvey } parent
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */

const originalSurvey = async (parent, _, context) => {
    console.log("CompletedSurvey.originalSurvey.parent: %j", parent)
  
    const originalSurvey = await context.prisma.completedSurvey({id: parent.id}).originalSurvey();
  
    console.log("CompletedSurvey.originalSurvey: %j", originalSurvey)
    
    return originalSurvey;
  };

  const answers = async (parent, _, context) => {
    console.log("CompletedSurvey.answers.parent: %j", parent)
  
    const answers = await context.prisma.completedSurvey({id: parent.id}).answers();
  
    console.log("Completedsurvey.answer: %j", answers)
    
    return answers;
  };

  const family = async (parent, _, context) => {
    console.log("CompletedSurvey.family.parent: %j", parent)
  
    const family = await context.prisma.completedSurvey({id: parent.id}).family();
  
    console.log("CompletedSurvey.family: %j", family)
    
    return family;
  };
  
  const employee = async (parent, _, context) => {
    console.log("CompletedSurvey.employee.parent: %j", parent)
  
    const employee = await context.prisma.completedSurvey({id: parent.id}).employee();
  
    console.log("CompletedSurvey.employee: %j", employee)
    
    return employee;
  };
  
  module.exports = {
    originalSurvey,
    answers,
    family,
    employee
  };