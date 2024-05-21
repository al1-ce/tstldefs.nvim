
declare namespace vim {
    namespace fn {
        function system(this: void, com: string): string;
        function input(this: void, prompt: string, val: string): string;
        function getcwd(this: void): string;
        function filereadable(this: void, file: string): number;
        function expand(this: void, str: string): string;
        function fnamemodify(this: void, str: string, flags: string): string;
        function setqflist(this: void, val: any, mode: string): any;
        function confirm(this: void, prompt: string, choice: string, cdefault: number): any;
        function shellescape(this: void, str: string): any;
        function fnameescape(this: void, str: string): any;
        function escape(this: void, str: string, chars: string): any;
        function executable(this: void, name: string): any;
        // function eval(this: void, expr: string): any;
    }
    function inspect(this: void, val: any): any;
    namespace bo {
        var filetype: string;
    }
    function cmd(this: void, expr: string): any;
    namespace diagnostic {
        function setqflist(this: void, opts: any): any;
    }
    function schedule(this: void, callback: Function): any;
    function schedule_wrap(this: void, callback: Function): any;
    namespace loop {
        function new_timer(this: void): VimTimer;
    }
    namespace api {
        function nvim_create_augroup(this: void, name: string, opts: any): any;
        function nvim_create_autocmd(this: void, event: any, opts: any): any;
        function nvim_create_user_command(this: void, name: string, command: any, opts: any): any;
        function nvim_del_user_command(this: void, name: string): any;
        function nvim_err_writeln(this: void, msg: string): any;
    }
}

interface VimTimerConstructor {
    new(): VimTimer;
}

interface VimTimer {
    start(msecs: number, repeat: number, callback: any): any;
    close(): any;
}

declare var VimTimer: VimTimerConstructor;

declare namespace debug {
    function getinfo(this: void, num: number): debug.SourceFile;
    interface SourceFile {
        source: Source;
    }

    interface Source {
        sub(num: number): string;
    }
}
