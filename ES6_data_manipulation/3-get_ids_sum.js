export default function getStudentIdsSum(arr) {
  return arr.reduce((previousValue, student) => previousValue + student.id, 0);
}
