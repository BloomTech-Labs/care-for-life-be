function employee(parent, args, context) {
    return context.prisma.survey({ id: parent.id }).employee()
}

function questions(parent, args, context) {
    return context.prisma.survey({ id: parent.id }).questions()
}

function answers(parent, args, context) {
    return context.prisma.survey({ id: parent.id }).answers()
}
module.exports = {
    employee,
    questions,
    answers
}