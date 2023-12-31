import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";

import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { mode, paths, isDev } = options;
  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: "[main].js",
      path: paths.build,
      clean: true,
    },
    module: {
      rules: buildLoaders(),
    },
    devtool: 'inline-source-map',
    devServer: isDev ? buildDevServer(options) : undefined,
    resolve: buildResolvers(),
    plugins: buildPlugins(options),
  };
}
