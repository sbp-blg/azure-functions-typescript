import { FunctionResponse } from './http'

export interface Context {
    invocationId: string;
    bindingData: any;
    bindings: any;

    log(...text: any[]): void;

    done(err?: any, output?: { [s: string]: any }, res?: FunctionResponse): void;
}
