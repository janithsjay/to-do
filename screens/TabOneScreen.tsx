import * as React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, StatusBar} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Fab from '@material-ui/core/Fab';
import { createStackNavigator } from '@react-navigation/stack';
import { TabOneParamList, TabTwoParamList } from '../types';
import TabTwoScreen from '../screens/TabTwoScreen';
// import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AddTask from '../components/addTask';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
    
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));




export default function TabOneScreen() {
  let classes = useStyles();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      backgroundColor: 'black',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
  });



  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <div className={classes.root}>
      
      <Accordion style={{marginBottom:3}}>
        <AccordionSummary
          expandIcon={"+"}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>To Do UI</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
        <Typography variant="caption">
            Create UI for TODO application
            </Typography>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button size="small" color="secondary">Remove</Button>
          <Button size="small" color="primary">
            Complete
          </Button>
        </AccordionActions>
      </Accordion>
      <Accordion style={{marginBottom:3}}>
        <AccordionSummary
          expandIcon={"+"}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>To Do backend</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
        <Typography variant="caption">
            Create UI for TODO application
            </Typography>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button size="small" color="secondary">Remove</Button>
          <Button size="small" color="primary">
            Complete
          </Button>
        </AccordionActions>
      </Accordion>
      <Accordion style={{marginBottom:3}}>
        <AccordionSummary
          expandIcon={"+"}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>To Do intergartion</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
        <Typography variant="caption">
            Create UI for TODO application
            </Typography>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button size="small" color="secondary">Remove</Button>
          <Button size="small" color="primary">
            Complete
          </Button>
        </AccordionActions>
      </Accordion>
    </div>
      </ScrollView>
    </SafeAreaView>
    <Fab onClick={handleOpen} color="primary" size="small" aria-label="add">
        {/* <AddIcon /> */}
        +
      </Fab>


      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <AddTask/>
        </Fade>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
