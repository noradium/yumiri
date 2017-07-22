import {Live} from '../../infra/entity/niconico/live';
import * as ejs from 'ejs';

export default function output(lives: Live[]): void {
  lives.forEach((live) => {
    ejs.renderFile(__dirname + '/../../templates/nicolive.ejs', {live}, (error, data) => {
      console.log(data);
    });
  });
}
