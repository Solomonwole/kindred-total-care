import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

function FirstSection() {
  return (
    <>
      <Box mt={10} data-aos="fade-up">
        <Container maxWidth="lg">
          <Box>
            <Typography variant="h2" mb={3}>
              Our Services
            </Typography>
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
                    title={item.title}
                    text={item.text}
                  />
                );
              })}
            </Box>
          </Box>

          <Box
            mt={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h2"
              align="center"
              width={{ sm: "50%" }}
              sx={{
                background:
                  "linear-gradient(180deg, #0DBBB4 0%, rgba(48, 184, 50, 0.44) 100%)",
                color: "rgba(48, 184, 50, 0.44) ",
                backgroundClip: "text",
                webkitBackgroundClip: "text",
                webkitTextFillColor: "transparent",
              }}
            >
              “All duties performed by Care Workers will be agreed upon and
              documented in the Care Plan or Contract”
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default FirstSection;

const BoxComponent = ({ letter, title, text }) => {
  return (
    <>
      <Box>
        <Stack spacing={1.5}>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body1">{text}</Typography>
        </Stack>
      </Box>
    </>
  );
};

const data = [
  {
    title: "Homemaking",
    text: "Our helpful caregivers will make sure your home is spotless, clean your laundry, and prepare delicious dishes, take you to appointments, help you with errands, go shopping with you, and even go on enjoyable adventures with you. We intervene to maintain the cleanliness and freshness of your living area because we recognize that these routine tasks may become challenging as you age. Let us take care of the little details so you can unwind and enjoy your vacation without worrying.",
  },
  {
    title: "Companion Care",
    text: "While families are busy securing the bag and chasing ambitions, we are here to listen and talk, offering a keen shoulder to lean on. We are ready to go on that stroll to meet friends or a brief shopping excursion, bringing a breath of new air to your routine. There are a lot of fun activities we can do together, and we're delighted to be their companions on this amazing adventure.",
  },
  {
    title: "Safeguard Visits",
    text: "Once or twice a week visits from a friendly face could make all the difference and be quite consoling and reassuring. Our 'safeguard visit'is really simply a routine check-in to make sure everything is okay at home. Your loved ones will feel more valued and cared for when they receive that extra layer of attention. These visits may be a wonderful way to keep an eye on things if you are far away from your senior family members. Making sure that your loved ones are safe and secure is the most important thing, even if you are not physically present for it. You get more than just a check-in with our safeguard visits; you also get peace of mind.",
  },
  {
    title: "Personal Care",
    text: "At Kindred Care, we're committed to making sure that our customers are at ease in their own homes. Our services cover every little detail that has a huge impact on your daily life. From getting around, using the restroom, and looking your best to making sure that bathing, dressing, and even medication are taken care of, we help with everything. We recognize that getting into the shower might seem unsafe, which is why getting a helping hand to get in and out securely can be so calming. We are aware that some of our clients require specialized care and could find it challenging to perform simple tasks like handling buttons or zippers. We can help with that, adding a thoughtful touch that not only makes these tasks easier but also gives confidence a boost. When Kindred Care is at your side, you will enjoy each day with the peace and comfort you need.",
  },
  {
    title: "Live-in Care",
    text: "For clients who have a carer in mind and would like them to live in the same home, our live-in care option is perfect. This type of care is customized to the unique requirements of the client. We follow preferences to make sure that your loved one receives individualized care in the comfort of their own home.",
  },
  {
    title: "Respite Care",
    text: "With our Respite Care, you receive much more than simply assistance; you also get a caring companion who is available whenever you need a break. We comprehend that families periodically require a vacation from caring for loved ones. Outside caregivers step in to help, providing assistance so that family members can take a well-earned break from full-time caring. Everyone can heal and have their needs met in this win-win situation. You can unwind and take some time to yourself knowing that your loved ones are in capable care.",
  },
];
