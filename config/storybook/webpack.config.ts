import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { type BuildPaths } from '../build/types/config';
import path from 'path';
import { type Configuration } from 'webpack';

export default ({ config, }: { config: Configuration }): Configuration => {
  const paths: BuildPaths = {
    build: '',
    htmlTemplate: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');
  config.module?.rules?.push(buildCssLoader(true));

  return config;
};
