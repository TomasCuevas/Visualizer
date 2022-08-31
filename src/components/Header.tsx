import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-30 flex h-[60px] w-full items-center gap-5 bg-background px-[10px] xl:h-[70px]">
      <Link
        onClick={() => window.scrollTo(0, 0)}
        to="/"
        className="mx-auto w-full max-w-[1300px]"
      >
        <div className="w-full">
          <img
            alt="logo"
            className="h-[40px] w-[40px]"
            src="/public/visualizer.svg"
          />
        </div>
      </Link>
    </header>
  );
};
