export class CallLog {
    contact?: string;
    contactName: string;
    contactNumber: string;
    type: CallType;
    origin: CallOrigin;
    callDate: Date;
    duration?: string;
    isChecked?: boolean;
}

export enum CallType {
    CALL = 'CALL', // Llamada
    MISSED = 'MISSED' // Llamada Perdida
}

export enum CallOrigin {
    INCOMING = 'INCOMING', // Llamada Entrante
    OUTGOING = 'OUTGOING' // Llamada Saliente
}