// @ts-check

/**
 * @param {{ where: import('../generated/prisma-client').FamilyWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const family = async (_, args, context) => {
  console.log("Query.family.args: %j", args)

  const family = await context.prisma.family(args.where);

  console.log("Query.family: %j", family)
  
  return family;
};

/**
 * @param {{ where: import('../generated/prisma-client').FamilyWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const families = async (_, args, context) => {
  console.log("Query.families.args: %j", args)

  const family = await context.prisma.families(args);

  console.log("Query.user: %j", family)
  
  return family;
};

// Single person
/**
 * @param {{ where: import('../generated/prisma-client').PersonWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const person = async (_, args, context) => {
  console.log("Query.person.args: %j", args)

  const person = await context.prisma.person(args.where);

  console.log("Query.person: %j", person)
  
  return person;
};

/**
 * @param {{ where: import('../generated/prisma-client').SurveyWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */

 const survey = async (_, args, context) => {
  console.log("Query.survey.args: %j", args)

  const survey = await context.prisma.survey(args.where);

  console.log("Query.survey: %j", survey)
  
  return survey;
};

/**
 * @param {{ where: import('../generated/prisma-client').SurveyWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */

const surveys = async (_, args, context) => {
  console.log("Query.surveys.args: %j", args)

  const surveys = await context.prisma.surveys(args);

  console.log("Query.surveys: %j", surveys)
  
  return surveys;
};

/**
 * @param {{ where: import('../generated/prisma-client').QuestionWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */

const question = async (_, args, context) => {
  console.log("Query.question.args: %j", args)

  const question = await context.prisma.question(args.where);

  console.log("Query.question: %j", question)
  
  return question;
};

/**
 * @param {{ where: import('../generated/prisma-client').QuestionWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */

const questions = async (_, args, context) => {
  console.log("Query.questions.args: %j", args)

  const questions = await context.prisma.questions(args);

  console.log("Query.questions: %j", questions)
  
  return questions;
};

/**
 * @param {{ where: import('../generated/prisma-client').EmployeeWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */

const employee = async (_, args, context) => {
  console.log("Query.employee.args: %j", args)

  const employee = await context.prisma.employee(args.where);

  console.log("Query.employee: %j", employee)
  
  return employee;
};

/**
 * @param {{ where: import('../generated/prisma-client').EmployeeWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */

const employees = async (_, args, context) => {
  console.log("Query.employees.args: %j", args)

  const employees = await context.prisma.employees(args);

  console.log("Query.employees: %j", employees)
  
  return employees;
};

/**
 * @param {{ where: import('../generated/prisma-client').AnswerWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */

const answer = async (_, args, context) => {
  console.log("Query.answer.args: %j", args)

  const answer = await context.prisma.answer(args.where);

  console.log("Query.answer: %j", answer)
  
  return answer;
};

/**
 * @param {{ where: import('../generated/prisma-client').AnswerWhereInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */

const answers = async (_, args, context) => {
  console.log("Query.answers.args: %j", args)

  const answers = await context.prisma.answers(args);

  console.log("Query.answers: %j", answers)
  
  return answers;
};


module.exports = {
  family,
  families,
  person,
  survey,
  surveys,
  question,
  questions,
  employee,
  employees,
  answer,
  answers
};
