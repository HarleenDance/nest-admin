import { FactoryProvider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { QINIU_CONFIG } from 'src/modules/admin/admin.constants';
import { IQiniuConfig } from '../../admin.interface';
import { ConfigurationKeyPaths } from '@/config/configuration';

/**
 * 提供使用 @Inject(QINIU_CONFIG) 直接获取七牛配置
 */
export function qiniuProvider(): FactoryProvider {
    return {
        provide: QINIU_CONFIG,
        useFactory: (
            configService: ConfigService<ConfigurationKeyPaths>,
        ): IQiniuConfig => ({
            accessKey: configService.get('qiniu.accessKey') == 'xxx' ? '6Euae44_vJP177085yjMt_KSDq0rQ6D6bH5zk7jI' : '',
            secretKey: configService.get('qiniu.secretKey') == 'xxx' ? 'lzkm5EZHshjko7DoL4rKREEoWKTB0loozxEr4DTc' : '',
            domain: configService.get('qiniu.domain') == 'xxx' ? 'http://rjslvjju0.hn-bkt.clouddn.com' : '',
            bucket: configService.get('qiniu.bucket') == 'xxx' ? 'harleen' : '',
            zone: configService.get('qiniu.zone'),
            access: configService.get('qiniu.access'),
        }),
        inject: [ConfigService],
    };
}
