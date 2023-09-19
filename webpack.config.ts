import { Configuration } from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import path from 'path';
import { BuildMode, BuildPaths } from 'config/build/types/config';

const mode: BuildMode = 'development' ; //process.env.NODE_ENV === 'production' ? 'production' : 'development';
const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  build: path.resolve(__dirname, 'dist'),
  htmlTemplate: path.resolve(__dirname, 'public', 'index.html'),
};
const PORT = 3000;

const config: Configuration = buildWebpackConfig({
  mode,
  paths,
  isDev: mode === 'development',
  port: PORT,
});

export default config;
