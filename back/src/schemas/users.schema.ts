import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

const userSchemaRequest = userSchema.omit({
  id: true,
});
const userSchemaResponse = userSchema.omit({
  password: true,
});

export { userSchema, userSchemaRequest, userSchemaResponse };
