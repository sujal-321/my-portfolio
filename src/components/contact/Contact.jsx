import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import { IconContext } from "react-icons";

const Contact = () => {
  // const contactLinks = [
  //   {
  //     site : "Linkedin",
  //     link : "https://www.linkedin.com/in/abhinav-kumar-904254195/",
  //   },
  //   {
  //     site : "Github",
  //     link : "https://github.com/Abhinav2011",
  //   },
  //   {
  //     site : "Twitter",
  //     link : "https://twitter.com/Abhinav36650041",
  //   },
  // ]
  
  return (
    <IconContext.Provider value={{ color: "#32CD30", size: "50px" }}>
      <div className="contact">
        <h1
          style={{
            marginTop: "3rem",
            fontFamily: "Fira Code",
            position: "static",
          }}
        >
          Have a <span style={{ color: "#32CD30" }}>Question</span> on your
          mind??
        </h1>
        <p style={{ textAlign: "center" }}>
          Or just want to discuss a project? Contact Me using any of the links!!
        </p>
        <div className="contact-box">
          <Box sx={{ width: "100%", maxWidth: 360 }}>
            <nav aria-label="main mailbox folders">
              <List>
                <ListItem disablePadding  className="contact-list-item">
                  <ListItemButton  href="https://www.linkedin.com/in/sujal-darla-b4074b28b/" target="_blank">
                    <ListItemIcon>
                      <BsLinkedin className="contact-icon" />
                    </ListItemIcon>
                    <ListItemText primary="Linkedin" className="contact-text" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding className="contact-list-item">
                  <ListItemButton href="https://github.com/sujal-321" target="_blank">
                    <ListItemIcon>
                      <BsGithub className="contact-icon" />
                    </ListItemIcon>
                    <ListItemText primary="Github" className="contact-text" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding className="contact-list-item">
                  <ListItemButton href="https://x.com/SujalDarla" target="_blank">
                    <ListItemIcon>
                      <BsTwitter className="contact-icon" />
                    </ListItemIcon>
                    <ListItemText primary="Twitter" className="contact-text" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding className="contact-list-item">
                  <ListItemButton
                    onClick={() =>
                      (window.location = "mailto:sujaldarla3@gmail.com")
                    }
                  >
                    <ListItemIcon>
                      <HiMailOpen className="contact-icon" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Mail (sujaldarla3@gmail.com)"
                      className="contact-text"
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Contact;
