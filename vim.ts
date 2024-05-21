
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
