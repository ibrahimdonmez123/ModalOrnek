const openModalBtn = document.getElementById('openModalBtn'); //yeni öğrenci ekle dediğimiz buton
const modal = document.getElementById('myModal'); // yeni öğrenci ekleme işleminin yapıldığı modal
const closeBtn = document.querySelector('.close'); // yeni öğrenci ekleme işleminn yapıldığı modalı kapatma butonu
const addStudentBtn = document.getElementById('addStudentBtn'); // yeni öğenci ekle işleminin yapıldığı modalı kapatma butonu 
const studentNameInput = document.getElementById('studentName'); // yeni öğrenci ekleme de öğrenci ismi girile input
const studentsList = document.getElementById('studentsList'); // öğrenci listeinin gösterildiği div

let students = [];

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

addStudentBtn.addEventListener('click', () => {
  const studentName = studentNameInput.value;
  if (studentName) {
    const student = { id: Date.now(), name: studentName };
    students.push(student);
    renderStudents();
    modal.style.display = 'none';
    studentNameInput.value = '';
  }
});

function renderStudents() {
  studentsList.innerHTML = '';
  students.forEach(student => {
    const studentDiv = document.createElement('div');
    studentDiv.innerHTML = `
      <div>
        <span>${student.name}</span>
        <button onclick="editStudent(${student.id})">Düzenle</button>
        <button onclick="deleteStudent(${student.id})">Sil</button>
      </div>
    `;
    studentsList.appendChild(studentDiv);
  });
}

function editStudent(id) {
  const student = students.find(student => student.id === id);
  if (student) {
    const newName = prompt('Yeni öğrenci adı:', student.name);
    if (newName) {
      student.name = newName;
      renderStudents();
    }
  }
}

function deleteStudent(id) {
  students = students.filter(student => student.id !== id);
  renderStudents();
}
