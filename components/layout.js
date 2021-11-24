import Frame from './frame';
import Slider from './slider';
import SectionGenerator from './section-generator';
import { useState } from 'react';

const Layout = () => {
  const [sections, setSection] = useState([
    {
      type: 'section'
    }
  ]);

  return (
    <>
      <div className="text-grey-darker bg-grey-light px-4 py-2 m-2">
        <div className="flex w-full flex-1 flex-col max-w-xs overflow-x-auto">
          <div className="px-4 py-2 mt-6">
            <h3 className="text-black mb-3 text-xl font-bold">Diseña tu orla</h3>
            <button className="text-white bg-blue-400 rounded-lg p-10 filter drop-shadow-lg hover:bg-blue-500 font-bold">Personalizado</button>
          </div>
          <div className="px-4 py-2 mt-6 relative">
            <h3 className="text-black mb-3 text-xl font-bold ">Templates predefinidos</h3>
            <div className="text-center cursor-pointer font-bold text-xs">
              <Slider />
            </div>
          </div>
          <div className="px-4 py-2 mt-6">
            <h3 className="text-black mb-3 text-xl font-bold">Creados recientemente...</h3>
            <div className="flex flex-col space-x-4 justify-center text-gray-300 text-xs text-center">
              <p>Actulmente no tienes orlas creadas</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 relative" >
        <div className="actions m-2">
          <button onClick={(e) => setSection([...sections, ...[{ type: 'section' }]])} className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded drop-shadow-lg">Añadir sección</button>
        </div>
        <div className="flex-1 border-2 relative" >
          <Frame />
          <div className="absolute bottom-0 left-0 top-0 p-20 w-full h-full">
            <div className="flex flex-col border-2 h-full m-2">
              <SectionGenerator sections={sections} />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default Layout;