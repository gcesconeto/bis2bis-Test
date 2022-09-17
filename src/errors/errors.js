const {
  NOT_FOUND, UNPROCESSABLE_ENTITY, CONFLICT, INTERNAL_SERVER_ERROR,
} = require('http-status-codes').StatusCodes;

const notFound = new Error('Entity not found on database.');
notFound.status = NOT_FOUND;

const unprocessableEntity = new Error('Provided id malformed.');
unprocessableEntity.status = UNPROCESSABLE_ENTITY;

const conflict = new Error('Entity already exists on database.');
conflict.status = CONFLICT;

const dbError = new Error('Error writing to database');
dbError.status = INTERNAL_SERVER_ERROR;

module.exports = {
  notFound, unprocessableEntity, conflict, dbError,
};
