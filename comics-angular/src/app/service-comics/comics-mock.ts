/*Completar los datos de los Comics*/

import { Comic } from "./comics-interface";

export let COMICS: Comic[] = [
  {
    id: 1, autor: 'Gotouge Koyoharu', 
    img: 'assets/Rengoku.png', 
    name: 'Kimetsu no Yaiba', 
    types:['Shonen','Supernatural'],
    description: 'Kamado Tanjiro, un chico joven, bastante inteligente y con un corazón que no le abe en el pecho. Este vive son su familia y gana dinero vendiendo carbón. Pero todo cambia cuando su familia es atacada y asesinada.',
    fav: false,
    preview: 'assets/scans/scanKimetsu.jpg'
},
  {
    id: 2, 
    autor: 'Ken Wakui', 
    img: 'assets/tokyorevengers.png', 
    name: 'Tokyo Revengers',
    types:['Shonen'],
    description: 'Takemichi, un fracasado que fue miembro de una banda en su juventud, salta 12 años atrás en el tiempo para volver al instituto y salvar a su exnovia, Hina, que en la actualidad ha sido asesinada por la organización criminal Tokyo Manjikai.',
    fav: false,
    preview: 'assets/scans/scanTokyo.jpg'
  },
  {
    id: 3, 
    autor: 'Arakawa Hiromu', 
    img: 'assets/fullmetal.png', 
    name: 'Full Metal Alchemist',
    types:['Drama','Action'],
    description: 'Edward y Alphonse Elric (más conocidos como Ed y Al) son adolescentes alquimistas con un pasado trágico. Cuando Ed tenía once años, y Alphonse sólo diez años, los hermanos trataron de traer a su madre muerta a la vida. Su ia o lo suficiente para transmutar su propio cuerpo.',
    fav: false,
    preview: 'assets/scans/scanFullMetal.jpg'
  },
  {
    id: 4, autor: 'Sanbe Kei ', 
    img: 'assets/erased.png', 
    name: 'Erased',
    types:['Supernatural'],
    description: 'Satoru Fujinuma es un autor de manga frustrado que trabaja como repartidor de pizzas para llegar a final de mes. Lo que no sabe nadie es que posee un don excepcional: cada vez que tiene lugar alguna tragedia cerca de él es proyectado unos minutos hacia atrás en el tiempo para tratar de impedirla.',
    fav: false,
    preview: 'assets/scans/scanErased.jpg'
  },
  {
    id: 5, autor: 'Isayama Hajime', 
    img: 'assets/shingeki.png', 
    name: 'Shingeki no Kyojin',
    types:['Shonen','Drama'],
    description: 'Hace cien años, los Titanes aparecieron. Ante esta invasión, la humanidad se vio obligada a esconderse tras enormes muros para no convertirse en alimento. De esta manera los seres humanos pudieron volver a conocer la paz y la prosperidad, hasta el punto de casi olvidar la verdadera razón por la que vivían encerrados. Entonces aparece Eren Jaeger, un joven que sueña con el mundo exterior, hastiado del conformismo.',
    fav: false,
    preview: 'assets/scans/scanShingeki.jpg'
  },
  {
    id: 6, autor: 'Akutami Gege ', 
    img: 'assets/jujutsu.png', 
    name: 'Jujutsu Kaisen',
    types:['Supernatural','Action'],
    description: 'Yuji Itadori decide pasar el tiempo con el Club de Ocultismo del instituto, pese a poseer unas habilidades atléticas extraordinarias. Con el tiempo, descubre que el mundo del oculto es real, y los miembros del club son atacados.',
    fav: false,
    preview: 'assets/scans/scanJujutsu.jpg'
  },
  {
    id: 7, 
    autor: 'Horikoshi Kouhei ', 
    img: 'assets/bokunohero.png', 
    name: 'Boku no Hero Academia',
    types:['Shonen','Slice-life'],
    description: 'La historia tiene lugar en un mundo donde el 80% de la población ha desarrollado «dones», surgiendo así héroes y villanos. ... Midoriya accede y empieza a estudiar en la U.A, donde hace nuevos amigos, conoce otros héroes profesionales, aprende a dominar sus poderes y se enfrenta a auténticos villanos.',
    fav: false,
    preview: 'assets/scans/scanHero.jpg'
  },
  {
    id: 8, 
    autor: 'Kizu Natsuki ', 
    img: 'assets/given.png', 
    name: 'Given',
    types:['Romance','Yaoi'],
    description: 'Ritsuka Uenoyama es un estudiante de secundaria que empieza a hastiarse de la guitarra y el baloncesto, dos actividades que adoraba. Las cosas empiezan a cambiar cuando un día se encuentra en las escaleras del instituto a Mafuyu Sato, un compañero de su mismo curso, quien está abrazado a una guitarra estropeada.',
    fav: false,
    preview: 'assets/scans/scanGiven.jpg'
  },
];
