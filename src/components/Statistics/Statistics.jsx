import React from 'react';
import PropTypes from 'prop-types';
import { HiOutlineHeart } from 'react-icons/hi';
import {
  MdThumbDownOffAlt,
  MdSentimentNeutral,
  MdOutlineSummarize,
  MdPercent,
} from 'react-icons/md';
import { StaticList, DescrStatistics } from './Statistics.styled';
import { Notification } from '../Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 0,
}) => {
  return total ? (
    <StaticList>
      <li>
        <DescrStatistics>
          <HiOutlineHeart size="18" />
          Good: <span>{good}</span>
        </DescrStatistics>
      </li>
      <li>
        <DescrStatistics>
          <MdSentimentNeutral size="18" />
          Neutral: <span>{neutral}</span>
        </DescrStatistics>
      </li>
      <li>
        <DescrStatistics>
          <MdThumbDownOffAlt size="18" />
          Bad: <span>{bad}</span>
        </DescrStatistics>
      </li>
      <li>
        <DescrStatistics>
          <MdOutlineSummarize size="18" />
          Total: <span>{total}</span>
        </DescrStatistics>
      </li>
      <li>
        <DescrStatistics>
          <MdPercent size="18" />
          Positive feedback: <span>{positivePercentage}%</span>
        </DescrStatistics>
      </li>
    </StaticList>
  ) : (
    <Notification msg="There is no feedback" />
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
