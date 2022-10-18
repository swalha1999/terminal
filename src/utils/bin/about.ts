import { getBio } from '../../api';

export const about = async (args: string[]): Promise<string> => {
  // const bio = await getBio();
  
  const bio = `
  Computer science student looking for internship or part-time job as a software engineer. 
  I am a self-motivated, hard-working, quick learner and passionate about learning new technologies.
  Experience in C++, Python, Go, React, Node.js, Express, MongoDB, PostgreSQL, 
  Docker/Kubernetes, Git, and Agile development.
  
  Worked on multiple projects using different technologies and frameworks.
  I am a team player and I am always ready to learn new things.

  Work Experience:
      
      Team Leader, FIRST Robotics Competition Team 6168, 2016-2022
      ·	Making HUGE robots to compete in regional, global competition with custom software and hardware,
      implanted controls, H.264 video compressing and streaming over WIFI, with on-board Computer Vision,
      won 2018 regional and Represented Israel in global championships in NASA headquarters in Houston, Texas.
  
      Back-end engineer, Private marketing company 2019-2021
      ·	Building REST APIs and infrastructure for many websites and mobile apps using Node.js,
      Golang, PHP and deploying in AWS or other with cloud providers.

  Education:
      
      Computer science, University of Haifa GPA: 88/100, 2021-2024
  `
  return bio;
};
