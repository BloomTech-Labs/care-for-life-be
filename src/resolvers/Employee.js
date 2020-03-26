function surveys(parent, args, context) {
    return context.prisma.employee({ id: parent.id }).surveys()
}

module.exports = {
    surveys
}