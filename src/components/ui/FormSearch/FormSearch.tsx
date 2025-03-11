import { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/router";

//* HEROUI *//
import { Button, Input } from "@heroui/react";

//* ICONS *//
import { BsSearch } from "react-icons/bs";

export const FormSearch: React.FC = () => {
  const router = useRouter();
  const [toSearch, setToSearch] = useState<string>("");

  const onSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (toSearch.length > 1)
      router.push(`/search/${toSearch}`, undefined, { scroll: false });
  };

  useEffect(() => {
    if (router.pathname === "/search/[search]") {
      const query = router.asPath.split("/")[2];
      setToSearch(query ? query.replaceAll("%20", " ") : "");
    }
  }, [router]);

  return (
    <form
      className="flex w-full items-center gap-2 rounded-l-xl rounded-r-xl bg-decorate-light"
      autoComplete="off"
      onSubmit={onSearch}
    >
      <Button
        type="submit"
        className="ml-4 !size-9 min-h-0 min-w-0 rounded-full !bg-white !p-1"
      >
        <BsSearch className="h-5 w-5 text-dark-light-text" />
      </Button>

      <Input
        type="text"
        name="search"
        value={toSearch}
        placeholder="Busca gratis fotos de alta resolución"
        onChange={({ target }) => setToSearch(target.value)}
        className="hidden w-full sm:flex"
        size="md"
        classNames={{
          inputWrapper:
            "bg-white rounded-none border-l-2 border-gray-200 rounded-r-xl",
        }}
      />

      <Input
        type="text"
        name="search"
        size="sm"
        value={toSearch}
        placeholder="Busca fotos"
        onChange={({ target }) => setToSearch(target.value)}
        className="flex w-full sm:hidden"
        classNames={{ inputWrapper: "!bg-white" }}
      />
    </form>
  );
};
