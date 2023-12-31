/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type ValidationError = {
    loc: Array<any>;
    msg: string;
    type: string;
};

/** @internal */
export namespace ValidationError$ {
    export type Inbound = {
        loc: Array<any>;
        msg: string;
        type: string;
    };

    export const inboundSchema: z.ZodType<ValidationError, z.ZodTypeDef, Inbound> = z
        .object({
            loc: z.array(z.any()),
            msg: z.string(),
            type: z.string(),
        })
        .transform((v) => {
            return {
                loc: v.loc,
                msg: v.msg,
                type: v.type,
            };
        });

    export type Outbound = {
        loc: Array<any>;
        msg: string;
        type: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ValidationError> = z
        .object({
            loc: z.array(z.any()),
            msg: z.string(),
            type: z.string(),
        })
        .transform((v) => {
            return {
                loc: v.loc,
                msg: v.msg,
                type: v.type,
            };
        });
}
