// @ts-check
/**
 * @param { import('../generated/prisma-client').Employee } parent
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */

const surveys = async (parent, _, context) => {
    console.log("Employee.survey.parent: %j", parent)
  
    const surveys = await context.prisma.employee({id: parent.id}).surveys();
  
    console.log("User.profile: %j", surveys)
    
    return surveys;
  };

  module.exports = {
    surveys
  
  };