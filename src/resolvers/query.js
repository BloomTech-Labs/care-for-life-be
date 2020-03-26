async function family(parent, args, context, info) {
    const where = args.filter ? {
        OR: [
            { family_name_contains: args.filter }
        ]
    } : {}

    console.log("Where:", where)

    const families = await context.prisma.families({
        where
    })

    console.log("Families:", families)
    return families
    
}

function families(parent, args, context, info) {
    return context.prisma.families()
  }

async function employee(parent, args, context, info) {
    const where = args.filter ? {
        OR: [
            { employee_name_contains: args.filter }
        ]
    } : {}

    console.log("Where:", where)

    const employees = await context.prisma.employees({
        where
    })

    console.log("Families:", families)
    return employees
    
}

function employees(parent, args, context, info) {
    return context.prisma.employees()
  }

  function surveys(parent, args, context, info) {
    return context.prisma.surveys()
  }
  
  async function survey(parent, args, context, info) {
    const where = args.filter ? {
        OR: [
            { survey_name_contains: args.filter }
        ]
    } : {}

    console.log("Where:", where)

    const surveys = await context.prisma.surveys({
        where
    })

    console.log("Surveys:", surveys)
    return surveys
    
}
  
module.exports = {
    family,
    families,
    employees,
    employee,
    surveys,
    survey

}