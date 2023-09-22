import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
  const {isDev} = options;
  const typescriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader: RuleSetRule = {
    test: /\.s[ac]ss$/,
    use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader:'css-loader',
      options: {
        modules: true,
      }      
    },
    'sass-loader'],
  };

  return [
    typescriptLoader,
    cssLoader
  ];
}