import React, { useEffect, useState } from "react";
import { Container, Main, ImageDiv } from "./../styles/pages/deletePetHome";
import deletePetHomeImage from "./../images/delete-pet-home.svg";
import api from "../services/api";
import { useHistory, useParams } from "react-router";
import { PetHomeParams } from "./PetHome";
import { PetHomeInterface } from "./PetHome";
import { FiTrash } from "react-icons/fi";
import { toast } from "react-toastify";

function DeletePetHome() {
  const params = useParams<PetHomeParams>();
  const history = useHistory();
  const [petHome, setPetHome] = useState({} as PetHomeInterface);

  useEffect(() => {
    async function loadPetHome() {
      const { data } = await api.get(`/pet-homes/${params.id}`);
      setPetHome(data);
    }
    loadPetHome();
  }, [params.id]);

  const handlePetHomeDelete = async () => {
    try {
      await api.delete(`pet-homes/${params.id}`);
      toast.success("Pet Home Excluido");
      history.push("/");
    } catch (error) {
      toast.error("Não foi possível excluir o Pet Home");
      history.push("/");
    }
  };

  return (
    <Container>
      <Main>
        <h1>Excluir!</h1>
        <p>Você tem certeza que quer excluir {petHome.name}?</p>
        <div className="buttons">
          <button onClick={() => history.push("/")}>Voltar para o Mapa</button>
          <button onClick={handlePetHomeDelete}>
            <FiTrash />
            Excluir Pet Home
          </button>
        </div>
      </Main>
      <ImageDiv>
        <img src={deletePetHomeImage} alt="Delete Pet Home" />
      </ImageDiv>
    </Container>
  );
}

export default DeletePetHome;
