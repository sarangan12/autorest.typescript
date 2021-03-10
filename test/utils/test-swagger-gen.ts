import { exec } from "child_process";
import { TracingInfo } from "../../src/models/clientDetails";

interface SwaggerConfig {
  swaggerOrConfig: string;
  clientName: string;
  packageName: string;
  addCredentials?: boolean;
  licenseHeader?: boolean;
  credentialScopes?: string;
  tracing?: TracingInfo;
  disableAsyncIterators?: boolean;
  hideClients?: boolean;
  useCoreV2?: boolean;
}

const package_version = "1.0.0-preview1";
let whiteList: string[] = [];

const testSwaggers: { [name: string]: SwaggerConfig } = {
  additionalProperties: {
    swaggerOrConfig: "additionalProperties.json",
    clientName: "AdditionalPropertiesClient",
    packageName: "additional-properties",
    licenseHeader: true,
    useCoreV2: true
  },
  arrayConstraints: {
    swaggerOrConfig: "test/integration/swaggers/arrayConstraints.json",
    clientName: "ArrayConstraintsClient",
    packageName: "array-constraints-client",
    licenseHeader: true,
    useCoreV2: true
  },
  azureParameterGrouping: {
    swaggerOrConfig: "azure-parameter-grouping.json",
    clientName: "AzureParameterGroupingClient",
    packageName: "azure-parameter-grouping",
    licenseHeader: true,
    useCoreV2: true
  },
  azureReport: {
    swaggerOrConfig: "azure-report.json",
    clientName: "ReportClient",
    packageName: "zzzAzureReport",
    licenseHeader: true,
    useCoreV2: true
  },
  azureSpecialProperties: {
    swaggerOrConfig: "azure-special-properties.json",
    clientName: "AzureSpecialPropertiesClient",
    packageName: "azure-special-properties",
    licenseHeader: true,
    addCredentials: true,
    credentialScopes:
      "https://microsoft.com/.default,http://microsoft.com/.default"
  },
  bodyArray: {
    swaggerOrConfig: "body-array.json",
    clientName: "BodyArrayClient",
    packageName: "body-array",
    licenseHeader: true,
    useCoreV2: true
  },
  bodyBoolean: {
    swaggerOrConfig: "body-boolean.json",
    clientName: "BodyBooleanClient",
    packageName: "body-boolean",
    licenseHeader: true,
    useCoreV2: true
  },
  bodyBooleanQuirks: {
    swaggerOrConfig: "body-boolean.quirks.json",
    clientName: "BodyBooleanQuirksClient",
    packageName: "body-boolean-quirks",
    licenseHeader: true,
    useCoreV2: true
  },
  bodyByte: {
    swaggerOrConfig: "body-byte.json",
    clientName: "BodyByteClient",
    packageName: "body-byte",
    licenseHeader: true,
    useCoreV2: true
  },
  bodyComplex: {
    swaggerOrConfig: "body-complex.json",
    clientName: "BodyComplexClient",
    packageName: "body-complex",
    licenseHeader: true,
    useCoreV2: true
  },
  bodyComplexWithTracing: {
    swaggerOrConfig: "body-complex.json",
    clientName: "bodyComplexWithTracing",
    packageName: "body-complex-tracing",
    licenseHeader: true,
    tracing: {
      namespace: "Microsoft.Body.Complex",
      packagePrefix: "Azure.Body.Complex"
    },
    useCoreV2: true
  },
  bodyDate: {
    swaggerOrConfig: "body-date.json",
    clientName: "BodyDateClient",
    packageName: "body-date",
    licenseHeader: true,
    useCoreV2: true
  },
  bodyDateTime: {
    swaggerOrConfig: "body-datetime.json",
    clientName: "BodyDateTimeClient",
    packageName: "body-datetime",
    licenseHeader: true,
    useCoreV2: true
  },
  bodyDateTimeRfc1123: {
    swaggerOrConfig: "body-datetime-rfc1123.json",
    clientName: "BodyDateTimeRfc1123Client",
    packageName: "body-datetime-rfc1123",
    licenseHeader: true,
    useCoreV2: true
  },
  bodyDictionary: {
    swaggerOrConfig: "body-dictionary.json",
    clientName: "BodyDictionaryClient",
    packageName: "body-dictionary",
    licenseHeader: true,
    useCoreV2: true
  },
  bodyDuration: {
    swaggerOrConfig: "body-duration.json",
    clientName: "BodyDurationClient",
    packageName: "body-duration",
    licenseHeader: true,
    useCoreV2: true
  },
  bodyFile: {
    swaggerOrConfig: "body-file.json",
    clientName: "BodyFileClient",
    packageName: "body-file",
    licenseHeader: true,
    useCoreV2: true
  },
  bodyInteger: {
    swaggerOrConfig: "body-integer.json",
    clientName: "BodyIntegerClient",
    packageName: "body-integer",
    licenseHeader: true,
    useCoreV2: true
  },
  bodyNumber: {
    swaggerOrConfig: "body-number.json",
    clientName: "BodyNumberClient",
    packageName: "body-number",
    licenseHeader: true,
    useCoreV2: true
  },
  bodyString: {
    swaggerOrConfig: "body-string.json",
    clientName: "BodyStringClient",
    packageName: "body-string",
    licenseHeader: true,
    useCoreV2: true
  },
  bodyTime: {
    swaggerOrConfig: "body-time.json",
    clientName: "BodyTimeClient",
    packageName: "body-time",
    licenseHeader: true,
    useCoreV2: true
  },
  customUrl: {
    swaggerOrConfig: "custom-baseUrl.json",
    clientName: "CustomUrlClient",
    packageName: "custom-url",
    licenseHeader: true,
    useCoreV2: true
  },
  customUrlMoreOptions: {
    swaggerOrConfig: "custom-baseUrl-more-options.json",
    clientName: "CustomUrlMoreOptionsClient",
    packageName: "custom-url-MoreOptions",
    licenseHeader: true,
    useCoreV2: true
  },
  customUrlPaging: {
    swaggerOrConfig: "custom-baseUrl-paging.json",
    clientName: "CustomUrlPagingClient",
    packageName: "custom-url-paging",
    licenseHeader: true,
    useCoreV2: false
  },
  header: {
    swaggerOrConfig: "header.json",
    clientName: "HeaderClient",
    packageName: "header",
    licenseHeader: true,
    useCoreV2: true
  },
  httpInfrastructure: {
    swaggerOrConfig: "httpInfrastructure.json",
    clientName: "HttpInfrastructureClient",
    packageName: "httpInfrastructure",
    licenseHeader: true,
    useCoreV2: true
  },
  lro: {
    swaggerOrConfig: "lro.json",
    clientName: "LROClient",
    packageName: "lro",
    licenseHeader: true
  },
  lroParametrizedEndpoints: {
    swaggerOrConfig: "lro-parameterized-endpoints.json",
    clientName: "LroParametrizedEndpointsClient",
    packageName: "lro-parameterized-endpoints",
    licenseHeader: true
  },
  mediaTypes: {
    swaggerOrConfig: "media_types.json",
    clientName: "MediaTypesClient",
    packageName: "media-types-service",
    licenseHeader: true,
    useCoreV2: true
  },
  mediaTypesWithTracing: {
    swaggerOrConfig: "media_types.json",
    clientName: "mediaTypesWithTracingClient",
    packageName: "media-types-service-tracing",
    licenseHeader: true,
    tracing: {
      namespace: "Microsoft.Media.Types",
      packagePrefix: "Azure.Media.Types"
    },
    useCoreV2: true
  },
  mediaTypesV3: {
    swaggerOrConfig: "test/integration/swaggers/media-types-v3.json",
    clientName: "MediaTypesV3Client",
    packageName: "media-types-v3-client",
    licenseHeader: true,
    useCoreV2: true
  },
  mediaTypesV3Lro: {
    swaggerOrConfig: "test/integration/swaggers/media-types-v3-lro.json",
    clientName: "MediaTypesV3LROClient",
    packageName: "media-types-v3-lro-client",
    licenseHeader: true
  },
  modelFlattening: {
    swaggerOrConfig: "model-flattening.json",
    clientName: "ModelFlatteningClient",
    packageName: "model-flattening",
    licenseHeader: true,
    useCoreV2: true
  },
  multipleInheritance: {
    swaggerOrConfig: "multiple-inheritance.json",
    clientName: "MultipleInheritanceClient",
    packageName: "multiple-inheritance",
    licenseHeader: true,
    useCoreV2: true
  },
  noMappers: {
    swaggerOrConfig: "test/integration/swaggers/no-mappers.json",
    clientName: "NoMappersClient",
    packageName: "no-mappers",
    licenseHeader: true,
    useCoreV2: true
  },
  noOperation: {
    swaggerOrConfig: "test/integration/swaggers/noOperation.json",
    clientName: "NoOperationsClient",
    packageName: "no-operation",
    licenseHeader: true,
    useCoreV2: true
  },
  nonStringEnum: {
    swaggerOrConfig: "non-string-enum.json",
    clientName: "NonStringEnumClient",
    packageName: "non-string-num",
    licenseHeader: true,
    useCoreV2: true
  },
  objectType: {
    swaggerOrConfig: "object-type.json",
    clientName: "ObjectTypeClient",
    packageName: "object-type",
    licenseHeader: true,
    useCoreV2: true
  },
  paging: {
    swaggerOrConfig: "paging.json",
    clientName: "PagingClient",
    packageName: "paging-service",
    licenseHeader: true,
    tracing: {
      namespace: "Microsoft.Media.Types",
      packagePrefix: "Azure.Media.Types"
    },
    useCoreV2: false
  },
  pagingNoIterators: {
    swaggerOrConfig: "paging.json",
    clientName: "PagingNoIteratorsClient",
    packageName: "paging-no-iterators",
    licenseHeader: true,
    disableAsyncIterators: true
  },
  requiredOptional: {
    swaggerOrConfig: "required-optional.json",
    clientName: "RequiredOptionalClient",
    packageName: "required-optional",
    licenseHeader: true,
    useCoreV2: true
  },
  regexConstraint: {
    swaggerOrConfig: "test/integration/swaggers/regex-constraint.json",
    clientName: "RegexConstraint",
    packageName: "regex-constraint",
    licenseHeader: true,
    useCoreV2: true
  },
  report: {
    swaggerOrConfig: "report.json",
    clientName: "ReportClient",
    packageName: "zzzReport",
    licenseHeader: true,
    useCoreV2: true
  },
  uuid: {
    swaggerOrConfig: "test/integration/swaggers/uuid.json",
    clientName: "UuidClient",
    packageName: "uuid",
    licenseHeader: true,
    useCoreV2: true
  },
  url: {
    swaggerOrConfig: "url.json",
    clientName: "UrlClient",
    packageName: "url",
    licenseHeader: true,
    useCoreV2: true
  },
  urlMulti: {
    swaggerOrConfig: "url-multi-collectionFormat.json",
    clientName: "UrlMultiClient",
    packageName: "url-multi",
    licenseHeader: true,
    useCoreV2: true
  },
  url2: {
    swaggerOrConfig: "test/integration/swaggers/url.json",
    clientName: "UrlClient",
    packageName: "url",
    licenseHeader: true,
    useCoreV2: true
  },
  xmlservice: {
    swaggerOrConfig: "xml-service.json",
    clientName: "XmlServiceClient",
    packageName: "xml-service",
    licenseHeader: true,
    useCoreV2: true
  },
  noLicenseHeader: {
    swaggerOrConfig: "test/integration/swaggers/license-header.json",
    clientName: "NoLicenseHeaderClient",
    packageName: "nolicense-header",
    useCoreV2: true
  },
  licenseHeader: {
    swaggerOrConfig: "test/integration/swaggers/license-header.json",
    clientName: "LicenseHeaderClient",
    packageName: "license-header",
    licenseHeader: true,
    useCoreV2: true
  },
  subscriptionIdApiVersion: {
    swaggerOrConfig: "subscriptionId-apiVersion.json",
    clientName: "SubscriptionIdApiVersionClient",
    packageName: "subscriptionid-apiversion",
    licenseHeader: true,
    useCoreV2: true
  },
  bodyFormData: {
    swaggerOrConfig: "body-formdata.json",
    clientName: "BodyFormDataClient",
    packageName: "body-formdata",
    licenseHeader: true,
    useCoreV2: true
  },
  validation: {
    swaggerOrConfig: "validation.json",
    clientName: "ValidationClient",
    packageName: "validation",
    licenseHeader: true,
    useCoreV2: true
  },
  extensibleEnums: {
    swaggerOrConfig: "extensible-enums-swagger.json",
    clientName: "ExtensibleEnumsClient",
    packageName: "extensible-enums",
    licenseHeader: true,
    useCoreV2: true
  },
  xmsErrorResponses: {
    swaggerOrConfig: "xms-error-responses.json",
    clientName: "XmsErrorResponsesClient",
    packageName: "xms-error-responses",
    licenseHeader: true,
    useCoreV2: true
  },
  odataDiscriminator: {
    swaggerOrConfig: "test/integration/swaggers/odata-discriminator.json",
    clientName: "ODataDiscriminatorClient",
    packageName: "odata-discriminator",
    licenseHeader: true,
    useCoreV2: true
  },
  appconfiguration: {
    swaggerOrConfig: "test/integration/swaggers/appconfiguration.json",
    clientName: "AppConfigurationClient",
    packageName: "appconfiguration",
    licenseHeader: true,
    useCoreV2: true
  },
  appconfigurationexport: {
    swaggerOrConfig: "test/integration/swaggers/appconfiguration.json",
    clientName: "AppConfigurationClient",
    packageName: "appconfiguration",
    licenseHeader: true,
    hideClients: true,
    useCoreV2: true
  },
  mapperrequired: {
    swaggerOrConfig: "test/integration/swaggers/mapperrequired.json",
    clientName: "MapperRequiredClient",
    packageName: "mapperrequired",
    licenseHeader: true,
    useCoreV2: true
  },
  readmeFileChecker: {
    swaggerOrConfig: "test/integration/swaggers/keyvaults-secrets.md",
    clientName: "KeyVaultClient",
    packageName: "@azure/keyvault-secrets",
    useCoreV2: true
  },
  nameChecker: {
    swaggerOrConfig: "test/integration/swaggers/Data.md",
    clientName: "SearchClient",
    packageName: "@azure/search-documents",
    useCoreV2: true
  },
  polymorphicSkipNormalize: {
    swaggerOrConfig:
      "test/integration/swaggers/MediaServices_polymorphic_skipNormalize.md",
    clientName: "MediaServicesClient",
    packageName: "@azure/media-services",
    useCoreV2: true
  },
  petstore: {
    swaggerOrConfig: "test/integration/swaggers/petstore.json",
    clientName: "PetStore",
    packageName: "petstore",
    useCoreV2: true
  },
  textanalytics: {
    swaggerOrConfig: "test/integration/swaggers/textAnalytics.md",
    clientName: "GeneratedClient",
    packageName: "textanalytics",
    hideClients: true,
    licenseHeader: true,
    useCoreV2: true
  }
};

const generateSwaggers = async (
  whiteList?: string[],
  isDebugging?: boolean
) => {
  const swaggers = Object.keys(testSwaggers).filter(name => {
    if (!whiteList || !whiteList.length) {
      return true;
    }
    return whiteList.includes(name);
  });

  for (let name of swaggers) {
    const {
      addCredentials,
      clientName,
      swaggerOrConfig,
      packageName,
      licenseHeader,
      tracing,
      disableAsyncIterators,
      credentialScopes,
      hideClients,
      useCoreV2
    } = testSwaggers[name];

    let swaggerPath = swaggerOrConfig;

    const tracingInfo = tracing
      ? `--tracing-info.namespace=${tracing.namespace} --tracing-info.packagePrefix=${tracing.packagePrefix}`
      : "";

    const credentialScopesInfo = credentialScopes
      ? `--credential-scopes=${credentialScopes}`
      : "";

    const disableIterators = disableAsyncIterators
      ? "--disable-async-iterators=true"
      : "";

    if (swaggerOrConfig.split("/").length === 1) {
      // When given a filename look for it in test server, otherwise use the path
      swaggerPath = `node_modules/@microsoft.azure/autorest.testserver/swagger/${swaggerOrConfig}`;
    }

    let inputFileCommand: string = `${swaggerPath}`;
    if (!swaggerPath.endsWith(".md")) {
      inputFileCommand = `--input-file=${inputFileCommand}`;
    }

    let autorestCommand: string = `autorest --clear-output-folder=true ${tracingInfo} ${disableIterators} ${credentialScopesInfo} --license-header=${!!licenseHeader} --add-credentials=${!!addCredentials} --typescript --output-folder=./test/integration/generated/${name} --use=. --title=${clientName} --package-name=${packageName} --package-version=${package_version} --hide-clients=${!!hideClients} --use-core-v2=${!!useCoreV2} ${inputFileCommand}`;

    if (isDebugging) {
      autorestCommand = `${autorestCommand} --typescript.debugger`;
    }

    const generationTask = () => {
      return new Promise<void>((resolve, reject) => {
        exec(autorestCommand, (error, stdout, stderr) => {
          if (error) {
            reject(`Failed to generate ${name} with error: \n ${error}`);
            return;
          }
          console.log(`=== Start ${name} ===`);
          console.log(stdout);
          stderr && console.error(stderr);
          console.log(`=== End ${name} ===`);
          resolve();
        });
      });
    };

    try {
      await generationTask();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};

const buildWhitelist = () =>
  process.argv.forEach((arg, index) => {
    if (arg !== "--include" && arg !== "-i") {
      return;
    }

    const includesValue = process.argv[index + 1];
    if (!includesValue) {
      console.warn(
        "No valid include list provided, generating all test swaggers"
      );
      return;
    }

    const swaggers = includesValue.split(",");

    swaggers.forEach(swagger => {
      const validSwaggers = Object.keys(testSwaggers);
      if (!validSwaggers.includes(swagger)) {
        throw new Error(
          `Unknown swagger ${swagger}, valid swaggers: \n ${JSON.stringify(
            validSwaggers
          )}`
        );
      }

      whiteList.push(swagger);
    });
  });

const buildAutorest = () => {
  if (!process.argv.includes("--build") && !process.argv.includes("-b")) {
    console.warn(
      "Not building Autorest.Typescript, use --build or -b to build"
    );
    return Promise.resolve();
  }

  return new Promise<void>((resolve, reject) => {
    console.log("Building Autorest.Typescript");
    exec("npm run build", (error, stdout, stderror) => {
      if (error) {
        reject(
          `Failed to build autorest.typescript \n ${JSON.stringify(error)}`
        );
        return;
      }

      console.log(stdout);
      stderror && console.error(stderror);
      resolve();
    });
  });
};

const run = async () => {
  const isDebugging = process.argv.indexOf("--debug") !== -1;
  buildWhitelist();
  await buildAutorest();
  await generateSwaggers(whiteList, isDebugging);
};

run().catch(error => {
  console.error(error);
  process.exit(-1000);
});
