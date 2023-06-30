# Scorecard SDK

## Overview

### Available Operations

* [logTestcaseLogTestcasePost](#logtestcaselogtestcasepost) - Log Testcase
* [rootGet](#rootget) - Root
* [startRunStartRunPost](#startrunstartrunpost) - Start Run

## logTestcaseLogTestcasePost

Log Testcase

### Example Usage

```typescript
import { Scorecard } from "scorecard";
import { LogTestcaseLogTestcasePostResponse } from "scorecard/dist/sdk/models/operations";

const sdk = new Scorecard();

sdk.scorecard.logTestcaseLogTestcasePost({
  fullPrompt: "corrupti",
  ideal: "illum",
  modelResponse: "vel",
  retrievalContext: "error",
  testsetId: "deserunt",
  userQuery: "suscipit",
}, {
  apiKeyHeader: "",
}).then((res: LogTestcaseLogTestcasePostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [shared.Testcase](../../models/shared/testcase.md)                                                             | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `security`                                                                                                     | [operations.LogTestcaseLogTestcasePostSecurity](../../models/operations/logtestcaselogtestcasepostsecurity.md) | :heavy_check_mark:                                                                                             | The security requirements to use for the request.                                                              |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.LogTestcaseLogTestcasePostResponse](../../models/operations/logtestcaselogtestcasepostresponse.md)>**


## rootGet

Root

### Example Usage

```typescript
import { Scorecard } from "scorecard";
import { RootGetResponse } from "scorecard/dist/sdk/models/operations";

const sdk = new Scorecard();

sdk.scorecard.rootGet().then((res: RootGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RootGetResponse](../../models/operations/rootgetresponse.md)>**


## startRunStartRunPost

Start Run

### Example Usage

```typescript
import { Scorecard } from "scorecard";
import { StartRunStartRunPostResponse } from "scorecard/dist/sdk/models/operations";

const sdk = new Scorecard();

sdk.scorecard.startRunStartRunPost({
  modelVersion: "iure",
  runId: "magnam",
  token: "debitis",
}).then((res: StartRunStartRunPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.Item](../../models/shared/item.md)                   | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.StartRunStartRunPostResponse](../../models/operations/startrunstartrunpostresponse.md)>**

