"use strict";
import users from "./users.js";

const getSortedUniqueSkills = (users) =>
  users
    .reduce((skills, user) => {
      skills.push(...user.skills);
      return skills;
    }, [])
    .sort()
    .filter((skill, index, array) => skill !== array[index + 1]);
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
