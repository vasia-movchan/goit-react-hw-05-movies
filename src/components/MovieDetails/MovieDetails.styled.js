import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1140px;
  padding: 0 16px;
`;

export const MovieCard = styled.div`
  display: flex;
  gap: 24px;
  padding: 16px 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

export const MoviePoster = styled.img`
  max-width: 240px;
  display: block;
`;

export const AddInfo = styled.div`
  padding: 16px 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;
