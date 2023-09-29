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
import { TestcaseLogResponse } from "@egdeltur/scorecard/dist/sdk/models/operations";

const sdk = new Scorecard({
  security: {
    apiKeyHeader: "",
  },
});

sdk.log({
  fullPrompt: "Granite South",
  ideal: "Books",
  modelResponse: "Fresh SSL frame",
  retrievalContext: "Northwest modulo Implementation",
  testsetId: 100305,
  userQuery: "Intuitive even",
}).then((res: TestcaseLogResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
