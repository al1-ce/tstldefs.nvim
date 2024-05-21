
interface PlenaryJobConstructor {
    new(job: any): PlenaryJob;
}

interface PlenaryJob {
    sync(): any;
    start(): any;
    shutdown(): any;
}

declare var PlenaryJob: PlenaryJobConstructor;

