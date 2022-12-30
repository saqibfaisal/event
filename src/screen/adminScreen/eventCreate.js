import { Button, Grid, TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/system';
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import Dashboard from '../../component/dashboard';
import { ABI } from '../../config/abi';
import { Address } from '../../config/address';
import { sendData } from "../../config/firbeaseMethod";
function EventCreate() {
    let [name, setName] = useState("");
    let [date, setDate] = useState();
    let [price, setPrice] = useState();
    let [ticket, setTicket] = useState();
    let [id, setId] = useState();
    async function Create() {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum)
            await window.ethereum.enable();
            let contract = new web3.eth.Contract(ABI, Address)

            let response = await contract.methods.createEvent(name, date, price, ticket).send({ from:localStorage.getItem("AdminAddress")})
            console.log(response)

            localStorage.setItem("create", JSON.stringify(response))
            sendData(response, "Event")
                .then((success) => {
                    console.log(success);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
    async function Get() {
        const web3 = new Web3(window.ethereum)
        await window.ethereum.enable();
        let contract = new web3.eth.Contract(ABI, Address)
        // console.log(await contract.methods)
        let get = await contract.methods.getTicket(id).call()
        console.log(get);
    }
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
                        onClick={() => Create()}
                    >Create</Button>
                </Grid>

            </Box>
            <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", marginTop: "20px" }}>
                <Grid item md={12}>
                    <TextField sx={{ margin: "30px" }} fullWidth id="filled-basic" label="id" variant="filled" onChange={(e) => setId(e.target.value)} />
                </Grid>
                <Grid item md={12}>
                    <Button variant="contained"
                        onClick={() => Get()}
                    >GETSS</Button>
                </Grid>
            </Box>
        </Box>
    )
}
export default EventCreate