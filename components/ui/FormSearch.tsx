import { useRouter } from "next/router";
import { useState, FormEvent, useEffect } from "react";

//* icons *//
import { BsSearch } from "react-icons/bs";

export const FormSearch: React.FC = () => {
  const router = useRouter();
  const [toSearch, setToSearch] = useState<string>("");

  const onSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (toSearch.length > 1)
      router.push(`/search?search=${toSearch}`, undefined, { scroll: false });
  };

  useEffect(() => {
    if (router.pathname === "/search") {
      const query = router.asPath.split("?")[1].split("=")[1];
      setToSearch(query ? query.replaceAll("%20", " ") : "");
    }
  }, [router]);

  return (
    <form
      className="flex h-[35px] w-full items-center gap-3 rounded-full bg-decoratelight px-5 sm:h-[40px]"
      autoComplete="off"
      onSubmit={onSearch}
    >
      <button type="submit">
        <BsSearch className="h-5 w-5 text-darklighttext" />
      </button>
      <input
        type="text"
        name="search"
        value={toSearch}
        placeholder="Busca gratis fotos de alta resolución"
        onChange={({ target }) => setToSearch(target.value)}
        className="hidden w-full border-none bg-[#0000] outline-none sm:flex"
      />
      <input
        type="text"
        name="search"
        value={toSearch}
        placeholder="Busca fotos"
        onChange={({ target }) => setToSearch(target.value)}
        className="w-full border-none bg-[#0000] outline-none sm:hidden"
      />
    </form>
  );
};
