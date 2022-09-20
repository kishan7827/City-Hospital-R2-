import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function DoctorAdmin(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <h1>Doctors</h1>
            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                   Add Doctors Details
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle> Add Doctors Details</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="doctor name"
                            name='doctor name'
                            label="Doctor Name"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="Doctor age"
                            label="Doctor Age"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="Doctor experience"
                            label="Doctor Experience"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose}>Add Details</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}

export default DoctorAdmin;