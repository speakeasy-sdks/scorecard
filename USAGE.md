<!-- Start SDK Example Usage -->


```typescript
import { Scorecard } from "@egdeltur/scorecard";

(async () => {
    const sdk = new Scorecard({
        security: {
            apiKeyHeader: "",
        },
    });

    const res = await sdk.scorecard.log({
        testsetId: 659738,
        userQuery: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->