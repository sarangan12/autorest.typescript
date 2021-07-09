/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  TransparentDataEncryption,
  TransparentDataEncryptionName,
  TransparentDataEncryptionsCreateOrUpdateOptionalParams,
  TransparentDataEncryptionsCreateOrUpdateResponse,
  TransparentDataEncryptionsGetOptionalParams,
  TransparentDataEncryptionsGetResponse
} from "../models";

/** Interface representing a TransparentDataEncryptions. */
export interface TransparentDataEncryptions {
  /**
   * Creates or updates a database's transparent data encryption configuration.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database for which setting the transparent data encryption
   *                     applies.
   * @param transparentDataEncryptionName The name of the transparent data encryption configuration.
   * @param parameters The required parameters for creating or updating transparent data encryption.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    transparentDataEncryptionName: TransparentDataEncryptionName,
    parameters: TransparentDataEncryption,
    options?: TransparentDataEncryptionsCreateOrUpdateOptionalParams
  ): Promise<TransparentDataEncryptionsCreateOrUpdateResponse>;
  /**
   * Gets a database's transparent data encryption configuration.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database for which the transparent data encryption applies.
   * @param transparentDataEncryptionName The name of the transparent data encryption configuration.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    transparentDataEncryptionName: TransparentDataEncryptionName,
    options?: TransparentDataEncryptionsGetOptionalParams
  ): Promise<TransparentDataEncryptionsGetResponse>;
}
