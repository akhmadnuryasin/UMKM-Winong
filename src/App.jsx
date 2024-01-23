import {
  Avatar,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";

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
          <Button
            className="w-full my-1 bg-[#2a3235] text-white"
            onPress={() => openModal("content1")}
          >
            Open Modal 1
          </Button>
          <Button
            className="w-full my-1 bg-[#2a3235] text-white"
            onPress={() => openModal("content2")}
          >
            Open Modal 2
          </Button>
          <Button
            className="w-full my-1 bg-[#2a3235] text-white"
            onPress={() => openModal("content3")}
          >
            Open Modal 3
          </Button>
          <Button
            className="w-full my-1 bg-[#2a3235] text-white"
            onPress={() => openModal("content4")}
          >
            Open Modal 4
          </Button>
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
                    {modalContent === "content1"
                      ? "Modal Title 1"
                      : modalContent === "content2"
                      ? "Modal Title 2"
                      : modalContent === "content3"
                      ? "Modal Title 3"
                      : modalContent === "content4"
                      ? "Modal Title 4"
                      : null}
                  </ModalHeader>
                  <ModalBody>
                    {modalContent === "content1" ? (
                      <p>Content for Modal 1</p>
                    ) : modalContent === "content2" ? (
                      <p>Content for Modal 2</p>
                    ) : modalContent === "content3" ? (
                      <p>Content for Modal 3</p>
                    ) : modalContent === "content4" ? (
                      <p>Content for Modal 4</p>
                    ) : null}
                  </ModalBody>

                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
        <div>
          <div className="p-2 rounded-lg w-full mt-9">Made By Team</div>
        </div>
      </div>
    </div>
  );
}

export default App;
