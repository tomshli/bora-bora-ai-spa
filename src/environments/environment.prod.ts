export const environment = {
  production: true,
  protectedResourceMap: new Map<string, Array<string>>([
      ["https://boraboraai-api.azurewebsites.net/txt2img", ['api://d949f2eb-c6b9-4ff4-a48c-db819ac07578/a1111.post.txt2img']],
      ["https://boraboraai-api.azurewebsites.net/img2img", ['api://d949f2eb-c6b9-4ff4-a48c-db819ac07578/a1111.post.img2img']],
  ])
};
