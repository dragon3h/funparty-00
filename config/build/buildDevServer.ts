import path from "path";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  const { port } = options;
  return {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: port,
    open: true,
  };
}