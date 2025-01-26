import { type SchemaTypeDefinition } from 'sanity'
import {productSchema} from './products'
import {electronicSchema} from './electronic'
import {femaleSchema} from './female'
import { kitchenSchema } from './kitchen'
import {maleSchema} from './male'
import { watchesSchema } from './watches'
import { makeupSchema } from './makeup'
import { foodSchema } from './food'
import { femaleclothesSchema } from './femaleclothes'
import { childbabySchema } from './childbaby'
import { boysSchema } from './boys'
import { grocerySchema } from './grocery'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, electronicSchema, femaleSchema, kitchenSchema, maleSchema,watchesSchema,makeupSchema,foodSchema,femaleclothesSchema,childbabySchema,boysSchema,grocerySchema ],
}
