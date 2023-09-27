# Scorecard SDK


## Overview

### Available Operations

* [log](#log) - Log Testcase

## log

Log Testcase

### Example Usage

```typescript
import { Scorecard } from "@egdeltur/scorecard";
import { TestcaseLogResponse } from "@egdeltur/scorecard/dist/sdk/models/operations";

const sdk = new Scorecard({
  security: {
    apiKeyHeader: "",
  },
});

sdk.scorecard.log({
  fullPrompt: "iure",
  ideal: "magnam",
  modelResponse: "debitis",
  retrievalContext: "ipsa",
  testsetId: 963663,
  userQuery: "tempora",
}).then((res: TestcaseLogResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.Testcase](../../models/shared/testcase.md)           | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.TestcaseLogResponse](../../models/operations/testcaselogresponse.md)>**

