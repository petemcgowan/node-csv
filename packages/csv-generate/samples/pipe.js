
import { generate } from 'csv-generate'

generate({
  columns: ['int', 'bool'],
  length: 2
})
.pipe(process.stdout)
