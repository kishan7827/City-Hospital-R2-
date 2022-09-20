import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function MedisinesAdmin(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <h1>Medicines</h1>

            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                   Add Medicines
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add Medicines</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            name='name'
                            label="Medicines Name"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="price"
                            name='price'
                            label="Medicines Price"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="qty"
                            name='qty'
                            label="Medicines Quantity"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="expiry"
                            name='expiry'
                            label="Medicines Expiry"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose}>Add</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}

export default MedisinesAdmin;