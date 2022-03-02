type MyReadonly<T> = {
    readonly [K in keyof T]: T[K];
};

// ========================
interface SQL_CONFIG {
    host: string | number;
}

const config: SQL_CONFIG = {
    host: 90000,
};

const config1: Readonly<SQL_CONFIG> = {
    host: 90000,
};

config.host = 123;

config1.host = 123;
