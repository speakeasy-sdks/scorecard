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