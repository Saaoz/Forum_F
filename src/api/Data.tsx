import { SearchItem, Topics } from "../components/context/types";

// Données factices pour les utilisateurs
const userData: SearchItem[] = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Emma Wilson" },
    { id: 4, name: "James Johnson" },
    { id: 5, name: "Michael Brown" },
    { id: 6, name: "Patricia Taylor" },
    { id: 7, name: "Robert Davis" },
    { id: 8, name: "Linda Miller" },
    { id: 9, name: "David Moore" },
    { id: 10, name: "Susan Anderson" },
    { id: 11, name: "java 1" },
  ];
  
  // Données factices pour les sujets
  const topicData: SearchItem[] = [
    { id: 1, name: "Développement Web" },
    { id: 2, name: "Intelligence Artificielle" },
    { id: 3, name: "Machine Learning" },
    { id: 4, name: "Cybersécurité" },
    { id: 5, name: "Data Science" },
    { id: 6, name: "Blockchain" },
    { id: 7, name: "Développement de Jeux" },
    { id: 8, name: "Réalité Virtuelle" },
    { id: 9, name: "UI/UX Design" },
    { id: 10, name: "Cloud Computing" },
    { id: 11, name: "java 2" },
  ];
  
  // Données factices pour les tags
  const tagData: SearchItem[] = [
    { id: 1, name: "JavaScript" },
    { id: 2, name: "Python" },
    { id: 3, name: "React" },
    { id: 4, name: "Node.js" },
    { id: 5, name: "Django" },
    { id: 6, name: "Kubernetes" },
    { id: 7, name: "Docker" },
    { id: 8, name: "AWS" },
    { id: 9, name: "CSS" },
    { id: 10, name: "HTML" },
    { id: 11, name: "java 3" },
  ];
  
  // Données factices pour les catégories
  const categoryData: SearchItem[] = [
    { id: 1, name: "Technologie" },
    { id: 2, name: "Programmation" },
    { id: 3, name: "Hardware" },
    { id: 4, name: "Software" },
    { id: 5, name: "Jeux Vidéo" },
    { id: 6, name: "Réseaux Sociaux" },
    { id: 7, name: "Électronique" },
    { id: 8, name: "Robotique" },
    { id: 9, name: "Éducation" },
    { id: 10, name: "Santé Numérique" },
    { id: 11, name: "java 4" },
  ];

  const TopicsData: Topics[] = [
    { id:1, title:"Comment apprendre React ?",reply:150, activity:'10h' },
    { id:2, title:"Prisma est-il adapté pour les gros projets ?",reply:300, activity:'10j' },
    { id:3, title:"Meileur Norecoil PUBG",reply:5, activity:'2h' },
    { id:4, title:"Unshrouded ? Nouveau survival",reply:12, activity:'20min'},
    { id:5, title:"Palworld une copie de pokemon ?",reply:5024, activity:'50s' },
    { id:6, title:"Meilleur MMORPG 2024",reply:25, activity:'1mois' },
  ];


  
export { userData, topicData, tagData, categoryData, TopicsData }

