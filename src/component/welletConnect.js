import { useEffect, useState } from "react"
import { ethers } from "ethers";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Web3 from "web3";
import { ABI } from "../config/abi";
import { Address } from "../config/address";
import { Grid, TextField } from "@mui/material";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color: "black",
};
function WellectConnect(props) {
    let [number,setNumber]= useState()
    let [quantity,setQuantity]= useState()
    let [transferAddress,setTransferAddress]= useState()
    let { open, handleClose } = props
     
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ width: "100%", paddingTop: "10px", paddingBottom: "10px" }}
        >
            <Box sx={style}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <Grid item md={12}>
                        <TextField sx={{ margin: "10px", padding: "5px" }} label="Event No" variant="outlined" onChange={(e)=>setNumber(e.target.value)} />
                    </Grid>
                    <Grid item md={12}>
                        <TextField sx={{ margin: "10px", padding: "5px" }} label="Quantity" variant="outlined" onChange={(e)=>setQuantity(e.target.value)}/>
                    </Grid>
                    <Grid item md={12}>
                        <TextField sx={{ margin: "10px", padding: "5px" }} label="address " variant="outlined" onChange={(e)=>setTransferAddress(e.target.value)}/>
                    </Grid>
                    <Grid item md={12}>
                        <Button sx={{backgroundColor:"#F44336" , color:"white" ,margin:"10px"}} 
                        // onClick={()=>Transfer()}
                        >Transfer Ticket</Button>
                    </Grid>
                </Box>
            </Box>
        </Modal>
    )
}
export default WellectConnect