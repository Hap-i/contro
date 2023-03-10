import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist';
import { ConfigService } from '@nestjs/config/dist/config.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TransactionsModule } from './transactions/transactions.module';
import { AccountsModule } from './accounts/accounts.module';
import { AccountsBucketModule } from './accounts-bucket/accounts-bucket.module';
import { GroupsModule } from './groups/groups.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`./.env.${process.env.STAGE}`],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return { uri: configService.get('DATABASE_URL') };
      },
    }),
    UserModule,
    AuthModule,
    TransactionsModule,
    AccountsModule,
    AccountsBucketModule,
    GroupsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
