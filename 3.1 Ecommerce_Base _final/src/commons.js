const Users = [];

const getUsers = () =>{
  return Users;
}

const addUser = (user) =>{
  Users.push(user);
}

const updateUser = (updatedUser) =>{
  let updateIndex = Users.findIndex((user)=>{
    user.name = updatedUser.name;
  })
  Users[updateIndex] = updatedUser;
}

module.exports.updateUser = updateUser;
module.exports.getUsers = getUsers;
module.exports.addUser = addUser;


