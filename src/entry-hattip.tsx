import { RequestContext } from "rakkasjs";
import { createRequestHandler } from "rakkasjs/server";
import { cookie } from "@hattip/cookie";


export async function beforePageLuciaMiddleware(ctx: RequestContext<unknown>) {}

export default createRequestHandler({
  middleware: {
    beforePages: [
      cookie(),
 
    ],
    beforeApiRoutes: [],
    beforeNotFound: [],
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

      async extendPageContext(ctx) {
        const request = ctx.requestContext?.request;
        if (!request) return;
      },

      wrapApp(app) {
        return (
          app
        );
      },


    };
  },
});
