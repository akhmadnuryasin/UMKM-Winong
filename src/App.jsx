import React, { useState } from "react";
import modalData from "./data/modalData";
import {
  Avatar,
  Modal,
  Button,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import ButtonCta from "./ButtonCta";
import ModalContentComponent from "./ModalContent";

function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalContent, setModalContent] = useState("default");

  const openModal = (content) => {
    setModalContent(content);
    onOpen();
  };

  return (
    <div className="h-[100vh] p-6 flex justify-center items-center w-full">
      <div className="mx-auto w-96 bg-white text-center flex justify-center items-center flex-col">
        <Avatar src="/Logo.png" className="w-20 h-20 text-large mb-4" />
        <h1 className="font-semibold">WINONG TOUR</h1>
        <h2 className="mt-1 mb-3 text-tiny">
          Halo! Klik link dibawah untuk info selengkapnya
        </h2>
        <div className="my-4 flex w-full justify-center">
          <a
            href="https://drive.google.com/file/d/1czQwv-ntEN_s8Yc8EP3W9gwWM-LT4z4T/view?usp=drivesdk"
            className="mx-2"
          >
            <img src="/Wa.svg" alt="Whatsapp" className="w-10" />
          </a>
          <a href="https://example.com/share" className="mx-2">
            <img src="/Share.svg" alt="Share" className="w-10" />
          </a>
        </div>
        <div className="w-full text-white">
          <ButtonCta
            label="Tentang Kami"
            content="content1"
            onClick={openModal}
          />
          <ButtonCta
            label="Paket Gedung"
            content="content2"
            onClick={openModal}
          />
          <ButtonCta
            label="Paket Tubing"
            content="content3"
            onClick={openModal}
          />
          <ButtonCta
            label="Paket Cooking"
            content="content4"
            onClick={openModal}
          />
          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="center"
            backdrop="blur"
            className="mx-6"
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    {modalData[modalContent] && (
                      <p className="text-center">
                        {modalData[modalContent].title}
                      </p>
                    )}
                  </ModalHeader>
                  <ModalBody className="p-0 px-5">
                    {modalData[modalContent] && (
                      <ModalContentComponent
                        images={modalData[modalContent].images}
                      />
                    )}
                  </ModalBody>
                  <ModalFooter className="flex justify-center">
                    <Button color="slate" variant="light" onPress={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
        <div>
          <div className="p-2 rounded-lg w-full mt-9">
            Made By Team
            {/* <a
              href="https://www.instagram.com/kpm36_winong?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
            ></a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
