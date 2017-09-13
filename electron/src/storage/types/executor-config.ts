export interface ExecutorConfig {
    path: string;
}

export interface AppExecutionContext {
    jobPath: string;
    executionParams: ExecutorParamsConfig;
}

export interface ExecutorParamsConfig {
    baseDir: string;
    configurationDir: string;
    cacheDir: string;
    noContainer: boolean;
    outDir: string;
    quiet: boolean;
    verbose: boolean;
}
