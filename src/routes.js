module.exports = function() {
  const app = this;

  // render home page
  //app.get('/', (req, res) => res.render('index'));

  //Ready Page
  app.get('/', function (req, res) {
    //Exclude partials
    res.render('index', {layout: false});
  });

  // // render our list of messages retrieving them from our service
  // app.get('/message-list', (req, res, next) => {
  //   app.service('messages').find({}).then(result => {
  //     // This handles paginated and non-paginated services
  //     res.render('messages', { messages: result.data ? result.data : result });
  //   }).catch(next);
  // });


};
