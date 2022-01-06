import { EntityMetadataMap } from "@ngrx/data";
import { PinRequest } from "./pin-request.model";

export const PinRequestsMetadata: EntityMetadataMap = {
    PinRequest:{
       selectId:(pinRequest:PinRequest) => pinRequest.$key
    }
}
