import { Container } from '@mui/material';
import styled from 'styled-components';

export const CustomContainer = styled(Container)`
  .react-calendar {
    width: 400px;
    max-width: 100%;
    height: 350px;
    background-color: ${({ theme }) => theme.color.AzureishWhite};
    color: #222;
    border-radius: 8px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
  }
  .react-calendar__navigation {
    display: flex;
    height: 44px;
    margin-bottom: 1em;
  }
  .react-calendar__navigation button {
    color: #000;
    min-width: 44px;
    background: none;
    font-size: 16px;
    margin-top: 8px;
    border: none;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #f8f8fa;
    font-size: 16px;
  }
  .react-calendar__navigation button[disabled] {
    background-color: #f0f0f0;
  }
  /* abbr[title] {
  text-decoration: none;
} */
  /* .react-calendar__month-view__days__day--weekend {
  color: #d10000;
 } */
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75em;
    color: ${({ theme }) => theme.color.CadetBlue};
    margin-bottom: 10px;
  }
  .react-calendar__tile {
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.color.AzureishWhite};
    align-items: center;
    height: 40px;
    border: none;
    margin-top: 5px;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: ${({ theme }) => theme.color.DeepSpaceSparkle}88;
    color: white;
    border-radius: 6px;
  }
  .react-calendar__tile--now {
    background: ${({ theme }) => theme.color.DeepSpaceSparkle}99;
    border-radius: 6px;
    font-weight: bold;
    color: white;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: ${({ theme }) => theme.color.DeepSpaceSparkle};
    border-radius: 6px;
    font-weight: bold;
    color: #6f48eb;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: ${({ theme }) => theme.color.DeepSpaceSparkle};
  }
  .react-calendar__tile--active {
    background: ${({ theme }) => theme.color.DeepSpaceSparkle};
    border-radius: 6px;
    font-weight: bold;
    color: white;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: ${({ theme }) => theme.color.DeepSpaceSparkle};
    color: white;
  }

  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: ${({ theme }) => theme.color.DeepSpaceSparkle};
  }
  .react-calendar__tile--range {
    background: ${({ theme }) => theme.color.DeepSpaceSparkle};
    color: white;
    border-radius: 6px;
  }
  /* .react-calendar__tile--rangeStart {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    background: ${({ theme }) => theme.color.DeepSpaceSparkle};
    color: white;
  }
  .react-calendar__tile--rangeEnd {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    background: ${({ theme }) => theme.color.DeepSpaceSparkle};
    color: white;
  } */

  .react-calendar__month-view__days__day--neighboringMonth {
    color: ${({ theme }) => theme.color.CadetBlue};
  }

  .dot {
    height: 8px;
    width: 8px;
    background-color: #f87171;
    border-radius: 50%;
    display: flex;
    margin-left: 1px;
  }
  padding-left: 0;
`;
