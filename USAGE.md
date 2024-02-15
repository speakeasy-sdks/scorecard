<!-- Start SDK Example Usage [usage] -->
```typescript
import { Scorecard } from "@egdeltur/scorecard";

async function run() {
    const sdk = new Scorecard({
        security: {
            apiKeyHeader: "<YOUR_API_KEY_HERE>",
        },
    });

    const result = await sdk.log({
        testsetId: 659738,
        userQuery: "<value>",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->