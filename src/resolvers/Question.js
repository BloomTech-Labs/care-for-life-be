function survey(parent, args, context) {
    return context.prisma.question({ id: parent.id }).survey()
}
function family(parent, args, context) {
    return context.prisma.question({ id: parent.id }).family()
}

module.exports = {
    survey,
    family
}