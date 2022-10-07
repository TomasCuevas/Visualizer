import NextLink from "next/link";

//* components *//
import { FormSearch } from "./";

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 flex h-[60px] w-full items-center gap-5 bg-background px-[5%] xl:h-[70px]">
      <nav className="mx-auto flex w-full max-w-[1300px] items-center gap-5">
        <NextLink href="/" passHref>
          <div className="cursor-pointer">
            <img
              alt="logo"
              className="h-[40px] w-[40px]"
              src="/visualizer.svg"
            />
          </div>
        </NextLink>
        <FormSearch />
      </nav>
    </header>
  );
};
