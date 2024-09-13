import Img1 from "../assets/hun1.png";
import Img2 from "../assets/hun2.png";
import Img3 from "../assets/hun3.png";
import Img4 from "../assets/hun4.png";
import Img5 from "../assets/hun5.png";

export const fetchProjects = async () => {
  return [
    {
      id: 1,
      title: "Turkey-Syria Grieves",
      description:
        "A donation option for the relief effort in Turkey and Syria",
      image: Img1,
    },
    {
      id: 2,
      title: "Health Sector in South Africa",
      description:
        "This project seems to focus on children's health and life skills development",
      image: Img2,
    },
    {
      id: 3,
      title: "Education in India",
      description: "A project to sponsor food and education for orphans in India",
      image: Img3,
    },
    {
      id: 4,
      title: "Flood in Manipur",
      description: "A project dedicated to providing relief for the flood-hit areas of Manipur",
      image: Img4,
    },
    {
      id: 5,
      title: "Child Labour in the World",
      description: "Addressing child labor issues worldwide",
      image: Img5,
    },
  ];
};
