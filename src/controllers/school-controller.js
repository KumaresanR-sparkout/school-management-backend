import Schools from '../models/school.model'
import { sendSucces, sendError } from '../utils/response'
export const createSchool = async (req, res) => {
    try {
        const is_exist = await Schools.findOne({ school_name: req.body.school_name })
        if (Object.keys(req.body).length == 0) {
            return sendError(res, 400, "please send body with data")
        }
        if (is_exist) {
            return sendError(res, 403, "school name is already exists")
        }
        const school = await new Schools(req.body).save()
        return sendSucces(res, 201, "created school_name successfully", school)
    }
    catch (error) {
        return sendError(res, 500, error.message)
    }
}