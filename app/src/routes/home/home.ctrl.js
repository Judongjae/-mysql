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

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword) {
        //1.로그인이 성공하면
        return res.json({
          //3.json으로 만들어서 res, 프론트엔드로 응답을 해준다.
          success: true, //2.success: true라는 오브젝트를
        });
      }
    }
    return res.json({
      success: false,
      msg: "로그인에 실패하셨습니다.",
    });
  },
};

module.exports = {
  output,
  process,
};
