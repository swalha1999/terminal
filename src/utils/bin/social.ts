import config from '../../../config.json';

export const instagram = async (args: string[]): Promise<string> => {
  window.open(`https://www.instagram.com/swalha1999/`);

  return 'Opening instagram...';
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/swalha1999/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/swalha1999/`);

  return 'Opening linkedin...';
};
