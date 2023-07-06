import { exp } from 'mathjs';
import packageJson from '../../../package.json';
import * as bin from './index';
import { set } from 'date-fns';


export const allc = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};


export const whoami = async (args: string[]): Promise<string> => {
  return 'Falcon';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};


export const gui = async (args: string[]): Promise<string> => {
  //window.open('https://m4tt72.com', '_self');

  return 'GUI is not supported yet. Comming soon...';
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:mohamd514.m@gmail.com');
  navigator.clipboard.writeText('mohamd514.m@gmail.com');
  return 'Opening mailto:mohamd514.m@gmail.com and copied to clipboard.';
};

export const vi = async (args: string[]): Promise<string> => {
  return `why use vi? try 'emacs'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `why use vim? try 'emacs'.`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `really? emacs? you should be using 'vim'`;
};

export const cv = async (args?: string[]): Promise<string> => {
  window.open('https://drive.google.com/file/d/1Pj-JEeNdc7GYFM1zev0Yc4xdvEeND3vI/view?usp=sharing');
  return 'Opening CV...';
};

export const sudo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }, 1000);

  return `Permission denied: unable to run the command '${args[0]}' as root.`;
};

export const repo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://github.com/swalha1999/terminal', '_blank');
  }, 300);

  return 'Opening repository...';
};


export const sl2 = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://docs.google.com/presentation/d/17aWO9JEh3yc6ECB1iuKCCNulG3NErtMt/edit?usp=sharing&ouid=108651316753634577484&rtpof=true&sd=true', '_blank');
  }, 300);

  return 'Opening ytek slide 2...';
};


export const sl1 = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://sites.google.com/ytek.co.il/phishing', '_blank');
  }, 300);

  return 'Opening ytek slide 3...';
};

export const banner = (args?: string[]): string => {
  return `
  ┏┳┓╻ ╻╻ ╻┏━┓┏┳┓┏┳┓┏━┓╺┳┓   ┏━┓╻ ╻┏━┓╻  ╻ ╻┏━┓
  ┃┃┃┃ ┃┣━┫┣━┫┃┃┃┃┃┃┣━┫ ┃┃   ┗━┓┃╻┃┣━┫┃  ┣━┫┣━┫
  ╹ ╹┗━┛╹ ╹╹ ╹╹ ╹╹ ╹╹ ╹╺┻┛   ┗━┛┗┻┛╹ ╹┗━╸╹ ╹╹ ╹v${packageJson.version}
  The project is open-source 🎉 type 'repo' to check out the repository.
  New 🎉 python interpreter is now available. type 'python' to try it out.

    Type 'help' to see list of available commands.
    Type 'about' to get information about the project.
    Type 'cv' to get my cv.   
    --

    Computer science student looking for internship or part-time job as a software engineer. 
    I am a self-motivated, hard-working, quick learner and passionate about learning new technologies.
    Experience in C++, Python, Go, React, Node.js, Express, MongoDB, PostgreSQL, 
    Docker/Kubernetes, Git, and Agile development.
    
    Worked on multiple projects using different technologies and frameworks.
    I am a team player and I am always ready to learn new things.
--
`;
};

export const gassan = async (args?: string[]): Promise<string> => {
  return 'Gassan is gay';
}

export const cshaifa = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://drive.google.com/drive/folders/10hxbAc4E2qUSopuwe-XOOnxyC8mMaa81?usp=sharing');
  }
    , 1000);
  return 'Opening cs-haifa...';
}