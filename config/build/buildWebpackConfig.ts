import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import path from 'path';

import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { mode, paths } = options;
return {
  mode: mode,
  entry: paths.entry,
  output: {
    filename: '[main].js',
    path: paths.build,
    clean: true,
  },
  module: {
    rules: buildLoaders(),
  },
  resolve: buildResolvers(),
  plugins: buildPlugins(options),
};
};