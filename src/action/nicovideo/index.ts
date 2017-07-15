import NiconicoAPI from '../../infra/api/niconico';
import output from './outputter';
import {Video} from '../../infra/entity/niconico/video';
import APIError from '../../infra/entity/common/error';

export default function nicovideo({
}) {
  return NiconicoAPI.searchVideo()
    .then((videos: Video[]) => {
      output(videos);
    })
    .catch((error: APIError) => {
      console.log(error.message);
      return Promise.reject(error);
    });
}
