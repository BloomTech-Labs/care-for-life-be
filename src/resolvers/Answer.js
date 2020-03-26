function survey(parent, args, context) {
    return context.prisma.answer({ id: parent.id }).survey()
}
function family(parent, args, context) {
    return context.prisma.answer({ id: parent.id }).family()
}

function question(parent, args, context) {
    return context.prisma.answer({ id: parent.id }).question()
}

function respondent(parent, args, context) {
    return context.prisma.answer({ id: parent.id }).respondent()
}

module.exports = {
    survey,
    family,
    question,
    respondent
}