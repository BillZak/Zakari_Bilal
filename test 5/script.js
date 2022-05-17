const User = function (name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
};

const users = [
  new User("Albert Fiati-Kumasenu", "Male", 21),
  new User("Eileen Ackabah", "Female", 27),
  new User("Papa Yaw Owusu-Ankoma", "Male", 45),
  new User("Naydia Frempong", "Female", 52),
  new User("Berth Aba T.", "Female", 12),
  new User("Lawrence Poku", "Male", 71),
  new User("Joel Funu", "Male", 32),
  new User("Selma Adu Twumwaa", "Female", 10),
];

const displayUserDetails = function (users) {
  let i = 0;

  for (i; i < users.length; i++) {
    console.log(
      ">" +
        (1 + i) +
        "< " +
        users[i].name +
        " is a " +
        users[i].age +
        " old " +
        users[i].gender
    );
  }
};

displayUserDetails(users);

// expected output when displaUserDetails method is called

// <----- start of output ----->

// >1< Albert Fiati-Kumasenu is a 21 old male
// >2< Eileen Ackabah is a 27 old female
// >3< Papa Yaw Owusu-Ankoma is a 45 old male
// >4< Naydia Frempong is a 52 old female
// >5< Berth Aba T. is a 12 old female
// >6< Lawrence Poku is a 71 old male
// >7< Joel Funu is a 32 old male
// >8< Selma Adu Twumwaa is a 10 old female

// <----- End of output ----->
