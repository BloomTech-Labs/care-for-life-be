// @ts-check

/**
 * @param {{ data: import('../generated/prisma-client').FamilyCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { import('../generated/prisma-client').FamilyPromise }
 */
const createFamily = (_, args, context) => {
  console.log("createFamily.args: %j", args)

  const family = context.prisma.createFamily(args.data);  

  return family;
};

/**
 * @param {{ data: import('../generated/prisma-client').PersonCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { import('../generated/prisma-client').PersonPromise }
 */

 const createPerson = (_, args, context) => {
   console.log("createPerson.args: %j", args)

   const person = context.prisma.createPerson(args.data)

   return person
 }

 /**
 * @param {{ data: import('../generated/prisma-client').SurveyCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { import('../generated/prisma-client').SurveyPromise }
 */

const createSurvey = (_, args, context) => {
  console.log("createPerson.args: %j", args)

  const survey = context.prisma.createSurvey(args.data)

  return survey
}

 /**
 * @param {{ data: import('../generated/prisma-client').QuestionCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { import('../generated/prisma-client').QuestionPromise }
 */

const createQuestion = (_, args, context) => {
  console.log("createQuestion.args: %j", args)

  const question = context.prisma.createQuestion(args.data)

  return question
}

 /**
 * @param {{ data: import('../generated/prisma-client').EmployeeCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { import('../generated/prisma-client').EmployeePromise }
 */

const createEmployee = (_, args, context) => {
  console.log("createEmployee.args: %j", args)

  const employee = context.prisma.createEmployee(args.data)

  return employee
}


 /**
 * @param {{ data: import('../generated/prisma-client').AnswerCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { import('../generated/prisma-client').AnswerPromise }
 */

const createAnswer = (_, args, context) => {
  console.log("createAnswer.args: %j", args)

  const answer = context.prisma.createAnswer(args.data)

  return answer
}

module.exports = {
  createFamily,
  createPerson,
  createSurvey,
  createQuestion,
  createEmployee,
  createAnswer,


};
