import React from 'react';

import MatchCard from './components/MatchCard';

const matches = [
  {
    _id: '1',
    photoUrl:
      'https://d25rq8gxcq0p71.cloudfront.net/dictionary-images/324/t-shirt.jpg',
    title: 'Blue T-shirt',
    tag: 'T-shirt',
    description: 'Lorem ipsum dolor sit amet..Lorem ipsum..',
  },
  {
    _id: '2',
    photoUrl:
      'https://resources.claroshop.com/medios-plazavip/fotos/productos_sears1/original/3109739.jpg',
    title: 'Blue Pants',
    tag: 'Pants',
    description: 'Lorem ipsum dolor sit amet..Lorem ipsum..',
  },
  {
    _id: '3',
    photoUrl:
      'https://images-primary.freetls.fastly.net/flat-product-images/the-tutu-skirt/the-tutu-skirt_rose_P.jpg?version=12',
    title: 'Pink Skirt',
    tag: 'Skirt',
    description: 'Lorem ipsum dolor sit amet..Lorem ipsum..',
  },
];

const Matches = () => {
  return (
    <div>
      {matches.map(({ _id, photoUrl, title, tag, description }) => (
        <MatchCard
          key={_id}
          photoUrl={photoUrl}
          title={title}
          description={description}
          tag={tag}
        />
      ))}
    </div>
  );
};

export default Matches;
