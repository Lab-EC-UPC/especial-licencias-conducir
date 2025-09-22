import PERIODISMO from "@/assets/credits/periodismo.png";
import DISENO from "@/assets/credits/diseno.png";
import DESARROLLO from "@/assets/credits/desarrollo.png";
import DATA from "@/assets/credits/data.png";
import AUDIOVISUALES from "@/assets/credits/audiovisuales.png";
import COORDINACION from "@/assets/credits/coordinacion.png";
import THANKS from "@/assets/credits/thanks.svg";
// import EDICION from "@/assets/credits/edicion-visual.png";

export interface Credit {
  group: string;
  asset?: string;
  assetOrientation: "left" | "right";
  members: {
    name: string;
    role: string;
    photo?: string;
    photoNotRound?: boolean;
    url?: string;
    objectPosition?: "center" | "top" ; 
  }[];
}

export const credits: Credit[] = [
  {
    group: "Periodismo e investigación",
    asset: PERIODISMO,
    assetOrientation: "left",
    members: [
      {
        name: "Sebastian Fernandez Moris",
        role: "Coordinador de periodismo",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Sebastian%20Fernandez%20Moris.jpeg?raw=true",
        url: "https://www.linkedin.com/in/sebastian-fernandez-moris-469a43292/",
        objectPosition: "center"
      },
      {
        name: "Franca Alatrista Valdivia",
        role: "Investigación y reporteo",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Franca%20Alatrista%20Valdivia.png?raw=true",
        url: "https://www.linkedin.com/in/franca-alatrista-466307249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      {
        name: "Francisco Calderón Mosca",
        role: "Investigación y reporteo",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Francisco%20Calderón.png?raw=true",
        url: "https://www.linkedin.com/in/franciscojaviercalderonmosca/",
      },
      {
        name: "Fabiana Arambulo Alberca",
        role: "Investigación y reporteo",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Fabiana%20Arámbulo.jpg?raw=true",
        url: "https://www.linkedin.com/in/fabiana-ar%C3%A1mbulo-comunicadorayperiodista?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      {
        name: "Diego Aquino Pedraza",
        role: "Investigación y reporteo",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Diego%20Aquino.png?raw=true",
        url: "https://www.linkedin.com/in/diego-aquino-pedraza-0479271b5/",
      },
      {
        name: "Josselyn Gavancho Tenorio",
        role: "Investigación y reporteo",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Joselyn%20Gavancho.png?raw=true",
        url: "https://www.linkedin.com/in/joselyn-gavancho-94b58027b/ ",
      },
      {
        name: "Nicole Córdova Moquillaza",
        role: "Investigación y reporteo",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Nicole%20Córdova.png?raw=true",
        url: "https://www.linkedin.com/in/nicole-elizabeth-c-2341a2254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Joaquín Niño de Guzmán",
        role: "Investigación y reporteo",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Joaquín%20Nino%20de%20Guzman.png?raw=true",
        url: "www.linkedin.com/in/joaquín-niño-de-guzmán-40a344345",
      },
      {
        name: "Camila Mandujano Meza",
        role: "Investigación y reporteo",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Camila%20Mandujano%20Meza.png?raw=true",
        url: "https://www.linkedin.com/in/camila-rebeca-mandujano-meza-b806111b2/",
      },
      {
        name: "Fabrizio Monge Proa",
        role: "Elaboración de entrevistas",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Fabrizio%20Monge.png?raw=true",
        url: "https://www.linkedin.com/in/fabrizio-monge-3970b9239/",
      },
    ]
  },
  {
    group: "Diseño Gráfico",
    asset: DISENO,
    assetOrientation: "right",
    members: [
      {
        name: "Gustavo Huamaní Pimentel",
        role: "Coordinador de diseño",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Gustavo%20Huamani.png?raw=true",
        url: "https://www.linkedin.com/in/gustavo-huamani-pimentel-086261254/",
      },
      {
        name: "María “Mar” Jiménez León",
        role: "Diseño",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Maria%20Isabel%20Jimenez.png?raw=true",
        url: "https://marjimenez.myportfolio.com/",
      },
      {
        name: "Sofianne Condor Hurtado",
        role: "Diseño",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Sofianne%20Cóndor.png?raw=true",
        url: "https://www.linkedin.com/in/sofianne-condor-0aa2a4383/",
      },
      {
        name: "Stefany More Maza",
        role: "Diseño",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/STEFANY%20MORE.png?raw=true",
        url: "https://www.linkedin.com/in/stefany-more-maza-35b587332/",
      },
      {
        name: "Flavia Torres Pajilla",
        role: "Diseño",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Flavia%20Torres.png?raw=true",
        url: "https://www.linkedin.com/in/flavia-torres-503099244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      {
        name: "Claudia Navarrete Gutierrez",
        role: "Diseño",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Claudia%20Navarrete.png?raw=true",
        url: "https://www.linkedin.com/in/claudia-navarrete-b47292281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      {
        name: "Jessica Quispe Eusebio",
        role: "Diseño",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Jessica%20Quispe%20Eusebio.png?raw=true",
        url: "https://pe.linkedin.com/in/jessica-eusebio-0557802a7"
      },
    ]
  },
  {
    group: "Desarrollo",
    asset: DESARROLLO,
    assetOrientation: "left",
    members: [
      {
        name: "Daniel Zapata Trelles",
        role: "Coordinador de desarrollo",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Daniel%20Zapata.png?raw=true",
        url: "https://www.linkedin.com/in/daniel-alonso-zapata-trelles-1664aa1b9/",
      },
      {
        name: "Liliana Fu Ye",
        role: "Coordinadora de desarrollo",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Liliana%20Fu.png?raw=true",
        url: "https://lilianafu.com/",
      },
      {
        name: "Matías Ascasibe Paucar",
        role: "Gamificación y desarrollo de página web",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Matías%20Ascasibe.png?raw=true",
        url: "https://www.linkedin.com/in/matiasascasibe",
      },
      {
        name: "William Ramos Vicente",
        role: "Gamificación y desarrollo de página web",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/William%20Ramos.jpeg?raw=true",
        url: "https://williamramos.netlify.app/",
      },
      {
        name: "Luciano Ruiz Blas",
        role: "Desarrollo de página web",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Luciano%20Ruiz%20Blas.png?raw=true",
        url: "https://www.linkedin.com/in/lucianorb/",
      },
      {
        name: "Vilder Sandoval Verde",
        role: "Desarrollo de página web",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Vilder%20Sandoval.png?raw=true",
        url: "https://www.linkedin.com/in/vilder-sandoval/",
      },
      {
        name: "Piero Valverde Cora",
        role: "Desarrollo de página web",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/piero%20valverde.png?raw=true",
        url: "https://www.linkedin.com/in/pierosvc",
      },
    ]
  },
  {
    group: "Análisis de datos",
    asset: DATA,
    assetOrientation: "right",
    members: [
      {
        name: "Fabrizio Monge Proa",
        role: "Coordinador de análisis de datos",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Fabrizio%20Monge.png?raw=true",
        url: "https://www.linkedin.com/in/fabrizio-monge-3970b9239/",
      },
      {
        name: "Sofía Enciso Goicochea",
        role: "Coordinadora de análisis de políticas públicas",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Sofía%20Enciso.png?raw=true",
        url: "https://www.linkedin.com/in/sof%C3%ADa-enciso-goicochea-41bbb8258/",
      },
      {
        name: "Daniella Vargas Saldaña",
        role: "Análisis de datos",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Daniella%20Vargas.png?raw=true",
        url: "https://daniellavargas.dev",
      },
    ]
  },
  {
    group: "Audiovisuales y redes sociales",
    asset: AUDIOVISUALES,
    assetOrientation: "left",
    members: [
      {
        name: "Franca Alatrista Valdivia",
        role: "Coordinadora y productora ejecutiva",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Franca%20Alatrista%20Valdivia.png?raw=true",
        url: "https://www.linkedin.com/in/franca-alatrista-466307249/",
      },
      {
        name: "André Poma",
        role: "Director y director de fotografía",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Andre%20Poma%20.png?raw=true",
        url: "https://u202020552.myportfolio.com/work?fbclid=PAZXh0bgNhZW0CMTEAAaeeC6XeMyJ8PBxW7XUInDtiAie-OAHzQp37M6-9K6-yH8gev7f8_a1mVXH0YQ_aem_vGHzqKn7TfGRw11cQvtjlg",
      },
      {
        name: "Yuri Ramirez Trujillo",
        role: "Actriz",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Yuri.jpg?raw=true",
        url: "https://www.linkedin.com/in/yuri-ramírez-trujillo-549711358/"
      },
      {
        name: "Valery Montoya Yopla",
        role: "Directora de arte",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Valery%20Montoya.png?raw=true",
        url: "https://www.linkedin.com/in/valery-montoya-83026b363/",
      },
      {
        name: "Marcelo Mesarina Rivera",
        role: "Editor",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Marcelo%20Mesarina.png?raw=true",
        url: "https://www.behance.net/marcelomesarina",
      },
      {
        name: "Paolo Lovatón Flores",
        role: "Diseñador de producción",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Paolo%20Lovaton.png?raw=true",
        url: "https://www.linkedin.com/in/paolo-alejandro-lovaton-flores-2a259a21b/",
      },
      {
        name: "Joaquín Villalobos",
        role: "Compositor",
        photo: "https://raw.githubusercontent.com/Lab-EC-UPC/assets/refs/heads/main/especial-licencias/Joaquin%20Villalobos%202.jpg",
      },
      {
        name: "Josselyn Gavancho",
        role: "Apoyo de contenido",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Joselyn%20Gavancho.png?raw=true",
        url: "https://www.linkedin.com/in/joselyn-gavancho-94b58027b/ ",
      },
      {
        name: "Francisco Calderón",
        role: "Apoyo de contenido",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Francisco%20Calderón.png?raw=true",
        url: "https://www.linkedin.com/in/franciscojaviercalderonmosca/",
      },
      {
        name: "Diego Aquino",
        role: "Apoyo de contenido",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Diego%20Aquino.png?raw=true",
        url: "https://www.linkedin.com/in/diego-aquino-pedraza-0479271b5/",
      },
    ]
  },
  {
    group: "Coordinación de proyecto",
    asset: COORDINACION,
    assetOrientation: "left",
    members: [
      {
        name: "Mayté Ciriaco",
        role: "Coordinación general, supervisión y edición",
        photo: "https://lab-ec-upc.github.io/assets/integrantes/mayte-link.jpg",
        url: "https://www.linkedin.com/in/mayt%C3%A9-ciriaco-ruiz-7b5738141/",
      },
      {
        name: "Sebastian Fernandez Moris",
        role: "Coordinador de proyecto",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Sebastian%20Fernandez%20Moris.jpeg?raw=true",
        url: "https://www.linkedin.com/in/sebastian-fernandez-moris-469a43292/",
        objectPosition: "center"
      },
      {
        name: "Ariana Lira",
        role: "Supervisión y edición general",
        photo: "https://lab-ec-upc.github.io/assets/integrantes/ariana-link.jpg",
        url: "https://www.linkedin.com/in/ariana-lira-delcore/",
      },
      {
        name: "Gino Alva Olivera",
        role: "Asistencia editorial",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Gino.jpg?raw=true",
        url: "https://www.linkedin.com/in/gino-alva-olivera-62133b104/",
      },
    ]
  },
  // {
  //   group: "Edición Visual",
  //   asset: EDICION,
  //   assetOrientation: "left",
  //   members: [
  //     {
  //       name: "Nuevas Narrativas",
  //       role: "Revisión visual",
  //       photo: "https://avatar.iran.liara.run/username?username=Nuevas%20Narrativas&background=ffffff&color=000000",
  //       url: "https://especiales.elcomercio.pe/?q=especiales-multimedia/especiales-nuevas-narrativas-especdis/index.html",
  //       photoNotRound: true,
  //     },
  //   ]
  // },
  {
    group: "Agradecimientos especiales",
    asset: THANKS,
    assetOrientation: "left",
    members: [
      {
        name: "Carls Mayo",
        role: "Edición de prompts",
        photo: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/carls%20mayo.jpg?raw=true",
        url: "https://elcomercio.pe/autor/carls-mayo/"
      },
      {
        name: "Nuevas Narrativas",
        role: "Revisión visual",
        url: "https://especiales.elcomercio.pe/?q=especiales-multimedia/especiales-nuevas-narrativas-especdis/index.html",
        photo: "https://raw.githubusercontent.com/Lab-EC-UPC/assets/refs/heads/main/especial-licencias/NN.png"     
      },
    ]
  },
]
