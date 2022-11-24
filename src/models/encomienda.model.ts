import {Entity, model, property} from '@loopback/repository';

@model()
export class Encomienda extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'string',
    required: true,
  })
  peso: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;

  @property({
    type: 'string',
    required: true,
  })
  presentacion: string;


  constructor(data?: Partial<Encomienda>) {
    super(data);
  }
}

export interface EncomiendaRelations {
  // describe navigational properties here
}

export type EncomiendaWithRelations = Encomienda & EncomiendaRelations;
