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
  fullPrompt: "corrupti",
  ideal: "provident",
  modelResponse: "distinctio",
  retrievalContext: "quibusdam",
  testsetId: 602763,
  userQuery: "nulla",
}).then((res: TestcaseLogResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->