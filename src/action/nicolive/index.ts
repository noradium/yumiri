import NicoLiveSearchAPI from '../../infra/api/nico_live_search';
import output from './outputter';
import {Live} from '../../infra/entity/niconico/live';
import APIError from '../../infra/entity/common/error';

export default function nicolive({
}) {
  return NicoLiveSearchAPI.search({onlyOfficial: true})
    .then((lives: Live[]) => {
      output(lives.slice(0, 10));
    })
    .catch((error: APIError) => {
      console.log(error.message);
      return Promise.reject(error);
    });
}
