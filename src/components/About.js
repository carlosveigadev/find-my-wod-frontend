import {
  Box, Flex, Heading, Text, Center,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { AiOutlineBackward } from 'react-icons/ai';

const About = () => {
  const history = useHistory();
  return (
    <Flex direction="column" m="2em">
      <Center>
        <button
          type="button"
          onClick={() => {
            history.goBack();
          }}
        >
          <AiOutlineBackward fontSize="2em" color="darkgray" />
        </button>
      </Center>

      <Heading as="h1" size="xl" mt="1em">Instructions</Heading>
      <Box mt="2em" mb="1em">
        <Heading as="h2" size="md">Workout of the day (WOD):</Heading>
        <Text>
          Plain and simple, this is the set of modalities that
          your coach uses to put you
          through hell on any given day.
        </Text>
      </Box>
      <Box my="1em">
        <Heading as="h2" size="md">As many rounds as possible (AMRAP):</Heading>
        <Text>
          Complete a circuit as many times as you can
          within a given time frame. For example,
          six-minute AMRAP: 5 deadlifts,
          10 pullups, 20 double unders. When the six minutes is up, record your
          total rounds completed. Note: AMRAP may also mean
          “as many reps as possible.”
        </Text>
      </Box>
      <Box my="1em">
        <Heading as="h2" size="md">MetCon:</Heading>
        <Text>
          Short for metabolic conditioning, this CrossFit devil
          is usually a few exercises repeated AMRAP-style. The “Cindy”
          workout of the day (20 minutes of 5 pullups, 10 pushups, and 15 squats)
          is a good example. Some boxes offer MetCon-only classes for anybody
          who wants to steer clear of the heavy lifting associated with standard CrossFit WODs.
        </Text>
      </Box>
    </Flex>
  );
};

export default About;
