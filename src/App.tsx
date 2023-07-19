import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Container} from "@mui/material";
import Form from "./Form";

import logo from './static/logo2.png'
import ladder from './static/ladder.jpg'
import panel from './static/panel.jpg'
import outlet from './static/outlet.jpg'

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function App() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    return (
        <Container>
            <Box sx={{ bgcolor: 'background.paper' }}>
                <img src={logo} alt={''} width={'75%'} style={{display: 'block',marginLeft: 'auto',marginRight: 'auto'}}/>
                <AppBar position="static">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                        TabIndicatorProps={{style: {background:'#839cd2'}}}
                        sx={{
                            "color": "#053ca3",
                            "backgroundColor": "white"
                        }}
                    >
                        <Tab label="Home" {...a11yProps(0)} />
                        <Tab label="About" {...a11yProps(1)} />
                        <Tab label="Services" {...a11yProps(2)} />
                        <Tab label="Contact Us" {...a11yProps(3)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <div>
                            <h1 style={{"color": "#053ca3"}}>Welcome to Cobalt Electric, LLC!</h1>
                            <p>
                                We provide expert electrical services to Central and Southeastern Ohio. Our company works in both residential and commercial settings and is qualified to handle all of your electrical needs. Whether you need a light switch replaced or a new electrical panel, we’re the ones to call!<br /><br />
                                Please contact us today for any of your electrical needs, we provide free estimates and would be happy to answer any questions you may have. Thank you!
                            </p>
                            <h1>PICTURE OPTIONS: ONE</h1>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                                <img src={ladder} alt={''}/>
                                <img src={panel} alt={''} />
                                <img src={outlet} alt={''} />
                            </div>
                            <h1>PICTURE OPTIONS: TWO</h1>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap'}}>
                                <img src={ladder} alt={''}/>
                                <img src={panel} alt={''} />
                                <img src={outlet} alt={''} />
                            </div>
                            <h1>PICTURE OPTIONS: THREE</h1>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
                                <img src={ladder} alt={''}/>
                                <img src={panel} alt={''} />
                                <img src={outlet} alt={''} />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <div>
                            <h1 style={{"color": "#053ca3"}}>About</h1>
                            <p>
                                Cobalt Electric, LLC was founded by Jeff Karmosay. After working as an electrician for several years, Jeff decided to start his own company and began Cobalt Electric, LLC. Located in Hocking County, our company strives to provide quality service to rural areas as well as urban locations.<br /><br/>
                                At Cobalt Electric, LLC we strive to provide quality work, fair prices, and are honest with our customers. We are a licensed company, which means we follow electrical code requirements when completing all tasks.
                            </p>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        <div>
                            <h1 style={{"color": "#053ca3"}}>Services</h1>
                            <p>We provide a variety of services, some of which include:</p>
                            <ul>
                                <li>Troubleshooting</li>
                                <li>Outlet and switch replacement</li>
                                <li>Electrical panel replacements/upgrades</li>
                                <li>Light fixture and ceiling fan installation</li>
                                <li>Landscape lighting</li>
                                <li>Recessed lighting</li>
                                <li>Whole home surge protection</li>
                                <li>Grounding of electrical service</li>
                                <li>Rewiring</li>
                            </ul>
                            <p><b>AND MANY MORE!</b></p>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={3} dir={theme.direction}>
                        <div>
                            <h1 style={{"color": "#053ca3"}}>Contact Us</h1>
                            <p>
                                Please contact us by phone, text, or email!<br/>
                                <b style={{"color": "#053ca3"}}>(740) 304-1271</b><br/>
                                <b style={{"color": "#053ca3"}}>cobaltelectric740@gmail.com</b><br/><br/>
                                Alternatively, you can use the contact form below.
                            </p>
                            <Form />
                        </div>
                    </TabPanel>
                </SwipeableViews>
            </Box>
        </Container>
    );
}