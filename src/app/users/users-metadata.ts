import { EntityMetadataMap } from "@ngrx/data";
import { User } from "./users.model"

export const UserMetadata: EntityMetadataMap = {
    User:{
       selectId:(User:User) => User.key
    }
}