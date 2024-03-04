import React from 'react';

function Initial() {
  return (
    <section className='bg-lm-bg w-screen h-screen flex'>
      <div className="w-auto h-auto flex flex-col justify-center ml-32 space-y-4">
        <h1 className="text-black text-5xl font-medium">Alondra Cena</h1>
        <h2 className='text-black text-4xl'>Desarrolladora web full-stack</h2>
        <div className='h-auto pr-6 space-x-3'>
          <button className='bg-lm-lightbutton h-10 rounded-full text-lg w-32'>Contactarme</button>
          <button className="bg-lm-lightbutton h-10 rounded-full text-lg w-36">Descargar CV</button>
          
        </div>
      </div>
    </section>
  );
}

export default Initial;
