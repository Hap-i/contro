import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import { GroupRepository } from './groups.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Group, GroupSchema } from './schema/groups.schema';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Group.name,
        imports: [UserModule],
        useFactory: (userService: UserService) => {
          const schema = GroupSchema;
          schema.pre('save', async function () {
            const membersPromise = this.members.map(
              async (id) => await userService.findOne(id as unknown as string),
            );
            const membersDetails = await Promise.all(membersPromise);
            this.members = membersDetails.map((member) => {
              return {
                _id: member._id,
                name: member.name,
              };
            });
          });
          return schema;
        },
        inject: [UserService],
      },
    ]),
  ],
  controllers: [GroupsController],
  providers: [GroupsService, GroupRepository],
})
export class GroupsModule {}
