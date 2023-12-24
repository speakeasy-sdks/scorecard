<!-- Start SDK Example Usage [usage] -->
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

    if (res?.statusCode !== 200) {
        throw new Error("Unexpected status code: " + res?.statusCode || "-");
    }

    // handle response
}

run();

```
<!-- End SDK Example Usage [usage] -->