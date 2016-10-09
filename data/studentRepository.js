var studentData = require('../data/students.json');

module.exports.getByPeriod = (period) => {
  return studentData.data
    .map(function(student) {
      student.lastName = student.lastName.substring(0,1) + '.';
      if(student.nickname !== '') {
        student.firstName = student.nickname;
      }
      return student;
    })
    .filter(function(student) {
      return student.period === parseInt(period);
    });
};
