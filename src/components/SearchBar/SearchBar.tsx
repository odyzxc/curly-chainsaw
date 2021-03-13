import React, { ChangeEvent, FunctionComponent } from "react";
import { SearchBarInput } from "./styled";

type SearchBarProps = {
  onChange: (event: string) => void;
  placeholder?: string;
  disabled?: boolean;
};

const SearchBar: FunctionComponent<SearchBarProps> = ({
  onChange,
  placeholder = "Search...",
  disabled = false,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    onChange(event.target.value);
  };
  return (
    <SearchBarInput
      type="text"
      disabled={disabled}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default SearchBar;
