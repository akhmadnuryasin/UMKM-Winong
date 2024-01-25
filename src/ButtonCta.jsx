import React from "react";
import { Button } from "@nextui-org/react";

const ButtonCta = ({ label, content, onClick }) => {
  return (
    <div>
      <Button
        className="w-full my-1 bg-[#2a3235] text-white"
        onClick={() => onClick(content)}
      >
        {label}
      </Button>
    </div>
  );
};

export default ButtonCta;
