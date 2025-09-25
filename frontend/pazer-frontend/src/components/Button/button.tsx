import React from "react";
import styles from "./button.module.css";
import type { NewRunningUnit } from "../../types/units";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button Variante */
  variant?: "primary";
  /** Button Größe */
  size?: "medium";
  /** Zeigt Loading-Spinner */
  loading?: boolean;
  /** Button nimmt gesamte verfügbare Breite ein */
  fullWidth?: boolean;
  /** Button Inhalt */
  target?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  loading = false,
  fullWidth = false,
  className,
  disabled,
  onClick,
  ...props
}) => {
  // CSS Classes zusammenstellen
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    loading && styles.loading,
    fullWidth && styles.fullWidth,

    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Props für den Button/Link
  const elementProps = {
    className: buttonClasses,
    disabled: disabled || loading,
    onClick: loading ? undefined : onClick,
    ...props,
  };

  // Als Button rendern
  return <button {...elementProps}>Update</button>;
};

export default Button;

// import { createRun } from "../../api/run";
// import type { NewRunningUnit } from "../../types/units";
// import styles from './button.module.css';
// type ButtonProps = {
//   data: NewRunningUnit;
// };

// export function Button({ data }: ButtonProps) {
//   function buttonOnClickEvent() {
//     createRun(data);

//     // km,h und pace sollen in die Datenbank geschrieben werden
//     //warten auf Endpunkte
//     // Stockchart soll reloaded werden
//     // neuer Eintrag in der Historytabelle
//   }

//   return (
//     <>
//       <div className="button">
//         <button type="submit" onClick={buttonOnClickEvent}>
//           Update
//         </button>
//       </div>
//     </>
//   );
// }
