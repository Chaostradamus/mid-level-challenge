const config = require("./dbConfig"),
  sql = require("mssql");

const getEmployees = async () => {
  try {
    let pool = await sql.connect(config);
    let employees = pool.request().query("SELECT * from EmployeeDemographics");
    console.log(employees);
    return employees;
  } catch (error) {
    console.log(error);
  }
};
constcreateEmployees = async (Employee) => {
  try {
    let pool = await sql.connect(config);
    let employees = pool.request()
      .query(`INSERT INTO EmployeeDemographics VALUES
    (${Employee.EmployeeID}, '${Employee.Firtsname}', '${Employee.EmployeeLastname}', ${Employee.EmployeeAge}', '${Employee.EmployeeGender}')
    `);
    return employees;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createEmployee,
  getEmployees,
};
