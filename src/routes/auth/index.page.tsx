import { PageProps } from "rakkasjs"
import { GithubLoginButton } from "./components/GithubLoginButton"
export default function Page({}:PageProps) {
return (
<div className="w-full h-full min-h-screen flex items-center justify-center">
<GithubLoginButton/>
</div>
)}
