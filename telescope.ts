
/** @noSelf */
declare namespace telescope {
    let pickers: {
        /**
        Creates new telescope picker
        */
        new: (this: void, opts: any, obj: any) => any
    }
    namespace finders {
        /**
        Creates new finder table
        */
        function new_table(this: void, obj: any): any;
    }
    namespace config {
        namespace values {
            /**
            Returns generic sorter
            */
            function generic_sorter(this: void, opts: any): any;
        }
    }
    namespace actions {
        namespace select_default {
            /**
            */
            function replace(this: any, callback: Function): any;
        }
        namespace state {
            /**
            Returns selected entry
            */
            function get_selected_entry(this: void): any;
        }
        /**
        Closes picker
        */
        function close(this: void, buf: any): any;
    }
    namespace themes {
        /**
        */
        function get_dropdown(this: void, opts: any): any;
    }
}

