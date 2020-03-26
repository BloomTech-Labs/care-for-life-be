async function addFamily(parent, args, context, info) {
    const fam = await context.prisma.createFamily({
        family_name: args.family_name
    })
}

module.exports = {
    addFamily
}