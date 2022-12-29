import { Button, Grid, TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/system';
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import Dashboard from '../../component/dashboard';
import { ABI } from '../../config/abi';
function EventCreate() {
    let [name, setName] = useState("");
    let [date, setDate] = useState();
    let [price, setPrice] = useState();
    let [ticket, setTicket] = useState();
    let Connect = () => {
        if (window.ethereum) {
            // Do something
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(res => {
                    console.log(res);
                    // Return the address of the wallet
                    // setDefaultAccount(res[0])
                    // accountChangedHnadler(res[0]);

                    localStorage.setItem("AdminAddress", res[0])
                    // debugger
                })
        } else {
            // setErrorMessage('Install MetaMask')
            console.log("install metamask");
        }
    }
    // useEffect((
    //     Connect()
    // ), [])
        // let Create = () => {
        //     // async function Submit() {
        //     if (window.ethereum) {
        //         // event.preventDefault()
        //         const web3 = new Web3(window.ethereum)
        //         // const signer = provider.getSigner();
        //         let contract = new web3.eth.Contract(ABI, localStorage.getItem("AdminAddress"))
        //         // let response = await contract.methods.buyTicket(address, name, date, price, ticket, ticket).call()
        //         // console.log(response)
        //         // let response = await contract.methods.buyTicket(0, 10).call()
        //         // console.log(response)
        //     }
        //     // }
        // }
    return (
        <Box>
            <Dashboard />
            <Box sx={{ display: "flex", justifyContent: "center", alignContent: 'center', flexDirection: "column", backgroundColor: "black" }}>
                <h1 style={{ margin: "auto" }}>Create Event</h1>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", marginTop: "20px" }}>
                <Grid item md={12}>
                    <TextField sx={{ margin: "30px" }} fullWidth id="filled-basic" label="Name" variant="filled" onChange={(e) => setName(e.target.value)} />
                </Grid>

                <Grid item md={12}>
                    <TextField sx={{ margin: "30px", marginTop: "10px" }} fullWidth id="filled-basic" label="Date" variant="filled" onChange={(e) => setDate(e.target.value)} />
                </Grid>
                <Grid item md={12}>
                    <TextField sx={{ margin: "30px", marginTop: "10px" }} fullWidth id="filled-basic" label="Price" variant="filled" onChange={(e) => setPrice(e.target.value)} />
                </Grid>
                <Grid item md={12}>
                    <TextField sx={{ margin: "30px", marginTop: "10px" }} fullWidth id="filled-basic" label="Ticket" variant="filled" onChange={(e) => setTicket(e.target.value)} />
                </Grid>
                <Grid item md={12}>
                    <Button variant="contained" 
                    // onClick={() => Create()}
                    >Create</Button>
                </Grid>

            </Box>
        </Box>
    )
}
export default EventCreate