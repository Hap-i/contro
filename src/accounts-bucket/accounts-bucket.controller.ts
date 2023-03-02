import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccountsBucketService } from './accounts-bucket.service';
import { CreateAccountsBucketDto } from './dto/create-accounts-bucket.dto';
import { UpdateAccountsBucketDto } from './dto/update-accounts-bucket.dto';

@Controller('accounts-bucket')
export class AccountsBucketController {
  constructor(private readonly accountsBucketService: AccountsBucketService) {}

  @Post()
  create(@Body() createAccountsBucketDto: CreateAccountsBucketDto) {
    return this.accountsBucketService.create(createAccountsBucketDto);
  }

  // @Get()
  // findAll() {
  //   return this.accountsBucketService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.accountsBucketService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateAccountsBucketDto: UpdateAccountsBucketDto,
  // ) {
  //   return this.accountsBucketService.update(+id, updateAccountsBucketDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.accountsBucketService.remove(+id);
  // }
}
