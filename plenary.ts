
interface PlenaryJobConstructor {
    new(job: any): PlenaryJob;
}

interface PlenaryJob {
    /**
    Start plenary job
    */
    sync(): any;
    /**
    Start plenary job
    */
    start(): any;
    /**
    Stops plenary job
    */
    shutdown(): any;
}

declare var PlenaryJob: PlenaryJobConstructor;

