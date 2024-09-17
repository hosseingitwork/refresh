import { Box } from "@mui/material";
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';

const ContactCard = (props) => {
    const title = props.title
    const info = props.info
    const icon = props.icon
    return (
    <Box sx={{ backgroundColor: '#f4f4f4', padding: '3rem'}}>
        {icon}
        <div style={{fontWeight: 'bold', marginTop:'1rem', fontSize:20}}>
        {title}
        </div>
        <div style={{marginTop:'1rem'}}>
        {info}
        </div>
    </Box>
    );
}

export default ContactCard;