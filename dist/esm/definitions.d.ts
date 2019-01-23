declare global {
    interface PluginRegistry {
        TwilioIosCapacitor?: TwilioIosCapacitorPlugin;
    }
}
export interface TwilioIosCapacitorPlugin {
    joinTwilioRoom(options: {
        roomName: String;
        accessToken: String;
    }): Promise<any>;
}
