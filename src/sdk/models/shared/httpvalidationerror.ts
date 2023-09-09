/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ValidationError } from "./validationerror";
import { Expose, Type } from "class-transformer";

export class HTTPValidationError extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: ValidationError })
    @Expose({ name: "detail" })
    @Type(() => ValidationError)
    detail?: ValidationError[];
}
