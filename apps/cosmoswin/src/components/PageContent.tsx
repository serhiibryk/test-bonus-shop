'use client';

import BonusCard from './BonusCard';

const bonusList = [
  { title: 'Welcome Bonus', description: 'Only for new users' },
  { title: 'Samurai Bonus', description: 'Exclusive for Japan' },
];

const BonusShopPage = () => {
  return (
    <div>
      {bonusList.map((bonus) => (
        <BonusCard key={bonus.title} title={bonus.title} description={bonus.description} />
      ))}
    </div>
  );
};

export default BonusShopPage;
