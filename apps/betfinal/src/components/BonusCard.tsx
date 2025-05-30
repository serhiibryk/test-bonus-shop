import { Card, CardContent, Typography } from '@mui/material';
import { IBonus } from '@repo/shared/types/Bonus';

interface Props {
  bonus: IBonus;
  lang: 'en' | 'ar';
}

const BonusCard = ({ bonus, lang }: Props) => (
  <Card>
    <CardContent>
      <Typography variant="h6">{bonus.name[lang]}</Typography>
      {bonus.description?.[lang] && (
        <Typography variant="body2">{bonus.description[lang]}</Typography>
      )}
    </CardContent>
  </Card>
);

export default BonusCard;
