import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EntityRepository } from '../database/entity.repository';
import { Group, GroupDocument } from './schema/groups.schema';

@Injectable()
export class GroupRepository extends EntityRepository<GroupDocument> {
  constructor(
    @InjectModel(Group.name) private groupModel: Model<GroupDocument>,
  ) {
    super(groupModel);
  }
}
