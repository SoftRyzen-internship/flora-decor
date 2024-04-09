import { defineType, defineField, defineArrayMember } from 'sanity';

export const products = defineType({
  name: 'products',
  title: 'Товари',
  type: 'document',

  fields: [
    defineField({
      name: 'product',
      type: 'string',
      title: 'Назва товару',
      description: 'Введіть назву товару',
      validation: rule =>
        rule.required().error("Назва товару є обов'язковим полем"),
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Ціна',
      description: 'Введіть ціну товару',
      validation: rule =>
        rule.required().error("Ціна товару є обов'язковим полем"),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Зображення',
      description: 'Додайте зображення товару',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Назва товару',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'volumes',
      title: 'Об`єми',
      type: 'array',
      description: 'Оберіть наявні об`єми вазонів',
      validation: rule => rule.required().error("Об`єми є обов'язковим полем"),
      of: [
        defineArrayMember({
          type: 'string',
          name: 'volume',
          options: {
            list: [
              { title: '11', value: '11' },
              { title: '12', value: '12' },
              { title: '14', value: '14' },
              { title: '15', value: '15' },
              { title: '17', value: '17' },
              { title: '19', value: '19' },
            ],
          },
        }),
      ],
    }),
  ],
});
