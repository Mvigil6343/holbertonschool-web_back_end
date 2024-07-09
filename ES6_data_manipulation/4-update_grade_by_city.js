export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter((st) => st.location === city)
    .map((st) => Object.assign(st, {
      grade: newGrades.filter((grade) => st.id === grade.studentId)[0]
        ? newGrades.filter((grade) => st.id === grade.studentId)[0].grade : 'N/A',
    }));
}
