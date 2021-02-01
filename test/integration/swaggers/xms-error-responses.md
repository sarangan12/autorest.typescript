# KeyVault Secrets Swagger Configuration

> see https://aka.ms/autorest

```yaml
input-file: ../../../node_modules/@microsoft.azure/autorest.testserver/swagger/xms-error-responses.json
```

## Customizations

See the [AutoRest samples](https://github.com/Azure/autorest/tree/master/Samples/3b-custom-transformations)
for more about how we're customizing things.

### Rename basic definition

```yaml
directive:
  - from: swagger-document
    where: $.definitions.Pet
    transform: >
      $['x-ms-client-name'] = 'Petdef';
```
