const data = [
  { student_name: "Aqief SHESHH", matricNo: "069069", total: "56.00" },
  { student_name: "Jamal Kamal", matricNo: "037412", total: "2.00" },
  { student_name: "Muhd Haziq", matricNo: "023789", total: "5.00" },
];

const filtered = data.filter(({ matricNo }) => matricNo === "069069");

console.table(filtered);
