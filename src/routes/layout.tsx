import { LayoutProps } from "rakkasjs";
import ErrorBoundaryComponent from "@/components/wrappers/ErrorBoundaryComponent";
import "./index.css";

function Layout({ children }: LayoutProps) {
  return (
    <ErrorBoundaryComponent>
      <div className="min-h-screen h-full w-full bg-base-200  flex justify-center items-center">
        {children}
      </div>
    </ErrorBoundaryComponent>
  );
}

export default Layout;
