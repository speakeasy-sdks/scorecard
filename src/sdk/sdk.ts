/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as models from "../models";

export class Scorecard extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Log Testcase
     */
    async log(
        input: models.Testcase,
        options?: RequestOptions
    ): Promise<models.TestcaseLogResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = models.Testcase$.outboundSchema.parse(input);
        const body$ = enc$.encodeJSON("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/log_testcase")();

        const query$ = "";

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "testcase_log" };
        const doOptions = { context, errorCodes: [] };
        const request = await this.createRequest$(
            {
                context,
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = models.TestcaseLogResponse$.inboundSchema.parse({
                ...responseFields$,
                any: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 422, "application/json")) {
            const responseBody = await response.json();
            const result = models.TestcaseLogResponse$.inboundSchema.parse({
                ...responseFields$,
                HTTPValidationError: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new models.SDKError("Unexpected API response", response, responseBody);
        }
    }
}
