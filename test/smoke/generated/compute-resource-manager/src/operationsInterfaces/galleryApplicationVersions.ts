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
  GalleryApplicationVersion,
  GalleryApplicationVersionsCreateOrUpdateResponse,
  GalleryApplicationVersionUpdate,
  GalleryApplicationVersionsUpdateResponse,
  GalleryApplicationVersionsGetOptionalParams,
  GalleryApplicationVersionsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a GalleryApplicationVersions. */
export interface GalleryApplicationVersions {
  /**
   * List gallery Application Versions in a gallery Application Definition.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition
   *                    resides.
   * @param galleryApplicationName The name of the Shared Application Gallery Application Definition from
   *                               which the Application Versions are to be listed.
   * @param options The options parameters.
   */
  listByGalleryApplication(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<GalleryApplicationVersion>;
  /**
   * Create or update a gallery Application Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition
   *                    resides.
   * @param galleryApplicationName The name of the gallery Application Definition in which the
   *                               Application Version is to be created.
   * @param galleryApplicationVersionName The name of the gallery Application Version to be created.
   *                                      Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits
   *                                      must be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryApplicationVersion Parameters supplied to the create or update gallery Application
   *                                  Version operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplicationVersionName: string,
    galleryApplicationVersion: GalleryApplicationVersion,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<GalleryApplicationVersionsCreateOrUpdateResponse>>;
  /**
   * Update a gallery Application Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition
   *                    resides.
   * @param galleryApplicationName The name of the gallery Application Definition in which the
   *                               Application Version is to be updated.
   * @param galleryApplicationVersionName The name of the gallery Application Version to be updated.
   *                                      Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits
   *                                      must be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryApplicationVersion Parameters supplied to the update gallery Application Version
   *                                  operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplicationVersionName: string,
    galleryApplicationVersion: GalleryApplicationVersionUpdate,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<GalleryApplicationVersionsUpdateResponse>>;
  /**
   * Retrieves information about a gallery Application Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition
   *                    resides.
   * @param galleryApplicationName The name of the gallery Application Definition in which the
   *                               Application Version resides.
   * @param galleryApplicationVersionName The name of the gallery Application Version to be retrieved.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplicationVersionName: string,
    options?: GalleryApplicationVersionsGetOptionalParams
  ): Promise<GalleryApplicationVersionsGetResponse>;
  /**
   * Delete a gallery Application Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition
   *                    resides.
   * @param galleryApplicationName The name of the gallery Application Definition in which the
   *                               Application Version resides.
   * @param galleryApplicationVersionName The name of the gallery Application Version to be deleted.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplicationVersionName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>>;
}