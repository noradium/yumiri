import * as request from 'request-promise-native';
import {VideoFactory} from '../entity/niconico/video';
import APIError from '../entity/common/error';

type Response = {
  data: {
    contentId: string;
    title: string;
    startTime: string;
  }[];
}

class NiconicoAPI {
  searchVideo() {
    return this._request({
      service: 'video',
      targets: 'tags'
    })
      .then(response => {
        return response.data.map(data => VideoFactory.create(data));
      });
  }

  searchLive() {
    return this._request({
      service: 'live',
      targets: 'title,tags'
    });
  }

  _request(args: {service: string, targets: string}): Promise<Response> {
    const options = {
      uri: `http://api.search.nicovideo.jp/api/v2/${args.service}/contents/search`,
      qs: {
        q: '花守ゆみり',
        targets: args.targets,
        fields: 'contentId,title,description,tags,startTime',
        _sort: '-startTime'
      },
      json: true // Automatically parses the JSON string in the response
    };

    return request(options)
      .catch(error => {
        console.log(error);
        return Promise.reject(error);
      });
  }
}

const niconicoAPI = new NiconicoAPI();
export default niconicoAPI;
