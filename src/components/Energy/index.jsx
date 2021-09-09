import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import {
  CarouselContent,
  ImageContent,
  Image,
  DescriptionContent,
} from './styles';
import energyApi from '../../services/energyApi';

const Energy = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    energyApi
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
              fixedWidth: '15rem',
              arrows: false,
            },

            800: {
              perPage: 2,
              arrows: false,
            },

            1024: {
              fixedWidth: '16rem',
            },

            1366: {
              fixedWidth: '19rem',
            },

            1980: {
              fixedWidth: '23rem',
            },

            2560: {
              fixedWidth: '22rem',
            },
          },
        }}
      >
        {notices.map((item) => (
          <>
            <SplideSlide>
              <a href={item.link} target="_blank" rel="noreferrer">
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
              </a>
            </SplideSlide>
          </>
        ))}
      </Splide>
    </CarouselContent>
  );
};

export default Energy;
