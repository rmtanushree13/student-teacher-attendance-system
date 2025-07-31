const semesterSelect = document.getElementById('semester');
const subjectList = document.getElementById('subject-list');
const subjectsSection = document.getElementById('subjects-section');

// Sample subject data
const subjects = {
  sem1: ['Mathematics I', 'Physics I', 'Chemistry'],
  sem2: ['Mathematics II', 'Computer Programming', 'Electronics'],
  sem3: ['Data Structures', 'Digital Logic', 'Discrete Math']
};

semesterSelect.addEventListener('change', () => {
  const selectedSemester = semesterSelect.value;

  if (subjects[selectedSemester]) {
    subjectList.innerHTML = '';
    subjects[selectedSemester].forEach(subject => {
      const li = document.createElement('li');
      li.textContent = subject;
      subjectList.appendChild(li);
    });
    subjectsSection.style.display = 'block';
  } else {
    subjectList.innerHTML = '';
    subjectsSection.style.display = 'none';
  }
});

// Placeholder: Handle attendance button click
document.getElementById('take-attendance').addEventListener('click', () => {
  const semester = semesterSelect.value;
  const date = document.getElementById('attendance-date').value;

  if (!semester || !date) {
    alert('Please select a semester and date.');
    return;
  }

  alert(`Proceeding to attendance for ${semester.toUpperCase()} on ${date}`);
  // You could redirect to another page here like: window.location.href = `attendance.html?sem=${semester}&date=${date}`;
});
