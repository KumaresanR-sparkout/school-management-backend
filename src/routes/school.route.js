import express from 'express'
import { createSchool } from '../controllers/school-controller'
import { createClass } from '../controllers/class-controller'
import { createStudent } from '../controllers/student-controller'
import { listSchools } from '../controllers/list-schools-controller'
import { listClassSchool } from '../controllers/list-class-particular-school-controller'
import { listStudentsClass } from '../controllers/list-student-particular-class-controller'
const router = express.Router()
router.use(express.json())

router.post('/', createSchool)
router.post('/class', createClass)
router.post('/student', createStudent)
router.get('/', listSchools)
router.get('/class-school/:schoolId', listClassSchool)
router.get('/student-class/:classId',listStudentsClass)

export default router