var faker = require('faker');

var database = { users: []};

for (var i = 1; i<= 300; i++) {
  database.users.push({
    id: ""+i,
    password: "as;lkdfja", 
    name: faker.name.firstName() + ' ' + faker.name.lastName(), 
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber()+"",
    productid: faker.address.city()+"",
  });
}

console.log(JSON.stringify(database));