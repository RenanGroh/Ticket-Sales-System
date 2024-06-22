import { TicketKind } from '@prisma/client';

export class reserveSpotDto {
  spots: string[];
  ticket_kind: TicketKind;
  email: string;
}
