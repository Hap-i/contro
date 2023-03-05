import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { GroupRepository } from './groups.repository';

@Injectable()
export class GroupsService {
  constructor(private readonly groupRepository: GroupRepository) {}
  create(createGroupDto: CreateGroupDto) {
    return this.groupRepository.create(createGroupDto);
  }

  // findAll() {
  //   return `This action returns all groups`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} group`;
  // }

  // update(id: number, updateGroupDto: UpdateGroupDto) {
  //   return `This action updates a #${id} group`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} group`;
  // }
}
