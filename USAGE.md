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