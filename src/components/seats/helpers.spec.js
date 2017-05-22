import { expect } from 'chai';
import { addStudentsToSeats } from './helpers';

const seatArrangement = {
  bunches: 3,
  columns: 3,
  rows: 3,
};

const seatArrangementTotal =
  seatArrangement.bunches
  + seatArrangement.columns
  + seatArrangement.rows;

const students = [
  { firstName: 'first01', lastName: 'last01' },
  { firstName: 'first02', lastName: 'last02' },
  { firstName: 'first03', lastName: 'last03' },
  { firstName: 'first04', lastName: 'last04' },
  { firstName: 'first05', lastName: 'last05' },
  { firstName: 'first06', lastName: 'last06' },
  { firstName: 'first07', lastName: 'last07' },
  { firstName: 'first08', lastName: 'last08' },
  { firstName: 'first09', lastName: 'last09' },
  { firstName: 'first10', lastName: 'last10' },
  { firstName: 'first11', lastName: 'last11' },
  { firstName: 'first12', lastName: 'last12' },
  { firstName: 'first13', lastName: 'last13' },
  { firstName: 'first14', lastName: 'last14' },
  { firstName: 'first15', lastName: 'last15' },
  { firstName: 'first16', lastName: 'last16' },
  { firstName: 'first17', lastName: 'last17' },
  { firstName: 'first18', lastName: 'last18' },
  { firstName: 'first19', lastName: 'last19' },
  { firstName: 'first20', lastName: 'last20' },
  { firstName: 'first21', lastName: 'last21' },
  { firstName: 'first22', lastName: 'last22' },
  { firstName: 'first23', lastName: 'last23' },
  { firstName: 'first24', lastName: 'last24' },
  { firstName: 'first25', lastName: 'last25' },
  { firstName: 'first26', lastName: 'last26' },
  { firstName: 'first27', lastName: 'last27' },
  { firstName: 'first28', lastName: 'last28' },
  { firstName: 'first29', lastName: 'last29' },
  { firstName: 'first30', lastName: 'last30' },
];

const studentsInSeats = addStudentsToSeats(students, seatArrangement);

describe('addStudentsToSeats', () => {
  it('should return an array', () => {
    expect(studentsInSeats).to.be.a('array');
  });
  it('should return a 3d array', () => {
    expect(studentsInSeats[0]).to.be.an('array');
    expect(studentsInSeats[0][0]).to.be.an('array');
  });
  it('should have first dimension length matching rows', () => {
    expect(studentsInSeats).lengthOf(seatArrangement.rows);
  });
  it('should have second dimension length matching columns', () => {
    expect(studentsInSeats[0]).lengthOf(seatArrangement.columns);
  });
  it('should have third dimension length matching bunches', () => {
    expect(studentsInSeats[0][0]).lengthOf(seatArrangement.bunches);
  });
  it('should have flat length matching total', () => {
    expect(studentsInSeats).lengthOf(seatArrangement.columns);
  });
  it('first student seat should equal first student', () => {
    expect(studentsInSeats[0][0][0]).to.equal(students[0]);
  });
  it('should add all students that can fit', () => {
    const studentsThatFit = students.slice(0, seatArrangementTotal)
    let flatSeats = [].concat(...studentsInSeats);
    flatSeats = [].concat(...flatSeats);
    const occupiedSeats = flatSeats.slice(0, studentsThatFit.length);
    expect(occupiedSeats).deep.equal(studentsThatFit);
  });
});
