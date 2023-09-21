import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

function Staff() {
  return (
    <Container maxWidth="lg">
      <Box
        mt={5}
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr 1fr",
          },
          gap: 10,
        }}
      >
        {data.map((data, index) => {
          return (
            <StaffComponent
              key={index}
              image={data.image}
              fullName={data.fullName}
              role={data.role}
              facebook={data.facebook}
              instagram={data.instagram}
              text={data.text}
            />
          );
        })}
      </Box>
    </Container>
  );
}

export default Staff;

function StaffComponent({
  image,
  fullName,
  role,
  facebook,
  instagram,
  twitter,
  text,
}) {
  return (
    <>
      <Stack spacing={2}>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "flex-start" },
          }}
        >
          <img src={image} alt="" style={{ width: "235px", height: "235px" }} />
        </Box>
        <Typography variant="h4">{fullName}</Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography>{role}</Typography>
          <Stack direction="row" spacing={1}>
            <a
              href={`https://facebook.com/${facebook}`}
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF color="#717E83" size={17} />
            </a>
            <a
              href={`https://instagram.com/${instagram}`}
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram color="#717E83" size={17} />
            </a>
            <a
              href={`https://twiiter.com/${twitter}`}
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter color="#717E83" size={17} />
            </a>
          </Stack>
        </Stack>
        <Typography>{text}</Typography>
      </Stack>
    </>
  );
}

const data = [
  {
    image:
      "https://img.freepik.com/free-photo/view-3d-woman_23-2150709984.jpg?t=st=1695259509~exp=1695263109~hmac=2a287dd63edaea69fb5e0d039868fc85cb4e04ff6d22d3f2751396026883f9b4&w=740",
    fullName: "Katherine waterston",
    role: "FOUNDER/CEO",
    facebook: "",
    instagram: "",
    twitter: "",
    text: "At Kindred Total Care, Katherine ensures that the each and every client of Kindred Total Care is looked after according to the company’s core mission, values and vision.",
  },
  {
    image:
      "https://img.freepik.com/free-photo/view-3d-woman_23-2150709984.jpg?t=st=1695259509~exp=1695263109~hmac=2a287dd63edaea69fb5e0d039868fc85cb4e04ff6d22d3f2751396026883f9b4&w=740",
    fullName: "Katherine waterston",
    role: "FOUNDER/CEO",
    facebook: "",
    instagram: "",
    twitter: "",
    text: "At Kindred Total Care, Katherine ensures that the each and every client of Kindred Total Care is looked after according to the company’s core mission, values and vision.",
  },
  {
    image:
      "https://img.freepik.com/free-photo/view-3d-woman_23-2150709984.jpg?t=st=1695259509~exp=1695263109~hmac=2a287dd63edaea69fb5e0d039868fc85cb4e04ff6d22d3f2751396026883f9b4&w=740",
    fullName: "Katherine waterston",
    role: "FOUNDER/CEO",
    facebook: "",
    instagram: "",
    twitter: "",
    text: "At Kindred Total Care, Katherine ensures that the each and every client of Kindred Total Care is looked after according to the company’s core mission, values and vision.",
  },
  {
    image:
      "https://img.freepik.com/free-photo/view-3d-woman_23-2150709984.jpg?t=st=1695259509~exp=1695263109~hmac=2a287dd63edaea69fb5e0d039868fc85cb4e04ff6d22d3f2751396026883f9b4&w=740",
    fullName: "Katherine waterston",
    role: "FOUNDER/CEO",
    facebook: "",
    instagram: "",
    twitter: "",
    text: "At Kindred Total Care, Katherine ensures that the each and every client of Kindred Total Care is looked after according to the company’s core mission, values and vision.",
  },
];
