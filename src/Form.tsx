import { useForm } from '@formspree/react';
import {FormControl, FormLabel, TextField, Button, FormGroup, FormControlLabel, Checkbox} from "@mui/material";
import {useState} from "react";
import axios from "axios";

function Form() {
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState(false)

    const [name, setName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [preferCall, setPreferCall] = useState(false)
    const [preferText, setPreferText] = useState(false)
    const [preferEmail, setPreferEmail] = useState(false)
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [serviceDetails, setServiceDetails] = useState('')

    const handleSubmit = (event: any) => {
        event.preventDefault()
        setError(false)
        setSuccess(false)

        if (preferCall && phone === '') {
            setError(true)
            setErrorMessage('Phone is required')
            return
        }
        if (preferText && phone === '') {
            setError(true)
            setErrorMessage('Phone is required')
            return
        }
        if (preferEmail && email === '') {
            setError(true)
            setErrorMessage('Email is required')
            return
        }
        if (serviceDetails === '') {
            setError(true)
            setErrorMessage('Service details are required')
            return
        }
        if (name === '') {
            setError(true)
            setErrorMessage('Name is required')
            return
        }
        setSuccess(true)

        const contactMethods = []
        if (preferEmail) contactMethods.push('email')
        if (preferText) contactMethods.push('text')
        if (preferCall) contactMethods.push('call')
        axios({
            url: 'https://formspree.io/f/xjvqkydz',
            method: 'post',
            headers: {
                'Accept': 'application/json'
            },
            data: {
                name,
                companyName,
                email,
                phone,
                address,
                state,
                city,
                zip,
                serviceDetails,
                contactMethods,
            }
        }).then((response: any) => { console.log(response); })
            .catch((error: any) => console.log(error))
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormControl>
                <FormLabel>First and Last Name</FormLabel>
                <TextField
                    id={'name'}
                    fullWidth
                    onChange={e => setName(e.target.value)}
                />
                <FormLabel>Company Name (if applicable)</FormLabel>
                <TextField
                    id={'companyName'}
                    fullWidth
                    onChange={e => setCompanyName(e.target.value)}
                />
                <FormLabel>Email</FormLabel>
                <TextField
                    id={'email'}
                    fullWidth
                    onChange={e => setEmail(e.target.value)}
                />
                <FormLabel>Phone Number</FormLabel>
                <TextField
                    id={'phone'}
                    fullWidth
                    onChange={e => setPhone(e.target.value)}
                />
                <FormLabel>Please select the best way(s) to contact you.</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        id={'preferCall'}
                        control={<Checkbox onChange={e => setPreferCall(e.target.checked)} />}
                        label="Call"
                    />
                    <FormControlLabel
                        id={'preferText'}
                        control={<Checkbox onChange={e => setPreferText(e.target.checked)} />}
                        label="Text"
                    />
                    <FormControlLabel
                        id={'preferEmail'}
                        control={<Checkbox onChange={e => setPreferEmail(e.target.checked)} />}
                        label="Email"
                    />
                </FormGroup>
                <FormLabel>Address</FormLabel>
                <TextField
                    id={'address'}
                    fullWidth
                    onChange={e => setAddress(e.target.value)}
                />
                <FormLabel>City</FormLabel>
                <TextField
                    id={'city'}
                    fullWidth
                    onChange={e => setCity(e.target.value)}
                />
                <FormLabel>State</FormLabel>
                <TextField
                    id={'state'}
                    fullWidth
                    onChange={e => setState(e.target.value)}
                />
                <FormLabel>Zip Code</FormLabel>
                <TextField
                    id={'zip'}
                    fullWidth
                    onChange={e => setZip(e.target.value)}
                />
                <FormLabel>Service details</FormLabel>
                <TextField
                    id={'serviceDetails'}
                    fullWidth
                    multiline
                    rows={4}
                    placeholder="Please provide a brief description"
                    onChange={e => setServiceDetails(e.target.value)}
                />
                <Button
                    id={'submit'}
                    type={"submit"}
                >Submit</Button>
            </FormControl>
            { success ? <p>Thank you! We will get back to you soon.</p> : '' }
            { error ? <p>ERROR: {errorMessage}</p> : '' }
        </form>
    )
}

export default Form