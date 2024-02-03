import { PageContext, RequestContext } from "rakkasjs";
import { Auth } from "@auth/core";
import type { Provider } from "@auth/core/providers";
import GitHubProvider from "@auth/core/providers/github";
export async function authjsMiddleware(ctx: RequestContext) {
    if (!ctx.url.pathname.match(/^\/auth(\/|$)/)) {
        return;
    }

    const { SERVER_SECRET, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;
    console.log({ SERVER_SECRET, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET });

    if (!SERVER_SECRET) {
        throw new Error(
            "SERVER_SECRET environment variable is not set. " +
            "You can generate one with 'npm run gen-secret' and put it in a .env file in the root of the project.",
        );
    }

    const providers: Provider[] = [];

    if (GITHUB_CLIENT_ID && GITHUB_CLIENT_SECRET) {
        providers.push(
            GitHubProvider({
                clientId: GITHUB_CLIENT_ID,
                clientSecret: GITHUB_CLIENT_SECRET,
                authorization: {
                    params: {
                        scope: "user  delete_repo",
                    },
                },
            }) as any,
        );
    } else {
        console.warn("GitHub client ID and secret not set, GitHub login disabled");
    }

    if (providers.length === 0) {
        throw new Error(
            "No authentication providers configured. " +
            "Set GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET . " +
            "You can put them in a .env file in the root of the project.",
        );
    }

    return Auth(
        new Request(ctx.url, {
            method: ctx.method,
            headers: ctx.request.headers,
            body: ctx.request.body,

            // @ts-expect-error: Node's fetch now requires this but types haven't been updated yet
            duplex: "half",
        }),
        {
            trustHost: true,
            secret: SERVER_SECRET,
            providers,
        },
    ) as Promise<Response>;
}

export async function extendauthjsPageContext(requestContext:RequestContext,pageContext:PageContext) {
    const request = pageContext.requestContext?.request;
    if (!request) return;
    const [session, csrf] = await Promise.all([
        requestContext.fetch("/auth/session").then((r) => r.json()),
        requestContext.fetch("/auth/csrf").then((r) => r.json()),
    ]);

    pageContext.queryClient.setQueryData("auth:session", session);
    pageContext.queryClient.setQueryData("auth:csrf", csrf);
}
