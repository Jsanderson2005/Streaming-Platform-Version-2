import { initExpress } from './libs/API'
import { initMain } from './libs/MainServer'
import { initStream } from './libs/nms'
import log from './utils/log'

log('info', 'Skeleton', 'Skeleton Loaded')

initExpress()
initStream()
initMain()
