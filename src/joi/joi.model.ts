import * as joi from 'joi';

export interface Validator {
    [path: string]: joi.Schema
}