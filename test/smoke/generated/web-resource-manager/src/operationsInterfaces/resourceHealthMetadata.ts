/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ResourceHealthMetadataDef,
  ResourceHealthMetadataListOptionalParams,
  ResourceHealthMetadataListByResourceGroupOptionalParams,
  ResourceHealthMetadataListBySiteOptionalParams,
  ResourceHealthMetadataListBySiteSlotOptionalParams,
  ResourceHealthMetadataGetBySiteOptionalParams,
  ResourceHealthMetadataGetBySiteResponse,
  ResourceHealthMetadataGetBySiteSlotOptionalParams,
  ResourceHealthMetadataGetBySiteSlotResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ResourceHealthMetadata. */
export interface ResourceHealthMetadata {
  /**
   * Description for List all ResourceHealthMetadata for all sites in the subscription.
   * @param options The options parameters.
   */
  list(
    options?: ResourceHealthMetadataListOptionalParams
  ): PagedAsyncIterableIterator<ResourceHealthMetadataDef>;
  /**
   * Description for List all ResourceHealthMetadata for all sites in the resource group in the
   * subscription.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: ResourceHealthMetadataListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<ResourceHealthMetadataDef>;
  /**
   * Description for Gets the category of ResourceHealthMetadata to use for the given site as a
   * collection
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of web app.
   * @param options The options parameters.
   */
  listBySite(
    resourceGroupName: string,
    name: string,
    options?: ResourceHealthMetadataListBySiteOptionalParams
  ): PagedAsyncIterableIterator<ResourceHealthMetadataDef>;
  /**
   * Description for Gets the category of ResourceHealthMetadata to use for the given site as a
   * collection
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of web app.
   * @param slot Name of web app slot. If not specified then will default to production slot.
   * @param options The options parameters.
   */
  listBySiteSlot(
    resourceGroupName: string,
    name: string,
    slot: string,
    options?: ResourceHealthMetadataListBySiteSlotOptionalParams
  ): PagedAsyncIterableIterator<ResourceHealthMetadataDef>;
  /**
   * Description for Gets the category of ResourceHealthMetadata to use for the given site
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of web app
   * @param options The options parameters.
   */
  getBySite(
    resourceGroupName: string,
    name: string,
    options?: ResourceHealthMetadataGetBySiteOptionalParams
  ): Promise<ResourceHealthMetadataGetBySiteResponse>;
  /**
   * Description for Gets the category of ResourceHealthMetadata to use for the given site
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of web app
   * @param slot Name of web app slot. If not specified then will default to production slot.
   * @param options The options parameters.
   */
  getBySiteSlot(
    resourceGroupName: string,
    name: string,
    slot: string,
    options?: ResourceHealthMetadataGetBySiteSlotOptionalParams
  ): Promise<ResourceHealthMetadataGetBySiteSlotResponse>;
}
