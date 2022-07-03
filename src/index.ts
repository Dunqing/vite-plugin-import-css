import type { Plugin, ResolvedConfig } from 'vite'

interface PluginOptions {
  /**
   * @default './style.css'
   */
  cssFile: string
}

export default function plugin({ cssFile }: PluginOptions = {
  cssFile: './style.css'
}): Plugin {
  let config: ResolvedConfig; 
  return {
    name: 'vite-plugin-import-css',
    apply: 'build',
    configResolved(_config) {
      config = _config
    },
    renderChunk(code, chunk, options) {
      if (!config.build.lib) {
        throw new Error('Works in lib mode only')
      }

      if (!chunk.isEntry) {
        return code
      }

      const importName = options.format === 'es' ? 'import' : 'require'

      return code.replace(/^(['"]use\sstrict['"];)?/, `$1\n${importName}(${JSON.stringify(cssFile)});\n`);
    }
  }
}
