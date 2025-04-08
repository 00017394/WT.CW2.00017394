export const home = (req, res) => {
  res.render("index.ejs", {title: "student-17394", description: "Language learning application. Where users can create flash cards and organize them according to the language leanging."});
};
