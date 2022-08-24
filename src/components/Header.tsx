import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex h-[80px] w-screen items-center gap-5 bg-background px-[5%]">
      <Link to="/">
        <span>
          <img
            alt="logo"
            className="h-[40px] w-[40px]"
            src="/public/visualizer.svg"
          />
        </span>
      </Link>
    </header>
  );
};
