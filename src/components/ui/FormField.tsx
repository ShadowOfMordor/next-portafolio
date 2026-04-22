import type { ChangeEventHandler, FocusEventHandler } from "react";

type FormFieldProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  placeholder: string;
  required?: boolean;
  error?: string;
  touched?: boolean;
  type?: "text" | "email";
  rows?: number;
  as?: "input" | "textarea";
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onBlur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

export function FormField({
  id,
  name,
  label,
  value,
  placeholder,
  required = false,
  error = "",
  touched = false,
  type = "text",
  rows = 6,
  as = "input",
  onChange,
  onBlur,
}: FormFieldProps) {
  const hasError = touched && Boolean(error);
  const describedBy = hasError ? `${id}-error` : undefined;
  const className = `rounded-xl border bg-white/80 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-white/30 dark:focus:ring-white/20 ${
    hasError ? "border-red-500 dark:border-red-400" : "border-black/10"
  }`;

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-sm font-semibold text-slate-700 dark:text-slate-300"
      >
        {label}
      </label>

      {as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          required={required}
          rows={rows}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={hasError}
          aria-describedby={describedBy}
          className={className}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={hasError}
          aria-describedby={describedBy}
          className={className}
        />
      )}

      {hasError ? (
        <p id={`${id}-error`} className="text-xs text-red-600 dark:text-red-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}
