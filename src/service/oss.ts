const co = require('co')
const OSS = require('ali-oss')
const _ = require('lodash')
const AVAILABLE_IMAGE_STYLES = [
  's_1920_1080',
  's_1600_900',
  's_1440_900',
  's_1536_864',
  's_1366_768',
  's_1280_720',
]

const client = new OSS({
  region: process.env.OSS_REGION,
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  bucket: process.env.OSS_BUCKET_NAME,
})


export const download = async (objectKey, res) => {
  const result = await client.get(objectKey)
  const hasStyle = objectKey.indexOf('!')
  let filename = objectKey
  if (hasStyle) {
    filename = _.split(objectKey, '!', 1)[0]
  }
  filename = 'imgtrip-com-' + filename.replace(/\//g, '')

  res.set({
    'Pragma': 'public',
    'Expires': '0',
    'Cache-Control': 'must-revalidate, post-check=0, pre-check=0,charset=utf-8',
    'Content-Type': 'image/jpeg',
    'Content-Disposition': `attachment; filename=${filename}`,
    'Content-Transfer-Encoding': 'binary',
  }).end(result.content)
}

export const styleSelector = (height, width) => {
  const index = _.indexOf(AVAILABLE_IMAGE_STYLES, _.join(['s', height, width], '_'))
  if (index === -1) {
    return undefined
  }
  return AVAILABLE_IMAGE_STYLES[index]
}

// const OssClient = {
//   download: async function (objectKey, res) {
//     co(function* () {
//       const result = yield OssClient.client.get(objectKey)
//       const hasStyle = objectKey.indexOf('!')
//       let filename = objectKey
//       if (hasStyle) {
//         filename = _.split(objectKey, '!', 1)[0]
//       }
//       filename = 'imgtrip-com-' + filename.replace(/\//g, '')
//
//       res.set({
//         'Pragma': 'public',
//         'Expires': '0',
//         'Cache-Control': 'must-revalidate, post-check=0, pre-check=0,charset=utf-8',
//         'Content-Type': 'image/jpeg',
//         'Content-Disposition': `attachment; filename=${filename}`,
//         'Content-Transfer-Encoding': 'binary',
//       }).end(result.content)
//     }).catch(function (err) {
//       res.status(503)
//       res.end()
//     })
//   },
//   styleSelector: function (height, width) {
//     const index = _.indexOf(AVAILABLE_IMAGE_STYLES, _.join(['s', height, width], '_'))
//     if (index === -1) {
//       return undefined
//     }
//     return AVAILABLE_IMAGE_STYLES[index]
//   },
// }
//
// export default OssClient