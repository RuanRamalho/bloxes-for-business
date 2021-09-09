import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import {
  CarouselContent,
  ImageContent,
  Image,
  DescriptionContent,
} from './styles';
import agribusinessApi from '../../services/agribusinessApi';

const Energy = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    agribusinessApi
      .get()
      .then((response) => setNotices(response.data))
      .catch((error) => {
        alert(`Ops! Ocorreu um erro${error}`);
      });
  }, []);

  return (
    <CarouselContent>
      <Splide
        options={{
          type: 'loop',
          perPage: 3,
          perMove: 1,
          gap: '1em',
          pagination: false,
          fixedWidth: '25rem',
          breakpoints: {
            600: {
              perPage: 1,
              fixedWidth: '20rem',
              arrows: false,
            },

            800: {
              perPage: 2,
              arrows: false,
            },

            1024: {
              fixedWidth: '25rem',
            },

            1980: {
              fixedWidth: '35rem',
            },

            2560: {
              fixedWidth: '45rem',
            },
          },
        }}
      >
        {notices.map((item) => (
          <>
            <SplideSlide>
              <ImageContent>
                <div className="splide__slide__container">
                  <Image
                    src={item._embedded['wp:featuredmedia'][0].source_url}
                  />
                </div>
              </ImageContent>
              <DescriptionContent>
                <h3>{item.title.rendered}</h3>
                <p>{item.date}</p>
              </DescriptionContent>
            </SplideSlide>
          </>
        ))}
      </Splide>
    </CarouselContent>
  );
};

export default Energy;
