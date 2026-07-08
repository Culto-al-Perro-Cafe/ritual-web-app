import { absoluteUrl } from "./site";
import type { SchemaAuthor } from "./schema";

export const AUTHORS = {
  joseSalcido: {
    id: "joseSalcido",
    name: "Jose Salcido",
    url: absoluteUrl("/autores/jose-salcido"),
    jobTitle: "CEO",
    worksFor: {
      name: "Culto al Perro Cafe",
      url: "https://www.perro.cafe/",
    },
  },
} satisfies Record<string, SchemaAuthor>;

export type AuthorId = keyof typeof AUTHORS;

export function getAuthor(authorId: AuthorId) {
  return AUTHORS[authorId];
}
