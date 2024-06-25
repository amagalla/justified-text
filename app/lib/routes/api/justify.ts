import express, { Request, Response, NextFunction } from "express";
import justify from "../../textJustification/justifyText";
import { JustificationRequest } from "../../interfaces/justification.interface";
import { noInputCheck, nonStringCheck } from '../../middleware/invalidInputCheck';

const router = express.Router();

/**
 * @swagger
 * 
 * definitions:
 *      Justification:
 *          type: object
 *          description: Text and amount to Justify
 *          properties:
 *              line:
 *                  type: string
 *                  example: "The quick brown fox jumps over the lazy dog."
 *              length:
 *                   type: string
 *                   example: "52"
 */

/**
 * @swagger
 * 
 *  /api/justify:
 *
 *  post:
 *      description: Justifies a string of text to a fixed amount
 *      produces:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: Justification
 *          description: The text and amount to justify
 *          required: true
 *          schema:
 *            $ref: '#/definitions/Justification'
 *      responses:
 *          200:
 *              description: Text Justified
 *          400:
 *              description: Justification failed
 */

router.post('/', noInputCheck, nonStringCheck, async (req: Request, res: Response) => {

  const reqBody: JustificationRequest = req.body;

  const result = justify(reqBody.line, Number(reqBody.length));

  if (result === 'smallLength') {
    const error = new Error('Length is not large enough');
    return res.status(400).send({
      error: error.message,
    })
  }

  res.status(200).send(result);
});

export default router;
