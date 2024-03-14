import { Button } from "@/components/shadcn/ui/button";
import { Home } from "lucide-react";
import { PageProps } from "rakkasjs"
import { toast } from "sonner";
export default function Page({}:PageProps) {
return (
  <div className="w-full h-full  flex flex-col items-center justify-center">
    <h2 className="text-3xl font-bold">Rakkasjs shadcn template</h2>
    <div className="h-52 w-[50%] bg-base-100">hello</div>
    <Button
      variant="outline"
      onClick={() => {
        toast.success("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",

          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },

          icon: <Home className="" />,
        });
      }}
    >
      Show Toast
    </Button>
  </div>
);}
