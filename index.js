// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = {...employee};
    newObj[key] = value;
    return newObj
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    const newOb = {...employee}
    newOb[key] = value
employee.streetAddress = "12 Broadway"
return newOb
}
function deleteFromEmployeeByKey(employee, key){
    const newObjc = {...employee}
    delete newObjc.name
    return newObjc
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name
    return employee
}





