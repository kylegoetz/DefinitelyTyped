import { Logger } from 'winston';

// Type definitions for prompt 1.0
// Project: https://github.com/flatiron/prompt#readme
// Definitions by: Kyle Götz <https://github.com/kylegoetz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const _prompt: Prompt;
export = _prompt;

interface PromptOptions {
    stdin?: NodeJS.ReadableStream;
    stdout?: NodeJS.WritableStream;
    memory?: number;
    allowEmpty?: boolean;
    message?: string;
    delimiter?: string;
    colors?: boolean;
}

interface Prompt {
    started: boolean;
    paused: boolean;
    stopped: boolean;
    allowEmpty: boolean;
    message: string;
    delimiter: string;
    colors: boolean;
    properties: object;
    version: string;

    start(options?: PromptOptions): undefined | Prompt;
    pause(): undefined | Prompt;
    stop(): undefined | Prompt;
    resume(): undefined | Prompt;
    history(search: number|string): any[]; //TODO
    get(schema: Array<any>|Schema|string, callback: Function): Prompt;
    confirm(msg: Array<MessageObject|string>|MessageObject|string, callback: Function): boolean;
    getInput(prop: string|object, callback: Function): undefined;
    _performValidation(
        name: object,
        prop: object|string,
        against: object,
        schema: Schema,
        line: string|boolean,
        callback: Function): boolean;
    addProperties(
        obj: object,
        properties: Array<any>,
        callback: Function): Prompt;
    _remember(property: object|string, value: string): undefined;

    logger: Logger //TODO
}

interface Schema { //TODO
    properties?: object;
}

interface MessageObject {
    description: string;
    pattern?: RegExp;
    yes?: RegExp;
    message?: string;
}