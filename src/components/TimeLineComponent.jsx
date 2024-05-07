import { motion, useAnimate, stagger } from "framer-motion";

const TimeLineComponent = () => {
  return (
    <>
      <div className="mt-32 flex flex-col items-center py-2">
        <h1 className="intro font-bold text-center text-[26px] lg:text-[32px] py-8">
          Biografía de la vida y obra de Octavio Marulanda Morales
        </h1>
        <div className="container 5">
          <motion.div className="main-timeline">
            {/* 1st section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center"
            >
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1921</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Nacimiento</h5>
                <p className="description">
                  Nace el 7 de octubre en Manizales, en el Barrio Hoyo Frio.
                </p>
              </div>
            </motion.div>
            {/* 1st section*/}
            {/* 2nd section*/}
            <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
             className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1927</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Inicios</h5>
                <p className="description">
                  Estudia en el Colegio de Cristo en Manizales la primaria y el
                  bachillerato (1927 – 1939)
                </p>
              </div>
            </motion.div>
            {/* 2nd section*/}
            {/* 3st section*/}
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
             className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1924</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Contacto con la música</h5>
                <p className="description">
                  A los 3 nos tiene contacto con la música en una radiola RSZ
                  Víctor que compa su padre. Empieza a escuchar música popular y
                  la sonata de Tanege interpretada por Andrés Segovia.
                </p>
              </div>
            </motion.div>
            {/* 3st section*/}
            {/* 4nd section*/}
            <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1938</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Bogotá</h5>
                <p className="description">
                  Tenia 17 anos cuando tuvo que trasladar a la mama a Bogotá
                  para internarla en el psiquiátrico de Sibaté donde murió. Le
                  tomo 3 días en llegar a Bogotá.
                </p>
              </div>
            </motion.div>
            {/* 4nd section*/}
            {/* 5st section*/}
            <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.9,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1944</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Casamiento</h5>
                <p className="description">
                  El 22 de mayo se casa con Berenice Arbeláez y tienen 5 hijos.
                  Entra a trabajar en la emisora Electra Cultural en Cali.
                </p>
              </div>
            </motion.div>
            {/* 5st section*/}
            {/* 6nd section*/}
            <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1945</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Cali</h5>
                <p className="description">
                  Se traslada con la familia a vivir a Cali.
                </p>
              </div>
            </motion.div>
            {/* 6nd section*/}
            {/* 7st section*/}
            <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.1,
              delay: 1.1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1952</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Instituo de cultura</h5>
                <p className="description">
                  Se incorpora al Instituto Popular de Cultura. Crea la primera
                  escuela de teatro del país, Artistas del Pueblo y el periódico
                  Paginas Culturales.
                </p>
              </div>
            </motion.div>
            {/* 7st section*/}
            {/* 8nd section*/}
            <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.3,
              delay: 1.1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1958</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">
                  Festival de las Naciones
                </h5>
                <p className="description">
                  Con el grupo de teatro y la obra “A la diestra de Dios padre”
                  se presentan en Paris (Francia) en el Festival de las Naciones
                  y obtienen el 2 lugar.
                </p>
              </div>
            </motion.div>
            {/* 8nd section*/}
            {/* 9st section*/}
            <div className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1959</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Homenaje</h5>
                <p className="description">
                  Como homenaje a Tomas Carrasquilla y con la obra “Al a diestra
                  de Dios padre” recorren el país. Se vincula al Bellas Artes en
                  Cali, a la escuela de teatro.
                </p>
              </div>
            </div>
            {/* 9st section*/}
            {/* 10nd section*/}
            <div className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1960</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Vinculo a Bellas Artes</h5>
                <p className="description">
                  Se vincula a Bellas Artes en Cali como profesor en la Escuela
                  de Teatro.
                </p>
              </div>
            </div>
            {/* 10nd section*/}
            {/* 11st section*/}
            <div className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1963</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">
                  Subdirector de Bellas Artes
                </h5>
                <p className="description">
                  Realizo Investigación folclórica en Guapi Cauca. Ocupa el
                  cargo de subdirector de la Escuela Departamental de Teatro en
                  Bellas Artes de Cali.
                </p>
              </div>
            </div>
            {/* 11st section*/}
            {/* 12nd section*/}
            <div className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1969</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Incolda</h5>
                <p className="description">
                  Estudia en Incolda Administración Financiera (1069 a 1970)
                </p>
              </div>
            </div>
            {/* 12nd section*/}
            {/* 13st section*/}
            <div className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1971</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">
                  Director de Bellas Artes
                </h5>
                <p className="description">
                  Con motivo de los Juegos Panamericanos de Cali dicta un ciclo
                  de conferencias a profesionales sobre la cultura colombiana en
                  la Universidad del Valle. Ocupa el cargo de director de la
                  Escuela Departamental de Teatro de Bellas Artes.
                </p>
              </div>
            </div>
            {/* 13st section*/}
            {/* 14nd section*/}
            <div className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1973</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">20 años</h5>
                <p className="description">
                  Cumple 20 anos dirigiendo la escuela de teatro del Instituto
                  Popular de Cultura. Publica el libro Folclor y Cultura
                  General.
                </p>
              </div>
            </div>
            {/* 14nd section*/}
            {/* 15st section*/}
            <div className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1971</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">
                  Director de Bellas Artes
                </h5>
                <p className="description">
                  Con motivo de los Juegos Panamericanos de Cali dicta un ciclo
                  de conferencias a profesionales sobre la cultura colombiana en
                  la Universidad del Valle. Ocupa el cargo de director de la
                  Escuela Departamental de Teatro de Bellas Artes.
                </p>
              </div>
            </div>
            {/* 15st section*/}
            {/* 16nd section*/}
            <div className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1973</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">20 años</h5>
                <p className="description">
                  Cumple 20 anos dirigiendo la escuela de teatro del Instituto
                  Popular de Cultura. Publica el libro Folclor y Cultura
                  General.
                </p>
              </div>
            </div>
            {/* 16nd section*/}
            {/* 17st section*/}
            <div className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1974</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Mono Núñez</h5>
                <p className="description">
                  Se vincula al concurso Mono Núñez y elabora los reglamentos y
                  estatutos.
                </p>
              </div>
            </div>
            {/* 17st section*/}
            {/* 18nd section*/}
            <div className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1975</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Retiro</h5>
                <p className="description">
                  Se retira de Bellas Artes después de laborar por 13 años y 11
                  meses.
                </p>
              </div>
            </div>
            {/* 18nd section*/}
            {/* 19st section*/}
            <div className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1976</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Funmusica</h5>
                <p className="description">
                  Se crea la Fundación de Música de Ginebra (Funmusica).
                </p>
              </div>
            </div>
            {/* 19st section*/}
            {/* 20nd section*/}
            <div className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1979</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Colcultura</h5>
                <p className="description">
                  Se vincula a Colcultura en Bogotá para dirigir la oficina de
                  Folclor y Festival. Allí hizo un álbum de 3 discos sobre el
                  folclor del Litoral Pacifico, realizado el primer encuentro
                  nacional de Rondas Infantiles en Armero (Tolima). Participo en
                  el primer encuentro de música de América Latina convocado por
                  la Unesco. Realizo el evento Apoteosis Colombia.
                </p>
              </div>
            </div>
            {/* 20nd section*/}
            {/* 21st section*/}
            <div className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1980</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Artestudio</h5>
                <p className="description">
                  Se vincula a la oficina de diseño especializado de caligrafía
                  clásica de Gladys González Arévalo (Artestudio). En Funmusica
                  entra a integrar el comité técnico permanente.
                </p>
              </div>
            </div>
            {/* 21st section*/}
            {/* 22nd section*/}
            <div className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1985</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Publicación</h5>
                <p className="description">
                  Publica el libro “Las rondas y los juegos infantiles”
                </p>
              </div>
            </div>
            {/* 22nd section*/}
            {/* 23st section*/}
            <div className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1988</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">
                  Vinculo al Instituto Distrital de Cultura y Turismo en Bogotá
                </h5>
                <p className="description">
                  Se vincula al Instituto Distrital de Cultura y Turismo en
                  Bogotá. En la sala Oriol Rangel hace un ciclo de homenajes a
                  compositores (70 homenajes en 2 años). Publica el libro
                  Colección de Lectura de Música Colombiana.
                </p>
              </div>
            </div>
            {/* 23st section*/}
            {/* 24nd section*/}
            <div className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1989</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Cuba</h5>
                <p className="description">Visita a Cuba con la Carifiesta.</p>
              </div>
            </div>
            {/* 24nd section*/}
            {/* 25st section*/}
            <div className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1991</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">
                  Centro de Documentación Musical
                </h5>
                <p className="description">
                  En Funmusica organiza el Centro de Documentación Musical e
                  inicia la publicación de libros sobre compositores
                  colombianos.
                </p>
              </div>
            </div>
            {/* 25st section*/}
            {/* 26nd section*/}
            <div className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1993</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">
                  Libro “Hernando Sinisterra"
                </h5>
                <p className="description">
                  En Funmusica escribe el libro “Hernando Sinisterra Gomez,
                  huella y memoria”
                </p>
              </div>
            </div>
            {/* 26nd section*/}
            {/* 27st section*/}
            <div className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1994</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Séptimo libro</h5>
                <p className="description">
                  Escribe el libro “Un concierto que dura 20 anos” con motivo de
                  los 20 años de Funmusica (su séptimo libro).
                </p>
              </div>
            </div>
            {/* 27st section*/}
            {/* 28nd section*/}
            <div className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1995</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Palabras sonoras"</h5>
                <p className="description">
                  Con Funmusica publica el folleto “Palabras sonoras,
                  vocabulario de música” Johannio le realiza una entrevista y
                  publica el folleto “Una vida dedicada a la cultura
                  colombiana”.
                </p>
              </div>
            </div>
            {/* 28nd section*/}
            {/* 29st section*/}
            <div className="timeline-item flex flex-row flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1996</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Séptimo libro</h5>
                <p className="description">
                  Escribe el libro “Un concierto que dura 20 anos” con motivo de
                  los 20 años de Funmusica (su séptimo libro).
                </p>
              </div>
            </div>
            {/* 29st section*/}
            {/* 30nd section*/}
            <div className="timeline-item flex flex-row-reverse flex-wrap lg:flex-nowrap justify-center items-center">
              <div className="date-content order-1b">
                <div className="date-outer">
                  <span className="date">
                    <p className="year pt-2">1997</p>
                  </span>
                </div>
              </div>
              <div className="icon order-2"></div>
              <div className="timeline-content order-3 md:w-1/2 p-3">
                <h5 className="title pt-4 font-bold">Fallecimiento</h5>
                <p className="description">
                  Muere el 10 de febrero a los 76 años, estaba trabajando para
                  Funmusica.
                </p>
              </div>
            </div>
            {/* 30nd section*/}
          </motion.div>
        </div>
        <br />
      </div>
    </>
  );
};

export default TimeLineComponent;
