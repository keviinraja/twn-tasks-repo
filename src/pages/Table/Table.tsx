import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import {
  defaultListSelector,
  selectedColNameAtom,
  selectedRowAtom,
  sortingOrderAtom,
} from '../../recoil/table';
import List from '../../components/List/List';
import Pagination from '../../components/Pagination/Pagination';
import './styles/Table.scss';

const Table = () => {
  const listLoadable = useRecoilValueLoadable(defaultListSelector);
  const [, setSelectedRowAtom] = useRecoilState(selectedRowAtom);
  const [, setSelectedColNameAtom] = useRecoilState(selectedColNameAtom);
  const [orderAtom, setSortingOrderAtom] = useRecoilState(sortingOrderAtom);
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedColName, setSelectedColName] = useState('');
  const [postsPerPage] = useState(10);

  const { contents } = listLoadable;

  useEffect(() => {
    setList(contents.list);
  }, [listLoadable]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFistPost = indexOfLastPost - postsPerPage;

  let currentPosts: object[];
  let totalPosts: number;

  if (list) {
    currentPosts = list.slice(indexOfFistPost, indexOfLastPost);
    totalPosts = list.length;
  }

  const paginate = (pageNumber: number) => {
    setSelectedRowAtom(null);
    setCurrentPage(pageNumber);
  };

  const setSort = (colName: string) => {
    setSelectedRowAtom(null);

    if (colName !== selectedColName) {
      setSelectedColNameAtom(colName);
      setSortingOrderAtom('ASC');
      setSelectedColName(colName);
      sort(colName, 'ASC');
      return;
    }

    sort(colName, orderAtom);
  };

  const sort = (colName: string, orderName: string) => {
    if (orderName === 'ASC') {
      const sorted = [...list].sort((a, b) => (a[colName] > b[colName] ? 1 : -1));
      setList(sorted);
      setSortingOrderAtom('DSC');
    }

    if (orderName === 'DSC') {
      const sorted = [...list].sort((a, b) => (a[colName] < b[colName] ? 1 : -1));
      setList(sorted);
      setSortingOrderAtom('');
    }

    if (orderName === '') {
      setList(contents.list);
      setSortingOrderAtom('ASC');
    }
  };

  return (
    <div className="component-table">
      <h1>Nimekiri</h1>
      <List list={currentPosts} sorting={setSort} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={totalPosts}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Table;
