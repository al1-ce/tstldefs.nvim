/**
Fidget plugin
*/
declare namespace fidget {
    namespace progress {
        namespace handle {
            /**
            Creates fidget progress handle
            @param opts handle options
            */
            function create(this: void, opts: any): fidget.progress.ProgressHandle;
        }
        interface ProgressHandle {
            /**
            Set this variable to display progress message
            */
            message: string;
            /**
            Update one or more properties of progress message
            */
            report(opts: any): any;
            /**
            Cancel the task
            */
            cancel(): any;
            /**
            Mark the task complete
            */
            finish(): any;
        }
    }
    namespace notification { }
    namespace spinner { }
    namespace logger { }
    namespace commands { }
}

