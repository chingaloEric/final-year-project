import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParameterModule } from './modules/parameter/parameter.module';
import { UserModule } from './modules/system/user/user.module';
import { UserPermissionModule } from './modules/system/user-permission/user-permission.module';
import { DeviceModule } from './modules/device/device.module';
import { UserRoleModule } from './modules/system/user-role/user-role.module';
import { ResultModule } from './modules/result/result.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ParameterModule,
    UserModule,
    UserPermissionModule,
    DeviceModule,
    UserRoleModule,
    ResultModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
