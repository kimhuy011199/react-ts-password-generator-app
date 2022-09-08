import React from 'react';

const Checkbox = React.forwardRef((props: any, ref) => {
  const { name, label, onChange } = props;

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        name={name}
        id={name}
        value={name}
        onChange={onChange}
        className="mr-3 h-5 w-5 cursor-pointer appearance-none border-2 border-gray1 bg-gray3 checked:border-green checked:bg-green checked:after:block checked:after:h-4 checked:after:w-4 checked:after:bg-check"
      />
      <label htmlFor={name} className="cursor-pointer">
        {label}
      </label>
    </div>
  );
});

export default Checkbox;
