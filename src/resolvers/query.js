async function family(parent, args, context, info) {
    const where = args.filter ? {
        OR: [
            { family_name_contains: args.filter }
        ]
    } : {}

    const families = await context.prisma.families({
        where
    })

    return {
        families
    }
}

function families(parent, args, context, info) {
    return context.prisma.families()
  }
  
module.exports = {
    family,
    families
}