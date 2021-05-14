import { useState, FormEvent, ChangeEvent, useEffect, useContext } from "react";

import Sidebar from "./../components/Sidebar";

import { FiPlus, FiCheck } from "react-icons/fi";
import { ImCross, ImCancelCircle } from "react-icons/im";
import { mapIconLight, mapIconDark } from "./../utils/mapIcon";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import PrimaryButton from "./../components/PrimaryButton";
import api from "../services/api";
import { useHistory, useParams } from "react-router-dom";
import { InputBlock } from "./../styles/global";
import { PetHomeParams } from "./PetHome";
import { toast } from "react-toastify";

import { useDashboard } from "./../contexts/dashboard";

import Loading from './../components/Loading';


import {
  Container,
  Main,
  Form,
  Fieldset,
  ButtonSelect,
  ImagesContainer,
  ImagePreview,
} from "./../styles/pages/createPetHome";

import { AcceptContainer } from "./../styles/pages/editPetHome";
import { ThemeContext } from "styled-components";

interface Image {
  url: string;
  name: string;
}

export default function EditPetHome() {
  const history = useHistory();
  const params = useParams<PetHomeParams>();
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [instructions, setInstructions] = useState("");
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [opening_hours, setOpeningHours] = useState("");
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<Image[]>([]);
  const [whatsapp, setWhatsapp] = useState("");
  const [is_accepted, setIsAccepted] = useState(false);
  const [removeImage, setRemoveImage] = useState<any>([]);
  const { setPage } = useDashboard();
  const { title } = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    async function loadPetHome() {
      setLoading(true);
      const { data: petHome } = await api.get(`/pet-homes/${params.id}`);
      
      setId(petHome.id);
      setName(petHome.name);
      setAbout(petHome.about);
      setInstructions(petHome.instructions);
      setPosition({ latitude: petHome.latitude, longitude: petHome.longitude });
      setOpeningHours(petHome.opening_hours);
      setOpenOnWeekends(petHome.open_on_weekends);
      setImages(petHome.images);
      setPreviewImages(petHome.images);
      setWhatsapp(petHome.whatsapp);
      setIsAccepted(petHome.is_accepted);
      setLoading(false);
    }
    loadPetHome();
  }, [params.id]);

  async function handleReject() {
    setLoading(true);
    try {
      const response = await api.delete(`/pet-homes/${params.id}`);
      setLoading(false);
      toast.success(response);
      history.push("/pending-pet-homes");
      setPage("pending-pet-homes");
    } catch (error) {
      setLoading(false);
      toast.error("Erro ao Rejeitar o Pedido!");
    }
  }

  function MapClickComponent() {
    useMapEvents({
      click: (event) => {
        const { lat, lng } = event.latlng;
        setPosition({ latitude: lat, longitude: lng });
      },
    });
    return null;
  }

  function handleRemoveImages(image: any) {
    const newImages = images.filter(
      (savedImage) => savedImage.name !== image.name
    );
    const newPreviewImages = previewImages.filter(
      (previewImage) => previewImage.url !== image.url
    );
    setPreviewImages(newPreviewImages);
    setImages(newImages);
    setRemoveImage((prevImages: any) => [...prevImages, image]);
  }

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;

    const selectedImages = Array.from(event.target.files);
    setImages([...images, ...selectedImages]);

    const selectedImagesPreview = selectedImages.map((image) => {
      return { url: URL.createObjectURL(image), name: image.name };
    });

    setPreviewImages([...previewImages, ...selectedImagesPreview]);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    try {
      const { latitude, longitude } = position;

      const data = new FormData();

      data.append("id", String(id));
      data.append("name", name);
      data.append("about", about);
      data.append("latitude", String(latitude));
      data.append("longitude", String(longitude));
      data.append("instructions", instructions);
      data.append("opening_hours", opening_hours);
      data.append("open_on_weekends", String(open_on_weekends));
      data.append("whatsapp", whatsapp);
      data.append("is_accepted", String(true));
      images.forEach((image) => {
        data.append("images", image);
      });
      removeImage.forEach((image: any) => {
        data.append("id_images_remove", image.id);
      });

      await api.put("pet-homes", data);
      setLoading(false);
      toast.success("Pet Home Cadastrado");
      history.push("/accepted-pet-homes");
      setPage("accepted-pet-homes");
    } catch (error) {
      setLoading(false);
      toast.error("Não foi possível cadastrar o Pet Home!");
    }
  }

  return (
    <Container>
      {loading && <Loading />}
      <Sidebar />
      <Main>
        <Form onSubmit={handleSubmit}>
          <Fieldset>
            <legend>Dados</legend>
            {position.latitude !== 0 && position.longitude !== 0 && (
              <MapContainer
                zoom={15}
                style={{ width: "100%", height: 280 }}
                center={[position.latitude, position.longitude]}
              >
                <MapClickComponent />
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/${title}-v10/tiles/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

                {position.latitude !== 0 && position.longitude && (
                  <Marker
                    interactive={false}
                    icon={title === "light" ? mapIconLight : mapIconDark}
                    position={[position.latitude, position.longitude]}
                  />
                )}
              </MapContainer>
            )}

            <InputBlock>
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea
                id="name"
                maxLength={300}
                value={about}
                onChange={(event) => {
                  setAbout(event.target.value);
                }}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="images">Fotos</label>

              <ImagesContainer>
                {previewImages.map((image) => {
                  return (
                    <ImagePreview key={image.url}>
                      <img src={image.url} alt={name} />
                      <button onClick={() => handleRemoveImages(image)}>
                        <ImCross size={20} />
                      </button>
                    </ImagePreview>
                  );
                })}
                <label htmlFor="image[]" className="new-image">
                  <FiPlus
                    size={24}
                    color={`${({ theme }: any) => theme.colors.primary}`}
                  />
                </label>
              </ImagesContainer>
              <input
                multiple
                onChange={handleSelectImages}
                type="file"
                id="image[]"
              />
            </InputBlock>
          </Fieldset>

          <Fieldset>
            <legend>Visitação</legend>

            <InputBlock>
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                value={instructions}
                onChange={(event) => {
                  setInstructions(event.target.value);
                }}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="opening_hours">Horário de Funcionamento</label>
              <input
                id="opening_hours"
                value={opening_hours}
                onChange={(event) => {
                  setOpeningHours(event.target.value);
                }}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="whatsapp">Whatsapp</label>
              <input
                id="whatsapp"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <InputBlock>
                <ButtonSelect>
                  <button
                    type="button"
                    className={open_on_weekends ? "active" : ""}
                    onClick={() => setOpenOnWeekends(true)}
                  >
                    Sim
                  </button>
                  <button
                    type="button"
                    className={!open_on_weekends ? "active" : ""}
                    onClick={() => setOpenOnWeekends(false)}
                  >
                    Não
                  </button>
                </ButtonSelect>
              </InputBlock>
            </InputBlock>
          </Fieldset>

          {is_accepted ? (
            <PrimaryButton type="submit">Confirmar</PrimaryButton>
          ) : (
            <AcceptContainer>
              <button
                onClick={handleReject}
                type="button"
                className="reject-button"
              >
                <ImCancelCircle /> Recusar
              </button>
              <button onClick={handleSubmit} type="button">
                <FiCheck /> Aceitar
              </button>
            </AcceptContainer>
          )}
        </Form>
      </Main>
    </Container>
  );
}
