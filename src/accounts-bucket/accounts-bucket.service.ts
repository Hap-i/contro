import { Injectable } from '@nestjs/common';
import { AccountsService } from '../accounts/accounts.service';
import { CreateAccountDto } from '../accounts/dto/create-account.dto';
import { AccountBucketRepository } from './accounts-bucket.repository';
import { CreateAccountsBucketDto } from './dto/create-accounts-bucket.dto';
// import { UpdateAccountsBucketDto } from './dto/update-accounts-bucket.dto';

@Injectable()
export class AccountsBucketService {
  constructor(
    private readonly accountBucketRepository: AccountBucketRepository,
    private readonly accountsService: AccountsService,
  ) {}
  async create(createAccountsBucketDto: CreateAccountsBucketDto) {
    /*
    STEP-1: Check if account bucket exists or not
    STEP-2: If exists then return already exists and return the record
    STEP-3: If not then create One and return
    */
    const accountDto: CreateAccountDto = {
      openingOutstandingAmount: 0,
      noTxnInBucket: 0,
      prevBucket: undefined,
      transactions: [],
      currentOutstandingAmount: 0,
    };
    const response = await this.accountsService.create(accountDto);
    createAccountsBucketDto.latestBucketId = response._id;
    return await this.accountBucketRepository.create(createAccountsBucketDto);
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
