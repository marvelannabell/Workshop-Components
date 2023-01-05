
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Search } from './components/search/Search';
import { UserList } from './components/user-section/user-list/UserList';



// function useRequest(type) {
//   const [users, setUsers] = useState([])

//   useEffect(() => {
//     fetch(`${baseUrl}/${type}`)
//       .then(response => response.json())
//       .then(data => {
//         setUsers(data.users)
//       })
//   }, []);

//   return users
// }

function App() {
  // const users = useRequest('users')
  // const products = useRequest('products')
 

  // console.log(users);
  return (
    <div >
      <Header />
      <main className="main">

        <section className="card users-container">
          <Search></Search>
          <UserList />
        </section>


      </main>

      <Footer />
    </div>
  );
}

export default App;