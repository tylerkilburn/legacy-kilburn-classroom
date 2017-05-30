const groupStudents = (students = [], groupSize = 0) => {
  if (groupSize === 0) { return students; }

  const groupedStudents = [];
  for (let s = 0; s < students.length; s += groupSize) {
    const end = s + groupSize;
    const group = students.slice(s, end);
    groupedStudents.push(group);
  }
  return groupedStudents;
};

export {
  groupStudents,
};
