async function family(parent, args, context, info) {
    const where = args.filter ? {
        OR: [
            { family_id_contains: args.filter },
            { family_name_contains: args.filter }
        ]
    } : {}

    return {
        where
    }
}

module.exports = {
    family
}