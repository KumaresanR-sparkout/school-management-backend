import Students from '../models/students.model'
import { sendSucces, sendError } from '../utils/response'
export const createStudent = async (req, res) => {
    try {
        const is_exist = await Students.findOne({ class_ref: req.body.class_id, school_ref: req.body.school_id })
        if (Object.keys(req.body).length == 0) {
            return sendError(res, 400, "please send body with data")
        }
        if (is_exist) {
            return sendError(res, 403, "student name is already exists")
        }
        const student = await new Students({
            ...req.body.student,
            class_ref:req.body.class_id,
            school_ref:req.body.school_id
        }).save()
        return sendSucces(res, 201, "created student_name successfully", student)
    }
    catch (error) {
        return sendError(res, 500, error.message)
    }
}