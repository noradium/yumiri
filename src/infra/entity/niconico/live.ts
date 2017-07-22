import * as dateFormat from 'dateformat';

export class LiveFactory {
  static create(args: {
    contentId: string,
    title: string,
    startTime: string
  }) {
    return new Live({
      contentId: args.contentId,
      title: args.title,
      startTime: new Date(args.startTime)
    });
  }
}

export class Live {
  contentId: string;
  title: string;
  startTime: Date;

  constructor(args: {
    contentId: string,
    title: string,
    startTime: Date
  }) {
    this.contentId = args.contentId;
    this.title = args.title;
    this.startTime = args.startTime;
  }

  get formattedStartTime() {
    return dateFormat(this.startTime, 'yyyy/mm/dd HH:MM');
  }

  get isStarted() {
    return this.startTime.getTime() < Date.now();
  }
}
