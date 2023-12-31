/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { HTTPClient } from "./http";
import { pathToFunc } from "./url";
import { RetryConfig } from "./retries";
import * as models from "../models";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * Production server
     */
    "https://api.getscorecard.ai",
    /**
     * Local development server
     */
    "http://localhost:8000",
] as const;

export type SDKOptions = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: models.Security | (() => Promise<models.Security>);

    httpClient?: HTTPClient;
    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: RetryConfig;
};

export function serverURLFromOptions(options: SDKOptions): URL {
    let serverURL = options.serverURL;

    const params: Record<string, string> = {};
    const serverIdx = options.serverIdx ?? 0;

    if (!serverURL) {
        serverURL = ServerList[serverIdx] || "";
    }

    const u = pathToFunc(serverURL)(params);
    return new URL(u);
}

export const SDK_METADATA = Object.freeze({
    language: "typescript",
    openapiDocVersion: "0.1.0",
    sdkVersion: "2.2.0",
    genVersion: "2.225.2",
    userAgent: "speakeasy-sdk/typescript 2.2.0 2.225.2 0.1.0 @egdeltur/scorecard",
});
