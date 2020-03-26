function family_members(parent, args, context) {
    return context.prisma.family({ id: parent.id }).family_members()
}
module.exports = {
    family_members
}