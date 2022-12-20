import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import styled from 'styled-components';

const countries = [
  {
    countryCode: 'kr',
    countryName: '한국',
  },
  {
    countryCode: 'cu',
    countryName: '쿠바',
  },
  {
    countryCode: 'hk',
    countryName: '홍콩',
  },
  {
    countryCode: 'jp',
    countryName: '일본',
  },
  {
    countryCode: 'nz',
    countryName: '뉴질랜드',
  },
];
const CountryBlock = styled.div`
  .select {
    display: flex;
    padding-left: 0.5rem;
    width: 120px;
    height: 40px;
    margin: 0 auto;
    margin-right: 1rem;
    border-radius: 4px;
    background: #fcfcfc;
  }
  .select option {
    background: #74d36d;
    color: #fff;
    padding: 3px 0;
  }
`;

const NewsPage = (props) => {
  const location = useLocation();
  const category =
    location.pathname.split('/')[location.pathname.split('/').length - 1];

  const [Country, setCountry] = useState('kr');
  const handleChange = (e) => {
    setCountry(e.target.value);
  };
  return (
    <>
      <Categories />
      <CountryBlock>
        <select onChange={handleChange} class="select">
          {countries.map((c) => (
            <option
              name={c.countryName}
              value={c.countryCode}
              defaultValue={props.defaultValue === c.countryCode}
            >
              {c.countryName}
            </option>
          ))}
        </select>
      </CountryBlock>
      <NewsList category={category} country={Country} />
    </>
  );
};

export default NewsPage;
