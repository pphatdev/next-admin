export type DBPort = number;

export type DBHost = string;

export type DBName = string;

export type DBUser = string;

export type DBPassword = string;

export type Version = string | number;

export type Env = string;

export type Search = string | null;

export type Page = number | null | undefined;

export type Limit = number | string | "*" | "all";

export type SortBy = string | "asc" | "desc" | undefined | null;

export type DB = {
    host: DBHost;
    port: DBPort;
    database: DBName;
    user: DBUser;
    password: DBPassword;
}