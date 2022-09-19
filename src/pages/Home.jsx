import React, { useContext, useState } from 'react';
import ReactPaginate from 'react-paginate';

import PhoneBlock from '../components/PhoneBlock';
import Skeleton from '../components/Skeleton';
import Sort from '../components/Sort';
import Categories from '../components/Categories';
import Pagination from '../components/Pagination';
import { MyContext } from '../App';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setCategoryId, setSortId } from '../redux/slices/filterSlice';

const Home = () => {
  const categoryId = useSelector((state) => state.filterSlice.categoryId);
  // const sort = useSelector((state) => state.filterSlice.sort.id);
  const dispatch = useDispatch();
  const { searchValue: searchValue, setSearchValue: setSearchValue } = useContext(MyContext);
  const [items, setItems] = React.useState([]);
  const loudindArr = [...new Array(10)];
  const [louding, setLouding] = React.useState(true);
  const search = searchValue ? `search=${searchValue}` : '';
  const [page, setPage] = useState(1);
  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  // const onChangeSort = (id) => {
  //   dispatch(setSortId(id));
  //   console.log(sort);
  // };

  React.useEffect(() => {
    fetch(
      `https://62c97c3dd9ead251e8bc52e7.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ''
      }&page=${page}&limit=4&${search}`,
    )
      .then((v) => {
        return v.json();
      })
      .then((v) => {
        setItems(v);
        setLouding(false);
      });
    window.scrollTo(0, 0);
  }, [searchValue, page, categoryId]);
  const sceleton = [loudindArr.map((_, i) => <Skeleton key={i} />)];
  const phones = items.map((value) => {
    return (
      <PhoneBlock
        key={value.id}
        title={value.name}
        price={value.price}
        imageUrl={value.imageUrl}
        sizes={value.sizes}
        types={value.types}
      />
    );
  });
  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort
        // value={sort} onChangeSort={onChangeSort}
        />
      </div>
      <h2 className="content__title">Телефоны</h2>
      <div className="content__items">{louding ? sceleton : phones}</div>
      <Pagination onPageChange={(n) => setPage(n)} />
    </div>
  );
};

export default Home;
