import NextLink from "next/link";

//* components *//
import { FormSearch } from "./";

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 flex h-[50px] w-full items-center gap-5 bg-background px-[5%] lg:h-[60px]">
      <section className="flex w-full items-center gap-5">
        <NextLink href="/" passHref>
          <a>
            <div className="cursor-pointer">
              <img
                alt="logo"
                className="h-[40px] w-[40px]"
                src="/visualizer.svg"
              />
            </div>
          </a>
        </NextLink>
        <FormSearch />
      </section>
    </header>
  );
};
