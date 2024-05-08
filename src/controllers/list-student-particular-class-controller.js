import Students from '../models/students.model'
import { sendSucces, sendError } from '../utils/response'

export const listStudentsClass = async (req, res) => {
    try {
        const school = await Students.find({ class_ref: req.params.classId })
        if (school[0]) {
            return sendSucces(res, 200, "listed all available students in particular class", school)
        }
        return sendError(res, 404, "no data found to display")

    }
    catch (error) {
        return sendError(res, 500, error.message)
    }
}