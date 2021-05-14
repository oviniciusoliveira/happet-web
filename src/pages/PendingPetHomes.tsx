import { useEffect, useState } from "react";
import api from "../services/api";
import {
  Container,
  Main,
  PetHomesContainer,
} from "./../styles/pages/dashboard";
import { DashboardHeader } from "./../styles/components/dashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";
import PetHomeItem from "../components/PetHomeItem";
import Loading from './../components/Loading';

function PendingPetHomes() {
  const [pendingPetHomes, setPendingPetHomes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getPetHomes() {
      setLoading(true);
      const { data } = await api.get("/pet-homes");
      setPendingPetHomes(data.filter((petHome: any) => !petHome.is_accepted));
      setLoading(false);
    }
    getPetHomes();
  }, []);

  return (
    <Container>
      {loading && <Loading />}
      <DashboardSidebar />
      <Main>
        <DashboardHeader>
          <h2>Pet Homes Pendentes</h2>
          <p>{`${pendingPetHomes.length}`} Pet Homes</p>
        </DashboardHeader>
        <PetHomesContainer>
          {pendingPetHomes.map((petHome: any) => (
            <PetHomeItem key={petHome.id} petHome={petHome} />
          ))}
        </PetHomesContainer>
      </Main>
    </Container>
  );
}

export default PendingPetHomes;
