import { RegisterRoutes } from './generated/routes';
import {
    Response as ExResponse,
    Request as ExRequest,
    NextFunction
} from 'express';

import { ValidateError } from 'tsoa';
import { ConfigSequelize } from './config/sequelize/config.sequelize';

const express = require('express');
const sls = require('serverless-http');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

RegisterRoutes(app);

const config = new ConfigSequelize();
config.setupConnection();

app.use(function errorHandler(
    err: unknown,
    req: ExRequest,
    res: ExResponse,
    next: NextFunction
): ExResponse | void {
    if(err instanceof ValidateError) {
        console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
        return res.status(422).json({
            message: 'Validation Failed',
            details: err?.fields,
        });
    }
    if(err instanceof Error) {
        const errorBody: {} = {
            message: 'Internal Server Error',
            cause: err.message,
            name: err.name,
        }
        return res.status(500).json(errorBody);
    }
    next();
});

module.exports.handler = sls(app);