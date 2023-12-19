# Scorecard SDK


## Overview

### Available Operations

* [log](#log) - Log Testcase

## log

Log Testcase

### Example Usage

```typescript
import { Scorecard } from "@egdeltur/scorecard";

async function run() {
  const sdk = new Scorecard({
    security: {
      apiKeyHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.log({
    testsetId: 659738,
    userQuery: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.Testcase](../../sdk/models/shared/testcase.md)       | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.TestcaseLogResponse](../../sdk/models/operations/testcaselogresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
