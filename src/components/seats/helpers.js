
export function addStudentsToSeats(students = [], seatArrangement = {}) {
  const {
        rows = 1,
        columns = 1,
        bunches = 1,
    } = seatArrangement;
  const remainingStudents = [...students];

  const arrRows = [];
  for (let r = 0; r < rows; r++) {
    const arrColumns = [];
    for (let c = 0; c < columns; c++) {
      const arrBunches = [];
      for (let b = 0; b < bunches; b++) {
        arrBunches.push(remainingStudents.shift() || {});
      }
      arrColumns.push(arrBunches);
    }
    arrRows.push(arrColumns);
  }

  return arrRows;
}
