// package: pb
// file: imgtrip.proto

import * as jspb from "google-protobuf";

export class Album extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getUserId(): number;
  setUserId(value: number): void;

  getCreatedAt(): string;
  setCreatedAt(value: string): void;

  getComments(): number;
  setComments(value: number): void;

  getViews(): number;
  setViews(value: number): void;

  getCover(): string;
  setCover(value: string): void;

  getAmounts(): number;
  setAmounts(value: number): void;

  getCommentHostId(): number;
  setCommentHostId(value: number): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Album.AsObject;
  static toObject(includeInstance: boolean, msg: Album): Album.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Album, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Album;
  static deserializeBinaryFromReader(message: Album, reader: jspb.BinaryReader): Album;
}

export namespace Album {
  export type AsObject = {
    id: number,
    title: string,
    userId: number,
    createdAt: string,
    comments: number,
    views: number,
    cover: string,
    amounts: number,
    commentHostId: number,
    description: string,
  }
}

export class Image extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getSrc(): string;
  setSrc(value: string): void;

  getFavorited(): boolean;
  setFavorited(value: boolean): void;

  getVoteUp(): number;
  setVoteUp(value: number): void;

  getVoteDown(): number;
  setVoteDown(value: number): void;

  clearTagsList(): void;
  getTagsList(): Array<ImageTag>;
  setTagsList(value: Array<ImageTag>): void;
  addTags(value?: ImageTag, index?: number): ImageTag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Image.AsObject;
  static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Image;
  static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
}

export namespace Image {
  export type AsObject = {
    id: number,
    name: string,
    src: string,
    favorited: boolean,
    voteUp: number,
    voteDown: number,
    tagsList: Array<ImageTag.AsObject>,
  }
}

export class ImageTag extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getVoteUp(): number;
  setVoteUp(value: number): void;

  getIsVoted(): boolean;
  setIsVoted(value: boolean): void;

  getImageTagId(): number;
  setImageTagId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageTag.AsObject;
  static toObject(includeInstance: boolean, msg: ImageTag): ImageTag.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImageTag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageTag;
  static deserializeBinaryFromReader(message: ImageTag, reader: jspb.BinaryReader): ImageTag;
}

export namespace ImageTag {
  export type AsObject = {
    id: number,
    name: string,
    voteUp: number,
    isVoted: boolean,
    imageTagId: number,
  }
}

export class Post extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getBody(): string;
  setBody(value: string): void;

  getUserId(): number;
  setUserId(value: number): void;

  getCreatedAt(): string;
  setCreatedAt(value: string): void;

  getComments(): number;
  setComments(value: number): void;

  getViews(): number;
  setViews(value: number): void;

  getCover(): string;
  setCover(value: string): void;

  getCommentHostId(): number;
  setCommentHostId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Post.AsObject;
  static toObject(includeInstance: boolean, msg: Post): Post.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Post, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Post;
  static deserializeBinaryFromReader(message: Post, reader: jspb.BinaryReader): Post;
}

export namespace Post {
  export type AsObject = {
    id: number,
    title: string,
    body: string,
    userId: number,
    createdAt: string,
    comments: number,
    views: number,
    cover: string,
    commentHostId: number,
  }
}

export class ImagesReq extends jspb.Message {
  getStart(): number;
  setStart(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  getSort(): ImageSorts;
  setSort(value: ImageSorts): void;

  getRandom(): boolean;
  setRandom(value: boolean): void;

  getTotal(): boolean;
  setTotal(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImagesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ImagesReq): ImagesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImagesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImagesReq;
  static deserializeBinaryFromReader(message: ImagesReq, reader: jspb.BinaryReader): ImagesReq;
}

export namespace ImagesReq {
  export type AsObject = {
    start: number,
    limit: number,
    sort: ImageSorts,
    random: boolean,
    total: boolean,
  }
}

export class ImagesRes extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<Image>;
  setItemsList(value: Array<Image>): void;
  addItems(value?: Image, index?: number): Image;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImagesRes.AsObject;
  static toObject(includeInstance: boolean, msg: ImagesRes): ImagesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImagesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImagesRes;
  static deserializeBinaryFromReader(message: ImagesRes, reader: jspb.BinaryReader): ImagesRes;
}

export namespace ImagesRes {
  export type AsObject = {
    itemsList: Array<Image.AsObject>,
    total: number,
  }
}

export class DownloadImageReq extends jspb.Message {
  getImageId(): number;
  setImageId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadImageReq.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadImageReq): DownloadImageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadImageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadImageReq;
  static deserializeBinaryFromReader(message: DownloadImageReq, reader: jspb.BinaryReader): DownloadImageReq;
}

export namespace DownloadImageReq {
  export type AsObject = {
    imageId: number,
  }
}

export class DownloadImageRes extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadImageRes.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadImageRes): DownloadImageRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadImageRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadImageRes;
  static deserializeBinaryFromReader(message: DownloadImageRes, reader: jspb.BinaryReader): DownloadImageRes;
}

export namespace DownloadImageRes {
  export type AsObject = {
    status: boolean,
  }
}

export class UpdateImageVoteReq extends jspb.Message {
  getImageId(): number;
  setImageId(value: number): void;

  getVote(): number;
  setVote(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateImageVoteReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateImageVoteReq): UpdateImageVoteReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateImageVoteReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateImageVoteReq;
  static deserializeBinaryFromReader(message: UpdateImageVoteReq, reader: jspb.BinaryReader): UpdateImageVoteReq;
}

export namespace UpdateImageVoteReq {
  export type AsObject = {
    imageId: number,
    vote: number,
  }
}

export class UpdateImageVoteRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateImageVoteRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateImageVoteRes): UpdateImageVoteRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateImageVoteRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateImageVoteRes;
  static deserializeBinaryFromReader(message: UpdateImageVoteRes, reader: jspb.BinaryReader): UpdateImageVoteRes;
}

export namespace UpdateImageVoteRes {
  export type AsObject = {
  }
}

export class UpdateImageNameReq extends jspb.Message {
  getImageId(): number;
  setImageId(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateImageNameReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateImageNameReq): UpdateImageNameReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateImageNameReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateImageNameReq;
  static deserializeBinaryFromReader(message: UpdateImageNameReq, reader: jspb.BinaryReader): UpdateImageNameReq;
}

export namespace UpdateImageNameReq {
  export type AsObject = {
    imageId: number,
    name: string,
  }
}

export class UpdateImageNameRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateImageNameRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateImageNameRes): UpdateImageNameRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateImageNameRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateImageNameRes;
  static deserializeBinaryFromReader(message: UpdateImageNameRes, reader: jspb.BinaryReader): UpdateImageNameRes;
}

export namespace UpdateImageNameRes {
  export type AsObject = {
  }
}

export class CreateImageTagReq extends jspb.Message {
  getImageId(): number;
  setImageId(value: number): void;

  getTag(): string;
  setTag(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateImageTagReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateImageTagReq): CreateImageTagReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateImageTagReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateImageTagReq;
  static deserializeBinaryFromReader(message: CreateImageTagReq, reader: jspb.BinaryReader): CreateImageTagReq;
}

export namespace CreateImageTagReq {
  export type AsObject = {
    imageId: number,
    tag: string,
  }
}

export class CreateImageTagRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateImageTagRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateImageTagRes): CreateImageTagRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateImageTagRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateImageTagRes;
  static deserializeBinaryFromReader(message: CreateImageTagRes, reader: jspb.BinaryReader): CreateImageTagRes;
}

export namespace CreateImageTagRes {
  export type AsObject = {
  }
}

export class DeleteImageTagReq extends jspb.Message {
  getImageId(): number;
  setImageId(value: number): void;

  getTagId(): number;
  setTagId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteImageTagReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteImageTagReq): DeleteImageTagReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteImageTagReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteImageTagReq;
  static deserializeBinaryFromReader(message: DeleteImageTagReq, reader: jspb.BinaryReader): DeleteImageTagReq;
}

export namespace DeleteImageTagReq {
  export type AsObject = {
    imageId: number,
    tagId: number,
  }
}

export class DeleteImageTagRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteImageTagRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteImageTagRes): DeleteImageTagRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteImageTagRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteImageTagRes;
  static deserializeBinaryFromReader(message: DeleteImageTagRes, reader: jspb.BinaryReader): DeleteImageTagRes;
}

export namespace DeleteImageTagRes {
  export type AsObject = {
  }
}

export class UpdateImageTagVoteReq extends jspb.Message {
  getImageId(): number;
  setImageId(value: number): void;

  getVote(): number;
  setVote(value: number): void;

  getTagId(): number;
  setTagId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateImageTagVoteReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateImageTagVoteReq): UpdateImageTagVoteReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateImageTagVoteReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateImageTagVoteReq;
  static deserializeBinaryFromReader(message: UpdateImageTagVoteReq, reader: jspb.BinaryReader): UpdateImageTagVoteReq;
}

export namespace UpdateImageTagVoteReq {
  export type AsObject = {
    imageId: number,
    vote: number,
    tagId: number,
  }
}

export class UpdateImageTagVoteRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateImageTagVoteRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateImageTagVoteRes): UpdateImageTagVoteRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateImageTagVoteRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateImageTagVoteRes;
  static deserializeBinaryFromReader(message: UpdateImageTagVoteRes, reader: jspb.BinaryReader): UpdateImageTagVoteRes;
}

export namespace UpdateImageTagVoteRes {
  export type AsObject = {
  }
}

export class AlbumsReq extends jspb.Message {
  getStart(): number;
  setStart(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  getOrder(): number;
  setOrder(value: number): void;

  getTotal(): boolean;
  setTotal(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlbumsReq.AsObject;
  static toObject(includeInstance: boolean, msg: AlbumsReq): AlbumsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AlbumsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlbumsReq;
  static deserializeBinaryFromReader(message: AlbumsReq, reader: jspb.BinaryReader): AlbumsReq;
}

export namespace AlbumsReq {
  export type AsObject = {
    start: number,
    limit: number,
    order: number,
    total: boolean,
  }
}

export class AlbumsRes extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<Album>;
  setItemsList(value: Array<Album>): void;
  addItems(value?: Album, index?: number): Album;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlbumsRes.AsObject;
  static toObject(includeInstance: boolean, msg: AlbumsRes): AlbumsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AlbumsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlbumsRes;
  static deserializeBinaryFromReader(message: AlbumsRes, reader: jspb.BinaryReader): AlbumsRes;
}

export namespace AlbumsRes {
  export type AsObject = {
    itemsList: Array<Album.AsObject>,
    total: number,
  }
}

export class AlbumImagesReq extends jspb.Message {
  getStart(): number;
  setStart(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  getOrder(): number;
  setOrder(value: number): void;

  getAlbumId(): number;
  setAlbumId(value: number): void;

  getTotal(): boolean;
  setTotal(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlbumImagesReq.AsObject;
  static toObject(includeInstance: boolean, msg: AlbumImagesReq): AlbumImagesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AlbumImagesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlbumImagesReq;
  static deserializeBinaryFromReader(message: AlbumImagesReq, reader: jspb.BinaryReader): AlbumImagesReq;
}

export namespace AlbumImagesReq {
  export type AsObject = {
    start: number,
    limit: number,
    order: number,
    albumId: number,
    total: boolean,
  }
}

export class AlbumImagesRes extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<Image>;
  setItemsList(value: Array<Image>): void;
  addItems(value?: Image, index?: number): Image;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlbumImagesRes.AsObject;
  static toObject(includeInstance: boolean, msg: AlbumImagesRes): AlbumImagesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AlbumImagesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlbumImagesRes;
  static deserializeBinaryFromReader(message: AlbumImagesRes, reader: jspb.BinaryReader): AlbumImagesRes;
}

export namespace AlbumImagesRes {
  export type AsObject = {
    itemsList: Array<Image.AsObject>,
    total: number,
  }
}

export class ShowAlbumReq extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShowAlbumReq.AsObject;
  static toObject(includeInstance: boolean, msg: ShowAlbumReq): ShowAlbumReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShowAlbumReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShowAlbumReq;
  static deserializeBinaryFromReader(message: ShowAlbumReq, reader: jspb.BinaryReader): ShowAlbumReq;
}

export namespace ShowAlbumReq {
  export type AsObject = {
    id: number,
  }
}

export class ShowAlbumRes extends jspb.Message {
  hasAlbum(): boolean;
  clearAlbum(): void;
  getAlbum(): Album | undefined;
  setAlbum(value?: Album): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShowAlbumRes.AsObject;
  static toObject(includeInstance: boolean, msg: ShowAlbumRes): ShowAlbumRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShowAlbumRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShowAlbumRes;
  static deserializeBinaryFromReader(message: ShowAlbumRes, reader: jspb.BinaryReader): ShowAlbumRes;
}

export namespace ShowAlbumRes {
  export type AsObject = {
    album?: Album.AsObject,
  }
}

export class CreateAlbumReq extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAlbumReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAlbumReq): CreateAlbumReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAlbumReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAlbumReq;
  static deserializeBinaryFromReader(message: CreateAlbumReq, reader: jspb.BinaryReader): CreateAlbumReq;
}

export namespace CreateAlbumReq {
  export type AsObject = {
    title: string,
    userId: number,
  }
}

export class CreateAlbumRes extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAlbumRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAlbumRes): CreateAlbumRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAlbumRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAlbumRes;
  static deserializeBinaryFromReader(message: CreateAlbumRes, reader: jspb.BinaryReader): CreateAlbumRes;
}

export namespace CreateAlbumRes {
  export type AsObject = {
    id: number,
  }
}

export class UpdateAlbumReq extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getComments(): number;
  setComments(value: number): void;

  getViews(): number;
  setViews(value: number): void;

  getCover(): string;
  setCover(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAlbumReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAlbumReq): UpdateAlbumReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAlbumReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAlbumReq;
  static deserializeBinaryFromReader(message: UpdateAlbumReq, reader: jspb.BinaryReader): UpdateAlbumReq;
}

export namespace UpdateAlbumReq {
  export type AsObject = {
    id: number,
    title: string,
    comments: number,
    views: number,
    cover: string,
    description: string,
  }
}

export class UpdateAlbumRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAlbumRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAlbumRes): UpdateAlbumRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAlbumRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAlbumRes;
  static deserializeBinaryFromReader(message: UpdateAlbumRes, reader: jspb.BinaryReader): UpdateAlbumRes;
}

export namespace UpdateAlbumRes {
  export type AsObject = {
  }
}

export class CreateAlbumImageReq extends jspb.Message {
  getAlbumId(): number;
  setAlbumId(value: number): void;

  getImageId(): number;
  setImageId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAlbumImageReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAlbumImageReq): CreateAlbumImageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAlbumImageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAlbumImageReq;
  static deserializeBinaryFromReader(message: CreateAlbumImageReq, reader: jspb.BinaryReader): CreateAlbumImageReq;
}

export namespace CreateAlbumImageReq {
  export type AsObject = {
    albumId: number,
    imageId: number,
  }
}

export class CreateAlbumImageRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAlbumImageRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAlbumImageRes): CreateAlbumImageRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAlbumImageRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAlbumImageRes;
  static deserializeBinaryFromReader(message: CreateAlbumImageRes, reader: jspb.BinaryReader): CreateAlbumImageRes;
}

export namespace CreateAlbumImageRes {
  export type AsObject = {
  }
}

export class DeleteAlbumImageReq extends jspb.Message {
  getAlbumId(): number;
  setAlbumId(value: number): void;

  getImageId(): number;
  setImageId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAlbumImageReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAlbumImageReq): DeleteAlbumImageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAlbumImageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAlbumImageReq;
  static deserializeBinaryFromReader(message: DeleteAlbumImageReq, reader: jspb.BinaryReader): DeleteAlbumImageReq;
}

export namespace DeleteAlbumImageReq {
  export type AsObject = {
    albumId: number,
    imageId: number,
  }
}

export class DeleteAlbumImageRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAlbumImageRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAlbumImageRes): DeleteAlbumImageRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAlbumImageRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAlbumImageRes;
  static deserializeBinaryFromReader(message: DeleteAlbumImageRes, reader: jspb.BinaryReader): DeleteAlbumImageRes;
}

export namespace DeleteAlbumImageRes {
  export type AsObject = {
  }
}

export class DeleteAlbumReq extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAlbumReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAlbumReq): DeleteAlbumReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAlbumReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAlbumReq;
  static deserializeBinaryFromReader(message: DeleteAlbumReq, reader: jspb.BinaryReader): DeleteAlbumReq;
}

export namespace DeleteAlbumReq {
  export type AsObject = {
    id: number,
  }
}

export class DeleteAlbumRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAlbumRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAlbumRes): DeleteAlbumRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAlbumRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAlbumRes;
  static deserializeBinaryFromReader(message: DeleteAlbumRes, reader: jspb.BinaryReader): DeleteAlbumRes;
}

export namespace DeleteAlbumRes {
  export type AsObject = {
  }
}

export class UserAlbumsReq extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserAlbumsReq.AsObject;
  static toObject(includeInstance: boolean, msg: UserAlbumsReq): UserAlbumsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserAlbumsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserAlbumsReq;
  static deserializeBinaryFromReader(message: UserAlbumsReq, reader: jspb.BinaryReader): UserAlbumsReq;
}

export namespace UserAlbumsReq {
  export type AsObject = {
    userId: number,
  }
}

export class UserAlbumsRes extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<Album>;
  setItemsList(value: Array<Album>): void;
  addItems(value?: Album, index?: number): Album;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserAlbumsRes.AsObject;
  static toObject(includeInstance: boolean, msg: UserAlbumsRes): UserAlbumsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserAlbumsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserAlbumsRes;
  static deserializeBinaryFromReader(message: UserAlbumsRes, reader: jspb.BinaryReader): UserAlbumsRes;
}

export namespace UserAlbumsRes {
  export type AsObject = {
    itemsList: Array<Album.AsObject>,
  }
}

export class PostsReq extends jspb.Message {
  getStart(): number;
  setStart(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostsReq.AsObject;
  static toObject(includeInstance: boolean, msg: PostsReq): PostsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostsReq;
  static deserializeBinaryFromReader(message: PostsReq, reader: jspb.BinaryReader): PostsReq;
}

export namespace PostsReq {
  export type AsObject = {
    start: number,
    limit: number,
  }
}

export class PostsRes extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<Post>;
  setItemsList(value: Array<Post>): void;
  addItems(value?: Post, index?: number): Post;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostsRes.AsObject;
  static toObject(includeInstance: boolean, msg: PostsRes): PostsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostsRes;
  static deserializeBinaryFromReader(message: PostsRes, reader: jspb.BinaryReader): PostsRes;
}

export namespace PostsRes {
  export type AsObject = {
    itemsList: Array<Post.AsObject>,
  }
}

export class ShowPostReq extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShowPostReq.AsObject;
  static toObject(includeInstance: boolean, msg: ShowPostReq): ShowPostReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShowPostReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShowPostReq;
  static deserializeBinaryFromReader(message: ShowPostReq, reader: jspb.BinaryReader): ShowPostReq;
}

export namespace ShowPostReq {
  export type AsObject = {
    id: number,
  }
}

export class ShowPostRes extends jspb.Message {
  hasPost(): boolean;
  clearPost(): void;
  getPost(): Post | undefined;
  setPost(value?: Post): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShowPostRes.AsObject;
  static toObject(includeInstance: boolean, msg: ShowPostRes): ShowPostRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShowPostRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShowPostRes;
  static deserializeBinaryFromReader(message: ShowPostRes, reader: jspb.BinaryReader): ShowPostRes;
}

export namespace ShowPostRes {
  export type AsObject = {
    post?: Post.AsObject,
  }
}

export class CreateZoomLogReq extends jspb.Message {
  getFingerprint(): string;
  setFingerprint(value: string): void;

  getImageId(): number;
  setImageId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateZoomLogReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateZoomLogReq): CreateZoomLogReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateZoomLogReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateZoomLogReq;
  static deserializeBinaryFromReader(message: CreateZoomLogReq, reader: jspb.BinaryReader): CreateZoomLogReq;
}

export namespace CreateZoomLogReq {
  export type AsObject = {
    fingerprint: string,
    imageId: number,
  }
}

export class CreateZoomLogRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateZoomLogRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateZoomLogRes): CreateZoomLogRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateZoomLogRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateZoomLogRes;
  static deserializeBinaryFromReader(message: CreateZoomLogRes, reader: jspb.BinaryReader): CreateZoomLogRes;
}

export namespace CreateZoomLogRes {
  export type AsObject = {
  }
}

export class CreateDownloadLogReq extends jspb.Message {
  getFingerprint(): string;
  setFingerprint(value: string): void;

  getImageId(): number;
  setImageId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDownloadLogReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDownloadLogReq): CreateDownloadLogReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDownloadLogReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDownloadLogReq;
  static deserializeBinaryFromReader(message: CreateDownloadLogReq, reader: jspb.BinaryReader): CreateDownloadLogReq;
}

export namespace CreateDownloadLogReq {
  export type AsObject = {
    fingerprint: string,
    imageId: number,
  }
}

export class CreateDownloadLogRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDownloadLogRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDownloadLogRes): CreateDownloadLogRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDownloadLogRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDownloadLogRes;
  static deserializeBinaryFromReader(message: CreateDownloadLogRes, reader: jspb.BinaryReader): CreateDownloadLogRes;
}

export namespace CreateDownloadLogRes {
  export type AsObject = {
  }
}

export class CreateSearchLogReq extends jspb.Message {
  getFingerprint(): string;
  setFingerprint(value: string): void;

  getKeyword(): number;
  setKeyword(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSearchLogReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSearchLogReq): CreateSearchLogReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSearchLogReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSearchLogReq;
  static deserializeBinaryFromReader(message: CreateSearchLogReq, reader: jspb.BinaryReader): CreateSearchLogReq;
}

export namespace CreateSearchLogReq {
  export type AsObject = {
    fingerprint: string,
    keyword: number,
  }
}

export class CreateSearchLogRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSearchLogRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSearchLogRes): CreateSearchLogRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSearchLogRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSearchLogRes;
  static deserializeBinaryFromReader(message: CreateSearchLogRes, reader: jspb.BinaryReader): CreateSearchLogRes;
}

export namespace CreateSearchLogRes {
  export type AsObject = {
  }
}

export class CreateErrorLogReq extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getPayload(): string;
  setPayload(value: string): void;

  getEnvironment(): string;
  setEnvironment(value: string): void;

  getHeader(): string;
  setHeader(value: string): void;

  getCookie(): string;
  setCookie(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateErrorLogReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateErrorLogReq): CreateErrorLogReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateErrorLogReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateErrorLogReq;
  static deserializeBinaryFromReader(message: CreateErrorLogReq, reader: jspb.BinaryReader): CreateErrorLogReq;
}

export namespace CreateErrorLogReq {
  export type AsObject = {
    code: number,
    message: string,
    url: string,
    payload: string,
    environment: string,
    header: string,
    cookie: string,
  }
}

export class CreateErrorLogRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateErrorLogRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateErrorLogRes): CreateErrorLogRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateErrorLogRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateErrorLogRes;
  static deserializeBinaryFromReader(message: CreateErrorLogRes, reader: jspb.BinaryReader): CreateErrorLogRes;
}

export namespace CreateErrorLogRes {
  export type AsObject = {
  }
}

export class User extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getAlbumId(): number;
  setAlbumId(value: number): void;

  getAvatar(): string;
  setAvatar(value: string): void;

  getCreatedAt(): string;
  setCreatedAt(value: string): void;

  getScore(): number;
  setScore(value: number): void;

  getDailyFreeDownloadNumber(): number;
  setDailyFreeDownloadNumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: number,
    name: string,
    albumId: number,
    avatar: string,
    createdAt: string,
    score: number,
    dailyFreeDownloadNumber: number,
  }
}

export class Comment extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getCommentHostId(): number;
  setCommentHostId(value: number): void;

  getContent(): string;
  setContent(value: string): void;

  getCreatedAt(): string;
  setCreatedAt(value: string): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Comment.AsObject;
  static toObject(includeInstance: boolean, msg: Comment): Comment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Comment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Comment;
  static deserializeBinaryFromReader(message: Comment, reader: jspb.BinaryReader): Comment;
}

export namespace Comment {
  export type AsObject = {
    id: number,
    commentHostId: number,
    content: string,
    createdAt: string,
    user?: User.AsObject,
  }
}

export class CreateTokenReq extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTokenReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTokenReq): CreateTokenReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTokenReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTokenReq;
  static deserializeBinaryFromReader(message: CreateTokenReq, reader: jspb.BinaryReader): CreateTokenReq;
}

export namespace CreateTokenReq {
  export type AsObject = {
    userId: number,
  }
}

export class CreateTokenRes extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTokenRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTokenRes): CreateTokenRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTokenRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTokenRes;
  static deserializeBinaryFromReader(message: CreateTokenRes, reader: jspb.BinaryReader): CreateTokenRes;
}

export namespace CreateTokenRes {
  export type AsObject = {
    token: string,
    userId: number,
  }
}

export class AuthTokenReq extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthTokenReq.AsObject;
  static toObject(includeInstance: boolean, msg: AuthTokenReq): AuthTokenReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthTokenReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthTokenReq;
  static deserializeBinaryFromReader(message: AuthTokenReq, reader: jspb.BinaryReader): AuthTokenReq;
}

export namespace AuthTokenReq {
  export type AsObject = {
    token: string,
  }
}

export class AuthTokenRes extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthTokenRes.AsObject;
  static toObject(includeInstance: boolean, msg: AuthTokenRes): AuthTokenRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthTokenRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthTokenRes;
  static deserializeBinaryFromReader(message: AuthTokenRes, reader: jspb.BinaryReader): AuthTokenRes;
}

export namespace AuthTokenRes {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class UpdateTokenReq extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTokenReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTokenReq): UpdateTokenReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTokenReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTokenReq;
  static deserializeBinaryFromReader(message: UpdateTokenReq, reader: jspb.BinaryReader): UpdateTokenReq;
}

export namespace UpdateTokenReq {
  export type AsObject = {
    userId: number,
  }
}

export class UpdateTokenRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTokenRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTokenRes): UpdateTokenRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTokenRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTokenRes;
  static deserializeBinaryFromReader(message: UpdateTokenRes, reader: jspb.BinaryReader): UpdateTokenRes;
}

export namespace UpdateTokenRes {
  export type AsObject = {
  }
}

export class CreateJwtReq extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateJwtReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateJwtReq): CreateJwtReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateJwtReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateJwtReq;
  static deserializeBinaryFromReader(message: CreateJwtReq, reader: jspb.BinaryReader): CreateJwtReq;
}

export namespace CreateJwtReq {
  export type AsObject = {
    id: number,
  }
}

export class CreateJwtRes extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateJwtRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateJwtRes): CreateJwtRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateJwtRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateJwtRes;
  static deserializeBinaryFromReader(message: CreateJwtRes, reader: jspb.BinaryReader): CreateJwtRes;
}

export namespace CreateJwtRes {
  export type AsObject = {
    hash: string,
  }
}

export class CreateVerificationEmailReq extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVerificationEmailReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVerificationEmailReq): CreateVerificationEmailReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateVerificationEmailReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVerificationEmailReq;
  static deserializeBinaryFromReader(message: CreateVerificationEmailReq, reader: jspb.BinaryReader): CreateVerificationEmailReq;
}

export namespace CreateVerificationEmailReq {
  export type AsObject = {
    email: string,
  }
}

export class CreateVerificationEmailRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVerificationEmailRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVerificationEmailRes): CreateVerificationEmailRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateVerificationEmailRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVerificationEmailRes;
  static deserializeBinaryFromReader(message: CreateVerificationEmailRes, reader: jspb.BinaryReader): CreateVerificationEmailRes;
}

export namespace CreateVerificationEmailRes {
  export type AsObject = {
  }
}

export class CreateUserReq extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getVerificationCode(): string;
  setVerificationCode(value: string): void;

  getReferrerEmail(): string;
  setReferrerEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserReq): CreateUserReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateUserReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserReq;
  static deserializeBinaryFromReader(message: CreateUserReq, reader: jspb.BinaryReader): CreateUserReq;
}

export namespace CreateUserReq {
  export type AsObject = {
    name: string,
    email: string,
    password: string,
    verificationCode: string,
    referrerEmail: string,
  }
}

export class CreateUserRes extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRes): CreateUserRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateUserRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRes;
  static deserializeBinaryFromReader(message: CreateUserRes, reader: jspb.BinaryReader): CreateUserRes;
}

export namespace CreateUserRes {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class UpdateUserReq extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getAvatar(): string;
  setAvatar(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserReq): UpdateUserReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserReq;
  static deserializeBinaryFromReader(message: UpdateUserReq, reader: jspb.BinaryReader): UpdateUserReq;
}

export namespace UpdateUserReq {
  export type AsObject = {
    id: number,
    avatar: string,
  }
}

export class UpdateUserRes extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserRes): UpdateUserRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserRes;
  static deserializeBinaryFromReader(message: UpdateUserRes, reader: jspb.BinaryReader): UpdateUserRes;
}

export namespace UpdateUserRes {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class UpdatePasswordReq extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getVerificationCode(): string;
  setVerificationCode(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePasswordReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePasswordReq): UpdatePasswordReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePasswordReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePasswordReq;
  static deserializeBinaryFromReader(message: UpdatePasswordReq, reader: jspb.BinaryReader): UpdatePasswordReq;
}

export namespace UpdatePasswordReq {
  export type AsObject = {
    email: string,
    verificationCode: string,
    password: string,
  }
}

export class UpdatePasswordRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePasswordRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePasswordRes): UpdatePasswordRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePasswordRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePasswordRes;
  static deserializeBinaryFromReader(message: UpdatePasswordRes, reader: jspb.BinaryReader): UpdatePasswordRes;
}

export namespace UpdatePasswordRes {
  export type AsObject = {
  }
}

export class AuthUserReq extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthUserReq.AsObject;
  static toObject(includeInstance: boolean, msg: AuthUserReq): AuthUserReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthUserReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthUserReq;
  static deserializeBinaryFromReader(message: AuthUserReq, reader: jspb.BinaryReader): AuthUserReq;
}

export namespace AuthUserReq {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export class AuthUserRes extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthUserRes.AsObject;
  static toObject(includeInstance: boolean, msg: AuthUserRes): AuthUserRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthUserRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthUserRes;
  static deserializeBinaryFromReader(message: AuthUserRes, reader: jspb.BinaryReader): AuthUserRes;
}

export namespace AuthUserRes {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class ShowUserReq extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShowUserReq.AsObject;
  static toObject(includeInstance: boolean, msg: ShowUserReq): ShowUserReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShowUserReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShowUserReq;
  static deserializeBinaryFromReader(message: ShowUserReq, reader: jspb.BinaryReader): ShowUserReq;
}

export namespace ShowUserReq {
  export type AsObject = {
    id: number,
  }
}

export class ShowUserRes extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShowUserRes.AsObject;
  static toObject(includeInstance: boolean, msg: ShowUserRes): ShowUserRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShowUserRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShowUserRes;
  static deserializeBinaryFromReader(message: ShowUserRes, reader: jspb.BinaryReader): ShowUserRes;
}

export namespace ShowUserRes {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class ImageVote extends jspb.Message {
  getImageId(): number;
  setImageId(value: number): void;

  getVote(): number;
  setVote(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageVote.AsObject;
  static toObject(includeInstance: boolean, msg: ImageVote): ImageVote.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImageVote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageVote;
  static deserializeBinaryFromReader(message: ImageVote, reader: jspb.BinaryReader): ImageVote;
}

export namespace ImageVote {
  export type AsObject = {
    imageId: number,
    vote: number,
  }
}

export class ImageVotesReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageVotesReq.AsObject;
  static toObject(includeInstance: boolean, msg: ImageVotesReq): ImageVotesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImageVotesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageVotesReq;
  static deserializeBinaryFromReader(message: ImageVotesReq, reader: jspb.BinaryReader): ImageVotesReq;
}

export namespace ImageVotesReq {
  export type AsObject = {
  }
}

export class ImageVotesRes extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<ImageVote>;
  setItemsList(value: Array<ImageVote>): void;
  addItems(value?: ImageVote, index?: number): ImageVote;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageVotesRes.AsObject;
  static toObject(includeInstance: boolean, msg: ImageVotesRes): ImageVotesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImageVotesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageVotesRes;
  static deserializeBinaryFromReader(message: ImageVotesRes, reader: jspb.BinaryReader): ImageVotesRes;
}

export namespace ImageVotesRes {
  export type AsObject = {
    itemsList: Array<ImageVote.AsObject>,
  }
}

export class ScoreLog extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  getScore(): number;
  setScore(value: number): void;

  getDescription(): string;
  setDescription(value: string): void;

  getCategoryName(): string;
  setCategoryName(value: string): void;

  getSymbol(): string;
  setSymbol(value: string): void;

  getCreatedAt(): string;
  setCreatedAt(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScoreLog.AsObject;
  static toObject(includeInstance: boolean, msg: ScoreLog): ScoreLog.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScoreLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScoreLog;
  static deserializeBinaryFromReader(message: ScoreLog, reader: jspb.BinaryReader): ScoreLog;
}

export namespace ScoreLog {
  export type AsObject = {
    user?: User.AsObject,
    score: number,
    description: string,
    categoryName: string,
    symbol: string,
    createdAt: string,
  }
}

export class ScoreLogsReq extends jspb.Message {
  getOrder(): ScoreLogOrders;
  setOrder(value: ScoreLogOrders): void;

  getCategoryId(): number;
  setCategoryId(value: number): void;

  getStart(): number;
  setStart(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScoreLogsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ScoreLogsReq): ScoreLogsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScoreLogsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScoreLogsReq;
  static deserializeBinaryFromReader(message: ScoreLogsReq, reader: jspb.BinaryReader): ScoreLogsReq;
}

export namespace ScoreLogsReq {
  export type AsObject = {
    order: ScoreLogOrders,
    categoryId: number,
    start: number,
    limit: number,
  }
}

export class ScoreLogsRes extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<ScoreLog>;
  setItemsList(value: Array<ScoreLog>): void;
  addItems(value?: ScoreLog, index?: number): ScoreLog;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScoreLogsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ScoreLogsRes): ScoreLogsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScoreLogsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScoreLogsRes;
  static deserializeBinaryFromReader(message: ScoreLogsRes, reader: jspb.BinaryReader): ScoreLogsRes;
}

export namespace ScoreLogsRes {
  export type AsObject = {
    itemsList: Array<ScoreLog.AsObject>,
  }
}

export class CommentsReq extends jspb.Message {
  getStart(): number;
  setStart(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  getOrder(): number;
  setOrder(value: number): void;

  getCommentHostId(): number;
  setCommentHostId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommentsReq.AsObject;
  static toObject(includeInstance: boolean, msg: CommentsReq): CommentsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommentsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommentsReq;
  static deserializeBinaryFromReader(message: CommentsReq, reader: jspb.BinaryReader): CommentsReq;
}

export namespace CommentsReq {
  export type AsObject = {
    start: number,
    limit: number,
    order: number,
    commentHostId: number,
  }
}

export class CommentsRes extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<Comment>;
  setItemsList(value: Array<Comment>): void;
  addItems(value?: Comment, index?: number): Comment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommentsRes.AsObject;
  static toObject(includeInstance: boolean, msg: CommentsRes): CommentsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommentsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommentsRes;
  static deserializeBinaryFromReader(message: CommentsRes, reader: jspb.BinaryReader): CommentsRes;
}

export namespace CommentsRes {
  export type AsObject = {
    itemsList: Array<Comment.AsObject>,
  }
}

export class CreateCommentReq extends jspb.Message {
  getCommentHostId(): number;
  setCommentHostId(value: number): void;

  getContent(): string;
  setContent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCommentReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCommentReq): CreateCommentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCommentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCommentReq;
  static deserializeBinaryFromReader(message: CreateCommentReq, reader: jspb.BinaryReader): CreateCommentReq;
}

export namespace CreateCommentReq {
  export type AsObject = {
    commentHostId: number,
    content: string,
  }
}

export class CreateCommentRes extends jspb.Message {
  hasComment(): boolean;
  clearComment(): void;
  getComment(): Comment | undefined;
  setComment(value?: Comment): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCommentRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCommentRes): CreateCommentRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCommentRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCommentRes;
  static deserializeBinaryFromReader(message: CreateCommentRes, reader: jspb.BinaryReader): CreateCommentRes;
}

export namespace CreateCommentRes {
  export type AsObject = {
    comment?: Comment.AsObject,
  }
}

export class UpdateCommentReq extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getContent(): string;
  setContent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCommentReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCommentReq): UpdateCommentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCommentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCommentReq;
  static deserializeBinaryFromReader(message: UpdateCommentReq, reader: jspb.BinaryReader): UpdateCommentReq;
}

export namespace UpdateCommentReq {
  export type AsObject = {
    id: number,
    content: string,
  }
}

export class UpdateCommentRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCommentRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCommentRes): UpdateCommentRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCommentRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCommentRes;
  static deserializeBinaryFromReader(message: UpdateCommentRes, reader: jspb.BinaryReader): UpdateCommentRes;
}

export namespace UpdateCommentRes {
  export type AsObject = {
  }
}

export class CreateCommentHostReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCommentHostReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCommentHostReq): CreateCommentHostReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCommentHostReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCommentHostReq;
  static deserializeBinaryFromReader(message: CreateCommentHostReq, reader: jspb.BinaryReader): CreateCommentHostReq;
}

export namespace CreateCommentHostReq {
  export type AsObject = {
  }
}

export class CreateCommentHostRes extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCommentHostRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCommentHostRes): CreateCommentHostRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCommentHostRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCommentHostRes;
  static deserializeBinaryFromReader(message: CreateCommentHostRes, reader: jspb.BinaryReader): CreateCommentHostRes;
}

export namespace CreateCommentHostRes {
  export type AsObject = {
    id: number,
  }
}

export class CreateFingerprintReq extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFingerprintReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFingerprintReq): CreateFingerprintReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFingerprintReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFingerprintReq;
  static deserializeBinaryFromReader(message: CreateFingerprintReq, reader: jspb.BinaryReader): CreateFingerprintReq;
}

export namespace CreateFingerprintReq {
  export type AsObject = {
    hash: string,
  }
}

export class CreateFingerprintRes extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFingerprintRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFingerprintRes): CreateFingerprintRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFingerprintRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFingerprintRes;
  static deserializeBinaryFromReader(message: CreateFingerprintRes, reader: jspb.BinaryReader): CreateFingerprintRes;
}

export namespace CreateFingerprintRes {
  export type AsObject = {
    hash: string,
    userId: number,
  }
}

export class UpdateFingerprintReq extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFingerprintReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFingerprintReq): UpdateFingerprintReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateFingerprintReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFingerprintReq;
  static deserializeBinaryFromReader(message: UpdateFingerprintReq, reader: jspb.BinaryReader): UpdateFingerprintReq;
}

export namespace UpdateFingerprintReq {
  export type AsObject = {
    hash: string,
    userId: number,
  }
}

export class UpdateFingerprintRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFingerprintRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFingerprintRes): UpdateFingerprintRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateFingerprintRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFingerprintRes;
  static deserializeBinaryFromReader(message: UpdateFingerprintRes, reader: jspb.BinaryReader): UpdateFingerprintRes;
}

export namespace UpdateFingerprintRes {
  export type AsObject = {
  }
}

export class ReviewCategory extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReviewCategory.AsObject;
  static toObject(includeInstance: boolean, msg: ReviewCategory): ReviewCategory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReviewCategory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReviewCategory;
  static deserializeBinaryFromReader(message: ReviewCategory, reader: jspb.BinaryReader): ReviewCategory;
}

export namespace ReviewCategory {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class Review extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getImageId(): number;
  setImageId(value: number): void;

  getCreatorId(): number;
  setCreatorId(value: number): void;

  getReviewCategoryId(): number;
  setReviewCategoryId(value: number): void;

  getAgreeCount(): number;
  setAgreeCount(value: number): void;

  getDisagreeCount(): number;
  setDisagreeCount(value: number): void;

  getEndAt(): string;
  setEndAt(value: string): void;

  getCreatedAt(): string;
  setCreatedAt(value: string): void;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): void;

  hasReviewCategory(): boolean;
  clearReviewCategory(): void;
  getReviewCategory(): ReviewCategory | undefined;
  setReviewCategory(value?: ReviewCategory): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  hasImage(): boolean;
  clearImage(): void;
  getImage(): Image | undefined;
  setImage(value?: Image): void;

  getClosed(): boolean;
  setClosed(value: boolean): void;

  getOpinion(): ReviewOpinions;
  setOpinion(value: ReviewOpinions): void;

  getContent(): string;
  setContent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Review.AsObject;
  static toObject(includeInstance: boolean, msg: Review): Review.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Review, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Review;
  static deserializeBinaryFromReader(message: Review, reader: jspb.BinaryReader): Review;
}

export namespace Review {
  export type AsObject = {
    id: number,
    imageId: number,
    creatorId: number,
    reviewCategoryId: number,
    agreeCount: number,
    disagreeCount: number,
    endAt: string,
    createdAt: string,
    updatedAt: string,
    reviewCategory?: ReviewCategory.AsObject,
    user?: User.AsObject,
    image?: Image.AsObject,
    closed: boolean,
    opinion: ReviewOpinions,
    content: string,
  }
}

export class ReviewsReq extends jspb.Message {
  getStart(): number;
  setStart(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  getOrder(): ReviewsOrder;
  setOrder(value: ReviewsOrder): void;

  getTotal(): boolean;
  setTotal(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReviewsReq.AsObject;
  static toObject(includeInstance: boolean, msg: ReviewsReq): ReviewsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReviewsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReviewsReq;
  static deserializeBinaryFromReader(message: ReviewsReq, reader: jspb.BinaryReader): ReviewsReq;
}

export namespace ReviewsReq {
  export type AsObject = {
    start: number,
    limit: number,
    order: ReviewsOrder,
    total: boolean,
  }
}

export class ReviewsRes extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<Review>;
  setItemsList(value: Array<Review>): void;
  addItems(value?: Review, index?: number): Review;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReviewsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ReviewsRes): ReviewsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReviewsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReviewsRes;
  static deserializeBinaryFromReader(message: ReviewsRes, reader: jspb.BinaryReader): ReviewsRes;
}

export namespace ReviewsRes {
  export type AsObject = {
    itemsList: Array<Review.AsObject>,
    total: number,
  }
}

export class UpdateReviewOpinionReq extends jspb.Message {
  getReviewId(): number;
  setReviewId(value: number): void;

  getOpinion(): ReviewOpinions;
  setOpinion(value: ReviewOpinions): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateReviewOpinionReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateReviewOpinionReq): UpdateReviewOpinionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateReviewOpinionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateReviewOpinionReq;
  static deserializeBinaryFromReader(message: UpdateReviewOpinionReq, reader: jspb.BinaryReader): UpdateReviewOpinionReq;
}

export namespace UpdateReviewOpinionReq {
  export type AsObject = {
    reviewId: number,
    opinion: ReviewOpinions,
  }
}

export class UpdateReviewOpinionRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateReviewOpinionRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateReviewOpinionRes): UpdateReviewOpinionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateReviewOpinionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateReviewOpinionRes;
  static deserializeBinaryFromReader(message: UpdateReviewOpinionRes, reader: jspb.BinaryReader): UpdateReviewOpinionRes;
}

export namespace UpdateReviewOpinionRes {
  export type AsObject = {
  }
}

export enum ImageSorts {
  ID_ASC = 0,
  ID_DESC = 1,
}

export enum ScoreLogOrders {
  NEW = 0,
  OLD = 1,
}

export enum ReviewOpinions {
  UNKNOWN = 0,
  AGREE = 1,
  DISAGREE = 2,
}

export enum ReviewsOrder {
  UPDATE = 0,
  CREATE = 1,
  ENDING = 2,
  CREATOR_HISTORY = 3,
  REVIEWER_HISTORY = 4,
  ENDED = 5,
}

