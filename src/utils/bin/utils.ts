import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  // const commands = Object.keys(bin).sort().join(', ');
  // return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
  ///\n  <p style="color: red"> try: </p>   cv
  return `Available commands:
  
  <p style="color: green">cv</p> get my cv. 
  <p style="color: green">about</p> get information about the me and the project.
  <p style="color: green">linkedin</p> get my linkedin profile.
  <p style="color: green">github</p> get my github profile.
  <p style="color: green">instagram</p> get my instagram profile.
  <p style="color: green">cowsay</p> print a message in a cow.
  <p style="color: green">figlet</p> print a message in ascii art. \n <p style="color: red"> try: </p>   figlet helloWorld
  <p style="color: green">weather</p> get the weather of a city.   \n <p style="color: red"> try: </p>   weather haifa
  <p style="color: green">theme</p> change the theme. \n <p style="color: red"> try: </p>   theme random
  <p style="color: green">evl</p> evaluate math expressions. \n <p style="color: red"> try: </p>   evl 2+2 \n   evl 2 inch to cm\n   evl x=50^2 \n   evl x+2  
  <p style="color: green">der</p> dervitave of math expressions. \n <p style="color: red"> try: </p>   der 5x^3+2x^2 \n   der 3x^3\n   der 5x \n   der x+2  
  <p style="color: green">tex</p> convert math expressions to tex format. \n <p style="color: red"> try: </p>   tex 2x \n   tex 2x+2 \n   tex x=50^2 \n   tex x+2
  <p style="color: green">clear</p> clear the terminal.
  <p style="color: green">ls</p> list all files and directories.
  <p style="color: green">cd</p> change directory.
  <p style="color: green">pwd</p> print working directory.
  <p style="color: green">mkdir</p> create a directory. \n <p style="color: red"> try: </p>   mkdir newDir
  <p style="color: green">echo</p> print a message or make file with message. \n <p style="color: red"> try: </p>   echo helloWorld \n   echo helloWorld > newFile.txt
  <p style="color: green">cat</p> print the content of a file. \n <p style="color: red"> try: </p>   cat newFile.txt
  <p style="color: green">touch</p> create a file.
  <p style="color: green">rm</p> remove a file or directory.
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
