async function addFamily(parent, args, context, info) {
    const fam = await context.prisma.createFamily({
        family_name: args.family_name
    })

    return fam;
}

async function addPerson(parent, args, context, info) {

    const familyId = args.family_id;

    const person = await context.prisma.createPerson({
        person_name: args.person_name,
        family: { connect: {id: familyId} }

    })

    console.log("Person:", person)

    return person;
}

async function addEmployee(parent, args, context, info) {
    const employee = await context.prisma.createEmployee({
        name: args.name,
        type: args.type
    })

    return employee;
}

async function addSurvey(parent, args, context, info) {

    const employeeId = args.employee_id;

    const survey = await context.prisma.createSurvey({
        survey_name: args.survey_name,
        employee: { connect: {id: employeeId} }

    })

    

    return survey;
}

async function addQuestion(parent, args, context, info) {

    const surveyId = args.survey_id;
    const familyId = args.family_id;

    const question = await context.prisma.createQuestion({
        survey: { connect: {id: surveyId} },
        family: { connect: {id: familyId} },
        question_text: args.question_text
    })

    

    return question;
}

async function addAnswer(parent, args, context, info) {

    const surveyId = args.survey_id;
    const familyId = args.family_id;
    const respondentId = args.respondent_id
    const questionId = args.question_id

    const answer = await context.prisma.createAnswer({
        survey: { connect: {id: surveyId} },
        family: { connect: {id: familyId} },
        answer: args.answer,
        respondent: { connect: {id: respondentId} },
        question: { connect: {id: questionId} },
    })

    

    return answer;
}

module.exports = {
    addFamily,
    addPerson,
    addEmployee,
    addSurvey,
    addQuestion,
    addAnswer
}