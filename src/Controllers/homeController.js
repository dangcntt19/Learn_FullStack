let getHomePage = (req, res, next) => {
  return res.render("homepage.ejs");
};
module.exports = {
  getHomePage: getHomePage,
};
