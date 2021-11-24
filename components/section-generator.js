import { Fragment, useState } from 'react'

const Section = ({ click , text, image}) => {
  return <>
    {text ? <Text /> : (image ? <Image /> : <div className="border-2 order-dashed">
      <button onClick={(e) => click('Text')} className="rounded-lg border-2 p-2 text-xs text-blue-400 hover:text-blue-500 m-2">Agregar Texto</button>
      <button onClick={(e) => click('Image')} className="rounded-lg border-2 p-2 text-xs text-blue-400 hover:text-blue-500 m-2">Agregar Imagen Orla</button>
    </div>)}
  </>
}



const SectionGenerator = ({ sections }) => {
  const [text, setTexts] = useState(0);
  const [image, setImages] = useState(0);

  return <>
    <div className="flex flex-row items-center justify-center w-full text-center w-auto border-2 order-dashed p-2 m-2 md:border-dotted h-16 md:flex-row">
      <Fragment>
        {sections.map((s, i) => {
          switch (s.type) {
            case 'section':
              return <Section key={i} />
            case 'Text':
              return <Text key={i}/>
            case 'Image':
              return <Image key={i}/>
          }
        })}
      </Fragment>
    </div>
  </>
}

export default SectionGenerator;