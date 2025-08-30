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
        name: "",
        role: "",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "",
        role: "",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "",
        role: "",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "",
        role: "",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "",
        role: "",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "",
        role: "",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "",
        role: "",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "",
        role: "",
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
        name: "",
        role: "",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "",
        role: "",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "",
        role: "",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "",
        role: "",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "",
        role: "",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "",
        role: "",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "",
        role: "",
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
        name: "",
        role: "",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "",
        role: "",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "",
        role: "",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "",
        role: "",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "",
        role: "",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "",
        role: "",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "",
        role: "",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "",
        role: "",
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
        name: "",
        role: "",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "",
        role: "",
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
        name: "",
        role: "",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "",
        role: "",
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
        name: "",
        role: "",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "",
        role: "",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "",
        role: "",
        photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      },
      {
        name: "",
        role: "",
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
