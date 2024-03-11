"use client";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: `group h-fit toast group-[.toaster]:bg-base-100 group-[.toaster]:glass p-2 px-3
             rounded-lg  group-[.toaster]:text-foreground 
            group-[.toaster]:border-border group-[.toaster]:shadow-lg`,
          title: "group-[.toast]:text-foreground text-xl font-bold ",
          description: "group-[.toast]:text-muted-foreground text-sm ",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-content",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
