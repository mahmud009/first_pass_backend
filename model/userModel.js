const db = require("../database");

exports.createNewUser = (user) => {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO users (fullName, email, phoneNumber, password) VALUES(
      '${user.fullName}',
      '${user.email}',
      '${user.phoneNumber}',
      '${user.password}'
    )`;
    db.run(query, (err) => {
      if (!err) resolve("User created successfully");
      else reject(err);
    });
  });
};

exports.updateUser = (user) => {
  return new Promise((resolve, reject) => {
    const query = `UPDATE users 
    SET 
      fullName='${user.fullName}',
      email='${user.email}',
      phoneNumber='${user.phoneNumber}',
      password='${user.password}'
    WHERE id=${user.id}`;

    db.run(query, (err) => {
      if (!err) resolve("User updated sccessfully");
      else reject(err);
    });
  });
};
