import { useEffect, useState } from "react";

//* icons *//
import { BsSearch } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";

export const FormSearch = () => {
  const [toSearch, setToSearch] = useState<string>("");
  const navigate = useNavigate();
  const { search } = useParams();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/search/${toSearch}`);
  };

  useEffect(() => {
    if (search) setToSearch(search);
  }, [search]);

  return (
    <form
      onSubmit={onSubmit}
      className="flex h-[40px] w-full items-center gap-3 rounded-full bg-decoratelight px-5"
      autoComplete="off"
    >
      <BsSearch className="h-5 w-5 text-darklighttext" />
      <input
        type="text"
        name="search"
        value={toSearch}
        onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
          setToSearch(target.value)
        }
        className="w-full  border-none bg-[#0000] outline-none"
      />
    </form>
  );
};
