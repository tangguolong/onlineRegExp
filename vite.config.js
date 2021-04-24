import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePluginImp from 'vite-plugin-imp'
import lessToJS from 'less-vars-to-js'
import path from 'path'
import fs from 'fs'
import Markdown from 'vite-plugin-md'
import config from './config/index'
const { plugin: mdPlugin, Mode } = require('vite-plugin-markdown')
const env = process.argv[process.argv.length - 1]
const base = config[env]

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './config/variables.less'), 'utf8')
)
export default defineConfig({
  base: base.cdn,
  plugins: [
    reactRefresh(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/lib/${name}/style/index.less`,
        },
      ],
    }),
    mdPlugin({ mode: [Mode.HTML, Mode.TOC, Mode.REACT] }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        // 重写 less 变量，定制样式
        modifyVars: themeVariables
      }
    }
  },

})