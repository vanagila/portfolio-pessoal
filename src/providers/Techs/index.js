import { createContext, useState } from "react";

export const TechsContext = createContext([]);

export const TechsProvider = ({ children }) => {
  const [techs, setTechs] = useState([
    {
      id: 1,
      name: "HTML",
      img: "https://s3-alpha-sig.figma.com/img/d28b/8070/96328406557889a55a9f043dc7422698?Expires=1659312000&Signature=YyFT9wyu21Vn2ji~ZB4SHwSvAw1tmSrz3J4qzDbtJWlaTx0wyKPfKD1wx8ENXPkvyjmGIrS1G-i2ktAJ~xQUpL-9nxhM7WXNtJEXj6fdjWOW6OGgQGOnchMgqJJYDYXgodReNBIWfS12v57NZWiOuOAwnCRNDCH30wNsf3gJBSJut0Xdzxig0uvPnsfrvL5e7lVDp1c2SsbwiAFvJPCecX~1WXUZ2ZaMyXnDLRhBtgpkZHQ-Hp6dgbIFPoZ9vSBO7fzhYST6Z1zI5ND-uAIiKUxt0X7wp85vHUUfHM3rHAVhcJ1o535UdxnkW6MK-0UQgjbSBZ0mG1iROGvvBvwH-Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: 2,
      name: "CSS",
      img: "https://s3-alpha-sig.figma.com/img/33b1/d700/71556b5bff5d5a6826880df3654bc77c?Expires=1659312000&Signature=SHckIuQknYY89zkze2NMT-ilpRW~YDPilNP92HmVtIFQ8UFmAhY731a6HGvyiUGLeSkdpchhce3rtmj~JbSDqKW7XKUM6xjdk06XlCUzMDZ3SMo87GtB7PDKUkTDaN18c8q7zuwDVfoNWFexjswkqGW1Me0op2gk002wG78uZUabYrFiCiGd3EB758~Cstd8vahctW8JI5KVA9UESHlaKV7Sh5l8PN3C5LbI5JRrLReB59XO7vYCIS60FOIntiPMk1elrcyBWFLFDaHfG~axXQ8WrP5bDYCLy9TrbAq2TvJgOboD32qNEEC4aiXOsDj4dXxR4xDt7rv7jJxTtrXNEw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: 3,
      name: "JavaScript",
      img: "https://s3-alpha-sig.figma.com/img/6b69/397f/c80afbef41c5afb04dc5be663a32a3de?Expires=1659312000&Signature=YUnAS7DRWPv~IHHAC12duPFIEi2L3GGdO0hLOgdan5FLq0vz3pABPSc3IOTFnPaTtAwKaexciHSYyeDcK8WgKvmPFUxo0kIeXewBElkCFSL2s9OJCB-8t6jbieQqDAfaR5Ybw5Sp8gocjvnh-KThkQEVPnY1z1kxJAGj7rr~M-WOlhZfCbmHhIm1F0VnupDwO339M8ppxP9lRU3dYfMi-eGwLe--rzh8T1NT0bDDCXgJ9ph~ImmKwmiHeSl5wV-ylboI2fc32dUnz0oM84e5Wm69kL7QDlekCsVoqWpM4Xz2uIRvO2OtFpYyFO75BuGGvjZtFM7thrLAenXAvZV8NA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: 4,
      name: "ReactJS",
      img: "https://s3-alpha-sig.figma.com/img/d067/986c/b2bd28e9de7638f68ebef412e6d28a5b?Expires=1659312000&Signature=WOOcY20EgJrLjYPCg1sif6JbYGjiXqGihFJ9JnPeD1p~C0rpkcP7tPE4kz3HbkrQZilnneNB4hqNfpJTW3LeyPvz2-ojAeofLHaDMpaSQzHChUzWF9leEkoZvqMHt3jGPCZHQ76kqqFbMV9-QGePFVLNNNu37RV34NAEZHAaotRfO21hE4GAw9bl40c7oztwnT3DUepOt2y1tu~ZNgB1ivO78GMw6dxYAP-XEn8-YlY6hD9EHUpcXvM09BKYB6tXNe09lGGDW2Bt-MOoCAUHYcQzvrKuymuUlJSC7kzTcK~rOl2XKlTCJl4~dRnlFMR3vHps0SQGZnjYqxP39~6MPw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
  ]);

  return (
    <TechsContext.Provider value={{ techs }}>{children}</TechsContext.Provider>
  );
};
