function showSalary(users, age) {
  let strings =[];
  for(let user of users){
    if(user.age <= age){
      let formatStr = user.name + ', ' + user.balance;
      strings.push(formatStr)
    }
  }
  return strings.join('\n');
}
