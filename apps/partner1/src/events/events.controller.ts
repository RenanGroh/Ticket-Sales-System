import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { EventsService } from '@app/core/events/events.service';
import { CreateEventRequest } from './request/create-event.request';
import { UpdateEventRequest } from './request/update-event.request';
import { reserveSpotRequest } from './request/reserve-spot.request';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body() createEventRequest: CreateEventRequest): any {
    return this.eventsService.create(createEventRequest);
  }

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEventRequest: UpdateEventRequest,
  ) {
    return this.eventsService.update(id, updateEventRequest);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(id);
  }

  @Post(':id/reserve')
  reserveSpots(
    @Body() reserveRequest: reserveSpotRequest,
    @Param('id') eventId: string,
  ) {
    return this.eventsService.reserveSpot({ ...reserveRequest, eventId });
  }
}
