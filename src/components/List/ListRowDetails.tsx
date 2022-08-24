import React from 'react';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { selectedRowAtom } from '../../recoil/table';
import './styles/ListRowDetails.scss';

interface Props {
  list: object[];
}

const ListRowDetails = ({ list }: Props) => {
  const [selectedRow] = useRecoilState(selectedRowAtom);

  let rowPreview: JSX.Element;
  if (selectedRow && list) {
    const item: any = list.find((row) => row === selectedRow);
    rowPreview = (
      <tr className="component-listRowDetails">
        <td className="component-listRowDetails__container" colSpan={5}>
          <div className="component-listRowDetails__inner">
            <div
              className="component-listRowDetails__image"
              style={{
                backgroundImage: `url('${item && item.image.large}')`,
              }}
            />
            <div className="component-listRowDetails__body">
              <div
                className="component-listRowDetails__text"
                dangerouslySetInnerHTML={{ __html: `${item && item.body}` }}
              ></div>
              <Link className="component-listRowDetails__link" to={`/article/${item && item.id}`}>
                Loe rohkem
              </Link>
            </div>
          </div>
        </td>
      </tr>
    );
  }

  return rowPreview;
};

export default ListRowDetails;
