import { Link } from "react-router-dom";

//* components *//
import { FormSearch } from "./";

export const Header = () => {
  return (
    <header className="sticky top-0 z-30 flex h-[60px] w-full items-center gap-5 bg-background px-[10px] xl:h-[70px]">
      <nav className="mx-auto flex w-full max-w-[1300px] items-center gap-5">
        <Link onClick={() => window.scrollTo(0, 0)} to="/">
          <div className="w-full">
            <img
              alt="logo"
              className="h-[40px] w-[40px]"
              src="/public/visualizer.svg"
            />
          </div>
        </Link>
        <FormSearch />
      </nav>
    </header>
  );
};
