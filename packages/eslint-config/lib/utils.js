const fs = require('fs')
const readPkgUp = require('read-pkg-up')
const has = require('lodash.has')

const pkg = readPkgUp.sync({
  cwd: fs.realpathSync(process.cwd()),
}).packageJson

const hasPkgProp = (prop) => has(pkg, prop)
const hasPkgSubProp = (pkgProp) => (prop) => hasPkgProp(`${pkgProp}.${prop}`)
const ifPkgSubProp = (pkgProp) => (prop, t, f) =>
  hasPkgSubProp(pkgProp)(prop) ? t : f

const hasDep = hasPkgSubProp('dependencies')
const hasPeerDep = hasPkgSubProp('peerDependencies')
const hasDevDep = hasPkgSubProp('devDependencies')
const hasAnyDep = (args) =>
  [hasDep, hasDevDep, hasPeerDep].some((fn) => fn(args))

const ifPeerDep = ifPkgSubProp('peerDependencies')
const ifDep = ifPkgSubProp('dependencies')
const ifDevDep = ifPkgSubProp('devDependencies')
const ifAnyDep = (dep, t, f) => (hasAnyDep(dep) ? t : f)

module.exports = {
  pkg,
  hasPeerDep,
  hasDep,
  hasDevDep,
  hasAnyDep,
  ifPeerDep,
  ifDep,
  ifDevDep,
  ifAnyDep,
}
