import { createRequestHandler } from "rakkasjs/server";
import { cookie } from "@hattip/cookie";
import { testGithubToken } from "./lib/github";

export default createRequestHandler({
  middleware: {
    beforePages: [],
    beforeApiRoutes: [],
    beforeNotFound: [],
    beforeAll: [cookie()],
  },

  createPageHooks(requestContext) {
    return {
      emitBeforeSsrChunk() {
        return ``;
      },

      emitToDocumentHead() {
        const cookie_theme = requestContext?.cookie?.theme;
        return `
    <link rel="icon" type="image/svg+xml" href="/site.svg" />
    <script>
      (function() {
        document.documentElement.setAttribute("data-theme", "${cookie_theme}");
      })();
     </script>
   
  `;
      },

      async extendPageContext(pageContext) {
        const gh_token = requestContext?.cookie?.gh_tojen_cookie;
        if (gh_token) {
          try {
            await testGithubToken(gh_token);
            console.log(
              "========= testGithubToken in extend page-ctx entry-hattip ==========",
              gh_token,
            );
            pageContext.queryClient.setQueryData("gh_token", gh_token);
          } catch (error) {
            pageContext.queryClient.setQueryData("gh_token", null);
          }
        }
      },

      wrapApp(app) {
        return app;
      },
    };
  },
});
