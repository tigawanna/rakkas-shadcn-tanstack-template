import { Head, LayoutProps } from "rakkasjs";
import ErrorBoundaryComponent from "@/components/wrappers/ErrorBoundaryComponent";
import "./index.css";
import {useEffect } from "react";

function Layout({ children }: LayoutProps) {

useEffect(()=>{
  document.documentElement.setAttribute("data-theme", `deez-nuts`);
},[])
  return (
    <ErrorBoundaryComponent>
      <div className="flex h-full w-full  flex-col items-center justify-center bg-base-200 ">
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


