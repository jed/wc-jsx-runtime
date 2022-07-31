export default {
  testDir: './test',

  webServer: {
    command: 'esbuild test/index.jsx --bundle --outdir=test && cd test && serve',
    port: 3000,
  }
}
