import * as dateFormat from 'dateformat';

export class VideoFactory {
  static create(args: {
    contentId: string,
    title: string,
    startTime: string
  }) {
    return new Video({
      contentId: args.contentId,
      title: args.title,
      uploadedAt: new Date(args.startTime)
    });
  }
}

export class Video {
  contentId: string;
  title: string;
  uploadedAt: Date;

  constructor(args: {
    contentId: string,
    title: string,
    uploadedAt: Date
  }) {
    this.contentId = args.contentId;
    this.title = args.title;
    this.uploadedAt = args.uploadedAt;
  }

  get formattedUploadedAt() {
    return dateFormat(this.uploadedAt, 'yyyy/mm/dd HH:MM');
  }
}
