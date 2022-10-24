import { getWeather } from '../../api';

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');

  if (!city) {
    return 'Usage: weather [city]. Example: weather haifa';
  }

  const weather = await getWeather(city);

  return weather;
};

export const w = async (args: string[]): Promise<string> => {
  const city = args.join('+');

  if (!city) {
    return 'Usage: weather [city]. Example: w haifa';
  }

  const weather = await getWeather(city);

  return weather;
};
