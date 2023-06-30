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
import { RunStartResponse } from "scorecard/dist/sdk/models/operations";

const sdk = new Scorecard({
  security: {
    apiKeyHeader: "",
  },
});

sdk.run.start({
  modelVersion: "corrupti",
  runId: "provident",
  token: "distinctio",
}).then((res: RunStartResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [run](docs/sdks/run/README.md)

* [start](docs/sdks/run/README.md#start) - Start Run

### [testCase](docs/sdks/testcase/README.md)

* [log](docs/sdks/testcase/README.md#log) - Log Testcase

### [root](docs/sdks/root/README.md)

* [get](docs/sdks/root/README.md#get) - Root
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
