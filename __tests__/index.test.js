import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';

import { GET_GREEN_CHARITIES_AND_FINANCES } from '@/graphql/index';
import { GREEN_CHARITIES_AND_FINANCES_RESPONSE } from '@/fixtures/GreenCharitiesAndFinancesResponse';
import Home from '@/pages/index'

const mocks = [
  {
    request: {
      query: GET_GREEN_CHARITIES_AND_FINANCES
    },
    result: GREEN_CHARITIES_AND_FINANCES_RESPONSE
  },
];

it('renders without error and has correct table headings', () => {
  const component = TestRenderer.create(
    <MockedProvider mocks={mocks}>
      <Home />
    </MockedProvider>
  );

  const tableColumnNames = ['ID','Charity name','Email','Phone number','Address','Income','Spending'];
  const tableHeadings = component.root.findAllByType('th');
  
  expect(tableHeadings.length).toEqual(7);
  tableHeadings.forEach((el, index) => {
    expect(el.children.includes(`${tableColumnNames[index]}`)).toBe(true);
  });
});
