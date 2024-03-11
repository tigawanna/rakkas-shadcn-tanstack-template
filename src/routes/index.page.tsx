import { Button } from "@/components/shadcn/ui/button";
import { Home } from "lucide-react";
import { PageProps} from "rakkasjs";
import { toast } from "sonner";


export default function HomePage({}: PageProps) {
return (
  <main className="flex items-center justify-center w-full max-h-screen h-full gap-3">
    <h2 className="text-3xl font-bold">Rakkasjs shadcn template</h2>
    <Button
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },

          icon: <Home className="" />,
          position:"top-left",
        })
      }
    >
      Show Toast
    </Button>
  </main>
);
}
