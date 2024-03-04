import React, { useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ScreenScrolling = ({ children }) => {
    const controls = useAnimation();
    const containerRef = useRef(null);
    let currentSection = 0; 
  
    const handleScroll = (e) => {
        const deltaY = e.deltaY; //deltaY representa la cantidad de desplazamiento vertical que ocurre en el evento. + hacia abajo, - hacia arriba
        const sectionHeight = window.innerHeight; // Altura de la ventana

        if (deltaY > 0 && currentSection < children.length - 1) {
            // rueda hacia abajo y si todavía hay secciones hacia abajo
            currentSection++;
            controls.start({ y: `-${currentSection * sectionHeight}px` }); // Desplaza hacia arriba a la siguiente sección
        } else if (deltaY < 0 && currentSection > 0) {
            // rueda hacia arriba y si todavía hay secciones hacia arriba
            currentSection--;
            controls.start({ y: `-${currentSection * sectionHeight}px` }); // Desplaza hacia abajo a la sección anterior
        }
    };
  
    return (
        <div 
            ref={containerRef} 
            onWheel={handleScroll} 
            style={{ overflow: 'hidden', height: '100vh' }}
        >
            <motion.div
                style={{ height: `${children.length * 100}vh` }} // Altura total del contenedor
                animate={controls}
                transition={{ duration: 0.5 }}
            >
                {React.Children.map(children, (child, index) => (
                    <div key={index}>{child}</div>
                ))}
            </motion.div>
        </div>
    );
};

export default ScreenScrolling;


