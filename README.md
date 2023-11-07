# scorecard

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @egdeltur/scorecard
```

### Yarn

```bash
yarn add @egdeltur/scorecard
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { Scorecard } from "@egdeltur/scorecard";

(async () => {
    const sdk = new Scorecard({
        security: {
            apiKeyHeader: "",
        },
    });

    const res = await sdk.log({
        testsetId: 659738,
        userQuery: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [Scorecard SDK](docs/sdks/scorecard/README.md)

* [log](docs/sdks/scorecard/README.md#log) - Log Testcase
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Pagination -->
# Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:
<!-- End Pagination -->



<!-- Start Error Handling -->
# Error Handling

Handling errors in your SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.


<!-- End Error Handling -->



<!-- Start Server Selection -->
# Server Selection

## Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.getscorecard.ai` | None |
| 1 | `http://localhost:8000` | None |

For example:

```typescript
import { Scorecard } from "@egdeltur/scorecard";

(async () => {
    const sdk = new Scorecard({
        serverIdx: 1,
        security: {
            apiKeyHeader: "",
        },
    });

    const res = await sdk.log({
        testsetId: 659738,
        userQuery: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```


## Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Scorecard } from "@egdeltur/scorecard";

(async () => {
    const sdk = new Scorecard({
        serverURL: "https://api.getscorecard.ai",
        security: {
            apiKeyHeader: "",
        },
    });

    const res = await sdk.log({
        testsetId: 659738,
        userQuery: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Server Selection -->



<!-- Start Custom HTTP Client -->
# Custom HTTP Client

The Typescript SDK makes API calls using the (axios)[https://axios-http.com/docs/intro] HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.


For example, you could specify a header for every request that your sdk makes as follows:

```typescript
from @egdeltur/scorecard import Scorecard;
import axios;

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})


const sdk = new Scorecard({defaultClient: httpClient});
```


<!-- End Custom HTTP Client -->



<!-- Start Authentication -->

# Authentication

## Per-Client Security Schemes

Your SDK supports the following security scheme globally:

| Name           | Type           | Scheme         |
| -------------- | -------------- | -------------- |
| `apiKeyHeader` | apiKey         | API key        |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Scorecard } from "@egdeltur/scorecard";

(async () => {
    const sdk = new Scorecard({
        security: {
            apiKeyHeader: "",
        },
    });

    const res = await sdk.log({
        testsetId: 659738,
        userQuery: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Authentication -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
