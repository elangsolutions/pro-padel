import { Resolver, Query, Args } from '@nestjs/graphql';
import { LocationsService } from './locations.service';
import { Location } from './models/location.model';

@Resolver(() => Location)
export class LocationsResolver {
  constructor(private service: LocationsService) {}

  @Query(() => [Location])
  locations() {
    return this.service.findAll();
  }

  @Query(() => Location, { nullable: true })
  location(@Args('id') id: string) {
    return this.service.findOne(id);
  }
}
