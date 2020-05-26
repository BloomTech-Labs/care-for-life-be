const db = require("./db-config.js");

module.exports = {
  add,
  find,
  findBy,
  findBySomething,
  findById, 
  update, 
  remove

};

// takes table name and returns everything in table table 
function find(table) {
    console.log('in find helper');
    return db(table);
  }

// we are passing in the filter and the table name (string) where we want to findby in
function findBy(filter, table) {
  console.log('in findby helper');
  return db(table).where(filter);
}

// passing in the id and table name (string) where the id will reside
function findById(id, table) {
    console.log("in findbyid helper",id)
    return db(table).where({ id }).first();
  }

  // taking whatever is being added and table name (string), which is the table you want to add to 
async function add(body, table) {
  console.log('in add helper');
  const [id] = await db(table).insert(body, 'id');
  console.log('user and id in add helper-->', body,id)
  return findById(body.id, table);
}

// takeing in id, and changes, and table name
function update(id, changes, table) {
    return db(table)
        .where({id})
        .update(changes, 'id')
        .then(() => {
            return findById(id, table);
        });

}

// takes in the id and the table name.
function remove(id, table) {
    return db(table).where({id}).del()
}

// takes in id and table name and where is which id 
function findBySomething(somethingId, where, table) {
        return db(table).where(where, somethingId);
    }
