import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import EvaluacionImage from '../../../public/img/evaluacion_nutricional.jpg'

export default function BasicCard() {
  return (
    <Card sx={{ width: '100%' }}>
      <div>
        <Typography level="title-lg">Evaluación Nutricional</Typography>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={EvaluacionImage}
          srcSet={EvaluacionImage.src}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
        Análisis del estado nutricional del paciente
        </div>
      </CardContent>
    </Card>
  );
}