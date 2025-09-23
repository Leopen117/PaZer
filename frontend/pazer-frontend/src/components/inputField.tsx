// InputField.tsx
type InputFieldProps = {
  label: string;
  name: string;
  value: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  readonly?:boolean
};

export function InputField({ label, name, value, onChange, type = "text", readonly = false }: InputFieldProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="form-control border rounded p-2 w-full"
        value={value}
        onChange={onChange}
        readOnly={readonly}
      />
    </div>
  );
}
