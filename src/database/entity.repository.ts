import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Document, FilterQuery, Model, UpdateQuery } from 'mongoose';

export abstract class EntityRepository<T extends Document> {
  constructor(protected readonly entityModel: Model<T>) {}

  async findOne(
    entityFilterQuery: FilterQuery<T>,
    projection?: Record<string, unknown>,
  ): Promise<T> {
    return this.entityModel.findOne(entityFilterQuery, {
      ...projection,
    });
  }

  async find(
    entityFilterQuery: FilterQuery<T>,
    projection?: Record<string, unknown>,
  ): Promise<T[] | null> {
    return this.entityModel.find(entityFilterQuery, {
      ...projection,
    });
  }

  async create(createEntityData: unknown): Promise<T> {
    try {
      console.log('Entity');
      const entity = await this.entityModel.create(createEntityData);
      console.log(entity);
      // await entity.save();
      console.log('doc saved');
      return entity;
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(
          `Invalid ${Object.keys(error.keyPattern)[0]}`,
        );
      } else return error;
    }
  }
  async findOneAndUpdate(filterQuery: FilterQuery<T>, update: UpdateQuery<T>) {
    const document = await this.entityModel.findOneAndUpdate(
      filterQuery,
      update,
      {
        lean: true,
        new: true,
      },
    );

    if (!document) {
      throw new NotFoundException('Document not found.');
    }

    return document;
  }
}
