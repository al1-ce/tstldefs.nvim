
declare function require(modname: string): any;
declare function print(val: any): void;
declare function tostring(val: number): string;
declare function tonumber(val: string): number;
declare function pcall(func: any, args: any): LuaMultiReturn<[any, any]>;

declare namespace string {
    function format(this: void, fmt: string, val: any): string;
}

declare namespace io {
    function open(this: void, name: string, mode: string): any;
    function close(this: void, file: any): any;
    function write(this: void, content: string): any;
}

declare namespace os {
    function date(format: string): string;
    function getenv(varname: string): string;
    function execute(command: string): string;
    function clock(): number;
    function time(): any;
}

declare namespace table {
    function insert(tbl: any, val: any): any;
}

