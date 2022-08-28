# ScandiPWA_ProductAlertsGraphQl

**ScandiPWA_ProductAlertsGraphQl** provides additional resolvers for product alerts.

### ProductAlertSubscribe

This endpoint allows customer to subscribe for product price drop or in stock alert

```graphql
mutation productAlertSubscribe($productId: ID!, $type: String!) {
    productAlertSubscribe(productId: $productId, type: $type)
}
```
