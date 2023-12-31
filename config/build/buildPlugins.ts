import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import { BuildOptions } from "./types/config";

export function buildPlugins({paths}: BuildOptions): WebpackPluginInstance[] {
  const progressPlugin = new ProgressPlugin();
  const htmlWebpackPlugin = new HtmlWebpackPlugin({
    title: 'Funparty',
    template: paths.htmlTemplate,
  });

  return [
    progressPlugin,
    htmlWebpackPlugin,
  ];
}