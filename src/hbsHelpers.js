var hbs  = require('hbs');

module.exports.register = () => {
  //HBS helpers
  hbs.registerHelper('student-group', function(context, options) {
    var ret = '';
    var studentGroupSize = options.data.root.groupSize || 2;
    var isOpen = false;
    for(var i=0, j=context.length; i<j; i++) {
      if(i % studentGroupSize === 0) {
        ret = ret + '<div class="col-sm-3"><div class="well">';
        isOpen=true;
      }
      ret += options.fn(context[i]);
      ret += '<br />';
      if(i % studentGroupSize === studentGroupSize-1) { ret = ret + '</div></div>'; isOpen=false; }
    }
    if(isOpen) { ret = ret + '</div>'; }
    return ret;
  });
};
