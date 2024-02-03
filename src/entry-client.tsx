/* eslint-disable no-var */
import { startClient } from "rakkasjs/client";
startClient({
  hooks: {
    wrapApp(app) {
      return (
app
      );
    },
    beforeStart() {
      // Do something before starting the client
    },
    extendPageContext(ctx) {
      // console.log("============= CLIENT SIDE PB  ==============",ctx.locals.pb)

    },
  },
});
