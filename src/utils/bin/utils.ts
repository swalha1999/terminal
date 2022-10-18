import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  // const commands = Object.keys(bin).sort().join(', ');
  // return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;

  return `Available commands:
  
  cv: get my cv.
  about: get information about the me and the project.
  
  help: get all available commands and their usage.
  clear: clear the terminal.
  ls: list all files and directories.
  cd: change directory.
  pwd: print working directory.
  mkdir: create a directory.
  theme: change the theme.
  weather: get the weather of a city.
  echo: print a message or make file with message.
  cat: print the content of a file.
  touch: create a file.
  rm: remove a file or directory.
  linkedin: get my linkedin profile.
  github: get my github profile.
  instagram: get my instagram profile.
  figlet: print a message in ascii art.
  cowsay: print a message in a cow.
  
  `;
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const gui = async (args: string[]): Promise<string> => {
  window.open('https://m4tt72.com', '_self');

  return 'Opening GUI version...';
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:mohamd514.m@gmail.com');

  return 'Opening mailto:mohamd514.m@gmail.com';
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
  window.open('https://drive.google.com/file/d/1Pj-JEeNdc7GYFM1zev0Yc4xdvEeND3vI/view');

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

export const banner = (args?: string[]): string => {
  return `
  ┏┳┓╻ ╻╻ ╻┏━┓┏┳┓┏┳┓┏━┓╺┳┓   ┏━┓╻ ╻┏━┓╻  ╻ ╻┏━┓
  ┃┃┃┃ ┃┣━┫┣━┫┃┃┃┃┃┃┣━┫ ┃┃   ┗━┓┃╻┃┣━┫┃  ┣━┫┣━┫
  ╹ ╹┗━┛╹ ╹╹ ╹╹ ╹╹ ╹╹ ╹╺┻┛   ┗━┛┗┻┛╹ ╹┗━╸╹ ╹╹ ╹v${packageJson.version}

    Type 'help' to see list of available commands.

    --
    The project is open-source 🎉 type 'repo' to check out the repository.

    New 🎉: Try out the new 'theme' command. See all available themes <a href="https://github.com/m4tt72/terminal/tree/master/docs/themes">in the docs</a>.
    New 🎉: New command 'neofetch', for you linux.
--
`;
};
