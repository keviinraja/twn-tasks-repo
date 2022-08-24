import React from 'react';
import { useRecoilState } from 'recoil';
import { selectedColNameAtom, sortingOrderAtom } from '../../recoil/table';
import './styles/ListHeader.scss';

interface Props {
  sorting: (colName: any) => void;
}

const ListHeader = ({ sorting }: Props) => {
  const [orderAtom] = useRecoilState(sortingOrderAtom);
  const [selectedColName] = useRecoilState(selectedColNameAtom);

  const tableColHeaders = [
    { name: 'Eesnimi', sortValue: 'firstname' },
    { name: 'Perekonnanimi', sortValue: 'surname' },
    { name: 'Sugu', sortValue: 'sex' },
    { name: 'Sünnikuupäev', sortValue: 'personal_code' },
  ];

  return (
    <thead className="component-listHeader">
      <tr className="component-listHeader__wrapper">
        {tableColHeaders.map((header, index) => {
          let sortActiveClass = '';

          if (selectedColName === header.sortValue && orderAtom === 'DSC') {
            sortActiveClass = 'asc';
          }

          if (selectedColName === header.sortValue && orderAtom === '') {
            sortActiveClass = 'dsc';
          }

          return (
            <th
              className={`component-listHeader__col ${sortActiveClass}`}
              key={index}
              onClick={() => sorting(header.sortValue)}
            >
              <span className="component-listHeader__title">{header.name}</span>
            </th>
          );
        })}
        <th className="component-listHeader__col">Telefon</th>
      </tr>
    </thead>
  );
};

export default ListHeader;
