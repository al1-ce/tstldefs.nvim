
/** @noSelf */
declare namespace telescope {
    let pickers: {
        new: (this: void, opts: any, obj: any) => any
    }
    namespace finders {
        function new_table(this: void, obj: any): any;
    }
    namespace config {
        namespace values {
            function generic_sorter(this: void, opts: any): any;
        }
    }
    namespace actions {
        namespace select_default {
            function replace(this: any, callback: Function): any;
        }
        namespace state {
            function get_selected_entry(this: void): any;
        }
        function close(this: void, buf: any): any;
    }
    namespace themes {
        function get_dropdown(this: void, opts: any): any;
    }
}

