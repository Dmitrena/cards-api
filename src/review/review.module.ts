import { TypegooseModule } from 'nestjs-typegoose';
import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { ReviewModel } from './review.model';

@Module({
  imports: [TypegooseModule.forFeature([ReviewModel])],
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewModule {}
