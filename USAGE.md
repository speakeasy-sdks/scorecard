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