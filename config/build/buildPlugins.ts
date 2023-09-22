import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from "path";
import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import { BuildOptions } from "./types/config";

export function buildPlugins({paths}: BuildOptions): WebpackPluginInstance[] {
  const progressPlugin = new ProgressPlugin();
  const htmlWebpackPlugin = new HtmlWebpackPlugin({
    title: 'Funparty',
    template: paths.htmlTemplate,
  });
  const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  });

  return [
    progressPlugin,
    htmlWebpackPlugin,
    miniCssExtractPlugin
  ];
}