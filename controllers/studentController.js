import { db } from '../config/db.js';

// GET ALL
export const getAllStudents = async (req, res) => {
  const [rows] = await db.query('SELECT * FROM tbl_student');
  res.json(rows);
};

// GET SINGLE
export const getStudent = async (req, res) => {
  const [rows] = await db.query(
    'SELECT * FROM tbl_student WHERE id = ?',
    [req.params.id]
  );
  res.json(rows[0]);
};

// ADD
export const addStudent = async (req, res) => {
  const {
    firstname, lastname, gender, age,
    course_id, department_id, status
  } = req.body;

  await db.query(
    `INSERT INTO tbl_student
    (firstname, lastname, gender, age, course_id, department_id, status)
    VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [firstname, lastname, gender, age, course_id, department_id, status]
  );

  res.json({ message: 'Student added successfully' });
};

// UPDATE ALL INFO
export const updateStudent = async (req, res) => {
  const {
    firstname, lastname, gender, age,
    course_id, department_id, status
  } = req.body;

  await db.query(
    `UPDATE tbl_student SET
     firstname=?, lastname=?, gender=?, age=?,
     course_id=?, department_id=?, status=?
     WHERE id=?`,
    [
      firstname, lastname, gender, age,
      course_id, department_id, status,
      req.params.id
    ]
  );

  res.json({ message: 'Student updated successfully' });
};

// UPDATE STATUS ONLY
export const updateStatus = async (req, res) => {
  await db.query(
    'UPDATE tbl_student SET status=? WHERE id=?',
    [req.body.status, req.params.id]
  );

  res.json({ message: 'Status updated successfully' });
};

// DELETE
export const deleteStudent = async (req, res) => {
  await db.query(
    'DELETE FROM tbl_student WHERE id=?',
    [req.params.id]
  );

  res.json({ message: 'Student deleted successfully' });
};
