import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalContent, setModalContent] = useState("default");

  const openModal = (content) => {
    setModalContent(content);
    onOpen();
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonListVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="h-[100vh] p-6 flex justify-center items-center w-full">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="mx-auto w-96 bg-white text-center flex justify-center items-center flex-col"
      >
        <Avatar src="/Logo.png" className="w-20 h-20 text-large mb-4" />
        <h1 className="font-semibold">WINONG TOUR</h1>
        <h2 className="mt-1 mb-3 text-tiny">
          Halo! Klik link dibawah untuk info selengkapnya
        </h2>
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 0.8 }}
          className="my-4 flex w-full justify-center"
        >
          <motion.a
            href="https://drive.google.com/file/d/1czQwv-ntEN_s8Yc8EP3W9gwWM-LT4z4T/view?usp=drivesdk"
            className="mx-2"
            whileHover={{ scale: 1.2 }}
          >
            <motion.img
              src="/Wa.svg"
              alt="Whatsapp"
              className="w-10"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          </motion.a>
          <motion.a
            href="https://example.com/share"
            className="mx-2"
            whileHover={{ scale: 1.2 }}
          >
            <motion.img
              src="/Share.svg"
              alt="Share"
              className="w-10"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          </motion.a>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1, duration: 0.8 }}
          className="w-full text-white"
        >
          <motion.div
            variants={buttonListVariants}
            initial="hidden"
            animate="visible"
          >
            <ButtonCta
              label="Tentang Kami"
              content="content1"
              onClick={openModal}
              variants={buttonVariants}
            />
            <ButtonCta
              label="Paket Gedung"
              content="content2"
              onClick={openModal}
              variants={buttonVariants}
            />
            <ButtonCta
              label="Paket Tubing"
              content="content3"
              onClick={openModal}
              variants={buttonVariants}
            />
            <ButtonCta
              label="Paket Cooking"
              content="content4"
              onClick={openModal}
              variants={buttonVariants}
            />
          </motion.div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Modal
                  isOpen={isOpen}
                  onClose={onClose}
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
                          <Button
                            color="slate"
                            variant="light"
                            onPress={() => {
                              onClose();
                              setModalContent("default");
                            }}
                          >
                            Close
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="p-2 rounded-lg w-full mt-9">Made By Team</div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
