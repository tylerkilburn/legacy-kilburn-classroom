const getPeriodsFromStudents = students => students.reduce((acc, curr) => {
  if (!acc.includes(curr.period)) {
    acc.push(curr.period);
  }
  return acc;
}, []).sort();

const getStudentsInPeriod = (students, period) => {
  return students.filter(student => student.period === period);
};

const nameTag = (student = {}) => {
  if (!(student.firstName && student.lastName)) { return ''; }
  const firstName = student.nickname ? student.nickname : student.firstName;
  return `${firstName} ${student.lastName[0]}.`;
};

const sortStudents = (students, sortOrder) => students.sort((a, b) => {
  return sortOrder.reduce((prev, sorting) => {
    const aVal = typeof a[sorting] === 'string' ? a[sorting].toLowerCase() : a;
    const bVal = typeof b[sorting] === 'string' ? b[sorting].toLowerCase() : b;
    if (prev !== 0) {
      return prev; // No work to do if we found compare value.
    } else if (aVal < bVal) {
      return -1;
    } else if (aVal > bVal) {
      return 1;
    }
    return 0;
  }, 0);
});

const shuffleStudents = students => [...students].sort(() => 0.5 - Math.random());

export {
  getPeriodsFromStudents,
  getStudentsInPeriod,
  nameTag,
  shuffleStudents,
  sortStudents,
};
