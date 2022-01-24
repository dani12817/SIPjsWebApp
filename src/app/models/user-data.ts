import { CallLog } from './call-log';
import { Contact } from './contact';

import { isFirefox } from 'src/shared/shared-metods';

export class UserLocalData {
    recentContacts?: Contact[] = [];
    callLog?: CallLog[] = [];
    devices?: Devices;
    dnd?: boolean = false;
    autoAnswer?: boolean = false;
    sortBy?: string = 'name';
    systemAudioVolume?: number = 80;

    constructor() {
        if (!this.devices) {
            if (!navigator.userAgent.includes('Firefox')) {
                this.devices = {
                    inDevId: isFirefox() ? undefined : 'default',
                    outDevId: 'default',
                    ringDevId: 'default'
                };
            } else { this.devices = {}; }
        }
    }
}

export class Devices {
    inDevId?: string;
    outDevId?: string;
    ringDevId?: string;
}