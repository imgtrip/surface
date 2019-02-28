import {request} from './request'
import {getFingerprint} from '../service/fingerprint'
import {CreateDownloadLogReq, CreateFingerprintReq, CreateZoomLogReq} from '../../pb/imgtrip_pb'
import {Imgtrip} from '../../pb/imgtrip_pb_service'

const requestAdapter = (callback) => {
  getFingerprint()
    .then((fp: string) => {
      callback(fp)
    })
}

export const createZoomLog = (imageId: number) => {
  requestAdapter((fp) => {
    const req = new CreateZoomLogReq()
    req.setFingerprint(fp)
    req.setImageId(imageId)
    request(req, Imgtrip.CreateZoomLog).then().catch()
  })
}

export const createDownloadLog = (imageId: number) => {
  requestAdapter((fp) => {
    const req = new CreateDownloadLogReq()
    req.setFingerprint(fp)
    req.setImageId(imageId)
    request(req, Imgtrip.CreateDownloadLog).then().catch()
  })
}

export const createFingerprint = () => {
  requestAdapter((fp) => {
    const req = new CreateFingerprintReq()
    req.setHash(fp)
    request(req, Imgtrip.CreateFingerprint).then().catch()
  })
}

