import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-950 h-screen flex justify-center items-center">
      <motion.button
        className="bg-gray-700 text-white font-bold py-2 px-4 rounded"
        initial={{ opacity: 0.6 }}
        whileHover={{
          scale: 1.2,
          transition: {
            duration: 1,
            type: "spring",
            bounce: 0.8,
            stiffness: 1,
          },
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }}
      >
        Hello
      </motion.button>
    </div>
  );
}

export default App;
