import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router";
import { Container } from "./../styles/components/goBack";

interface IGoBack {
  route: string;
}

function GoBack({ route }: IGoBack) {
  const history = useHistory();
  return (
    <Container onClick={() => history.push(`${route}`)}>
      <FiArrowLeft size={24} />
    </Container>
  );
}

export default GoBack;
