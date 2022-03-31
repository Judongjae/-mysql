"use strict";

const output = {
  home: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },
};

const users = {
  id: ["주동재", "wnehdwo", "박준영"],
  psword: ["1234", "0626", "1234"],
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      psword = req.body.psword;

    console.log(id, psword);
  },
};

module.exports = {
  output,
  process,
};
