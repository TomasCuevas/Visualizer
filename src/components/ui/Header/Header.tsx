//* HEROUI *//
import { Image, Link } from "@heroui/react";

//* COMPONENT *//
import { FormSearch } from "@/components";

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 flex h-[60px] w-full items-center gap-5 bg-background px-[5%] lg:h-[70px]">
      <section className="flex w-full items-center gap-5">
        <Link href="/">
          <Image
            src="/visualizer.svg"
            alt="logo"
            className="h-[40px] w-[40px] cursor-pointer !rounded-none"
          />
        </Link>

        <FormSearch />
      </section>
    </header>
  );
};
