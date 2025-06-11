
import React from 'react';

interface InputWithLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  icon?: React.ReactNode;
  actionIcon?: React.ReactNode; // For things like show/hide password
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({ id, label, icon, actionIcon, type = 'text', ...props }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-300 mb-1">
        {label}
      </label>
      <div className="relative rounded-md shadow-sm">
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
            {icon}
          </div>
        )}
        <input
          type={type}
          id={id}
          name={id}
          className={`
            block w-full appearance-none rounded-md border border-slate-600 
            px-3 py-3 ${icon ? 'pl-10' : ''} ${actionIcon ? 'pr-10' : ''} 
            placeholder-slate-500 text-slate-100 bg-slate-700 
            focus:border-sky-500 focus:outline-none focus:ring-sky-500 
            sm:text-sm transition duration-150 ease-in-out
          `}
          {...props}
        />
        {actionIcon && (
           <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            {actionIcon}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputWithLabel;
