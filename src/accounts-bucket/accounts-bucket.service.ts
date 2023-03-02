import { Injectable } from '@nestjs/common';
import { AccountBucketRepository } from './accounts-bucket.repository';
import { CreateAccountsBucketDto } from './dto/create-accounts-bucket.dto';
// import { UpdateAccountsBucketDto } from './dto/update-accounts-bucket.dto';

@Injectable()
export class AccountsBucketService {
  constructor(
    private readonly accountBucketRepository: AccountBucketRepository,
  ) {}
  create(createAccountsBucketDto: CreateAccountsBucketDto) {
    return this.accountBucketRepository.create(createAccountsBucketDto);
  }

  // findAll() {
  //   return `This action returns all accountsBucket`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} accountsBucket`;
  // }

  // update(id: number, updateAccountsBucketDto: UpdateAccountsBucketDto) {
  //   return `This action updates a #${id} accountsBucket`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} accountsBucket`;
  // }
}
