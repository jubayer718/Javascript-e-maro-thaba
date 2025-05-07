let taxRate = 15;
function calculateTask(income) {
  const tax = (income * taxRate) / 100;
  return tax;
}
const taxToIncome = calculateTask(50000);
console.log(taxToIncome);

function fn() {
  let insideSecret = "internal secret hiding place";
  return insideSecret
}

console.log(fn());

function schoolDetails() {
  let schoolName = 'Arm school';
  function displaySchoolName() {
    console.log(schoolName);
  }
  displaySchoolName()
}
schoolDetails()