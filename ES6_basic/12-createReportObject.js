export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartaments() {
      return Object.keys(employeesList).length;
    },
  };
}
