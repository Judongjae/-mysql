"use strict";

class UserStorage {
  static #users = {
    //데이터 은닉화
    id: ["주동재", "wnehdwo", "박준영"],
    psword: ["1234", "0626", "1234"],
    name: ["wnehdwo", "김팀장", "주차장"],
  };
  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
