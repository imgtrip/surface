// package: pb
// file: imgtrip.proto

var imgtrip_pb = require("./imgtrip_pb");
var grpc = require("grpc-web-client").grpc;

var Imgtrip = (function () {
  function Imgtrip() {}
  Imgtrip.serviceName = "pb.Imgtrip";
  return Imgtrip;
}());

Imgtrip.Images = {
  methodName: "Images",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.ImagesReq,
  responseType: imgtrip_pb.ImagesRes
};

Imgtrip.DownloadImage = {
  methodName: "DownloadImage",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.DownloadImageReq,
  responseType: imgtrip_pb.DownloadImageRes
};

Imgtrip.UpdateImageVote = {
  methodName: "UpdateImageVote",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.UpdateImageVoteReq,
  responseType: imgtrip_pb.UpdateImageVoteRes
};

Imgtrip.UpdateImageName = {
  methodName: "UpdateImageName",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.UpdateImageNameReq,
  responseType: imgtrip_pb.UpdateImageNameRes
};

Imgtrip.CreateImageTag = {
  methodName: "CreateImageTag",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.CreateImageTagReq,
  responseType: imgtrip_pb.CreateImageTagRes
};

Imgtrip.DeleteImageTag = {
  methodName: "DeleteImageTag",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.DeleteImageTagReq,
  responseType: imgtrip_pb.DeleteImageTagRes
};

Imgtrip.UpdateImageTagVote = {
  methodName: "UpdateImageTagVote",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.UpdateImageTagVoteReq,
  responseType: imgtrip_pb.UpdateImageTagVoteRes
};

Imgtrip.Albums = {
  methodName: "Albums",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.AlbumsReq,
  responseType: imgtrip_pb.AlbumsRes
};

Imgtrip.ShowAlbum = {
  methodName: "ShowAlbum",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.ShowAlbumReq,
  responseType: imgtrip_pb.ShowAlbumRes
};

Imgtrip.AlbumImages = {
  methodName: "AlbumImages",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.AlbumImagesReq,
  responseType: imgtrip_pb.AlbumImagesRes
};

Imgtrip.CreateAlbumImage = {
  methodName: "CreateAlbumImage",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.CreateAlbumImageReq,
  responseType: imgtrip_pb.CreateAlbumImageRes
};

Imgtrip.DeleteAlbumImage = {
  methodName: "DeleteAlbumImage",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.DeleteAlbumImageReq,
  responseType: imgtrip_pb.DeleteAlbumImageRes
};

Imgtrip.CreateAlbum = {
  methodName: "CreateAlbum",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.CreateAlbumReq,
  responseType: imgtrip_pb.CreateAlbumRes
};

Imgtrip.UpdateAlbum = {
  methodName: "UpdateAlbum",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.UpdateAlbumReq,
  responseType: imgtrip_pb.UpdateAlbumRes
};

Imgtrip.DeleteAlbum = {
  methodName: "DeleteAlbum",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.DeleteAlbumReq,
  responseType: imgtrip_pb.DeleteAlbumRes
};

Imgtrip.UserAlbums = {
  methodName: "UserAlbums",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.UserAlbumsReq,
  responseType: imgtrip_pb.UserAlbumsRes
};

Imgtrip.Posts = {
  methodName: "Posts",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.PostsReq,
  responseType: imgtrip_pb.PostsRes
};

Imgtrip.ShowPost = {
  methodName: "ShowPost",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.ShowPostReq,
  responseType: imgtrip_pb.ShowPostRes
};

Imgtrip.CreateZoomLog = {
  methodName: "CreateZoomLog",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.CreateZoomLogReq,
  responseType: imgtrip_pb.CreateZoomLogRes
};

Imgtrip.CreateDownloadLog = {
  methodName: "CreateDownloadLog",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.CreateDownloadLogReq,
  responseType: imgtrip_pb.CreateDownloadLogRes
};

Imgtrip.CreateSearchLog = {
  methodName: "CreateSearchLog",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.CreateSearchLogReq,
  responseType: imgtrip_pb.CreateSearchLogRes
};

Imgtrip.CreateErrorLog = {
  methodName: "CreateErrorLog",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.CreateErrorLogReq,
  responseType: imgtrip_pb.CreateErrorLogRes
};

Imgtrip.AuthToken = {
  methodName: "AuthToken",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.AuthTokenReq,
  responseType: imgtrip_pb.AuthTokenRes
};

Imgtrip.CreateToken = {
  methodName: "CreateToken",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.CreateTokenReq,
  responseType: imgtrip_pb.CreateTokenRes
};

Imgtrip.UpdateToken = {
  methodName: "UpdateToken",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.UpdateTokenReq,
  responseType: imgtrip_pb.UpdateTokenRes
};

Imgtrip.CreateUser = {
  methodName: "CreateUser",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.CreateUserReq,
  responseType: imgtrip_pb.CreateUserRes
};

Imgtrip.UpdateUser = {
  methodName: "UpdateUser",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.UpdateUserReq,
  responseType: imgtrip_pb.UpdateUserRes
};

Imgtrip.AuthUser = {
  methodName: "AuthUser",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.AuthUserReq,
  responseType: imgtrip_pb.AuthUserRes
};

Imgtrip.ShowUser = {
  methodName: "ShowUser",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.ShowUserReq,
  responseType: imgtrip_pb.ShowUserRes
};

Imgtrip.CreateJwt = {
  methodName: "CreateJwt",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.CreateJwtReq,
  responseType: imgtrip_pb.CreateJwtRes
};

Imgtrip.CreateVerificationEmail = {
  methodName: "CreateVerificationEmail",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.CreateVerificationEmailReq,
  responseType: imgtrip_pb.CreateVerificationEmailRes
};

Imgtrip.UpdatePassword = {
  methodName: "UpdatePassword",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.UpdatePasswordReq,
  responseType: imgtrip_pb.UpdatePasswordRes
};

Imgtrip.ImageVotes = {
  methodName: "ImageVotes",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.ImageVotesReq,
  responseType: imgtrip_pb.ImageVotesRes
};

Imgtrip.ScoreLogs = {
  methodName: "ScoreLogs",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.ScoreLogsReq,
  responseType: imgtrip_pb.ScoreLogsRes
};

Imgtrip.Comments = {
  methodName: "Comments",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.CommentsReq,
  responseType: imgtrip_pb.CommentsRes
};

Imgtrip.CreateComment = {
  methodName: "CreateComment",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.CreateCommentReq,
  responseType: imgtrip_pb.CreateCommentRes
};

Imgtrip.UpdateComment = {
  methodName: "UpdateComment",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.UpdateCommentReq,
  responseType: imgtrip_pb.UpdateCommentRes
};

Imgtrip.CreateCommentHost = {
  methodName: "CreateCommentHost",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.CreateCommentHostReq,
  responseType: imgtrip_pb.CreateCommentHostRes
};

Imgtrip.CreateFingerprint = {
  methodName: "CreateFingerprint",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.CreateFingerprintReq,
  responseType: imgtrip_pb.CreateFingerprintRes
};

Imgtrip.UpdateFingerprint = {
  methodName: "UpdateFingerprint",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.UpdateFingerprintReq,
  responseType: imgtrip_pb.UpdateFingerprintRes
};

Imgtrip.Reviews = {
  methodName: "Reviews",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.ReviewsReq,
  responseType: imgtrip_pb.ReviewsRes
};

Imgtrip.UpdateReviewOpinion = {
  methodName: "UpdateReviewOpinion",
  service: Imgtrip,
  requestStream: false,
  responseStream: false,
  requestType: imgtrip_pb.UpdateReviewOpinionReq,
  responseType: imgtrip_pb.UpdateReviewOpinionRes
};

exports.Imgtrip = Imgtrip;

function ImgtripClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ImgtripClient.prototype.images = function images(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.Images, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.downloadImage = function downloadImage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.DownloadImage, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.updateImageVote = function updateImageVote(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.UpdateImageVote, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.updateImageName = function updateImageName(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.UpdateImageName, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.createImageTag = function createImageTag(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.CreateImageTag, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.deleteImageTag = function deleteImageTag(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.DeleteImageTag, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.updateImageTagVote = function updateImageTagVote(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.UpdateImageTagVote, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.albums = function albums(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.Albums, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.showAlbum = function showAlbum(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.ShowAlbum, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.albumImages = function albumImages(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.AlbumImages, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.createAlbumImage = function createAlbumImage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.CreateAlbumImage, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.deleteAlbumImage = function deleteAlbumImage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.DeleteAlbumImage, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.createAlbum = function createAlbum(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.CreateAlbum, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.updateAlbum = function updateAlbum(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.UpdateAlbum, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.deleteAlbum = function deleteAlbum(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.DeleteAlbum, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.userAlbums = function userAlbums(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.UserAlbums, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.posts = function posts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.Posts, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.showPost = function showPost(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.ShowPost, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.createZoomLog = function createZoomLog(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.CreateZoomLog, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.createDownloadLog = function createDownloadLog(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.CreateDownloadLog, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.createSearchLog = function createSearchLog(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.CreateSearchLog, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.createErrorLog = function createErrorLog(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.CreateErrorLog, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.authToken = function authToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.AuthToken, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.createToken = function createToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.CreateToken, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.updateToken = function updateToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.UpdateToken, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.createUser = function createUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.CreateUser, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.updateUser = function updateUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.UpdateUser, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.authUser = function authUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.AuthUser, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.showUser = function showUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.ShowUser, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.createJwt = function createJwt(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.CreateJwt, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.createVerificationEmail = function createVerificationEmail(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.CreateVerificationEmail, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.updatePassword = function updatePassword(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.UpdatePassword, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.imageVotes = function imageVotes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.ImageVotes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.scoreLogs = function scoreLogs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.ScoreLogs, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.comments = function comments(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.Comments, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.createComment = function createComment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.CreateComment, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.updateComment = function updateComment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.UpdateComment, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.createCommentHost = function createCommentHost(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.CreateCommentHost, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.createFingerprint = function createFingerprint(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.CreateFingerprint, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.updateFingerprint = function updateFingerprint(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.UpdateFingerprint, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.reviews = function reviews(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.Reviews, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

ImgtripClient.prototype.updateReviewOpinion = function updateReviewOpinion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Imgtrip.UpdateReviewOpinion, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

exports.ImgtripClient = ImgtripClient;

