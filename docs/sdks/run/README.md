# run

### Available Operations

* [start](#start) - Start Run

## start

Start Run

### Example Usage

```typescript
import { Scorecard } from "scorecard";
import { RunStartResponse } from "scorecard/dist/sdk/models/operations";

const sdk = new Scorecard({
  security: {
    apiKeyHeader: "",
  },
});

sdk.run.start({
  modelVersion: "quibusdam",
  runId: "unde",
  token: "nulla",
}).then((res: RunStartResponse) => {
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

**Promise<[operations.RunStartResponse](../../models/operations/runstartresponse.md)>**

