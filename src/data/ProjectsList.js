import tech from "../assets/tech.png";

import zone from "../assets/zone.png";

import campusConnect from "../assets/campus.png";

import stepByStep from "../assets/step.png";

import bmiShop from "../assets/bmi.png";

import bmiShop_Paiement from "../assets/payement.png";

import bmiShop_Cmd from "../assets/cmd.png";

import electroShop1 from "../assets/elect1.png";
import electroShop2 from "../assets/elect2.png";
import electroShop3 from "../assets/elect3.png";

import myApi from "../assets/api.png";

export const projects = [
  {
    id: "my-api",
    name: "MyApi",
    type: "API REST",
    image: myApi,
    images: [myApi],
    url: null,
    description:
      "API REST développée avec Laravel pour gérer des utilisateurs, produits et commandes, avec authentification et sécurisation des accès.",
    technologies: [
      "Laravel",
      "PHP",
      "Sanctum",
      "MySQL",
    ],
  },

  {
    id: "tech-zone",
    name: "TechZone",
    type: "Application mobile",
    image: tech,
    images: [tech , zone],
    url: null,
    description:
      "Application mobile de commerce électronique spécialisée dans la vente de produits technologiques.",
    technologies: [
      "Flutter",
      "Dart",
      "GetX",
      "Laravel",
      "MySQL",
    ],
  },

  {
    id: "campus-connect",
    name: "CampusConnect",
    type: "Application web",
    image: campusConnect,
    images: [campusConnect],
    url: null,
    description:
      "Application web destinée à centraliser différentes informations liées à l'environnement universitaire.",
    technologies: [
      "PHP",
      "Laravel",
      "MySQL",
    ],
  },

  {
    id: "step-by-step",
    name: "StepByStep",
    type: "Application web",
    image: stepByStep,
    images: [stepByStep],
    url: null,
    description:
      "Application de gestion de tâches développée individuellement, de la conception à la mise en œuvre.",
    technologies: [
      "PHP",
      "Laravel",
      "MySQL",
    ],
  },

  {
    id: "bmi-shop",
    name: "BmiShop",
    type: "Application mobile",
    image: bmiShop,
    images: [bmiShop , bmiShop_Cmd ,bmiShop_Paiement ],
    url: null,
    description:
      "Application mobile de commerce électronique de pièces détachées développée dans le cadre d'un hackathon.",
    technologies: [
      "Flutter",
      "Dart",
      "GetX",
    ],
  },

  {
    id: "electro-shop",
    name: "ElectroShop",
    type: "Application web",
    image: electroShop1,
    images: [
      electroShop1,
      electroShop2,
      electroShop3,
    ],
    url: null,
    description:
      "Application web de gestion de stock avec opérations CRUD et gestion des commandes, connectée à une API.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
];