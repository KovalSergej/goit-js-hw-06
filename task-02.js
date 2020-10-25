"use strict";
import users from "./users.js";

const getUsersWithEyeColor = (users, colour) =>
  users.filter((user) => user.eyeColor === colour);

console.log(getUsersWithEyeColor(users, "blue"));
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
