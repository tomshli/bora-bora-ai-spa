import { Component, OnInit } from '@angular/core';
import { AnonymousAuthenticationProvider } from "@microsoft/kiota-abstractions";
import { FetchRequestAdapter } from "@microsoft/kiota-http-fetchlibrary";
import { createApiGatewayClient } from "../client/apiGatewayClient.js";

@Component({
    selector: 'app-guarded',
    templateUrl: './guarded.component.html',
    styleUrls: ['./guarded.component.css'],
    standalone: false
})
export class GuardedComponent implements OnInit {
  imgBase64: string | undefined;

  constructor() { }

  async ngOnInit() {
    // API requires no authentication, so use the anonymous
    // authentication provider
    const authProvider = new AnonymousAuthenticationProvider();
    // Create request adapter using the fetch-based implementation
    const adapter = new FetchRequestAdapter(authProvider);
    adapter.baseUrl = "https://localhost:7276";
    // Create the API client
    const client = createApiGatewayClient(adapter);

    try {
      const response = await client.txt2img.post({
        "prompt": "Maltese puppy",
        "steps": 5,
        "overrideSettings": {
          "additionalData": {
            "sd_model_checkpoint": "v2-1_768-ema-pruned"
          }
        }
      });

      if (response?.images?.length) {
        this.imgBase64 = 'data:image/jpg;base64,' + response.images[0];
      }
    } catch (err) {
      console.log(err);
    }
  }

}
