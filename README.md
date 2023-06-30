# scorecard

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/scorecard
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/scorecard
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { Scorecard } from "scorecard";
import { LogTestcaseLogTestcasePostResponse } from "scorecard/dist/sdk/models/operations";

const sdk = new Scorecard();

sdk.logTestcaseLogTestcasePost({
  fullPrompt: "corrupti",
  ideal: "provident",
  modelResponse: "distinctio",
  retrievalContext: "quibusdam",
  testsetId: "unde",
  userQuery: "nulla",
}, {
  apiKeyHeader: "",
}).then((res: LogTestcaseLogTestcasePostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [Scorecard SDK](docs/sdks/scorecard/README.md)

* [logTestcaseLogTestcasePost](docs/sdks/scorecard/README.md#logtestcaselogtestcasepost) - Log Testcase
* [rootGet](docs/sdks/scorecard/README.md#rootget) - Root
* [startRunStartRunPost](docs/sdks/scorecard/README.md#startrunstartrunpost) - Start Run
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
