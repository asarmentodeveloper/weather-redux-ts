import Icon from "react-icons-kit";
import { search } from "react-icons-kit/feather/search";

interface InputSearchProps {
  value: string;
  required?: boolean;
  isFetching: boolean;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const InputSearch = ({
  value,
  required,
  isFetching,
  onChange,
  placeholder,
}: InputSearchProps) => {
  return (
    <label>
      <Icon icon={search} size={20} />
      <input
        type="text"
        placeholder={placeholder}
        required={!!required}
        value={value}
        onChange={onChange}
        readOnly={isFetching}
      />
    </label>
  );
};
