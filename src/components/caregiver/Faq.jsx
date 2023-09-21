import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import Image from "../../assets/faq.png";

function Faq() {
  return (
    <Box mt={5} sx={{ background: "#141138", pt: { xs: 5, sm: 7 }, pb: 5 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr" },
            gap: { sm: 2 },
          }}
        >
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <img src={Image} alt="" />
          </Box>
          <Stack spacing={2}>
            <Stack>
              <Typography variant="body1" color="secondary.main">
                FAQs About Our Caregiver Jobs
              </Typography>
              <Typography variant="h2" color="primary.main">
                FAQs About Our Caregiver Jobs
              </Typography>
            </Stack>
            {data.map((data, index) => {
              return (
                <Template key={index} title={data.title} text={data.text} />
              );
            })}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Faq;

function Template({ title, text }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <Box
      sx={{
        ul: {
          mt: 2,
        },
        li: {
          ml: 2,
          mb: 1,
        },
        br: {
          mb: 1,
        },
      }}
    >
      <Accordion
        expanded={isExpanded}
        onChange={toggleAccordion}
        sx={{ boxShadow: "none", borderRadius: "5px" }}
      >
        <AccordionSummary
          expandIcon={
            <Box
              sx={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                background: "#0DBBB4",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {isExpanded ? (
                <BiMinus color="#fff" />
              ) : (
                <BsPlusLg color="#fff" />
              )}
            </Box>
          }
          aria-controls="panel1a-content"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Typography>{text} </Typography> */}
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

const data = [
  {
    title: "What are some of the benefits I can receive?",
    text: "Always Best Care is committed to offering our caregivers the best benefits in the industry, which may include: <ul><li>Health insurance plans</li><li>Supplemental insurance</li><li>401(k) program</li><li>Well-being programs</li><li>Mileage reimbursement</li><li>Earn wage access</li><li>Employee recognition program</li><li>Employee referral program</li><li>Paid training</li><li>PTO</li></ul>",
  },
  {
    title: "What does the training include?",
    text: "Training may include: <ul><li>Health insurance plans</li><li>Orientation</li><li>Ongoing training</li><li>Paid certification training</li><li>Online and hands-on training</li><li>Individualized care plan</li><li>Mentorship programs</li><li>Specialized training</li></ul>",
  },
  {
    title: "Is the schedule flexible?",
    text: "Yes.<br/> Caregivers may be offered custom, fully flexible schedules that best fit their lifestyle.",
  },
  {
    title:
      "Caregivers may be offered custom, fully flexible schedules that best fit their lifestyle.",
    text: "The length of time it takes to become a caregiver will depend on the state in which you are employed.",
  },
  {
    title:
      "What are my career growth opportunities as an Always Best Care caregiver?",
    text: "Although many caregivers are content with the role of providing care, some advance into different roles within an agency. This may include moving into an Ambassador, Lead Caregiver, Mentorship role, Scheduler, Recruiter, Care Manager, Client Service Representative, Sales Representative, or Operations Director.",
  },
];
