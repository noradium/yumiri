import * as cheerio from 'cheerio-httpcli';
import {LiveFactory, Live} from '../entity/niconico/live';
import APIError from '../../infra/entity/common/error';

class NicoLiveSearchAPI {
  search(options: {onlyOfficial: boolean}) {
    return new Promise<Live[]>((resolve, reject) => {
      cheerio.fetch('http://live.nicovideo.jp/search', {
        orig_filter: `${options.onlyOfficial ? ':official:' : ''}:reserved:`,
        sort: 'recent',
        keyword: '花守ゆみり'
      }, (err, $, res, body) => {
        if (err) {
          reject(new APIError(err.message));
        }
        let lives: Live[] = [];
        $('.result_list .result_item').map((index, element) => {
          const $item = $(element);
          const startTime = $item.find('.detail .status').text().match(/(\d{4}\/\d{2}\/\d{2}\([月火水木金土日]\)\d{2}:\d{2})/)[1];
          const $title = $item.find('.search_stream_title a');
          const contentId = $title.attr('href').match(/.*v=(lv\d+).*/)[1].trim();
          const title = $title.text().trim();
          lives.push(LiveFactory.create({contentId, title, startTime}));
        });
        resolve(lives);
      });
    });
  }
}

const nicoLiveSearchAPI = new NicoLiveSearchAPI();
export default nicoLiveSearchAPI;
