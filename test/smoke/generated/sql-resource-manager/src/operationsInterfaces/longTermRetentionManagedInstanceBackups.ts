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
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  ManagedInstanceLongTermRetentionBackup,
  LongTermRetentionManagedInstanceBackupsListByDatabaseOptionalParams,
  LongTermRetentionManagedInstanceBackupsListByInstanceOptionalParams,
  LongTermRetentionManagedInstanceBackupsListByLocationOptionalParams,
  LongTermRetentionManagedInstanceBackupsListByResourceGroupDatabaseOptionalParams,
  LongTermRetentionManagedInstanceBackupsListByResourceGroupInstanceOptionalParams,
  LongTermRetentionManagedInstanceBackupsListByResourceGroupLocationOptionalParams,
  LongTermRetentionManagedInstanceBackupsGetOptionalParams,
  LongTermRetentionManagedInstanceBackupsGetResponse,
  LongTermRetentionManagedInstanceBackupsDeleteOptionalParams,
  LongTermRetentionManagedInstanceBackupsGetByResourceGroupOptionalParams,
  LongTermRetentionManagedInstanceBackupsGetByResourceGroupResponse,
  LongTermRetentionManagedInstanceBackupsDeleteByResourceGroupOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a LongTermRetentionManagedInstanceBackups. */
export interface LongTermRetentionManagedInstanceBackups {
  /**
   * Lists all long term retention backups for a managed database.
   * @param locationName The location of the database.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database.
   * @param options The options parameters.
   */
  listByDatabase(
    locationName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: LongTermRetentionManagedInstanceBackupsListByDatabaseOptionalParams
  ): PagedAsyncIterableIterator<ManagedInstanceLongTermRetentionBackup>;
  /**
   * Lists the long term retention backups for a given managed instance.
   * @param locationName The location of the database
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  listByInstance(
    locationName: string,
    managedInstanceName: string,
    options?: LongTermRetentionManagedInstanceBackupsListByInstanceOptionalParams
  ): PagedAsyncIterableIterator<ManagedInstanceLongTermRetentionBackup>;
  /**
   * Lists the long term retention backups for managed databases in a given location.
   * @param locationName The location of the database.
   * @param options The options parameters.
   */
  listByLocation(
    locationName: string,
    options?: LongTermRetentionManagedInstanceBackupsListByLocationOptionalParams
  ): PagedAsyncIterableIterator<ManagedInstanceLongTermRetentionBackup>;
  /**
   * Lists all long term retention backups for a managed database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The location of the database
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database.
   * @param options The options parameters.
   */
  listByResourceGroupDatabase(
    resourceGroupName: string,
    locationName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: LongTermRetentionManagedInstanceBackupsListByResourceGroupDatabaseOptionalParams
  ): PagedAsyncIterableIterator<ManagedInstanceLongTermRetentionBackup>;
  /**
   * Lists the long term retention backups for a given managed instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The location of the database.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  listByResourceGroupInstance(
    resourceGroupName: string,
    locationName: string,
    managedInstanceName: string,
    options?: LongTermRetentionManagedInstanceBackupsListByResourceGroupInstanceOptionalParams
  ): PagedAsyncIterableIterator<ManagedInstanceLongTermRetentionBackup>;
  /**
   * Lists the long term retention backups for managed databases in a given location.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The location of the database.
   * @param options The options parameters.
   */
  listByResourceGroupLocation(
    resourceGroupName: string,
    locationName: string,
    options?: LongTermRetentionManagedInstanceBackupsListByResourceGroupLocationOptionalParams
  ): PagedAsyncIterableIterator<ManagedInstanceLongTermRetentionBackup>;
  /**
   * Gets a long term retention backup for a managed database.
   * @param locationName The location of the database.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database.
   * @param backupName The backup name.
   * @param options The options parameters.
   */
  get(
    locationName: string,
    managedInstanceName: string,
    databaseName: string,
    backupName: string,
    options?: LongTermRetentionManagedInstanceBackupsGetOptionalParams
  ): Promise<LongTermRetentionManagedInstanceBackupsGetResponse>;
  /**
   * Deletes a long term retention backup.
   * @param locationName The location of the database.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database.
   * @param backupName The backup name.
   * @param options The options parameters.
   */
  beginDelete(
    locationName: string,
    managedInstanceName: string,
    databaseName: string,
    backupName: string,
    options?: LongTermRetentionManagedInstanceBackupsDeleteOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Deletes a long term retention backup.
   * @param locationName The location of the database.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database.
   * @param backupName The backup name.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    locationName: string,
    managedInstanceName: string,
    databaseName: string,
    backupName: string,
    options?: LongTermRetentionManagedInstanceBackupsDeleteOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Gets a long term retention backup for a managed database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The location of the database.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database.
   * @param backupName The backup name.
   * @param options The options parameters.
   */
  getByResourceGroup(
    resourceGroupName: string,
    locationName: string,
    managedInstanceName: string,
    databaseName: string,
    backupName: string,
    options?: LongTermRetentionManagedInstanceBackupsGetByResourceGroupOptionalParams
  ): Promise<LongTermRetentionManagedInstanceBackupsGetByResourceGroupResponse>;
  /**
   * Deletes a long term retention backup.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The location of the database
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database.
   * @param backupName The backup name.
   * @param options The options parameters.
   */
  beginDeleteByResourceGroup(
    resourceGroupName: string,
    locationName: string,
    managedInstanceName: string,
    databaseName: string,
    backupName: string,
    options?: LongTermRetentionManagedInstanceBackupsDeleteByResourceGroupOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Deletes a long term retention backup.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The location of the database
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database.
   * @param backupName The backup name.
   * @param options The options parameters.
   */
  beginDeleteByResourceGroupAndWait(
    resourceGroupName: string,
    locationName: string,
    managedInstanceName: string,
    databaseName: string,
    backupName: string,
    options?: LongTermRetentionManagedInstanceBackupsDeleteByResourceGroupOptionalParams
  ): Promise<coreHttp.RestResponse>;
}
