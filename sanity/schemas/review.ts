import { defineType, defineField } from 'sanity';

export const review = defineType({
  name: 'reviews',
  title: 'Відгуки',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: "Ім'я",
      type: 'string',
      description: "Введіть ім'я",

      validation: rule => rule.required().error("Ім'я є обов'язковим полем"),
    }),

    defineField({
      name: 'city',
      title: 'Місто',
      type: 'string',
      description: 'Введіть місто',
      validation: rule => rule.required().error("Місто є обов'язковим полем"),
    }),

    defineField({
      name: 'text',
      title: 'Текст відгуку',
      type: 'text',
      description: 'Введіть текст відгуку',
      validation: rule => rule.required().error("Текст відгуку є обов'язковим"),
    }),
  ],
});
