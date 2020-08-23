import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { withRouter } from 'react-router';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AlertDialogSlide(props) {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.history.push({ pathname: '/' });
  };

  const handleAgree = () => {
    setOpen(false);
    props.history.push({ pathname: '/premium-plans' });
  }

  return (
    <div style={{marginTop:"100px"}}>
      {/* <Button variant="outlined" color="primary" onClick={()=>{handleClickOpen()}}>
        Slide in alert dialog
      </Button> */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        {/* <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          For Premium Access You will be transfered to Payment page,If you don't like the premium access you can click Disagree.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleAgree} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default withRouter(AlertDialogSlide);