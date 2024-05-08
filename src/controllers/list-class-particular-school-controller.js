import Class from '../models/class.model'
import { sendSucces, sendError } from '../utils/response'

export const listClassSchool = async (req, res) => {
    try {
        const school = await Class.find({school_ref:req.params.schoolId})
        if (school[0]) {
            return sendSucces(res, 200, "listed all  available classes in particular schools", school)
        }
        return sendError(res, 404, "no data found to display")

    }
    catch (error) {
        return sendError(res, 500, error.message)
    }
}