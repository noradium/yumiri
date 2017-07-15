import nicovideoAction from './nicovideo';

export default function getAction(service?: string): (option: Object) => Promise<void> {
  switch (service) {
    case 'nicovideo':
      return nicovideoAction;
    default:
      return null;
  }
}
