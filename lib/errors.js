var util = require("./util");
var entities = require('./entities');
var types = require('./types');
var events = require('./events');
var errors = {};


//Basic/generic errors

util.define(errors, 'SUCCESS', util.make(entities.GENERIC, 0, events.NONE, types.SUCCESS));
util.define(errors, 'FAILURE', util.make(entities.GENERIC, 0, events.NONE, types.FAILURE));
util.define(errors, 'FAILED', util.make(entities.GENERIC, 0, events.NONE, types.FAILED));
util.define(errors, 'ERROR', util.make(entities.GENERIC, 0, events.NONE, types.ERROR));
util.define(errors, 'NOT_FOUND', util.make(entities.GENERIC, 0, events.NONE, types.NOT_FOUND));
util.define(errors, 'EXISTED', util.make(entities.GENERIC, 0, events.NONE, types.EXISTED));
util.define(errors, 'NOT_SPECIFIED', util.make(entities.GENERIC, 0, events.NONE, types.NOT_SPECIFIED));
util.define(errors, 'NOT_LOGIN', util.make(entities.GENERIC, 0, events.NONE, types.NOT_LOGIN));
util.define(errors, 'REQUIRED', util.make(entities.GENERIC, 0, events.NONE, types.REQUIRED));

util.define(errors, 'UNKNOWN_ERROR', util.make(entities.UNKNOWN, 0, events.NONE, types.ERROR));

//User related errors
util.define(errors, 'USER_EXISTED', util.make(entities.USER, 0, events.NONE, types.EXISTED));
util.define(errors, 'USER_NOT_FOUND', util.make(entities.USER, 0, events.NONE, types.NOT_FOUND));
util.define(errors, 'USER_NOT_LOGIN', util.make(entities.USER, 0, events.NONE, types.NOT_LOGIN));
util.define(errors, 'USER_NOT_LOGIN', util.make(entities.USER, 0, events.NONE, types.NOT_LOGIN));

//User name related errors
util.define(errors, 'USERNAME_EXISTED', util.make(entities.USER, entities.NAME, events.NONE, types.EXISTED));

//Database errros
util.define(errors, 'DATABASE_ERROR', util.make(entities.DATABASE, 0, events.NONE, types.ERROR));


//Password related errors
util.define(errors, 'PASSWORD_ERROR', util.make(entities.PASSWORD, 0, events.NONE, types.ERROR));
util.define(errors, 'PASSWORD_NOT_SPECIFIED', util.make(entities.PASSWORD, 0, events.NONE, types.NOT_SPECIFIED));




//File related errors
util.define(errors, 'FILE_NOT_FOUND', util.make(entities.FILE, 0, events.NONE, types.NOT_FOUND));


//Administrator related errors

util.define(errors, 'ADMIN_EXISTED', util.make(entities.ADMINISTRATOR, 0, events.NONE, types.EXISTED));
util.define(errors, 'ADMINISTRATOR_EXISTED', util.make(entities.ADMINISTRATOR, 0, events.NONE, types.EXISTED));

util.define(errors, 'ADMIN_NOT_FOUND', util.make(entities.ADMINISTRATOR, 0, events.NONE, types.NOT_FOUND));
util.define(errors, 'ADMINISTRATOR_NOT_FOUND', util.make(entities.ADMINISTRATOR, 0, events.NONE, types.NOT_FOUND));


util.define(errors, 'ADMIN_NOT_LOGIN', util.make(entities.ADMINISTRATOR, 0, events.NONE, types.NOT_LOGIN));
util.define(errors, 'ADMINISTRATOR_NOT_LOGIN', util.make(entities.ADMINISTRATOR, 0, events.NONE, types.NOT_LOGIN));


//Merchant errors
util.define(errors, 'MERCHANT_NOT_LOGIN', util.make(entities.MERCHANT, 0, events.NONE, types.NOT_LOGIN));


//Action errors
util.define(errors, 'UPDATE_FAILED', util.make(entities.GENERIC, 0, events.UPDATE, types.FAILED));

util.define(errors, 'INPUT_INVALID', util.make(entities.GENERIC, 0, events.INPUT, types.INVALID));

util.define(errors, 'NUMERIC_REQUIRED', util.make(entities.NUMERIC, 0, events.NONE, types.REQUIRED));

util.define(errors, 'NAME_NOT_SPECIFIED', util.make(entities.NAME, 0, events.NONE, types.NOT_SPECIFIED));


//Email related errors
util.define(errors, 'EMAIL_NOT_SPECIFIED', util.make(entities.EMAIL, 0, events.NONE, types.NOT_SPECIFIED));
util.define(errors, 'EMAIL_EXISTED', util.make(entities.EMAIL, 0, events.NONE, types.EXISTED));

//Category related errors
util.define(errors, 'CATEGORY_NOT_FOUND', util.make(entities.CATEGORY, 0, events.NONE, types.NOT_FOUND));


//Phone related errors
util.define(errors, 'PHONE_EXISTED', util.make(entities.PHONE, 0, events.NONE, types.EXISTED));


//Network errors
util.define(errors, 'NETWORK_ERROR', util.make(entities.NETWORK, 0, events.NONE, types.ERROR));


module.exports = errors;