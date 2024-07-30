import { useState } from 'react';

export function Select({ id, defaultValue, children }) {
  const [value, setValue] = useState(defaultValue);

  return (
    <div>
      <select id={id} value={value} onChange={(e) => setValue(e.target.value)} className="w-full p-2 border rounded">
        {children}
      </select>
    </div>
  );
}

export function SelectTrigger({ children, className }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export function SelectValue({ placeholder }) {
  return (
    <option value="" disabled>
      {placeholder}
    </option>
  );
}

export function SelectContent({ children }) {
  return <>{children}</>;
}

export function SelectItem({ value, children }) {
  return (
    <option value={value}>
      {children}
    </option>
  );
}
