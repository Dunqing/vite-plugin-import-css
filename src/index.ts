import type { Plugin, ResolvedConfig } from 'vite'

interface PluginOptions {
  /**
   * @default './style.css'
   */
  cssFile?: string
  /**
   * use dynamic import
   * @default false
   */
  dynamicImport?: boolean
}

export default function plugin({ cssFile = './style.css', dynamicImport = false }: PluginOptions = {}): Plugin {
  let config: ResolvedConfig
  return {
    name: 'vite-plugin-import-css',
    apply: 'build',
    configResolved(_config) {
      config = _config
    },
    renderChunk(code, chunk, options) {
      if (!config.build.lib)
        throw new Error('Works in lib mode only')

      if (!chunk.isEntry)
        return code

      const importName = options.format === 'es' ? 'import' : 'require'
      let importCode = `${importName}(${JSON.stringify(cssFile)});`

      if (options.format === 'es' && !dynamicImport)
        importCode = `import ${JSON.stringify(cssFile)}`

      return code.replace(/^(['"]use\sstrict['"];)?/, `$1\n${importCode}\n`)
    },
  }
}
