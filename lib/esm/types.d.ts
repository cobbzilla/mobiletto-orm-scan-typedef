import { MobilettoOrmTypeDef, MobilettoOrmTypeDefConfig } from "mobiletto-orm-typedef";
export declare const MobilettoScanLockTypeDefConfig: MobilettoOrmTypeDefConfig;
export declare const MobilettoScanLockTypeDef: MobilettoOrmTypeDef;
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
    delay?: number;
    data?: MobilettoScanData;
    success?: () => unknown;
    error?: (e: Error | unknown) => unknown;
    done?: () => unknown;
};
export type MobilettoScanStatus = "pending" | "started" | "finished";
export declare const MobilettoScanObjectTypeDefConfig: MobilettoOrmTypeDefConfig;
export declare const MobilettoScanObjectTypeDef: MobilettoOrmTypeDef;
export type MobilettoClock = {
    now: () => number;
};
