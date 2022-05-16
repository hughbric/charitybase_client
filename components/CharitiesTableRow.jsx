export default function CharitiesTableRow({ charity }) {
  var currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'GBP',
  });

  return (
    <tr className="text-sm text-gray-900">
      <td className="px-6 py-4 whitespace-nowrap font-medium">
        { charity.id }
      </td>
      <td className="px-6 py-4 whitespace-nowrap font-medium">
        { charity.names[0].value }
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        { charity.contact.email }
      </td>
      <td className="px-6 py-4">
        { charity.contact.phone }
      </td>
      <td className="px-6 py-4">
        { charity.contact.address }
      </td>
      <td className="px-6 py-4">
        { currencyFormatter.format(charity.finances[0] ? charity.finances[0].income : 0) }
      </td>
      <td className="px-6 py-4">
        { currencyFormatter.format(charity.finances[0] ? charity.finances[0].spending : 0) }
      </td>
    </tr>
  )
}
