function family(parent, args, context) {
    return context.prisma.Person({ id: parent.id }).family()
}

module.exports = {
    family,
}