import { MobilettoOrmObject, MobilettoOrmTypeDef, MobilettoOrmTypeDefConfig } from "mobiletto-orm-typedef";

export const MobilettoScanLockTypeDefConfig: MobilettoOrmTypeDefConfig = {
    typeName: "scanLock",
    autoId: false,
    fields: {
        lock: {
            primary: true,
            indexLevels: 1,
            type: "string",
        },
        owner: {
            index: true,
            indexLevels: 3,
            required: true,
            type: "string",
        },
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

export type MobilettoScan<CALLER extends MobilettoOrmObject> = {
    caller: CALLER;
    name: string;
    delay?: number;
    data?: MobilettoScanData;
    success?: () => unknown;
    error?: (e: Error | unknown) => unknown;
    done?: () => unknown;
};

export type MobilettoScanStatus = "pending" | "started" | "finished";

export const MobilettoScanObjectTypeDefConfig: MobilettoOrmTypeDefConfig = {
    fields: {
        status: { index: true, values: ["pending", "started", "finished"], default: "pending", control: "label" },
        owner: { required: false, type: "string", control: "label" },
        started: { required: false, type: "number", render: "datetime", control: "label" },
        finished: { required: false, type: "number", render: "datetime", control: "label" },
        errorCount: { required: false, type: "number", control: "label" },
    },
};

export const MobilettoScanObjectTypeDef = new MobilettoOrmTypeDef(MobilettoScanLockTypeDefConfig);
