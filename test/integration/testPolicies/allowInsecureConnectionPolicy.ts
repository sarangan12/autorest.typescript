import {
  PipelinePolicy,
  PipelineRequest,
  PipelineResponse,
  SendRequest
} from "@azure/core-rest-pipeline";

export const allowInsecureConnectionPolicyName =
  "allowInsecureConnectionPolicy";

export function allowInsecureConnectionPolicy(): PipelinePolicy {
  return {
    name: allowInsecureConnectionPolicyName,
    sendRequest: (
      request: PipelineRequest,
      next: SendRequest
    ): Promise<PipelineResponse> => {
      request.allowInsecureConnection = true;
      return next(request);
    }
  };
}
