import { expect } from 'chai';
import {
    getPeriodsFromStudents,
    getStudentsInPeriod,
    sortStudents,
} from './helpers';

const testStudents = [
    { firstName: 'first01', lastName: 'last01', period: 1 },
    { firstName: 'first02', lastName: 'last02', period: 2 },
    { firstName: 'first03', lastName: 'last03', period: 3 },
    { firstName: 'first04', lastName: 'last04', period: 4 },
    { firstName: 'first05', lastName: 'last05', period: 2 },
    { firstName: 'first06', lastName: 'last06', period: 2 },
    { firstName: 'first07', lastName: 'last07', period: 3 },
    { firstName: 'first08', lastName: 'last08', period: 1 },
    { firstName: 'first09', lastName: 'last09', period: 1 },
    { firstName: 'first10', lastName: 'last10', period: 3 },
    { firstName: 'first11', lastName: 'last11', period: 1 },
    { firstName: 'first12', lastName: 'last12', period: 4 },
];

describe('Shared Helper getPeriodsFromStudents', () => {
  it('should return the distinct periods in ascending order', () => {
    const periods = getPeriodsFromStudents(testStudents);
    const expectedPeriods = [1, 2, 3, 4];
    expect(periods).to.deep.equal(expectedPeriods);
  });
});

describe('Shared Helper getStudentsInPeriod', () => {
  it('should return students in the period', () => {
    const studentsInPeriod = getStudentsInPeriod(testStudents, 1);
    const expectedStudentsInPeriod = [
      { firstName: 'first01', lastName: 'last01', period: 1 },
      { firstName: 'first08', lastName: 'last08', period: 1 },
      { firstName: 'first09', lastName: 'last09', period: 1 },
      { firstName: 'first11', lastName: 'last11', period: 1 },
    ];
    expect(studentsInPeriod).to.deep.equal(expectedStudentsInPeriod);
  });
});

describe('Shared Helper sortStudents', () => {
  it('should sort students by last name, first name', () => {
    const expectedSortedStudents = [
      { firstName: 'order1', lastName: 'order1' },
      { firstName: 'order2', lastName: 'order1' },
      { firstName: 'order1', lastName: 'order2' },
      { firstName: 'order1', lastName: 'order3' },
    ];
    const unsortedStudents = [
      { firstName: 'order1', lastName: 'order3' },
      { firstName: 'order1', lastName: 'order1' },
      { firstName: 'order1', lastName: 'order2' },
      { firstName: 'order2', lastName: 'order1' },
    ];
    const sortedStudents = sortStudents(unsortedStudents, ['lastName', 'firstName']);
    expect(sortedStudents).to.deep.equal(expectedSortedStudents);
  });

  it('should sort students by first name, last name', () => {
    const expectedSortedStudents = [
      { firstName: 'order1', lastName: 'order1' },
      { firstName: 'order1', lastName: 'order2' },
      { firstName: 'order2', lastName: 'order1' },
      { firstName: 'order3', lastName: 'order1' },
    ];
    const unsortedStudents = [
      { firstName: 'order3', lastName: 'order1' },
      { firstName: 'order1', lastName: 'order2' },
      { firstName: 'order1', lastName: 'order1' },
      { firstName: 'order2', lastName: 'order1' },
    ];
    const sortedStudents = sortStudents(unsortedStudents, ['firstName', 'lastName']);
    expect(sortedStudents).to.deep.equal(expectedSortedStudents);
  });
});

