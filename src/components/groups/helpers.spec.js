import { expect } from 'chai';
import { groupStudents } from './helpers';

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

describe('Shared Helper groupStudents', () => {
  it('should return a 2d array', () => {
    const groupSize = 3;
    const groupedStudents = groupStudents(testStudents, groupSize);
    expect(groupedStudents[0]).to.be.an('array');
  });
  it('should have defined group size', () => {
    const groupSize = 3;
    const firstGroupSize = groupStudents(testStudents, groupSize)[0].length;
    expect(firstGroupSize).to.equal(groupSize);
  });
  it('should return students as provided when group size is zero', () => {
    const groupSize = 0;
    const groupedStudents = groupStudents(testStudents, groupSize);
    expect(groupedStudents).to.deep.equal(testStudents);
  });
  it('should equal the input array when flattened', () => {
    const groupSize = 3;
    const groupedStudents = groupStudents(testStudents, groupSize);
    const groupedStudentFlattened = [].concat(...groupedStudents);
    expect(groupedStudentFlattened).to.deep.equal(testStudents);
  });
});

