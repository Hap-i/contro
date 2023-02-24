import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`./.env.${process.env.STAGE}`],
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
