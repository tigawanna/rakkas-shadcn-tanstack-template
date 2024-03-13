import { Head, LayoutProps } from "rakkasjs";
import ErrorBoundaryComponent from "@/components/wrappers/ErrorBoundaryComponent";
import "./index.css";

function Layout({ children }: LayoutProps) {
  return (
    <ErrorBoundaryComponent>
      <div className="h-full w-full bg-base-200  flex flex-col justify-center items-center ">
        <Head
          title="Applicate"
          description="Job application process made easier"
        />
        {children}
      </div>
    </ErrorBoundaryComponent>
  );
}

export default Layout;
