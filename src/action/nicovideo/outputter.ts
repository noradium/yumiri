import {Video} from '../../infra/entity/niconico/video';
import * as ejs from 'ejs';

export default function output(videos: Video[]): void {
  videos.forEach((video) => {
    ejs.renderFile(__dirname + '/../../templates/nicovideo.ejs', {video}, (error, data) => {
      console.log(data);
    });
  });
}
