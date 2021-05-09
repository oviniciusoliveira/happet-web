import { useEffect, useState } from "react";
import api from "../services/api";
import { Container, Main, PetHomesContainer } from "./../styles/pages/dashboard";
import { DashboardHeader } from "./../styles/components/dashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";
import PetHomeItem from "../components/PetHomeItem";

function AcceptedPetHomes() {
  const [acceptedPetHomes, setAcceptedPetHomes] = useState([]);

  useEffect(() => {
    async function getPetHomes() {
      const { data } = await api.get("/pet-homes");
      setAcceptedPetHomes(data.filter((petHome: any) => petHome.is_accepted));
    }
    getPetHomes();
  }, []);

  return (
    <Container>
      <DashboardSidebar />
      <Main>
        <DashboardHeader>
          <h2>Pet Homes Cadastrados</h2>
          <p>{`${acceptedPetHomes.length}`} Pet Homes</p>
        </DashboardHeader>
        <PetHomesContainer>
          {acceptedPetHomes.map((petHome: any) => (
            <PetHomeItem key={petHome.id} petHome={petHome} />
          ))}
        </PetHomesContainer>
      </Main>
    </Container>
  );
}

export default AcceptedPetHomes;
