import * as qiniu from 'qiniu';

export default {
    rootRoleId: 1,
    // jwt sign secret
    jwt: {
        secret: process.env.JWT_SECRET || '123456',
    },
    // typeorm config
    database: {
        type: 'mysql',
        host: '175.178.67.107',
        port: 3396,
        username: 'root',
        password: 'root',
        database: 'next_admin',
        synchronize: false,
        logging: false,
    },
    redis: {
        host: '175.178.67.107', // default value
        port: 6379, // default value
        password: '',
        db: 0,
    },
    // qiniu config
    qiniu: {
        accessKey: '6Euae44_vJP177085yjMt_KSDq0rQ6D6bH5zk7jI',
        secretKey: 'lzkm5EZHshjko7DoL4rKREEoWKTB0loozxEr4DTc',
        domain: 'http://rjslvjju0.hn-bkt.clouddn.com',
        bucket: 'harleen',
        zone: qiniu.zone.Zone_z0,
        access: 'public',
    },
};
