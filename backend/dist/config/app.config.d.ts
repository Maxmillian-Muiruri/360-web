declare const _default: (() => {
    port: number;
    nodeEnv: string;
    apiPrefix: string;
    corsOrigin: string;
    jwtSecret: string | undefined;
    jwtExpiresIn: string;
    refreshTokenExpiresIn: string;
    bcryptRounds: number;
    uploadMaxSize: number;
    uploadPath: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    port: number;
    nodeEnv: string;
    apiPrefix: string;
    corsOrigin: string;
    jwtSecret: string | undefined;
    jwtExpiresIn: string;
    refreshTokenExpiresIn: string;
    bcryptRounds: number;
    uploadMaxSize: number;
    uploadPath: string;
}>;
export default _default;
