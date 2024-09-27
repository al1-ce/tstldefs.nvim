
declare namespace vim {
    namespace fn {
        /**
        Gets output of cmd as a string
        @param cmd command to pass to shell
        */
        function system(this: void, cmd: string): string;
        /**
        Prompts user for input
        @param prompt input prompt
        @param p_default default value
        */
        function input(this: void, prompt: string, p_default: string): string;
        /**
        Returns current working directory
        */
        function getcwd(this: void): string;
        /**
        Returns if file exists in system and is readable
        @param file path to file
        */
        function filereadable(this: void, file: string): number;
        /**
        Expands wildcards and special keywords in str
        @param str string to expand
        */
        function expand(this: void, str: string): string;
        /**
        Modifyes filename according to flags
        @param str file name to modify
        @param flags flags to modify file name with
        */
        function fnamemodify(this: void, str: string, flags: string): string;
        /**
        Creates or replaces or adds values to quickfix list
        @param val value to add
        @param mode mode to setqf. `a` appends, `r` replaces, `f` frees qf
        */
        function setqflist(this: void, val: any, mode: string): any;
        /**
        Prompts user for confirmation
        @param prompt prompt to show to user
        @param choice choice to show to user in format of `&Opt1\n&Opt2`
        @param cdefault default selection (starting from 1)
        */
        function confirm(this: void, prompt: string, choice: string, cdefault: number): any;
        /**
        Escapes str for use as a shell command argument
        @param str string to escape
        */
        function shellescape(this: void, str: string): any;
        /**
        Escapes str for use as a file name command argument
        @param str string to escape
        */
        function fnameescape(this: void, str: string): any;
        /**
		Escape the characters in {chars} that occur in {string} with a backslash
        @param str string to escape
        @param chars chars to escape with backslash
        */
        function escape(this: void, str: string, chars: string): any;
        /**
        Returns 1 if binary exists, 0 if it doesn't and -1 if this system is not supported
        @param name name of binary
        */
        function executable(this: void, name: string): number;
        /**
        */
        // function eval(this: void, expr: string): any;
        /**
        Spawn cmd as job annd returns job ID on success or 0, -1 on fail
        @param cmd Command in form of table or string
        @param opts Option table
        */
        function jobstart(this: void, cmd: any, opts: any): number;
        /**
        Stops job with id. Returns 1 if valid id or 0 if id is invalid
        @param id ID of job to stop
        */
        function jobstop(this: void, id: number): number;
        /**
        Waits for jobs. Returns list of exit codes
        @param jobs List of jobs to wait for
        @param timeout Max wait time, if -1 wait forever
        */
        function jobwait(this: void, jobs: any, timeout: number): number;
        /**
        Get position for expression
        @param expr See :h line()
        */
        function getpos(this: void, expr: string): LineInfo;
        /**
        Returns line number for expression
        @param expr See :h line()
        */
        function line(this: void, expr: string): number;
        /**
        Returns column number for expression
        @param expr See :h col()
        */
        function col(this: void, expr: string): number;
        /**
        Returns string that indicates current mode
        */
        function mode(this: void): string;
    }
    /**
    Gets a human-readable representation of the given object.
    @param val object
    */
    function inspect(this: void, val: any): any;
    namespace bo {
        /**
        Current buffer filetype
        */
        var filetype: string;
    }
    /**
    Executes vim command
    @param expr vim expression to execute
    */
    function cmd(this: void, expr: string): any;
    namespace diagnostic {
        /**
        Add all diagnostics to the quickfix list.
        @param opts configuration table
        */
        function setqflist(this: void, opts: any): any;
    }
    /**
    Schedules a callback
    @param callback callback to schedule
    */
    function schedule(this: void, callback: Function): any;
    /**
    Schedules a callback (for use with vim.loop.new_timer())
    @param callback callback to schedule
    */
    function schedule_wrap(this: void, callback: Function): any;
    namespace loop {
        /**
        Creates a new timer
        */
        function new_timer(this: void): VimTimer;
    }
    namespace api {
        /**
        Create or get an autocommand group |autocmd-groups|.
        @param name the name of the group
        @param opts dictionary parameters
        */
        function nvim_create_augroup(this: void, name: string, opts: any): any;
        /**
        Creates an |autocommand| event handler, defined by `callback` (Lua function or Vimscript function name string) or `command` (Ex command string).
        @param event event to trigger autocommand on
        @param opts autocommand options including `callback`, `pattern`, `command`, etc...
        */
        function nvim_create_autocmd(this: void, event: any, opts: any): any;
        /**
        Creates a user command, i.e `:UserCommand`
        @param name name of the command
        @param command command to execute or function
        @param opts options for setting up user command
        */
        function nvim_create_user_command(this: void, name: string, command: any, opts: any): any;
        /**
        Removes user command
        @param name name of the command
        */
        function nvim_del_user_command(this: void, name: string): any;
        /**
        Writes error message
        @param msg message to write
        */
        function nvim_err_writeln(this: void, msg: string): any;
        /**
        Gets line-range from buffer
        @param buffer Buffer handle or 0 for current buffer
        @param start First line index (0 based)
        @param end Last line index, exclusive
        @param strict_indexing Should out of bounds throw error
        */
        function nvim_buf_get_lines(this: void, buffer: number, start: number, end: number, strict_indexing: boolean): string[];
        /**
        Gets range from buffer
        @param buffer Buffer handle, or 0 for current buffer
        @param start_row First line index
        @param start_col Starting column (byte offset) on first line
        @param end_row Last line index, inclusive
        @param end_col Ending column (byte offset) on last line, exclusive
        */
        function nvim_buf_get_text(this: void, buffer: number, start_row: number, start_col: number, end_row: number, end_col: number, opts: any): string[];
    }
}

interface VimTimerConstructor {
    new(): VimTimer;
}

interface VimTimer {
    /**
    Starts timer
    @param msecs milliseconds to run callback after
    @param repeat how many times to repeat timer
    @param callback `vim.shedule_wrap` callback
    */
    start(msecs: number, repeat: number, callback: any): any;
    /**
    Stops timer
    */
    close(): any;
}

declare var VimTimer: VimTimerConstructor;

declare namespace debug {
    /**
    Returns a table with information about a function.
    @param num thread
    */
    function getinfo(this: void, num: number): debug.SourceFile;
    interface SourceFile {
        source: Source;
    }

    interface Source {
        sub(num: number): string;
    }
}

interface LineInfo {
    /// Buffer number
    bufnum: number;
    /// Line number
    lnum: number;
    /// Column number
    col: number;
    /// Offset in screen columns
    off: number;
}

interface UserCommandArgs {
    /// Args passed to command
    args: string;
    /// Was executed with !
    bang: boolean;
    /// Any count supplied
    count: number;
    /// Args split by unescaped whitespace
    fargs: any;
    /// Starting line of command range
    line1: number;
    /// Ending line of command range
    line2: number;
    /// Command modifiers
    mods: string;
    /// Number of items in command range (lines)
    range: number;
    /// Optional register
    reg: string;
    /// Command modifiers in structured format
    smods: any;
}

