import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MenuItem = ({ to, text, delay }) => {
  return (
    <motion.li
      className="text-blue-500 text-4xl py-8 hover:text-green-500 transition-all duration-300 font-'Press Start 2P'"
      style={{ fontFamily: "'Press Start 2P', sans-serif" }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <Link to={to}>{text}</Link>
    </motion.li>
  );
};

const Menu = () => {
  return (
    <ul className="flex flex-col items-center justify-center h-screen">
      <MenuItem to="/proyectos" text="Proyectos" delay={0.1} />
      <MenuItem to="/sobre-mi" text="Sobre Mí" delay={0.2} />
      <MenuItem to="/contacto" text="Contacto" delay={0.3} />
    </ul>
  );
};


export default Menu;


