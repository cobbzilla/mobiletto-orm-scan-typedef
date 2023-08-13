import { MobilettoOrmTypeDef, MobilettoOrmTypeDefConfig } from "mobiletto-orm-typedef";

export const MobilettoScanLockTypeDefConfig: MobilettoOrmTypeDefConfig = {
    typeName: "scanLock",
    fields: {
        lock: { primary: true, type: "string" },
        owner: { index: true, type: "string" },
    },
};
export const MobilettoScanLockTypeDef = new MobilettoOrmTypeDef(MobilettoScanLockTypeDefConfig);

export type MobilettoScanData = {
    scheduled?: number;
    started?: number;
    promise?: Promise<void>;
    finished?: number;
    opCount?: number;
    errCount?: number;
    log?: string[];
    error?: Error | string | object;
};

export type MobilettoScan = {
    name: string;
    interval?: number;
    delay?: number;
    scan?: MobilettoScanData;
    history?: MobilettoScanData[];
};

export type MobilettoScanStatus = "pending" | "started" | "finished";

export const MobilettoScanObjectTypeDefConfig: MobilettoOrmTypeDefConfig = {
    fields: {
        status: { index: true, values: ["pending", "started", "finished"], default: "pending" },
        owner: { required: false, type: "string", control: "label" },
        started: { required: false, type: "number", render: "datetime", control: "label" },
        finished: { required: false, type: "number", render: "datetime", control: "label" },
        errorCount: { required: false, type: "number", control: "label" },
    },
};

export type MobilettoClock = {
    now: () => number;
};