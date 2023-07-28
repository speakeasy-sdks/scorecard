# Scorecard SDK

## Overview

### Available Operations

* [log](#log) - Log Testcase

## log

Log Testcase

### Example Usage

```typescript
import { Scorecard } from "@egdeltur/scorecard";
import { TestcaseLogResponse, TestcaseLogSecurity } from "@egdeltur/scorecard/dist/sdk/models/operations";

const sdk = new Scorecard();
const operationSecurity: TestcaseLogSecurity = {
  apiKeyHeader: "",
};

sdk.scorecard.log({
  fullPrompt: "corrupti",
  ideal: "illum",
  modelResponse: "vel",
  retrievalContext: "error",
  testsetId: 645894,
  userQuery: "suscipit",
}, operationSecurity).then((res: TestcaseLogResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [shared.Testcase](../../models/shared/testcase.md)                               | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.TestcaseLogSecurity](../../models/operations/testcaselogsecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.TestcaseLogResponse](../../models/operations/testcaselogresponse.md)>**

