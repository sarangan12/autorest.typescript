import * as coreHttp from "@azure/core-http";
import { StorageBlobOptionalParams } from "./models";

const packageName = "azure-storage-blob";
const packageVersion = "1.0.0-preview1";

export class StorageBlobContext extends coreHttp.ServiceClient {
  url: string;
  version: string;

  /**
   * Initializes a new instance of the StorageBlobContext class.
   * @param url The URL of the service account, container, or blob that is the targe of the desired
   *            operation.
   * @param options The parameter options
   */
  constructor(url: string, options?: StorageBlobOptionalParams) {
    if (url === undefined) {
      throw new Error("'url' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(undefined, options);

    this.requestContentType = "application/json; charset=utf-8";

    this.baseUri = options.endpoint || "{url}";

    // Parameter assignments
    this.url = url;

    // Assigning values to Constant parameters
    this.version = options.version || "2020-06-12";
  }
}
