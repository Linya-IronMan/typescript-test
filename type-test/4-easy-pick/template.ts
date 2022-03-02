type MyPick<T, K extends keyof T> = {
    [Key in K]: T[Key];
};

interface SQL_CONFIG {
    host: string;
    port: string | number;
    user: string;
    password: string;
    encoding: string;
    db?: string;
    locate?: string;
}

type SQL_CONFIG_ORACLE = Pick<SQL_CONFIG, 'host' | 'port'>;
