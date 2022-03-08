import Joi from '@hapi/joi';

export default (requestData, id = 0) => {
    const schema = Joi.object({
        dFullName: Joi.string().required().messages({
            'string.base' : `Full name should be a type of 'text'`,
            'string.empty': `Full name cannot be an empty field`,
            'any.required': `Full name is a required field`
        }),
        dEmail: Joi.string().email().required().messages({
            'string.base' : `email should be a type of 'text'`,
            'string.email': `email should be a type of 'email'`,
            'string.empty': `email cannot be an empty field`,
            'any.required': `email is a required field`
        }),
        dMobile: Joi.string().required().messages({
            'string.base' : `Mobile no should be a type of 'text'`,
            'string.empty': `Mobile no cannot be an empty field`,
            'any.required': `Mobile no is a required field`
        }),
        dAltPhone: Joi.string().allow('').required().messages({
            'string.base' : `Alt Mobile no should be a type of 'text'`,
            'string.empty': `Alt Mobile no cannot be an empty field`,
            'any.required': `Alt Mobile no is a required field`
        }),
        dPassword: (!id) ? Joi.string().required().min(8).messages({
            'string.base' : `dPassword should be a type of 'text'`,
            'string.min'  : `dPassword length must be at least 8 characters`,
            'string.empty': `dPassword cannot be an empty field`,
            'any.required': `dPassword is a required field`
        }) :
        Joi.string().allow('').min(8).messages({
            'string.base': `dPassword image should be a type of 'text'`,
            'string.base': `dPassword should be a type of 'text'`,
            'string.min' : `dPassword length must be at least 8 characters`
        }),
        dStatus: Joi.string().required().messages({
            'string.base' : `dStatus name should be a type of 'text'`,
            'string.empty': `dStatus name cannot be an empty field`,
            'any.required': `dStatus name is a required field`
        }),
        dIDproof: Joi.string().required().messages({
            'string.base' : `dIDproof should be a type of 'text'`,
            'string.empty': `dIDproof cannot be an empty field`,
            'any.required': `dIDproof is a required field`
        })
    });
    return schema.validate(requestData, {abortEarly: false});
}