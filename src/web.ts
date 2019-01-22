import { WebPlugin } from '@capacitor/core';
import { TwilioIosCapacitorPlugin } from './definitions';

export class TwilioIosCapacitorWeb extends WebPlugin implements TwilioIosCapacitorPlugin {
  constructor() {
    super({
      name: 'TwilioIosCapacitor',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return Promise.resolve({ value: options.value });
  }
}

const TwilioIosCapacitor = new TwilioIosCapacitorWeb();

export { TwilioIosCapacitor };
