
import SimpleGit from 'simple-git'
import os from 'os'
import Path from 'path'
import Fs from 'fs-extra'
import Klaw from 'klaw'

const COI_DIR = Path.join(os.homedir(), "AppData", "Roaming", "Captain of Industry")
const SAVES_DIR = Path.join(COI_DIR, "Saves")
const GIT_DIR = Path.join(__dirname, '..')

console.log(`Opening ${GIT_DIR}`)
const git = SimpleGit(GIT_DIR)
const status = await git.status()

if (status.isClean()) {
  let saves = []
  for await (const file of Klaw(SAVES_DIR)) {
    //console.log(file.path, file.stats.ctimeMs)
    if (file.stats.isFile()) {
      saves.push({
        path: file.path,
        ctime: file.stats.ctime,
        ctimeMs: file.stats.ctimeMs,
      })
    }
  }

  saves.sort((a, b) => a.ctimeMs - b.ctimeMs0)
  for (let file of saves) {
    const path = Path.relative(file.path, COI_DIR)
    console.log(path, file.ctime)
  }

  // copy/hardlink, add, commit

  //git.add()
} else {
  console.log("cannot continue. directory is not clean")
  console.log("\nmodified:")
  for (let file of status.modified) {
    console.log("  ", file)
  }
  console.log("\nnew:")
  for (let file of status.not_added) {
    console.log("  ", file)
  }
  // console.log("\nindex:")
  // for (let file of status.files) {
  //   console.log(file.path, file.index + file.working_dir)
  // }
}
