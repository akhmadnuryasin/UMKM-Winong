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
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

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
                  <ModalHeader className="flex flex-col gap-1 ">
                    {modalContent === "content1" ? (
                      <p className="text-center">Modal Title 1</p>
                    ) : modalContent === "content2" ? (
                      <p className="text-center">Modal Title 2</p>
                    ) : modalContent === "content3" ? (
                      <p className="text-center">Modal Title 3</p>
                    ) : modalContent === "content4" ? (
                      <p className="text-center">Modal Title 4</p>
                    ) : null}
                  </ModalHeader>
                  <ModalBody className="p-0 px-5">
                    {modalContent === "content1" ? (
                      <div>
                        <Swiper
                          pagination={{
                            dynamicBullets: true,
                          }}
                          className="mySwiper bg-slate-800 h-96 text-white rounded-xl"
                        >
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 1
                          </SwiperSlide>
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 2
                          </SwiperSlide>
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 3
                          </SwiperSlide>
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 4
                          </SwiperSlide>
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 5
                          </SwiperSlide>
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 6
                          </SwiperSlide>
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 7
                          </SwiperSlide>
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 8
                          </SwiperSlide>
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 9
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    ) : modalContent === "content2" ? (
                      <div>
                        <Swiper
                          pagination={{
                            dynamicBullets: true,
                          }}
                          className="mySwiper bg-slate-800 h-96 text-white rounded-xl"
                        >
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 1
                          </SwiperSlide>
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 2
                          </SwiperSlide>
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 3
                          </SwiperSlide>
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 4
                          </SwiperSlide>
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 5
                          </SwiperSlide>
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 6
                          </SwiperSlide>
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 7
                          </SwiperSlide>
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 8
                          </SwiperSlide>
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 9
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    ) : modalContent === "content3" ? (
                      <div>
                        <Swiper
                          pagination={{
                            dynamicBullets: true,
                          }}
                          className="mySwiper bg-slate-800 h-96 text-white rounded-xl"
                        >
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 1
                          </SwiperSlide>
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 2
                          </SwiperSlide>
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 3
                          </SwiperSlide>
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 4
                          </SwiperSlide>
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 5
                          </SwiperSlide>
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 6
                          </SwiperSlide>
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 7
                          </SwiperSlide>
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 8
                          </SwiperSlide>
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 9
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    ) : modalContent === "content4" ? (
                      <div>
                        <Swiper
                          pagination={{
                            dynamicBullets: true,
                          }}
                          className="mySwiper bg-slate-800 h-96 text-white rounded-xl"
                        >
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 1
                          </SwiperSlide>
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 2
                          </SwiperSlide>
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 3
                          </SwiperSlide>
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 4
                          </SwiperSlide>
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 5
                          </SwiperSlide>
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 6
                          </SwiperSlide>
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 7
                          </SwiperSlide>
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 8
                          </SwiperSlide>
                          <SwiperSlide className="flex justify-center items-center">
                            Slide 9
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    ) : null}
                  </ModalBody>

                  <ModalFooter className="flex justify-center ">
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
          <div className="p-2 rounded-lg w-full mt-9">Made By Team</div>
        </div>
      </div>
    </div>
  );
}

export default App;
