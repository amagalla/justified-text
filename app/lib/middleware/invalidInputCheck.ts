import { Request, Response, NextFunction } from "express"

export const noInputCheck = (req: Request, res: Response, next: NextFunction) => {
    for (let key in req.body) {
        if (req.body[key].length === 0) {
            const error = new Error("Input values are required");
            return res.status(400).send({
                error: error.message,
            })
        }
    }

    return next();
}

export const nonStringCheck = (req: Request, res: Response, next: NextFunction) => {

    for (let key in req.body) {
        if (typeof req.body[key] !== 'string') {
            const error = new Error("Input values must be strings");
            return res.status(400).send({
                error: error.message,
            })
        }
    }

    return next();
}