import mitt from 'mitt'

type Events = {
  'route-change': string
}

export const eventBus = mitt<Events>()
