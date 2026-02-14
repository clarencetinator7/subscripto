import { LuGithub } from "react-icons/lu";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between">
      <h1 className="text-3xl font-extrabold mb-5 text-primary">Subscripto</h1>
      <Button
        variant="link"
        className="flex flex-row gap-1 cursor-pointer"
        onClick={() =>
          window.open("https://github.com/clarencetinator7", "_blank")
        }
      >
        <LuGithub className="text-lg" />
        clarencetinator7
      </Button>
    </header>
  );
}
