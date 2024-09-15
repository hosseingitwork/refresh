import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';

export default function RowCard(props) {

    const title = props.title
    const icon = props.icon

    return (
    <Card orientation="horizontal" variant="outlined" sx={{ width: '100%', marginTop:'1rem' }}>
      <CardOverflow>
          <div style={{marginLeft:'1rem'}}>
          {icon}
          </div>

      </CardOverflow>
      <CardContent>
        <Typography textColor="success.plainColor" sx={{ fontWeight: 'md' }}>
         {title}
        </Typography>
      </CardContent>
    </Card>
  );
}