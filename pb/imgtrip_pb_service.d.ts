// package: pb
// file: imgtrip.proto

import * as imgtrip_pb from "./imgtrip_pb";
import {grpc} from "grpc-web-client";

type ImgtripImages = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.ImagesReq;
  readonly responseType: typeof imgtrip_pb.ImagesRes;
};

type ImgtripDownloadImage = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.DownloadImageReq;
  readonly responseType: typeof imgtrip_pb.DownloadImageRes;
};

type ImgtripUpdateImageVote = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.UpdateImageVoteReq;
  readonly responseType: typeof imgtrip_pb.UpdateImageVoteRes;
};

type ImgtripUpdateImageName = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.UpdateImageNameReq;
  readonly responseType: typeof imgtrip_pb.UpdateImageNameRes;
};

type ImgtripCreateImageTag = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.CreateImageTagReq;
  readonly responseType: typeof imgtrip_pb.CreateImageTagRes;
};

type ImgtripDeleteImageTag = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.DeleteImageTagReq;
  readonly responseType: typeof imgtrip_pb.DeleteImageTagRes;
};

type ImgtripUpdateImageTagVote = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.UpdateImageTagVoteReq;
  readonly responseType: typeof imgtrip_pb.UpdateImageTagVoteRes;
};

type ImgtripAlbums = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.AlbumsReq;
  readonly responseType: typeof imgtrip_pb.AlbumsRes;
};

type ImgtripShowAlbum = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.ShowAlbumReq;
  readonly responseType: typeof imgtrip_pb.ShowAlbumRes;
};

type ImgtripAlbumImages = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.AlbumImagesReq;
  readonly responseType: typeof imgtrip_pb.AlbumImagesRes;
};

type ImgtripCreateAlbumImage = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.CreateAlbumImageReq;
  readonly responseType: typeof imgtrip_pb.CreateAlbumImageRes;
};

type ImgtripDeleteAlbumImage = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.DeleteAlbumImageReq;
  readonly responseType: typeof imgtrip_pb.DeleteAlbumImageRes;
};

type ImgtripCreateAlbum = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.CreateAlbumReq;
  readonly responseType: typeof imgtrip_pb.CreateAlbumRes;
};

type ImgtripUpdateAlbum = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.UpdateAlbumReq;
  readonly responseType: typeof imgtrip_pb.UpdateAlbumRes;
};

type ImgtripDeleteAlbum = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.DeleteAlbumReq;
  readonly responseType: typeof imgtrip_pb.DeleteAlbumRes;
};

type ImgtripUserAlbums = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.UserAlbumsReq;
  readonly responseType: typeof imgtrip_pb.UserAlbumsRes;
};

type ImgtripPosts = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.PostsReq;
  readonly responseType: typeof imgtrip_pb.PostsRes;
};

type ImgtripShowPost = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.ShowPostReq;
  readonly responseType: typeof imgtrip_pb.ShowPostRes;
};

type ImgtripCreateZoomLog = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.CreateZoomLogReq;
  readonly responseType: typeof imgtrip_pb.CreateZoomLogRes;
};

type ImgtripCreateDownloadLog = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.CreateDownloadLogReq;
  readonly responseType: typeof imgtrip_pb.CreateDownloadLogRes;
};

type ImgtripCreateSearchLog = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.CreateSearchLogReq;
  readonly responseType: typeof imgtrip_pb.CreateSearchLogRes;
};

type ImgtripCreateErrorLog = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.CreateErrorLogReq;
  readonly responseType: typeof imgtrip_pb.CreateErrorLogRes;
};

type ImgtripAuthToken = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.AuthTokenReq;
  readonly responseType: typeof imgtrip_pb.AuthTokenRes;
};

type ImgtripCreateToken = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.CreateTokenReq;
  readonly responseType: typeof imgtrip_pb.CreateTokenRes;
};

type ImgtripUpdateToken = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.UpdateTokenReq;
  readonly responseType: typeof imgtrip_pb.UpdateTokenRes;
};

type ImgtripCreateUser = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.CreateUserReq;
  readonly responseType: typeof imgtrip_pb.CreateUserRes;
};

type ImgtripUpdateUser = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.UpdateUserReq;
  readonly responseType: typeof imgtrip_pb.UpdateUserRes;
};

type ImgtripAuthUser = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.AuthUserReq;
  readonly responseType: typeof imgtrip_pb.AuthUserRes;
};

type ImgtripShowUser = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.ShowUserReq;
  readonly responseType: typeof imgtrip_pb.ShowUserRes;
};

type ImgtripCreateJwt = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.CreateJwtReq;
  readonly responseType: typeof imgtrip_pb.CreateJwtRes;
};

type ImgtripCreateVerificationEmail = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.CreateVerificationEmailReq;
  readonly responseType: typeof imgtrip_pb.CreateVerificationEmailRes;
};

type ImgtripUpdatePassword = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.UpdatePasswordReq;
  readonly responseType: typeof imgtrip_pb.UpdatePasswordRes;
};

type ImgtripImageVotes = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.ImageVotesReq;
  readonly responseType: typeof imgtrip_pb.ImageVotesRes;
};

type ImgtripScoreLogs = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.ScoreLogsReq;
  readonly responseType: typeof imgtrip_pb.ScoreLogsRes;
};

type ImgtripComments = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.CommentsReq;
  readonly responseType: typeof imgtrip_pb.CommentsRes;
};

type ImgtripCreateComment = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.CreateCommentReq;
  readonly responseType: typeof imgtrip_pb.CreateCommentRes;
};

type ImgtripUpdateComment = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.UpdateCommentReq;
  readonly responseType: typeof imgtrip_pb.UpdateCommentRes;
};

type ImgtripCreateCommentHost = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.CreateCommentHostReq;
  readonly responseType: typeof imgtrip_pb.CreateCommentHostRes;
};

type ImgtripCreateFingerprint = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.CreateFingerprintReq;
  readonly responseType: typeof imgtrip_pb.CreateFingerprintRes;
};

type ImgtripUpdateFingerprint = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.UpdateFingerprintReq;
  readonly responseType: typeof imgtrip_pb.UpdateFingerprintRes;
};

type ImgtripReviews = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.ReviewsReq;
  readonly responseType: typeof imgtrip_pb.ReviewsRes;
};

type ImgtripUpdateReviewOpinion = {
  readonly methodName: string;
  readonly service: typeof Imgtrip;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof imgtrip_pb.UpdateReviewOpinionReq;
  readonly responseType: typeof imgtrip_pb.UpdateReviewOpinionRes;
};

export class Imgtrip {
  static readonly serviceName: string;
  static readonly Images: ImgtripImages;
  static readonly DownloadImage: ImgtripDownloadImage;
  static readonly UpdateImageVote: ImgtripUpdateImageVote;
  static readonly UpdateImageName: ImgtripUpdateImageName;
  static readonly CreateImageTag: ImgtripCreateImageTag;
  static readonly DeleteImageTag: ImgtripDeleteImageTag;
  static readonly UpdateImageTagVote: ImgtripUpdateImageTagVote;
  static readonly Albums: ImgtripAlbums;
  static readonly ShowAlbum: ImgtripShowAlbum;
  static readonly AlbumImages: ImgtripAlbumImages;
  static readonly CreateAlbumImage: ImgtripCreateAlbumImage;
  static readonly DeleteAlbumImage: ImgtripDeleteAlbumImage;
  static readonly CreateAlbum: ImgtripCreateAlbum;
  static readonly UpdateAlbum: ImgtripUpdateAlbum;
  static readonly DeleteAlbum: ImgtripDeleteAlbum;
  static readonly UserAlbums: ImgtripUserAlbums;
  static readonly Posts: ImgtripPosts;
  static readonly ShowPost: ImgtripShowPost;
  static readonly CreateZoomLog: ImgtripCreateZoomLog;
  static readonly CreateDownloadLog: ImgtripCreateDownloadLog;
  static readonly CreateSearchLog: ImgtripCreateSearchLog;
  static readonly CreateErrorLog: ImgtripCreateErrorLog;
  static readonly AuthToken: ImgtripAuthToken;
  static readonly CreateToken: ImgtripCreateToken;
  static readonly UpdateToken: ImgtripUpdateToken;
  static readonly CreateUser: ImgtripCreateUser;
  static readonly UpdateUser: ImgtripUpdateUser;
  static readonly AuthUser: ImgtripAuthUser;
  static readonly ShowUser: ImgtripShowUser;
  static readonly CreateJwt: ImgtripCreateJwt;
  static readonly CreateVerificationEmail: ImgtripCreateVerificationEmail;
  static readonly UpdatePassword: ImgtripUpdatePassword;
  static readonly ImageVotes: ImgtripImageVotes;
  static readonly ScoreLogs: ImgtripScoreLogs;
  static readonly Comments: ImgtripComments;
  static readonly CreateComment: ImgtripCreateComment;
  static readonly UpdateComment: ImgtripUpdateComment;
  static readonly CreateCommentHost: ImgtripCreateCommentHost;
  static readonly CreateFingerprint: ImgtripCreateFingerprint;
  static readonly UpdateFingerprint: ImgtripUpdateFingerprint;
  static readonly Reviews: ImgtripReviews;
  static readonly UpdateReviewOpinion: ImgtripUpdateReviewOpinion;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }
export type ServiceClientOptions = { transport: grpc.TransportConstructor; debug?: boolean }

interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: () => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<T> {
  write(message: T): BidirectionalStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): BidirectionalStream<T>;
  on(type: 'end', handler: () => void): BidirectionalStream<T>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<T>;
}

export class ImgtripClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  images(
    requestMessage: imgtrip_pb.ImagesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.ImagesRes|null) => void
  ): void;
  images(
    requestMessage: imgtrip_pb.ImagesReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.ImagesRes|null) => void
  ): void;
  downloadImage(
    requestMessage: imgtrip_pb.DownloadImageReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.DownloadImageRes|null) => void
  ): void;
  downloadImage(
    requestMessage: imgtrip_pb.DownloadImageReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.DownloadImageRes|null) => void
  ): void;
  updateImageVote(
    requestMessage: imgtrip_pb.UpdateImageVoteReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.UpdateImageVoteRes|null) => void
  ): void;
  updateImageVote(
    requestMessage: imgtrip_pb.UpdateImageVoteReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.UpdateImageVoteRes|null) => void
  ): void;
  updateImageName(
    requestMessage: imgtrip_pb.UpdateImageNameReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.UpdateImageNameRes|null) => void
  ): void;
  updateImageName(
    requestMessage: imgtrip_pb.UpdateImageNameReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.UpdateImageNameRes|null) => void
  ): void;
  createImageTag(
    requestMessage: imgtrip_pb.CreateImageTagReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.CreateImageTagRes|null) => void
  ): void;
  createImageTag(
    requestMessage: imgtrip_pb.CreateImageTagReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.CreateImageTagRes|null) => void
  ): void;
  deleteImageTag(
    requestMessage: imgtrip_pb.DeleteImageTagReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.DeleteImageTagRes|null) => void
  ): void;
  deleteImageTag(
    requestMessage: imgtrip_pb.DeleteImageTagReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.DeleteImageTagRes|null) => void
  ): void;
  updateImageTagVote(
    requestMessage: imgtrip_pb.UpdateImageTagVoteReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.UpdateImageTagVoteRes|null) => void
  ): void;
  updateImageTagVote(
    requestMessage: imgtrip_pb.UpdateImageTagVoteReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.UpdateImageTagVoteRes|null) => void
  ): void;
  albums(
    requestMessage: imgtrip_pb.AlbumsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.AlbumsRes|null) => void
  ): void;
  albums(
    requestMessage: imgtrip_pb.AlbumsReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.AlbumsRes|null) => void
  ): void;
  showAlbum(
    requestMessage: imgtrip_pb.ShowAlbumReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.ShowAlbumRes|null) => void
  ): void;
  showAlbum(
    requestMessage: imgtrip_pb.ShowAlbumReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.ShowAlbumRes|null) => void
  ): void;
  albumImages(
    requestMessage: imgtrip_pb.AlbumImagesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.AlbumImagesRes|null) => void
  ): void;
  albumImages(
    requestMessage: imgtrip_pb.AlbumImagesReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.AlbumImagesRes|null) => void
  ): void;
  createAlbumImage(
    requestMessage: imgtrip_pb.CreateAlbumImageReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.CreateAlbumImageRes|null) => void
  ): void;
  createAlbumImage(
    requestMessage: imgtrip_pb.CreateAlbumImageReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.CreateAlbumImageRes|null) => void
  ): void;
  deleteAlbumImage(
    requestMessage: imgtrip_pb.DeleteAlbumImageReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.DeleteAlbumImageRes|null) => void
  ): void;
  deleteAlbumImage(
    requestMessage: imgtrip_pb.DeleteAlbumImageReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.DeleteAlbumImageRes|null) => void
  ): void;
  createAlbum(
    requestMessage: imgtrip_pb.CreateAlbumReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.CreateAlbumRes|null) => void
  ): void;
  createAlbum(
    requestMessage: imgtrip_pb.CreateAlbumReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.CreateAlbumRes|null) => void
  ): void;
  updateAlbum(
    requestMessage: imgtrip_pb.UpdateAlbumReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.UpdateAlbumRes|null) => void
  ): void;
  updateAlbum(
    requestMessage: imgtrip_pb.UpdateAlbumReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.UpdateAlbumRes|null) => void
  ): void;
  deleteAlbum(
    requestMessage: imgtrip_pb.DeleteAlbumReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.DeleteAlbumRes|null) => void
  ): void;
  deleteAlbum(
    requestMessage: imgtrip_pb.DeleteAlbumReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.DeleteAlbumRes|null) => void
  ): void;
  userAlbums(
    requestMessage: imgtrip_pb.UserAlbumsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.UserAlbumsRes|null) => void
  ): void;
  userAlbums(
    requestMessage: imgtrip_pb.UserAlbumsReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.UserAlbumsRes|null) => void
  ): void;
  posts(
    requestMessage: imgtrip_pb.PostsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.PostsRes|null) => void
  ): void;
  posts(
    requestMessage: imgtrip_pb.PostsReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.PostsRes|null) => void
  ): void;
  showPost(
    requestMessage: imgtrip_pb.ShowPostReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.ShowPostRes|null) => void
  ): void;
  showPost(
    requestMessage: imgtrip_pb.ShowPostReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.ShowPostRes|null) => void
  ): void;
  createZoomLog(
    requestMessage: imgtrip_pb.CreateZoomLogReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.CreateZoomLogRes|null) => void
  ): void;
  createZoomLog(
    requestMessage: imgtrip_pb.CreateZoomLogReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.CreateZoomLogRes|null) => void
  ): void;
  createDownloadLog(
    requestMessage: imgtrip_pb.CreateDownloadLogReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.CreateDownloadLogRes|null) => void
  ): void;
  createDownloadLog(
    requestMessage: imgtrip_pb.CreateDownloadLogReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.CreateDownloadLogRes|null) => void
  ): void;
  createSearchLog(
    requestMessage: imgtrip_pb.CreateSearchLogReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.CreateSearchLogRes|null) => void
  ): void;
  createSearchLog(
    requestMessage: imgtrip_pb.CreateSearchLogReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.CreateSearchLogRes|null) => void
  ): void;
  createErrorLog(
    requestMessage: imgtrip_pb.CreateErrorLogReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.CreateErrorLogRes|null) => void
  ): void;
  createErrorLog(
    requestMessage: imgtrip_pb.CreateErrorLogReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.CreateErrorLogRes|null) => void
  ): void;
  authToken(
    requestMessage: imgtrip_pb.AuthTokenReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.AuthTokenRes|null) => void
  ): void;
  authToken(
    requestMessage: imgtrip_pb.AuthTokenReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.AuthTokenRes|null) => void
  ): void;
  createToken(
    requestMessage: imgtrip_pb.CreateTokenReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.CreateTokenRes|null) => void
  ): void;
  createToken(
    requestMessage: imgtrip_pb.CreateTokenReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.CreateTokenRes|null) => void
  ): void;
  updateToken(
    requestMessage: imgtrip_pb.UpdateTokenReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.UpdateTokenRes|null) => void
  ): void;
  updateToken(
    requestMessage: imgtrip_pb.UpdateTokenReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.UpdateTokenRes|null) => void
  ): void;
  createUser(
    requestMessage: imgtrip_pb.CreateUserReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.CreateUserRes|null) => void
  ): void;
  createUser(
    requestMessage: imgtrip_pb.CreateUserReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.CreateUserRes|null) => void
  ): void;
  updateUser(
    requestMessage: imgtrip_pb.UpdateUserReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.UpdateUserRes|null) => void
  ): void;
  updateUser(
    requestMessage: imgtrip_pb.UpdateUserReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.UpdateUserRes|null) => void
  ): void;
  authUser(
    requestMessage: imgtrip_pb.AuthUserReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.AuthUserRes|null) => void
  ): void;
  authUser(
    requestMessage: imgtrip_pb.AuthUserReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.AuthUserRes|null) => void
  ): void;
  showUser(
    requestMessage: imgtrip_pb.ShowUserReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.ShowUserRes|null) => void
  ): void;
  showUser(
    requestMessage: imgtrip_pb.ShowUserReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.ShowUserRes|null) => void
  ): void;
  createJwt(
    requestMessage: imgtrip_pb.CreateJwtReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.CreateJwtRes|null) => void
  ): void;
  createJwt(
    requestMessage: imgtrip_pb.CreateJwtReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.CreateJwtRes|null) => void
  ): void;
  createVerificationEmail(
    requestMessage: imgtrip_pb.CreateVerificationEmailReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.CreateVerificationEmailRes|null) => void
  ): void;
  createVerificationEmail(
    requestMessage: imgtrip_pb.CreateVerificationEmailReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.CreateVerificationEmailRes|null) => void
  ): void;
  updatePassword(
    requestMessage: imgtrip_pb.UpdatePasswordReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.UpdatePasswordRes|null) => void
  ): void;
  updatePassword(
    requestMessage: imgtrip_pb.UpdatePasswordReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.UpdatePasswordRes|null) => void
  ): void;
  imageVotes(
    requestMessage: imgtrip_pb.ImageVotesReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.ImageVotesRes|null) => void
  ): void;
  imageVotes(
    requestMessage: imgtrip_pb.ImageVotesReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.ImageVotesRes|null) => void
  ): void;
  scoreLogs(
    requestMessage: imgtrip_pb.ScoreLogsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.ScoreLogsRes|null) => void
  ): void;
  scoreLogs(
    requestMessage: imgtrip_pb.ScoreLogsReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.ScoreLogsRes|null) => void
  ): void;
  comments(
    requestMessage: imgtrip_pb.CommentsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.CommentsRes|null) => void
  ): void;
  comments(
    requestMessage: imgtrip_pb.CommentsReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.CommentsRes|null) => void
  ): void;
  createComment(
    requestMessage: imgtrip_pb.CreateCommentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.CreateCommentRes|null) => void
  ): void;
  createComment(
    requestMessage: imgtrip_pb.CreateCommentReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.CreateCommentRes|null) => void
  ): void;
  updateComment(
    requestMessage: imgtrip_pb.UpdateCommentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.UpdateCommentRes|null) => void
  ): void;
  updateComment(
    requestMessage: imgtrip_pb.UpdateCommentReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.UpdateCommentRes|null) => void
  ): void;
  createCommentHost(
    requestMessage: imgtrip_pb.CreateCommentHostReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.CreateCommentHostRes|null) => void
  ): void;
  createCommentHost(
    requestMessage: imgtrip_pb.CreateCommentHostReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.CreateCommentHostRes|null) => void
  ): void;
  createFingerprint(
    requestMessage: imgtrip_pb.CreateFingerprintReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.CreateFingerprintRes|null) => void
  ): void;
  createFingerprint(
    requestMessage: imgtrip_pb.CreateFingerprintReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.CreateFingerprintRes|null) => void
  ): void;
  updateFingerprint(
    requestMessage: imgtrip_pb.UpdateFingerprintReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.UpdateFingerprintRes|null) => void
  ): void;
  updateFingerprint(
    requestMessage: imgtrip_pb.UpdateFingerprintReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.UpdateFingerprintRes|null) => void
  ): void;
  reviews(
    requestMessage: imgtrip_pb.ReviewsReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.ReviewsRes|null) => void
  ): void;
  reviews(
    requestMessage: imgtrip_pb.ReviewsReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.ReviewsRes|null) => void
  ): void;
  updateReviewOpinion(
    requestMessage: imgtrip_pb.UpdateReviewOpinionReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.UpdateReviewOpinionRes|null) => void
  ): void;
  updateReviewOpinion(
    requestMessage: imgtrip_pb.UpdateReviewOpinionReq,
    callback: (error: ServiceError|null, responseMessage: imgtrip_pb.UpdateReviewOpinionRes|null) => void
  ): void;
}

