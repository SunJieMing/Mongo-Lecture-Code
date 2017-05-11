module.exports = (app) => {
  require('./pet')(app);
  require('./user')(app);
};
