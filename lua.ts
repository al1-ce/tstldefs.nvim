/**
Loads the given module, returns any value returned by the searcher(`true` when `nil`). Besides that value, also returns as a second result the loader data returned by the searcher, which indicates how `require` found the module. (For instance, if the module came from a file, this loader data is the file path.)
@param modname module to be loaded
*/
declare function require(modname: string): any;
/**
Prints a message
@param val message
*/
declare function print(val: any): void;
/**
Converts number to string
@param val number
*/
declare function tostring(val: number): string;
/**
Converts string to number
@param val string
*/
declare function tonumber(val: string): number;
/**
Calls the function `f` with the given arguments in *protected mode*. This means that any error inside `f` is not propagated; instead, `pcall` catches the error and returns a status code. Its first result is the status code (a boolean), which is true if the call succeeds without errors. In such case, `pcall` also returns all results from the call, after this first result. In case of any error, `pcall` returns `false` plus the error object.
@param func function to call
@param args arguments to pass to function
*/
declare function pcall(func: any, args: any): LuaMultiReturn<[any, any]>;

declare namespace string {
    /**
    Formats string
    @param fmt format string
    @param val value to insert
    */
    function format(this: void, fmt: string, val: any): string;
}

declare namespace io {
    /**
    Opens a file
    @param name filename
    @param mode mode to open file with (r, w, rw...)
    */
    function open(this: void, name: string, mode: string): any;
    /**
    Closes file
    @param file file handle
    */
    function close(this: void, file: any): any;
    /**
    Writes to file
    @param content content to write
    */
    function write(this: void, content: string): any;
}

declare namespace os {
    /**
    Returns date according to format
    @param format date format
    */
    function date(format: string): string;
    /**
    Returns the value of the process environment variable `varname`.
    @param varname name of variable
    */
    function getenv(varname: string): string;
    /**
    Passes `command` to be executed by an operating system shell.
    @param command command to pass
    */
    function execute(command: string): string;
    /**
    Returns an approximation of the amount in seconds of CPU time used by the program.
    */
    function clock(): number;
    /**
    Returns the current time when called without arguments, or a time representing the local date and time specified by the given table.
    */
    function time(): any;
}

declare namespace table {
    /**
    Inserts element `value` into table
    @param tbl table to insert value to
    @param val value to insert
    */
    function insert(tbl: any, val: any): any;
}

