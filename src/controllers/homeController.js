import db from "../models/index";
import CRUDservice from "../services/CRUDservice";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log("------------------");
    console.log(data);
    console.log("------------------");
    return res.render("homepage.ejs", {
      data,
    });
  } catch (err) {
    console.error(err);
  }
};

let getAboutPage = (req, res) => {
  return res.render("test/about.ejs");
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
  // let message = await CRUDservice.createNewUser(req.body);
  // return res.send(message);
  return res.send(req.body);
};

module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  postCRUD,
};
