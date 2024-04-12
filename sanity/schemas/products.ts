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
      validation: rule =>
        rule.required().error("Зображення є обов'язковим полем"),
      // options: { hotspot: true },
    }),
    defineField({
      name: 'volumes',
      title: 'Об`єми',
      type: 'array',
      description: 'Оберіть наявні об`єми вазонів',
      validation: rule =>
        rule
          .required()
          .error("Об`єми є обов'язковим полем")
          .unique()
          .error("Об'єми повинні бути унікальними")
          .min(1)
          .error("Оберіть об'єми: від 1 до 4")
          .max(4)
          .error("Кількість об'ємів не більше 4"),

      of: [
        defineArrayMember({
          type: 'string',
          name: 'volume',
          options: {
            list: [
              { title: '11', value: '11' },
              { title: '12', value: '12' },
              { title: '13', value: '13' },
              { title: '14', value: '14' },
              { title: '15', value: '15' },
              { title: '17', value: '17' },
              { title: '19', value: '19' },
              { title: '23', value: '23' },
            ],
          },
          validation: rule =>
            rule.regex(/^.+$/).error('Поле об`єму не повинно бути пустим.'),
        }),
      ],
    }),
  ],
});
