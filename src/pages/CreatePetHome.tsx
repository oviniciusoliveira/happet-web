import React, { useState, FormEvent, ChangeEvent } from "react";

import Sidebar from "./../components/Sidebar";

import { FiPlus } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import mapIcon from "./../utils/mapIcon";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import PrimaryButton from "./../components/PrimaryButton";
import api from "../services/api";
import { useHistory } from "react-router-dom";
import { InputBlock } from "./../styles/global";
import { toast } from "react-toastify";

import {
  Container,
  Main,
  Form,
  Fieldset,
  ButtonSelect,
  ImagesContainer,
  ImagePreview,
} from "./../styles/pages/createPetHome";

interface Image {
  url: string;
  name: string;
}

export default function PetHomesMap() {
  const history = useHistory();
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [instructions, setInstructions] = useState("");
  const [opening_hours, setOpeningHours] = useState("");
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [whatsapp, setWhatsapp] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<Image[]>([]);

  function MyComponent() {
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

    const { latitude, longitude } = position;

    const data = new FormData();

    data.append("name", name);
    data.append("about", about);
    data.append("latitude", String(latitude));
    data.append("longitude", String(longitude));
    data.append("instructions", instructions);
    data.append("opening_hours", opening_hours);
    data.append("open_on_weekends", String(open_on_weekends));
    data.append("whatsapp", String(whatsapp));
    images.forEach((image) => {
      data.append("images", image);
    });

    try {
      await api.post("pet-homes", data);
      toast.success("Pet Home criado com Sucesso!");
      history.push("/app");
    } catch (error) {
      toast.error("Não foi possível criar seu Pet Home, verifique os Campos!");
    }
  }

  return (
    <Container>
      <Sidebar />
      <Main>
        <Form onSubmit={handleSubmit} className="create-petHome-form">
          <Fieldset>
            <legend>Dados</legend>

            <MapContainer
              center={[-23.5653115, -46.6411145]}
              zoom={15}
              style={{ width: "100%", height: 280 }}
            >
              <MyComponent />
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </MapContainer>

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
                    <ImagePreview key={image.name}>
                      <button onClick={() => handleRemoveImages(image)}>
                        <ImCross size={20} />
                      </button>
                      <img src={image.url} alt={name} />
                    </ImagePreview>
                  );
                })}
                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
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
                onChange={(event) => {
                  setWhatsapp(event.target.value);
                }}
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

          <PrimaryButton type="submit">Confirmar</PrimaryButton>
        </Form>
      </Main>
    </Container>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
