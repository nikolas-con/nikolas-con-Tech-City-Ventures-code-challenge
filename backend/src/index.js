import { listen } from './services/http'
import {connectDB} from './services/database'


connectDB().then(listen)


