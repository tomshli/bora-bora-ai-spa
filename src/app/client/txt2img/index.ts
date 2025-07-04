/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createTextToImageResponseFromDiscriminatorValue, serializeStableDiffusionProcessingTxt2Img, serializeTextToImageResponse, type StableDiffusionProcessingTxt2Img, type TextToImageResponse } from '../models/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /txt2img
 */
export interface Txt2imgRequestBuilder extends BaseRequestBuilder<Txt2imgRequestBuilder> {
    /**
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TextToImageResponse>}
     */
     post(body: StableDiffusionProcessingTxt2Img, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<TextToImageResponse | undefined>;
    /**
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: StableDiffusionProcessingTxt2Img, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const Txt2imgRequestBuilderUriTemplate = "{+baseurl}/txt2img";
/**
 * Metadata for all the requests in the request builder.
 */
export const Txt2imgRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: Txt2imgRequestBuilderUriTemplate,
        responseBodyContentType: "application/json, text/plain;q=0.9",
        adapterMethodName: "send",
        responseBodyFactory:  createTextToImageResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeStableDiffusionProcessingTxt2Img,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
