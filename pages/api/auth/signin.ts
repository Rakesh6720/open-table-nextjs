import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const errors: string[] = [];
    const validationSchema = [
      { valid: validator.isEmail(email), errorMessage: "Email is invalid" },
      {
        valid: validator.isLength(password, {
          min: 1,
        }),
        errorMessage: "Password is invalid",
      },
    ];
    validationSchema.forEach((check) => {
      if (!check.valid) {
        errors.push(check.errorMessage);
      }
    });

    if (errors.length) {
      return res.status(400).json({ ErrorMessage: errors[0] });
    }
  }

  return res.status(404).json("Unknown endpoint");
}
