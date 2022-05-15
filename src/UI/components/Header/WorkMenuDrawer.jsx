import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function WorkMenuDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    console.log(state);

    setState({ ...state, ["right"]: (state.right === true)?false:true });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 360 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
            
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"right"}>
        <div className="navicon" onClick={toggleDrawer("right", true)}>
            <svg id="Layer_1_1_" version="1.1" viewBox="0 0 16 16" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><rect height="4" width="4"/><rect height="4" width="4" x="6"/><rect height="4" width="4" x="12"/><rect height="4" width="4" y="6"/><rect height="4" width="4" x="6" y="6"/><rect height="4" width="4" x="12" y="6"/><rect height="4" width="4" y="12"/><rect height="4" width="4" x="6" y="12"/><rect height="4" width="4" x="12" y="12"/></svg>
            <span className="navicon-text"><span>Work</span> <svg height="512px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M98.9,184.7l1.8,2.1l136,156.5c4.6,5.3,11.5,8.6,19.2,8.6c7.7,0,14.6-3.4,19.2-8.6L411,187.1l2.3-2.6  c1.7-2.5,2.7-5.5,2.7-8.7c0-8.7-7.4-15.8-16.6-15.8v0H112.6v0c-9.2,0-16.6,7.1-16.6,15.8C96,179.1,97.1,182.2,98.9,184.7z"/></svg></span>
        </div>
        <Drawer
            classes={{
                paper: "HeaderMenuWorkDrawer"
            }}
            anchor={"right"}
            open={state["right"]}
            disableScrollLock={true}
            style={{'marginTop':'53px !important'}}
            onClose={toggleDrawer("right", false)}
        >{list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}