import { type Configuration } from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import path from 'path';
import { type BuildMode, type BuildPaths } from './config/build/types/config';

export default (env: { NODE_ENV: string }): Configuration => {
  const mode: BuildMode = env.NODE_ENV === 'production' ? 'production' : 'development';
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    htmlTemplate: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };
  const PORT = 3000;

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev: mode === 'development',
    port: PORT,
  });

  return config;
};
