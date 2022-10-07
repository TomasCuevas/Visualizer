import { useRouter } from "next/router";
import { useState, FormEvent } from "react";

//* icons *//
import { BsSearch } from "react-icons/bs";

export const FormSearch: React.FC = () => {
  const router = useRouter();
  const [toSearch, setToSearch] = useState<string>("");

  const onSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    router.push(`/search?search=${toSearch}`);
  };

  return (
    <form
      className="flex h-[40px] w-full items-center gap-3 rounded-full bg-decoratelight px-5"
      autoComplete="off"
      onSubmit={onSearch}
    >
      <BsSearch className="h-5 w-5 text-darklighttext" />
      <input
        type="text"
        name="search"
        value={toSearch}
        onChange={({ target }) => setToSearch(target.value)}
        className="w-full  border-none bg-[#0000] outline-none"
      />
    </form>
  );
};
