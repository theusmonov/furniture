import Joi from "joi";


export const registerUsersSchema = Joi.object({

    fullName: Joi.string()
    .required(),

    email: Joi.string()
        .email({tlds: {allow: ["com"]}})
        .pattern(/^[a-za-z0-9._%+-]+@gmail\.com$/)
        .required()
        .messages({
            "string.email": "The email field must contain a valid email address",
            "string.pattern.base": "The email field must contain lowercase letters and a Gmail address ending with @gmail.com",
            "any.required": "The email field is required"
        }),

    password: Joi.string().min().required(),
    
    phoneNumber: Joi.string()
        .pattern(/^\+998\d{2}\d{3}\d{2}\d{2}$/)
        .required()
        .messages({
            "string.pattern.base": "The phone number must be in the format +998XXXXXXXXX",
            "any.required": "The phone number field is required"
        }),

     address: Joi.string().required()
})



export const loginUsersSchema = Joi.object({
    email: Joi.string()
        .email({tlds: {allow: ["com"]}})
        .pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)
        .required()
        .messages({
            "string.email": "The email field must contain a valid email address",
            "string.pattern.base": "The email field must be a Gmail address ending with @gmail.com",
            "any.required": "The email field is required"
        }),
    password: Joi.string()
        .min(8)
        .max(30)
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'))
        .required()
        .messages({
            "string.min": "The password field must be at least 8 characters long",
            "string.max": "The password field must not be longer than 30 characters",
            "string.pattern.base": "The password field must include at least one uppercase letter, one lowercase letter, one number, and one special character",
            "any.required": "The password field is required"
        }),
});
