// import React from 'react'
// import '../Assets/Css/footer.css'

// export default function Footer() {
//     return (
//         <div>
//             <footer className="footer">
//     <p>Some footer nonsense!</p>
//   </footer>
//         </div>
//     )
// }
import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        KSEB
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // minHeight: '50vh',
  },
  main: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(5, 1),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      {/* <Container component="main" className={classes.main} maxWidth="sm"> */}
        {/* <Typography variant="h2" component="h1" gutterBottom>
          Sticky footer
        </Typography> */}
        {/* <Typography variant="h5" component="h2" gutterBottom>
          {'Pin a footer to the bottom of the viewport.'}
          {'The footer will move as the main element of the page grows.'}
        </Typography>
        <Typography variant="body1">Sticky footer placeholder.</Typography> */}
      {/* </Container> */}
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">A KSEB Project</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}