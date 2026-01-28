import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LocationsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.location.findMany();
  }

  findOne(id: string) {
    return this.prisma.location.findUnique({
      where: { id },
    });
  }
}
