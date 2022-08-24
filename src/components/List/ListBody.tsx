import React from 'react';
import { useRecoilState } from 'recoil';
import { selectedRowAtom } from '../../recoil/table';
import ListRowDetails from './ListRowDetails';
import './styles/ListBody.scss';

interface Props {
  list: object[];
}

const ListBody = ({ list }: Props) => {
  const [selectedRow, setSelectedRow] = useRecoilState(selectedRowAtom);

  const formatPersonalCodeToDate = (personalNumber: number) => {
    const personalCode = personalNumber.toString();
    let century;

    century = personalCode.slice(0, 1);
    switch (century) {
      case '3':
        century = '19';
        break;
      case '4':
        century = '19';
        break;
      case '5':
        century = '20';
        break;
      case '6':
        century = '20';
    }

    const year = century + personalCode.slice(1, 3);
    const month = personalCode.slice(3, 5);
    const day = personalCode.slice(5, 7);

    return day + '.' + month + '.' + year;
  };

  return (
    <tbody className="component-listBody">
      {list
        ? list.map((row: any, index: number) => {
            let activeClass = '';
            let selectedRowValue = row;

            if (selectedRow === row) {
              activeClass = 'open';
              selectedRowValue = '';
            }

            return (
              <>
                <tr
                  onClick={() => setSelectedRow(selectedRowValue)}
                  className={`component-listBody__row ${activeClass}`}
                  key={index}
                >
                  <td className="component-listBody__col">{row.firstname}</td>
                  <td className="component-listBody__col">{row.surname}</td>
                  <td className="component-listBody__col">
                    {row.sex === 'f' && 'Naine'} {row.sex === 'm' && 'Mees'}
                  </td>
                  <td className="component-listBody__col">
                    {formatPersonalCodeToDate(row.personal_code)}
                  </td>
                  <td className="component-listBody__col">{row.phone}</td>
                </tr>
                {row === selectedRow ? <ListRowDetails list={list} /> : null}
              </>
            );
          })
        : null}
    </tbody>
  );
};

export default ListBody;
