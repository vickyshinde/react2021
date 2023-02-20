import { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Loading from '../shared/Loading';
import { getUsers, deleteUser } from '../../config/api-endpoints';
import SubmitButtonWrapped from '../shared/SubmitButton';

const UserListing = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  const getAllUsers = async () => {
    const response = await getUsers();
    // console.log(response.data);
    // debugger;
    setUsers(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleDelete = async (id) => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Are you wanted to delete the User')) {
      await deleteUser(id);
      getAllUsers();
    }
  };

  // sort
  const [order, setOrder] = useState('ASC');
  const [orderActiveCol, setOrderActiveCol] = useState('');
  const [orderActive, setOrderActive] = useState('');

  const sorting = (col) => {
    if (order === 'ASC') {
      const sorted = [...users].sort((a, b) =>
        a[col].toString().toLowerCase() > b[col].toString().toLowerCase() ? 1 : -1
      );
      setOrderActiveCol(col);
      setUsers(sorted);
      setOrder('DSC');
      setOrderActive('ASC');
    }
    if (order === 'DSC') {
      const sorted = [...users].sort((a, b) =>
        a[col].toString().toLowerCase() < b[col].toString().toLowerCase() ? 1 : -1
      );
      setUsers(sorted);
      setOrderActiveCol(col);
      setOrder('ASC');
      setOrderActive('DSC');
    }
  };

  // search
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const searchItems = (searchValue) => {
    // console.log(searchValue);
    setSearchInput(searchValue);
    if (searchInput !== '') {
      const filteredData = users.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase());
      });
      // console.log(filteredData);
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(users);
    }
  };

  console.log('filteredResults', filteredResults);

  const aaa = searchInput.length < 1 ? users : filteredResults;

  console.log(aaa);

  return (
    <>
      <h2>User Listing</h2>
      <input
        label="Search"
        name="search"
        type="text"
        clsName="form-control"
        placeholder="Search..."
        // onChange={searchItems}
        onChange={(e) => searchItems(e.target.value)}
        val={searchInput}
      />
      <div>
        <NavLink exact className="btn btn-primary mb-4" to="/user-add">
          User Add
        </NavLink>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th
                scope="col"
                className={`sort ${orderActiveCol === 'id' ? `active${orderActive}` : ''}`}
                onClick={() => sorting('id')}>
                #
              </th>
              <th
                scope="col"
                className={`sort ${orderActiveCol === 'name' ? `active${orderActive}` : ''}`}
                onClick={() => sorting('name')}>
                Name
              </th>
              <th
                scope="col"
                className={`sort ${orderActiveCol === 'email' ? `active${orderActive}` : ''}`}
                onClick={() => sorting('email')}>
                Email
              </th>
              <th
                scope="col"
                className={`sort ${orderActiveCol === 'contact' ? `active${orderActive}` : ''}`}
                onClick={() => sorting('contact')}>
                Contact
              </th>
              <th
                scope="col"
                className={`sort ${orderActiveCol === 'password' ? `active${orderActive}` : ''}`}
                onClick={() => sorting('password')}>
                Password
              </th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {aaa.map((item) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.contact}</td>
                  <td>{item.password}</td>
                  <td>
                    <SubmitButtonWrapped
                      // disabled={!isDisabled}
                      title="Edit"
                      clsName="btn btn-warning btn-sm ml-1"
                      onClick={() => {
                        history.push(`/user-edit/${item.id}`);
                      }}
                    />
                    <SubmitButtonWrapped
                      // disabled={!isDisabled}
                      title="X"
                      clsName="btn btn-danger btn-sm ml-1"
                      onClick={() => handleDelete(item.id)}
                    />
                  </td>
                </tr>
              );
            })}
            {!aaa.length && 'no results'}
          </tbody>
        </table>
      )}
    </>
  );
};

export default UserListing;
