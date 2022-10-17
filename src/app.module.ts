import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { AuthModule } from './auth/auth.module';
import { getMongoConfig } from './config/mongo.config';
import { ProductModule } from './product/product.module';
import { TopPageModule } from './top-page/top-page.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // TypegooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: getMongoConfig,
    // }),
    TypegooseModule.forRoot('mongodb://admin:admin@localhost:27017', {
      // useCreateIndex: true,
      // useFindAndModify: true,
      // useUnifiedTopology: true,
      // useNewUrlParser: true,
    }),
    AuthModule,
    ProductModule,
    TopPageModule,
    ReviewModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
