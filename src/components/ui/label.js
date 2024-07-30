export function Label({ htmlFor, children }) {
    return (
      <label htmlFor={htmlFor} className="block mb-2 font-bold">
        {children}
      </label>
    );
  }
  