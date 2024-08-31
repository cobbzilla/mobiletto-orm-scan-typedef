import { MobilettoOrmTypeDef } from "mobiletto-orm-typedef";
export const MobilettoScanLockTypeDefConfig = {
    typeName: "scanLock",
    primary: "lock",
    fields: {
        lock: {
            primary: true,
            indexLevels: 3,
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
export const MobilettoScanObjectTypeDefConfig = {
    fields: {
        status: { index: true, values: ["pending", "started", "finished"], default: "pending", control: "label" },
        owner: { required: false, type: "string", control: "label" },
        started: { required: false, type: "number", render: "datetime", control: "label" },
        finished: { required: false, type: "number", render: "datetime", control: "label" },
        errorCount: { required: false, type: "number", control: "label" },
    },
};
export const MobilettoScanObjectTypeDef = new MobilettoOrmTypeDef(MobilettoScanLockTypeDefConfig);
//# sourceMappingURL=types.js.map