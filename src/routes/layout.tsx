import {
  ClientSuspense,
  LayoutProps,
  PreloadContext,
  useLocation,
} from "rakkasjs";
import Nprogress from "@/components/navigation/nprogress/Nprogress";
import "./index.css";
import { Sidebar } from "@/components/navigation/bars/sidebar";
import Toaster from "@/components/wrappers/DefaltExportedToaster";
import ErrorBoundaryComponent from "@/components/navigation/ErrorBoundaryComponent";
import BreadCrumbs from "@/components/navigation/BreadCrumbs";

function Layout({ children }: LayoutProps) {
  const location = useLocation();

  // console.log(" page ctx ==== ",page_ctx.locals.pb)
  return (
    <ErrorBoundaryComponent>
      <div className="w-full h-screen  overflow-y-hidden  flex flex-col items-center ">
        {/* <Head description={"Resume building assistant"} /> */}
        <ClientSuspense fallback={null}>
          <Nprogress
            isAnimating={location && location?.pending ? true : false}
          />
        </ClientSuspense>
        <div className="w-full flex  gap-3">
          <div className="min-w-[5%] w-fit flex h-screen gap-2">
            <Sidebar />
          </div>
          <div className="w-full    flex flex-col  gap-2 ">
            <div className="w-fit flex rounded-xl">
              <ClientSuspense fallback={null}>
                <BreadCrumbs />
              </ClientSuspense>
            </div>
            <div className="w-full  h-[95vh] md:pl-6 px-1 flex flex-col overflow-y-auto gap-2 ">
              <ErrorBoundaryComponent>{children}</ErrorBoundaryComponent>
            </div>
          </div>
        </div>
        <ClientSuspense fallback={null}>
          <Toaster />
        </ClientSuspense>
      </div>
    </ErrorBoundaryComponent>
  );
}

Layout.preload = (ctx: PreloadContext) => {
  const redirect_to = ctx.queryClient.getQueryData("return_to");
  if (!(redirect_to == null)) {
    const new_url = new URL(ctx.url);
    new_url.pathname = redirect_to;
    ctx.queryClient.setQueryData("return_to", null);
    return {
      redirect: {
        href: new_url.toString(),
      },
    };
  }

  return {
    head: {
      title: "RakkasJs template",
      description: " Drakkas js template including Rakkasjs and Shadcn UI",
    },
  };
};

export default Layout;
