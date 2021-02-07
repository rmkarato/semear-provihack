import React, { useState } from "react";
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

import gotaBlueImg from "../../assets/images/gotaBlue.svg";
import brotoImg from "../../assets/images/brotoG.svg";
import profile1 from "../../assets/images/profile1.svg";

import {
  ButtonModal,
  CardContainer,
  CardWrapper,
  ImageMini,
  TextName,
  TextAge,
  Category,
  TextCategory1,
  HelpContainer,
  HelpWrapper,
  TextNumber,
  TextHelp,
  ImgRating,
  GroupWrapper,
  Container
} from "./styled";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function ModalProfile() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <CardContainer>
        <CardWrapper/>
          <ImageMini src={profile1} alt="Photo"/>
          <Container>
            <TextName>Lu Correia</TextName>
            <GroupWrapper>
              <TextAge>28 anos</TextAge> 
              <ImgRating>
                  <img src={gotaBlueImg} alt="Gota" />
                  <img src={gotaBlueImg} alt="Gota" />
                  <img src={gotaBlueImg} alt="Gota" />
                  <img src={gotaBlueImg} alt="Gota" />
                  <img src={gotaBlueImg} alt="Gota" />
              </ImgRating>
            </GroupWrapper>

            <Category>
              <img src={brotoImg} alt="Broto" />
              <TextCategory1>Produto</TextCategory1>
            </Category>

            <HelpContainer>
              <HelpWrapper>
                <TextNumber>10</TextNumber><TextHelp>Ajudas Concedidas</TextHelp>
              </HelpWrapper>

              <HelpWrapper>
                <TextNumber>04</TextNumber><TextHelp>Ajudas Recebidas</TextHelp>
              </HelpWrapper>
            </HelpContainer>
          </Container>
      </CardContainer>
    </div>
  );

    return (
      <div>
      <ButtonModal type="button" onClick={handleOpen}>
        Ver Perfil
      </ButtonModal>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
    );
};

export default ModalProfile;