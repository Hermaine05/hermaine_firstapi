import express from 'express';
import {
  getAllStudents,
  getStudent,
  addStudent,
  updateStudent,
  updateStatus,
  deleteStudent
} from '../controllers/student.controller.js';

const router = express.Router();

router.get('/', getAllStudents);
router.get('/:id', getStudent);
router.post('/', addStudent);
router.put('/:id', updateStudent);
router.patch('/:id/status', updateStatus);
router.delete('/:id', deleteStudent);

export default router;
