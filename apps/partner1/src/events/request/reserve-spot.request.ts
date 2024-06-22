import { TicketKind } from '@prisma/client';

export class reserveSpotRequest {
  spots: string[];
  ticket_kind: TicketKind;
  email: string;
}
