import React from "react";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";

const ButtonCta = ({ label, content, onClick, variants }) => {
  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <Button
          className="w-full my-1 bg-[#2a3235] text-white"
          onClick={() => onClick(content)}
        >
          {label}
        </Button>
      </motion.div>
    </div>
  );
};

export default ButtonCta;
