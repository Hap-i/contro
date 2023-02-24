import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TranscationService } from './transcation.service';
import { CreateTranscationDto } from './dto/create-transcation.dto';
// import { UpdateTranscationDto } from './dto/update-transcation.dto';

@Controller('transcation')
export class TranscationController {
  constructor(private readonly transcationService: TranscationService) {}

  @Post()
  async create(@Body() createTranscationDto: CreateTranscationDto) {
    return await this.transcationService.create(createTranscationDto);
  }

  // @Get()
  // findAll() {
  //   return this.transcationService.findAll();
  // }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.transcationService.findOne(id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateTranscationDto: UpdateTranscationDto,
  // ) {
  //   return this.transcationService.update(+id, updateTranscationDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.transcationService.remove(+id);
  // }
}
