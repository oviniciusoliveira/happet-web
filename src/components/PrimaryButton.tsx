import React, { ButtonHTMLAttributes } from "react";

import { ButtonStyled } from "./../styles/components/primaryButton";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function PrimaryButton({
  children,
  ...props
}: PrimaryButtonProps) {
  return (
    <ButtonStyled className="primary-button" {...props}>
      {children}
    </ButtonStyled>
  );
}
