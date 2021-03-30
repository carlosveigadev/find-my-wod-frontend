/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import {
  AspectRatio, Box, Center, Flex, Heading,
} from '@chakra-ui/react';
import { getWods, fetchFavourites } from '../api-requests';
import { favouriteData } from '../redux/actions';
import style from '../assets/css/Wods.module.css';

const Wods = ({ userToken, favouriteData }) => {
  const [wods, setWods] = useState([]);

  useEffect(async () => {
    const allWods = await getWods(userToken);
    setWods(allWods);
  }, []);

  useEffect(async () => {
    const newData = await fetchFavourites(userToken);
    favouriteData(newData);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  if (wods) {
    return (
      <Box m="1em" mt="3em" boxShadow="2xl" p="6" rounded="md" bg="white" pb="5em">
        <Slider {...sliderSettings}>
          {wods.map(wod => {
            const video = `https://www.youtube.com/embed/${wod.image}`;
            return (
              <Center className={style.vide} key={wod.id}>
                <AspectRatio maxW="400px" ratio={4 / 3} margin="auto">
                  <iframe
                    title={wod.title}
                    src={video}
                    allowFullScreen
                  />
                </AspectRatio>
                <Link key={wod.id} to={{ pathname: `/wods/${wod.id}`, state: { wod } }}>
                  <Heading align="center" m="1em">
                    {wod.title}
                  </Heading>
                </Link>
              </Center>
            );
          })}
        </Slider>
      </Box>
    );
  }
  return (
    <Flex direction="column" m="2em">
      <Heading>Loading...</Heading>
    </Flex>
  );
};

const mapDispatch = {
  favouriteData,
};

const mapStateToProps = state => ({
  userToken: state.userStore.userToken,
});

Wods.propTypes = {
  userToken: PropTypes.string.isRequired,
  favouriteData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatch)(Wods);
