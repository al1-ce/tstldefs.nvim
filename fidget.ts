
declare namespace fidget {
    namespace progress {
        namespace handle {
            function create(this: void, opts: any): fidget.progress.Handle;
        }
        interface Handle {
            message: string;
            report(opts: any): any;
            cancel(): any;
            finish(): any;
        }
    }
}

