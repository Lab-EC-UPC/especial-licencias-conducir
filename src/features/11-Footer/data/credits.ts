import PERIODISMO from "@/assets/credits/periodismo.png";
import DISENO from "@/assets/credits/diseno.png";
import DESARROLLO from "@/assets/credits/desarrollo.png";
import DATA from "@/assets/credits/data.png";
import AUDIOVISUALES from "@/assets/credits/audiovisuales.png";
import COORDINACION from "@/assets/credits/coordinacion.png";
import EDICION from "@/assets/credits/edicion-visual.png";

export interface Credit {
  group: string;
  asset: string;
  assetOrientation: "left" | "right";
  members: {
    name: string;
    role: string;
    photo: string;
    url?: string;
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
        role: "Coordinador de Periodismo",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "https://www.linkedin.com/in/sebastian-fernandez-moris-469a43292/",
      },
      {
        name: "Franca Alatrista Valdivia",
        role: "Investigación y reporteo",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "https://www.linkedin.com/in/franca-alatrista-466307249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      {
        name: "Francisco Calderón Mosca",
        role: "Investigación y reporteo",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "https://www.linkedin.com/in/franciscojaviercalderonmosca/",
      },
      {
        name: "Fabiana Arambulo Alberca",
        role: "Investigación y reporteo",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "https://www.linkedin.com/in/fabiana-ar%C3%A1mbulo-comunicadorayperiodista?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      {
        name: "Diego Aquino Pedraza",
        role: "Investigación y reporteo",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "https://www.linkedin.com/in/diego-aquino-pedraza-0479271b5/",
      },
      {
        name: "Josselyn Gavancho Tenorio",
        role: "Investigación y reporteo",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "https://www.linkedin.com/in/joselyn-gavancho-94b58027b/ ",
      },
      {
        name: "Nicole Córdova Moquillaza",
        role: "Investigación y reporteo",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "https://www.linkedin.com/in/nicole-elizabeth-c-2341a2254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Joaquín Niño de Guzmán",
        role: "Investigación y reporteo",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "www.linkedin.com/in/joaquín-niño-de-guzmán-40a344345",
      },
      {
        name: "Camila Mandujano Meza",
        role: "Investigación y reporteo",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "https://www.linkedin.com/in/camila-rebeca-mandujano-meza-b806111b2/",
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
        role: "Coordinador de Diseño",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "https://www.linkedin.com/in/gustavo-huamani-pimentel-086261254/",
      },
      {
        name: "María “Mar” Jiménez León",
        role: "Diseño",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "https://marjimenez.myportfolio.com/",
      },
      {
        name: "Sofianne Condor Hurtado",
        role: "Diseño",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "https://www.linkedin.com/in/sofianne-condor-0aa2a4383/",
      },
      {
        name: "Stefany More Maza",
        role: "Diseño",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "https://www.linkedin.com/in/stefany-more-maza-35b587332/",
      },
      {
        name: "Flavia Torres Pajilla",
        role: "Diseño",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "https://www.linkedin.com/in/flavia-torres-503099244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      {
        name: "Claudia Navarrete Gutierrez",
        role: "Diseño",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "https://www.linkedin.com/in/claudia-navarrete-b47292281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      {
        name: "Jessica Quispe Eusebio",
        role: "Diseño",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
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
        role: "Coordinador de Desarrollo",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "https://www.linkedin.com/in/daniel-alonso-zapata-trelles-1664aa1b9/",
      },
      {
        name: "Liliana Fu Ye",
        role: "Coordinador de Desarrollo",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "https://lilianafu.com/",
      },
      {
        name: "Matías Ascasibe Paucar",
        role: "Gamificación y Desarrollo de página web",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "https://www.linkedin.com/in/matiasascasibe",
      },
      {
        name: "William Ramos Vicente",
        role: "Gamificación y Desarrollo de página web",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "https://williamramos.netlify.app/",
      },
      {
        name: "Daniella Vargas Saldaña",
        role: "Modelo Predictivo",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "https://daniellavargas.netlify.app",
      },
      {
        name: "Luciano Ruiz Blas",
        role: "Desarrollo de página web",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "https://www.linkedin.com/in/lucianorb/",
      },
      {
        name: "Vilder Sandoval Verde",
        role: "Desarrollo de página web",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "https://www.linkedin.com/in/vilder-sandoval/",
      },
      {
        name: "Piero Valverde Cora",
        role: "Desarrollo de página web",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
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
        role: "Coordinador de Análisis de Datos",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "https://www.linkedin.com/in/fabrizio-monge-3970b9239/",
      },
      {
        name: "Sofía Enciso Goicochea",
        role: "Análisis de Datos",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "https://www.linkedin.com/in/sof%C3%ADa-enciso-goicochea-41bbb8258/",
      },
    ]
  },
  {
    group: "Audiovisuales y Redes sociales",
    asset: AUDIOVISUALES,
    assetOrientation: "left",
    members: [
      {
        name: "Franca Alatrista Valdivia",
        role: "Coordinadora y Productora Ejecutiva",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "https://www.linkedin.com/in/franca-alatrista-466307249/",
      },
      {
        name: "André Poma",
        role: "Director y Director de Fotografía",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "https://u202020552.myportfolio.com/work?fbclid=PAZXh0bgNhZW0CMTEAAaeeC6XeMyJ8PBxW7XUInDtiAie-OAHzQp37M6-9K6-yH8gev7f8_a1mVXH0YQ_aem_vGHzqKn7TfGRw11cQvtjlg",
      },
      {
        name: "Yuri Ramirez Trujillo",
        role: "Actriz",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "Valery Montoya Yopla",
        role: "Directora de Arte",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "Marcelo Mesarina Rivera",
        role: "Editor",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "https://www.behance.net/marcelomesarina",
      },
      {
        name: "Paolo Lovatón Flores",
        role: "Diseñador de Producción",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "https://www.linkedin.com/in/paolo-alejandro-lovaton-flores-2a259a21b/",
      },
      {
        name: "Joaquín Ciriaco",
        role: "Compositor",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "Josselyn Gavancho",
        role: "Apoyo de contenido",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "https://www.linkedin.com/in/joselyn-gavancho-94b58027b/ ",
      },
      {
        name: "Francisco Calderón",
        role: "Apoyo de contenido",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "https://www.linkedin.com/in/franciscojaviercalderonmosca/",
      },
      {
        name: "Diego Aquino",
        role: "Apoyo de contenido",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
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
        role: "Coordinación General, Supervisión y Edición",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "https://www.linkedin.com/in/mayt%C3%A9-ciriaco-ruiz-7b5738141/",
      },
      {
        name: "Sebastian Fernandez Moris",
        role: "Coordinador de Proyecto",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "https://www.linkedin.com/in/sebastian-fernandez-moris-469a43292/",
      },
      {
        name: "Ariana Lira",
        role: "Supervisión y Edición General",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "https://www.linkedin.com/in/ariana-lira-delcore/",
      },
      {
        name: "Gino Alva Olivera",
        role: "Asistencia Editorial",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        url: "https://www.linkedin.com/in/gino-alva-olivera-62133b104/",
      },
    ]
  },
  {
    group: "Edición Visual",
    asset: EDICION,
    assetOrientation: "left",
    members: [
      {
        name: "Nuevas Narrativas",
        role: "Revisión visual",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
    ]
  },
]
