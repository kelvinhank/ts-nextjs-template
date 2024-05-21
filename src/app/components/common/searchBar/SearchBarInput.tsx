import classNames from 'classnames';
import type { ChangeEvent, FormEvent } from 'react';
import React from 'react';
interface Props {
  onChange: (value: string) => void;
  onClose?: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onFocus?: () => void;
  onHide?: () => void;
  value: string;
  placeholder: string;
  className: string;
}

const SearchBarInput = ({
  onChange,
  onSubmit,
  onFocus,
  onClose,
  value,
  placeholder,
  className,
}: Props) => {
  const handleChange = React.useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    },
    [onChange]
  );
  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder={placeholder}
        className={classNames(className, 'text-smoke-gray !h-12 !text-xs ')}
        onChange={handleChange}
        value={value}
        onFocus={onFocus}
      />
    </form>
  );
};

export default React.memo(SearchBarInput);
