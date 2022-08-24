import React from 'react';
import ListBody from './ListBody';
import ListHeader from './ListHeader';
import './styles/List.scss';

interface Props {
  list: object[];
  sorting: (colName: any) => void;
}

const List = ({ list, sorting }: Props) => {
  return (
    <div className="component-list">
      <table>
        <ListHeader sorting={sorting} />
        <ListBody list={list} />
      </table>
    </div>
  );
};

export default List;
