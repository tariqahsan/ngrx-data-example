import { Injectable } from '@angular/core';
import { DefaultHttpUrlGenerator, HttpResourceUrls, Pluralizer } from '@ngrx/data';

@Injectable({
  providedIn: 'root'
})
export class CustomUrlGeneratorService extends DefaultHttpUrlGenerator {
  constructor(myPluralizer: Pluralizer) { 
    super(myPluralizer);
  }

  protected getResourceUrls(entityName: string, root: string): HttpResourceUrls {
    
    let resourceUrl = this.knownHttpResourceUrls[entityName];

    if(entityName == 'PinRequest') {
      console.log("I AM IN PinRequest entityName ...")
      const url = "http://localhost:8686/api/v1/pinRequests/";
      resourceUrl = {
        entityResourceUrl : url,
        collectionResourceUrl : url
      }
      this.registerHttpResourceUrls({[entityName]:resourceUrl});
    }
    if (entityName == 'DoeMetadata') {
      const url = "http://localhost:8686/api/v1/doeMetadata/";
      resourceUrl = {
        entityResourceUrl : url,
        collectionResourceUrl : url
      }
      this.registerHttpResourceUrls({[entityName]:resourceUrl});
    }
    if (entityName == 'Product') {
      const url = "http://localhost:8686/api/v1/products/";
      resourceUrl = {
        entityResourceUrl : url,
        collectionResourceUrl : url
      }
      this.registerHttpResourceUrls({[entityName]:resourceUrl});
    }
    if (entityName == 'User') {
      const url = "http://localhost:8686/api/v1/users/";
      resourceUrl = {
        entityResourceUrl : url,
        collectionResourceUrl : url
      }
      this.registerHttpResourceUrls({[entityName]:resourceUrl});
    }

    return resourceUrl;
  }
}
