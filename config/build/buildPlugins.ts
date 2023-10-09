import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ProgressPlugin, type WebpackPluginInstance, DefinePlugin, HotModuleReplacementPlugin } from 'webpack';
import { type BuildOptions } from './types/config';

export function buildPlugins ({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
  const progressPlugin = new ProgressPlugin();

  const htmlWebpackPlugin = new HtmlWebpackPlugin({
    title: 'Funparty',
    template: paths.htmlTemplate
  });

  const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css'
  });

  const definePlugin = new DefinePlugin({
    __IS_DEV__: JSON.stringify(isDev)
  });

  const hmrPlugin = new HotModuleReplacementPlugin();

  return [
    progressPlugin,
    htmlWebpackPlugin,
    miniCssExtractPlugin,
    definePlugin,
    hmrPlugin
  ];
}
