// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  protectedResourceMap: new Map<string, Array<string>>([
      ["https://boraboraai-api.azurewebsites.net/txt2img", ['api://d949f2eb-c6b9-4ff4-a48c-db819ac07578/a1111.post.txt2img']],
      ["https://boraboraai-api.azurewebsites.net/img2img", ['api://d949f2eb-c6b9-4ff4-a48c-db819ac07578/a1111.post.img2img']],
  ]),
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
