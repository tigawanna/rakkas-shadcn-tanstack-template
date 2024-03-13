import { PageProps, useQuery, useSSQ } from "rakkasjs";
import { RestliClient } from "linkedin-api-client";
export default function TestPage({}: PageProps) {
  const query = useSSQ(async () => {
    const restliClient = new RestliClient();
   const res = await restliClient.get({
      resourcePath: "/me",
      accessToken: "",
    });
  });
  return (
    <div className="w-full h-full  flex flex-col items-center justify-center">
      New Page
    </div>
  );
}
