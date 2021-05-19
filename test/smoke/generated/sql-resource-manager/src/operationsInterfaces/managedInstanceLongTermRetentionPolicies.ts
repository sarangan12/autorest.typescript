/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  ManagedInstanceLongTermRetentionPolicy,
  ManagedInstanceLongTermRetentionPoliciesListByDatabaseOptionalParams,
  ManagedInstanceLongTermRetentionPolicyName,
  ManagedInstanceLongTermRetentionPoliciesGetOptionalParams,
  ManagedInstanceLongTermRetentionPoliciesGetResponse,
  ManagedInstanceLongTermRetentionPoliciesCreateOrUpdateOptionalParams,
  ManagedInstanceLongTermRetentionPoliciesCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ManagedInstanceLongTermRetentionPolicies. */
export interface ManagedInstanceLongTermRetentionPolicies {
  /**
   * Gets a database's long term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  listByDatabase(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: ManagedInstanceLongTermRetentionPoliciesListByDatabaseOptionalParams
  ): PagedAsyncIterableIterator<ManagedInstanceLongTermRetentionPolicy>;
  /**
   * Gets a managed database's long term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param policyName The policy name. Should always be Default.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    policyName: ManagedInstanceLongTermRetentionPolicyName,
    options?: ManagedInstanceLongTermRetentionPoliciesGetOptionalParams
  ): Promise<ManagedInstanceLongTermRetentionPoliciesGetResponse>;
  /**
   * Sets a managed database's long term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param policyName The policy name. Should always be Default.
   * @param parameters The long term retention policy info.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    policyName: ManagedInstanceLongTermRetentionPolicyName,
    parameters: ManagedInstanceLongTermRetentionPolicy,
    options?: ManagedInstanceLongTermRetentionPoliciesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        ManagedInstanceLongTermRetentionPoliciesCreateOrUpdateResponse
      >,
      ManagedInstanceLongTermRetentionPoliciesCreateOrUpdateResponse
    >
  >;
  /**
   * Sets a managed database's long term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param policyName The policy name. Should always be Default.
   * @param parameters The long term retention policy info.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    policyName: ManagedInstanceLongTermRetentionPolicyName,
    parameters: ManagedInstanceLongTermRetentionPolicy,
    options?: ManagedInstanceLongTermRetentionPoliciesCreateOrUpdateOptionalParams
  ): Promise<ManagedInstanceLongTermRetentionPoliciesCreateOrUpdateResponse>;
}
