
import { createRequestHandler } from "rakkasjs/server";
import { cookie } from "@hattip/cookie";

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

      },

      wrapApp(app) {
        return app;
      },
    };
  },
});
