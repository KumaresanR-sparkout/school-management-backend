import Class from '../models/class.model'
import { sendSucces, sendError } from '../utils/response'
export const createClass = async (req, res) => {

    try {
        const is_exist = await Class.findOne({ school_ref:req.body.school_id })
        if (Object.keys(req.body).length == 0) {
            return sendError(res, 400, "please send body with data")
        }
        if (is_exist) {
            return sendError(res, 403, "class name and standarad is already exists")
        }
        const _class = await new Class({
            ...req.body.class,
            school_ref:req.body.school_id
        }).save()
        return sendSucces(res, 201, "created class_name successfully", _class)
    }
    catch (error) {
        return sendError(res, 500, error.message)
    }
}