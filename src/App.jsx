import React from "react";
import { Avatar, Button } from "@nextui-org/react";

function App() {
  const openGoogleDriveLink = (driveLink) => {
    window.open(driveLink, "_blank");
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
            onClick={() =>
              openGoogleDriveLink(
                "https://drive.google.com/file/d/1czQwv-ntEN_s8Yc8EP3W9gwWM-LT4z4T/view?usp=drivesdk"
              )
            }
            className="w-full my-1 bg-[#2a3235] text-white"
          >
            Link 1
          </Button>
          <Button
            onClick={() =>
              openGoogleDriveLink(
                "https://drive.google.com/file/d/1czQwv-ntEN_s8Yc8EP3W9gwWM-LT4z4T/view?usp=drivesdk"
              )
            }
            className="w-full my-1 bg-[#2a3235] text-white"
          >
            Link 2
          </Button>
          <Button
            onClick={() =>
              openGoogleDriveLink(
                "https://drive.google.com/file/d/1czQwv-ntEN_s8Yc8EP3W9gwWM-LT4z4T/view?usp=drivesdk"
              )
            }
            className="w-full my-1 bg-[#2a3235] text-white"
          >
            Link 3
          </Button>
          <Button
            onClick={() =>
              openGoogleDriveLink(
                "https://drive.google.com/file/d/1czQwv-ntEN_s8Yc8EP3W9gwWM-LT4z4T/view?usp=drivesdk"
              )
            }
            className="w-full my-1 bg-[#2a3235] text-white"
          >
            Link 4
          </Button>
        </div>
        <div>
          <div className="p-2 rounded-lg w-full mt-9">Made By Team</div>
        </div>
      </div>
    </div>
  );
}

export default App;
