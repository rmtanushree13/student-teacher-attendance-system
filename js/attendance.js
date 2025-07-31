const students = [
  { roll: "101", name: "Alice" },
  { roll: "102", name: "Bob" },
  { roll: "103", name: "Charlie" },
  { roll: "104", name: "David" }
];

// Simulate receiving query parameters (you can replace this with actual data or backend)
const semester = "Semester 1";
const subject = "Mathematics I";
const date = new Date().toISOString().split('T')[0]; // today's date

// Display info
document.getElementById("semDisplay").textContent = semester;
document.getElementById("subjectDisplay").textContent = subject;
document.getElementById("dateDisplay").textContent = date;

// Populate student table
const tableBody = document.getElementById("studentTableBody");

students.forEach(student => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${student.roll}</td>
    <td>${student.name}</td>
    <td>
      <label>
        <input type="checkbox" name="attendance-${student.roll}" checked>
        Present
      </label>
    </td>
  `;

  tableBody.appendChild(row);
});

// Handle form submission
document.getElementById("attendanceForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const attendanceData = students.map(student => {
    const present = document.querySelector(`[name="attendance-${student.roll}"]`).checked;
    return {
      roll: student.roll,
      name: student.name,
      status: present ? "Present" : "Absent"
    };
  });

  // For now, just show in console
  console.log("Submitting Attendance:", attendanceData);

  alert("Attendance submitted successfully!");
});
