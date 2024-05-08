import Schools from '../models/school.model'
import { sendSucces, sendError } from '../utils/response'

export const listSchools = async (req, res) => {
    try {
        const school = await Schools.find()
        if (school[0]) {
            return sendSucces(res, 200, "listed all available schools", school)
        }
        return sendError(res, 404, "no data found to display")

    }
    catch (error) {
        return sendError(res, 500, error.message)
    }
}