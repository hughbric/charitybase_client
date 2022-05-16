import { useQuery } from "@apollo/client";
import { GET_GREEN_CHARITIES_AND_FINANCES } from '@/graphql/index';

import CharitiesTableRow from '@/components/CharitiesTableRow';
import CharitiesTableLoadingState from '@/components/CharitiesTableLoadingState';

export default function ContactsTable() {
  const { loading, error, data } = useQuery(GET_GREEN_CHARITIES_AND_FINANCES);

  if (error) return <div className='text-4xl text-gray-900'>Failed to load</div>

  return (
    <>
      <table className='min-w-full divide-y shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
        <thead className='bg-gray-50'>
          <tr>
            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              ID
            </th>
            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Charity name
            </th>
            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Email
            </th>
            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Phone number
            </th>
            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Address
            </th>
            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Income
            </th>
            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Spending
            </th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {
            loading ?
              <CharitiesTableLoadingState/>
            :
            data.CHC.getCharities.list.map((charity) =>
              <CharitiesTableRow key={charity.id} charity={charity}/>
            )
          }
        </tbody>
      </table>
    </>
  )
}
