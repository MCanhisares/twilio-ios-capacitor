declare global {
  interface PluginRegistry {
    TwilioIosCapacitor?: TwilioIosCapacitorPlugin;
  }
}

export interface TwilioIosCapacitorPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
