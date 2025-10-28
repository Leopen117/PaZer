// InputField.tsx
type InputFieldProps = {
  label: string;
  name: string;
  value: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  readonly?: boolean;
};

export function InputField({
  label,
  name,
  value,
  onChange,
  type = "text",
  readonly = false,
}: InputFieldProps) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        readOnly={readonly}
      />
    </>
  );
}
