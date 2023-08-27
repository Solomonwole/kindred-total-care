import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

function WhoWeAre() {
  return (
    <Box mt={10}>
      <Container maxWidth="lg">
        <Box>
          <Typography variant="h2" mb={1} data-aos="fade-up">
            Kindred
          </Typography>
          <Typography variant="h5" data-aos="fade-up">
            Who We Are
          </Typography>

          <Typography variant="body1" mt={3} data-aos="fade-up">
            Think of Kindred Care as that caring family member in the
            neighborhood of Houston, Texas. Our objective is to offer clients,
            particularly elderly, a friendly and supportive hand in the
            convenience of their own homes. We are a forward-thinking team that
            is aware of what your loved ones actually need, not just any care
            provider. Our strategy is focused on fostering a sense of comfort
            for your loved ones, exactly like a family would. Our superior
            service and devoted attention are what set us apart from the
            competition. As a result, you can cherish the important occasions
            and make priceless memories with your loved ones.
          </Typography>

          <Box mt={3}>
            <div>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "10px",
                }}
              >
                <Typography variant="body1" width={{ xs: "70px", sm: "115px" }}>
                  Our Vision
                </Typography>
                <Box
                  sx={{
                    background:
                      "linear-gradient(180deg, #0DBBB4 0%, rgba(48, 184, 50, 0.44) 100%)",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    marginRight: { sm: "20px" },
                  }}
                />

                <Typography variant="body1" sx={{ flex: 10 }}>
                  To be the top choice for providing compassionate care via
                  skillful, considerate, and welcoming service.
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "10px",
                }}
              >
                <Typography
                  variant="body1"
                  width={{ xs: "70px", sm: "115px" }}
                ></Typography>
                <Box
                  sx={{
                    border: "1px #000 solid",
                    height: "60px",
                    marginRight: { sm: "20px" },
                    marginLeft: "3.5px",
                    marginTop: { xs: "-35px", sm: "1px" },
                  }}
                />

                <Typography variant="body1" sx={{ flex: 10 }}></Typography>
              </Box>
            </div>

            <div>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "10px",
                }}
              >
                <Typography variant="body1" width={{ xs: "70px", sm: "115px" }}>
                  Our Mission
                </Typography>
                <Box
                  sx={{
                    background:
                      "linear-gradient(180deg, #0DBBB4 0%, rgba(48, 184, 50, 0.44) 100%)",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    marginRight: { sm: "20px" },
                  }}
                />

                <Typography variant="body1" sx={{ flex: 10 }}>
                  We are dedicated to provide "you-centered" care to our clients
                  so they can embrace life, pursue their aspirations with
                  fervor, and feel secure and content.
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "10px",
                }}
              >
                <Typography
                  variant="body1"
                  width={{ xs: "70px", sm: "115px" }}
                ></Typography>
                <Box
                  sx={{
                    border: "1px #000 solid",
                    height: "60px",
                    marginRight: { sm: "20px" },
                    marginLeft: "3.5px",
                    marginTop: { xs: "-35px", sm: "1px" },
                    marginBottom: { xs: "", sm: "-10px" },
                  }}
                />

                <Typography variant="body1" sx={{ flex: 10 }}></Typography>
              </Box>
            </div>

            <div>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "10px",
                }}
              >
                <Typography variant="body1" width={{ xs: "70px", sm: "115px" }}>
                  Our Values
                </Typography>
                <Box
                  sx={{
                    background:
                      "linear-gradient(180deg, #0DBBB4 0%, rgba(48, 184, 50, 0.44) 100%)",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    marginRight: { sm: "20px" },
                  }}
                />

                <Typography variant="body1" sx={{ flex: 10 }}>
                  At Kindred Care, we are adamant about making a difference in
                  the lives of individuals we assist. You may be sure that your
                  loved ones will get the care, support, and love they need
                  because our principles are engrained in our name.
                </Typography>
              </Box>
            </div>
          </Box>

          <Box mt={5}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
                columnGap: 4,
                rowGap: 4,
              }}
            >
              {data.map((item, index) => {
                return (
                  <BoxComponent
                    key={index}
                    letter={item.letter}
                    title={item.title}
                    text={item.text}
                  />
                );
              })}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default WhoWeAre;

const BoxComponent = ({ letter, title, text }) => {
  return (
    <>
      <Box
        p={2}
        sx={{
          "&:hover": {
            boxShadow:
              "-6px -12px 40px 0px rgba(105, 127, 175, 0.05), 12px 30px 50px 0px rgba(105, 127, 175, 0.15)",
            background: "#fff",
            borderRadius: "6px",
          },
        }}
        data-aos="fade-up-right"
      >
        <Stack spacing={1.5}>
          <Stack direction="row" alignItems="center" spacing={0.1}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "35px",
                height: "35px",
                background:
                  "linear-gradient(180deg, #0DBBB4 0%, rgba(48, 184, 50, 0.44) 100%)",
                borderRadius: "10px",
              }}
            >
              <Typography variant="h4">{letter}</Typography>
            </Box>
            <Typography variant="h4">{title}</Typography>
          </Stack>
          <Typography variant="body1">{text}</Typography>
        </Stack>
      </Box>
    </>
  );
};

const data = [
  {
    letter: "K",
    title: "indness",
    text: "We strongly believe in the healing power of kindness and prioritize it in all interactions, expressing sincere concern and love for clients through attentive listening and genuine concern.",
  },
  {
    letter: "I",
    title: "ntegrity",
    text: "We have a connection. Our commitments are valued. In order to build a relationship of trust and dependability with you and your loved ones, we strive to uphold high ethical standards.",
  },
  {
    letter: "N",
    title: "urture",
    text: "Our goal is to provide a joyful environment for flourishing, compassionate care, and considering mental health, ensuring a positive and supportive atmosphere.",
  },
  {
    letter: "D",
    title: "iversity",
    text: "Inclusive care values diversity and individuality, ensuring tailored care for each client's unique backgrounds, viewpoints, and tastes, promoting inclusivity and respect for diverse clients.",
  },
  {
    letter: "R",
    title: "espect",
    text: "Respecting clients' dignity and privacy is crucial, and we treat them with the utmost respect, ensuring independence and living on their terms.",
  },
  {
    letter: "E",
    title: "mapthy",
    text: "Empathy-centered strategy involves employees providing assistance, understanding clients' feelings, building relationships, designing customized care plans, and providing support.",
  },
  {
    letter: "D",
    title: "rive",
    text: "We are confident that we would go above and beyond to show our concern and commitment to improving each person's quality of life. We are steadfast in our dedication to the welfare of our clients.",
  },
];
