import React, { useEffect, useState } from "react";
import { Container, ContentWrapper, Main, ImageDiv } from "./../styles/pages/deletePetHome";
import deletePetHomeImage from "./../images/delete-pet-home.svg";
import api from "../services/api";
import { useHistory, useParams } from "react-router";
import { PetHomeParams } from "./PetHome";
import { PetHomeInterface } from "./PetHome";
import { FiTrash } from "react-icons/fi";
import { toast } from "react-toastify";
import Loading from './../components/Loading';

function DeletePetHome() {
  const params = useParams<PetHomeParams>();
  const history = useHistory();
  const [petHome, setPetHome] = useState({} as PetHomeInterface);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadPetHome() {
      setLoading(true);
      const { data } = await api.get(`/pet-homes/${params.id}`);
      setLoading(false);
      setPetHome(data);
    }
    loadPetHome();
  }, [params.id]);

  const handlePetHomeDelete = async () => {
    setLoading(true);
    try {
      await api.delete(`pet-homes/${params.id}`);
      setLoading(false);
      toast.success("Pet Home Excluido");
      history.push("/");
    } catch (error) {
      setLoading(false);
      toast.error("Não foi possível excluir o Pet Home");
      history.push("/");
    }
  };

  return (
    <Container>
      {loading && <Loading />}
      <ContentWrapper>
        <Main>
          <h1>Excluir!</h1>
          <p>Você tem certeza que quer excluir o Pet Home {petHome.name}?</p>
          <div className="buttons">
            <button onClick={() => history.push("/")}>
              Voltar para o Mapa
            </button>
            <button onClick={handlePetHomeDelete}>
              <FiTrash />
              Excluir Pet Home
            </button>
          </div>
        </Main>
        <ImageDiv>
          <img src={deletePetHomeImage} alt="Delete Pet Home" />
        </ImageDiv>
      </ContentWrapper>
    </Container>
  );
}

export default DeletePetHome;
