export function RadioGroup({ id, defaultValue, children, className }) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }
  
  export function RadioGroupItem({ id, value }) {
    return (
      <input type="radio" id={id} name="color" value={value} className="hidden" />
    );
  }
  