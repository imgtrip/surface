let Fingerprint2
if (typeof  window !== 'undefined') {
  Fingerprint2 = require('fingerprintjs2')
}

let hash: string

export const getFingerprint = () => {
  return new Promise((resolve, reject) => {
    if (!Fingerprint2) {
      reject()
      return
    }

    if (hash) {
      resolve(hash)
      return
    }

    new Fingerprint2().get((fp, components) => {
      hash = fp
      resolve(hash)
    })
  })
}



