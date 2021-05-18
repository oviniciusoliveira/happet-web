import styled from "styled-components";
import LogoSVG from "./../../images/logo";

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  cursor: pointer;

  strong {
    font-size: 48px;
  }
`;

export const LogoImg = styled(LogoSVG)`
  width: 80px;
  height: 80px;
`;
