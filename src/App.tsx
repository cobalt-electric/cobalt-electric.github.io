import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Container} from "@mui/material";
import logo from './static/logo.png'

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

export default function FullWidthTabs() {
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
            <img src={logo} alt={''} width={'100%'} />
            <Box sx={{ bgcolor: 'background.paper' }}>
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
                            "background-color": "white"
                        }}
                    >
                        <Tab label="Home" {...a11yProps(0)} />
                        <Tab label="About" {...a11yProps(1)} />
                        <Tab label="Services" {...a11yProps(2)} />
                        <Tab label="Contact Us" {...a11yProps(3)} />
                        <Tab label="STYLES" {...a11yProps(4)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <h1 style={{"color": "#053ca3"}}>Welcome to Cobalt Electric, LLC</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vulputate ut pharetra sit amet aliquam id. Turpis in eu mi bibendum neque egestas congue quisque egestas. Egestas dui id ornare arcu. Neque ornare aenean euismod elementum nisi quis eleifend. Purus semper eget duis at tellus at urna condimentum. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Cras sed felis eget velit aliquet sagittis. Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus. Diam quam nulla porttitor massa id. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et.
                            <br /><br />
                            Id leo in vitae turpis. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Quisque non tellus orci ac auctor augue mauris. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Neque sodales ut etiam sit. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Sit amet consectetur adipiscing elit ut aliquam. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Quis hendrerit dolor magna eget est lorem. Tincidunt eget nullam non nisi est sit.
                        </p>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <h1 style={{"color": "#053ca3"}}>About Us</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vulputate ut pharetra sit amet aliquam id. Turpis in eu mi bibendum neque egestas congue quisque egestas. Egestas dui id ornare arcu. Neque ornare aenean euismod elementum nisi quis eleifend. Purus semper eget duis at tellus at urna condimentum. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Cras sed felis eget velit aliquet sagittis. Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus. Diam quam nulla porttitor massa id. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et.
                            <br /><br />
                            Id leo in vitae turpis. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Quisque non tellus orci ac auctor augue mauris. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Neque sodales ut etiam sit. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Sit amet consectetur adipiscing elit ut aliquam. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Quis hendrerit dolor magna eget est lorem. Tincidunt eget nullam non nisi est sit.
                        </p>
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        <h1 style={{"color": "#053ca3"}}>Services We Offer</h1>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                            <li>Aliquam tincidunt mauris eu risus.</li>
                            <li>Vestibulum auctor dapibus neque.</li>
                            <li>Nunc dignissim risus id metus.</li>
                            <li>Cras ornare tristique elit.</li>
                            <li>Vivamus vestibulum ntulla nec ante.</li>
                            <li>Praesent placerat risus quis eros.</li>
                            <li>Fusce pellentesque suscipit nibh.</li>
                            <li>Integer vitae libero ac risus egestas placerat.</li>
                            <li>Vestibulum commodo felis quis tortor.</li>
                            <li>Ut aliquam sollicitudin leo.</li>
                            <li>Cras iaculis ultricies nulla.</li>
                            <li>Donec quis dui at dolor tempor interdum.</li>
                        </ul>
                    </TabPanel>
                    <TabPanel value={value} index={3} dir={theme.direction}>
                        <h1 style={{"color": "#053ca3"}}>Contact Us</h1>
                        <p>
                            You can reach us any time via phone or email.
                        </p>
                        <h2>Phone: 740-123-4567</h2>
                        <h2>Email: fake@fake.com</h2>
                    </TabPanel>
                    <TabPanel value={value} index={4} dir={theme.direction}>
                        <h1 style={{"color": "#053ca3"}}>Heading 1</h1>
                        <h2>Heading 2</h2>
                        <h3>Heading 3</h3>
                        <h4>Heading 4</h4>
                        <h5>Heading 5</h5>
                        <p>Paragraph / body text</p>
                        <h1 style={{"color": "#053ca3"}}>Color 1</h1>
                        <h1 style={{"color": "#839cd2"}}>Color 2</h1>
                        <h1 style={{"color": "#5b6472"}}>Color 3</h1>
                    </TabPanel>
                </SwipeableViews>
            </Box>
        </Container>
    );
}