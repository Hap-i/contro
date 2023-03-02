import { PartialType } from '@nestjs/swagger';
import { CreateAccountsBucketDto } from './create-accounts-bucket.dto';

export class UpdateAccountsBucketDto extends PartialType(CreateAccountsBucketDto) {}
