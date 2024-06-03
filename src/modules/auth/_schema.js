import Joi from "joi";


export const registerUsersSchema = Joi.object({
    fullName: Joi.string()
        .min(3)
        .max(35)
        .required()
        .messages({
            "string.min": "The fullName field must not have less than 3 characters",
            "string.max": "The fullName field should not contain more than 35 characters",
            "any.required": "The fullName field is required"
        }),
    email: Joi.string()
        .email({tlds: {allow: ["com"]}})
        .pattern(/^[a-za-z0-9._%+-]+@gmail\.com$/)
        .required()
        .messages({
            "string.email": "The email field must contain a valid email address",
            "string.pattern.base": "The email field must contain lowercase letters and a Gmail address ending with @gmail.com",
            "any.required": "The email field is required"
        }),
    password: Joi.string()
        .min(8)
        .max(30)
        .pattern(new RegExp('^[0-9]{8}$'))
        .required()
        .messages({
            "string.min": "The password field must be at least 8 characters long",
            "string.max": "The password field must not be longer than 30 characters",
            "string.pattern.base": "The password field must include at least one uppercase letter, one lowercase letter, one number, and one special character",
            "any.required": "The password field is required"
        }),
    phoneNumber: Joi.string()
        .pattern(/^\+998\d{2}\d{3}\d{2}\d{2}$/)
        .required()
        .messages({
            "string.pattern.base": "The phone number must be in the format +998XXXXXXXXX",
            "any.required": "The phone number field is required"
        }),
    address: Joi.string()
        .min(2)
        .max(50)
        .required()
        .messages({
            "string.min": "The address field must have at least 2 characters",
            "string.max": "The address field should not exceed 50 characters",
            "any.required": "The address field is required"
        }),
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
