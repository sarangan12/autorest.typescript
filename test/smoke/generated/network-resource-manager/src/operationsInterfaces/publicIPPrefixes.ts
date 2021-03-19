/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import { LROPoller } from "../lro";
import {
  PublicIPPrefix,
  PublicIPPrefixesGetOptionalParams,
  PublicIPPrefixesGetResponse,
  PublicIPPrefixesCreateOrUpdateResponse,
  TagsObject,
  PublicIPPrefixesUpdateTagsResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PublicIPPrefixes. */
export interface PublicIPPrefixes {
  /**
   * Gets all the public IP prefixes in a subscription.
   * @param options The options parameters.
   */
  listAll(
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<PublicIPPrefix>;
  /**
   * Gets all public IP prefixes in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<PublicIPPrefix>;
  /**
   * Deletes the specified public IP prefix.
   * @param resourceGroupName The name of the resource group.
   * @param publicIpPrefixName The name of the PublicIpPrefix.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    publicIpPrefixName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>>;
  /**
   * Gets the specified public IP prefix in a specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param publicIpPrefixName The name of the public IP prefix.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    publicIpPrefixName: string,
    options?: PublicIPPrefixesGetOptionalParams
  ): Promise<PublicIPPrefixesGetResponse>;
  /**
   * Creates or updates a static or dynamic public IP prefix.
   * @param resourceGroupName The name of the resource group.
   * @param publicIpPrefixName The name of the public IP prefix.
   * @param parameters Parameters supplied to the create or update public IP prefix operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    publicIpPrefixName: string,
    parameters: PublicIPPrefix,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<PublicIPPrefixesCreateOrUpdateResponse>>;
  /**
   * Updates public IP prefix tags.
   * @param resourceGroupName The name of the resource group.
   * @param publicIpPrefixName The name of the public IP prefix.
   * @param parameters Parameters supplied to update public IP prefix tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    publicIpPrefixName: string,
    parameters: TagsObject,
    options?: coreHttp.OperationOptions
  ): Promise<PublicIPPrefixesUpdateTagsResponse>;
}