# scorecard

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add @egdeltur/scorecard
```

### Yarn

```bash
yarn add @egdeltur/scorecard
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Scorecard } from "@egdeltur/scorecard";

async function run() {
    const sdk = new Scorecard({
        security: {
            apiKeyHeader: "<YOUR_API_KEY_HERE>",
        },
    });

    const res = await sdk.log({
        testsetId: 659738,
        userQuery: "string",
    });

    if (res?.statusCode !== 200) {
        throw new Error("Unexpected status code: " + res?.statusCode || "-");
    }

    // handle response
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [Scorecard SDK](docs/sdks/scorecard/README.md)

* [log](docs/sdks/scorecard/README.md#log) - Log Testcase
<!-- End Available Resources and Operations [operations] -->







<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |

Example

```typescript
import { Scorecard } from "@egdeltur/scorecard";

async function run() {
    const sdk = new Scorecard({
        security: {
            apiKeyHeader: "<YOUR_API_KEY_HERE>",
        },
    });

    const res = await sdk
        .log({
            testsetId: 659738,
            userQuery: "string",
        })
        .catch((err) => {
            throw err;
        });

    if (res?.statusCode !== 200) {
        throw new Error("Unexpected status code: " + res?.statusCode || "-");
    }

    // handle response
}

run();

```
<!-- End Error Handling [errors] -->



<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.getscorecard.ai` | None |
| 1 | `http://localhost:8000` | None |




### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
<!-- End Server Selection [server] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Scorecard } from "@egdeltur/scorecard";
import { HTTPClient } from "@egdeltur/scorecard/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000);
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Scorecard({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->



<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name           | Type           | Scheme         |
| -------------- | -------------- | -------------- |
| `apiKeyHeader` | apiKey         | API key        |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Scorecard } from "@egdeltur/scorecard";

async function run() {
    const sdk = new Scorecard({
        security: {
            apiKeyHeader: "<YOUR_API_KEY_HERE>",
        },
    });

    const res = await sdk.log({
        testsetId: 659738,
        userQuery: "string",
    });

    if (res?.statusCode !== 200) {
        throw new Error("Unexpected status code: " + res?.statusCode || "-");
    }

    // handle response
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
