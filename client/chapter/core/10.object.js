let authUser = null;

authUser = {
  uid: "user-id-zxk!@kadfkq",
  name: "tiger",
  email: "seonbeom2@gmail.com",
  isSignIn: false,
  permission: "paid", // paid | free
};

for (let key in authUser) {
  if ({}.hasOwnProperty.call(authUser, key)) {
    console.log(authUser[key]);
  }
}

const salaries = {
  함정민: 95,
  지유진: 110,
  이진용: 15,
  한상학: 300,
};

/* const a0 = salaries.함정민;
console.log(a0);
 */

const { a0, a1, a2, a3 } = salaries;
