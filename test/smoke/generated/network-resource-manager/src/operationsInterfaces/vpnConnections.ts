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
  VpnConnection,
  VpnConnectionsGetResponse,
  VpnConnectionsCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a VpnConnections. */
export interface VpnConnections {
  /**
   * Retrieves all vpn connections for a particular virtual wan vpn gateway.
   * @param resourceGroupName The resource group name of the VpnGateway.
   * @param gatewayName The name of the gateway.
   * @param options The options parameters.
   */
  listByVpnGateway(
    resourceGroupName: string,
    gatewayName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<VpnConnection>;
  /**
   * Retrieves the details of a vpn connection.
   * @param resourceGroupName The resource group name of the VpnGateway.
   * @param gatewayName The name of the gateway.
   * @param connectionName The name of the vpn connection.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    gatewayName: string,
    connectionName: string,
    options?: coreHttp.OperationOptions
  ): Promise<VpnConnectionsGetResponse>;
  /**
   * Creates a vpn connection to a scalable vpn gateway if it doesn't exist else updates the existing
   * connection.
   * @param resourceGroupName The resource group name of the VpnGateway.
   * @param gatewayName The name of the gateway.
   * @param connectionName The name of the connection.
   * @param vpnConnectionParameters Parameters supplied to create or Update a VPN Connection.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    gatewayName: string,
    connectionName: string,
    vpnConnectionParameters: VpnConnection,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<VpnConnectionsCreateOrUpdateResponse>>;
  /**
   * Deletes a vpn connection.
   * @param resourceGroupName The resource group name of the VpnGateway.
   * @param gatewayName The name of the gateway.
   * @param connectionName The name of the connection.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    gatewayName: string,
    connectionName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>>;
}