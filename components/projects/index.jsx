"use client";
import styles from "./styles.module.css";
import Taskify from "../../public/taskify.PNG";
import Itube from "../../public/itube.PNG";
import Next from "../../public/next.PNG";
import Image from "next/image";
import Link from "next/link";
const DATA = [
  {
    id: 1,
    name: "Taskify",
    photo: Taskify,
    definition:
      "In this project I developed with React, I didn't put much effort for UI. My goal in this project is to make a project where one or more people work or daily tasks more manageable. In this project, I used many technologies such as Google Firebase, Tailwind CSS, Typescript. After logging in by creating a simple membership, you can create a new dashboard and create many lists and many cards within the lists. These lists can be sorted completely by priority with drag and drop feature. Members can be added to the boards, added members can be deleted or boards can be deleted completely.",
    url: "https://taskifymanager.netlify.app/",
  },
  {
    id: 2,
    name: "I Tube",
    photo: Itube,
    definition:
      "You can find many movies and details in this project I developed with React. I used many technologies such as React, Google Firebase. After creating a membership, you can access many movies by logging in. You can add the movies you like to your favorites.",
    url: "https://aytube.netlify.app",
  },
  {
    id: 3,
    name: "NetFilms",
    photo: Next,
    definition:
      "You can find many movies and details in this project I developed with Next js. This project, which is completely designed for UI, will impress you visually.",
    url: "https://main--nextjsfilmapplication.netlify.app/netfilms",
  },
];

const ProjectComponent = () => {
  return (
    <div id="projects" className={styles.projects}>
      <div className={styles.container}>
        <p className={styles.header}>
          I have developed some great projects with the above technologies
        </p>
        <div className={styles.project}>
          {DATA.map((item) => (
            <div key={item.id} className={styles.card}>
              <Link href={item.url} target="_blank">
                <Image src={item.photo} alt="project picture" width={350} />
                <p className={styles.seriesName}> {item.name}</p>
                <p>{item.definition}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
