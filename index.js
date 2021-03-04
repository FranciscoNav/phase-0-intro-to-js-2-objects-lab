// Write your solution in this file!
const employee = {employee: 'Bob', streetAddress: '2255 Pimmit Dr'};

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newEmployee = { ...obj };
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key, value){
    const newEmployee = { ...obj };
    newEmployee[key] = value;
    delete obj.employee;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj, key, value){
    obj[key] = value;
    delete obj.employee;
    return obj;


}
