import nicovideoAction from './nicovideo';
import nicoliveAction from './nicolive';

export default function getAction(service?: string): (option: Object) => Promise<void> {
  switch (service) {
    case 'nicovideo':
      return nicovideoAction;
    case 'nicolive':
      return nicoliveAction;
    default:
      return null;
  }
}
