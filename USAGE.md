<!-- Start SDK Example Usage -->
```typescript
import { Scorecard } from "scorecard";
import { TestcaseLogResponse } from "scorecard/dist/sdk/models/operations";

const sdk = new Scorecard();

sdk.log({
  fullPrompt: "corrupti",
  ideal: "provident",
  modelResponse: "distinctio",
  retrievalContext: "quibusdam",
  testsetId: 602763,
  userQuery: "nulla",
}, {
  apiKeyHeader: "",
}).then((res: TestcaseLogResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->