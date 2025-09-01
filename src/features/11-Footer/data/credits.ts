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
  }[]
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
      },
      {
        name: "Franca Alatrista Valdivia",
        role: "Investigación y reporteo",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "Francisco Calderón Mosca",
        role: "Investigación y reporteo",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "Fabiana Arambulo Alberca",
        role: "Investigación y reporteo",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "Diego Aquino Pedraza",
        role: "Investigación y reporteo",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "Josselyn Gavancho Tenorio",
        role: "Investigación y reporteo",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "Nicole Córdova Moquillaza",
        role: "Investigación y reporteo",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "Joaquín Niño de Guzmán",
        role: "Investigación y reporteo",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "Camila Mandujano Meza",
        role: "Investigación y reporteo",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
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
      },
      {
        name: "María “Mar” Jiménez León",
        role: "Diseño",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "Sofianne Condor Hurtado",
        role: "Diseño",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "Stefany More Maza",
        role: "Diseño",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "Flavia Torres Pajilla",
        role: "Diseño",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "Claudia Navarrete Gutierrez",
        role: "Diseño",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
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
      },
      {
        name: "Liliana Fu Ye",
        role: "Coordinador de Desarrollo",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "Matías Ascasibe Paucar",
        role: "Gamificación y Desarrollo de página web",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "William “Liam” Ramos Vicente",
        role: "Gamificación y Desarrollo de página web",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "Daniella Vargas Saldaña",
        role: "Modelo Predictivo",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "Luciano Ruiz Blas",
        role: "Desarrollo de página web",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "Luís Sandoval Verde",
        role: "Desarrollo de página web",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "Piero Valverde Cora",
        role: "Desarrollo de página web",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
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
      },
      {
        name: "Sofía Enciso Goicochea",
        role: "Análisis de Datos",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
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
      },
      {
        name: "André Poma",
        role: "Director y Director de Fotografía",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
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
      },
      {
        name: "Paolo Lovatón Flores",
        role: "Diseñador de Producción",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
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
      },
      {
        name: "Francisco Calderón",
        role: "Apoyo de contenido",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "Diego Aquino",
        role: "Apoyo de contenido",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
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
      },
      {
        name: "Sebastian Fernandez Moris",
        role: "Coordinador de Proyecto",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "Ariana Lira",
        role: "Supervisión y Edición General",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "Gino Alva Olivera",
        role: "Asistencia Editorial",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
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
