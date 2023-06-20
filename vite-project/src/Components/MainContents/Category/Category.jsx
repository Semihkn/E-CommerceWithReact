
function Category() {

    const [getData, setData] = useState([]);
  //const [getDataTwo, setDataTwo] = useState([]);
  const [isLoad ,setLoad] = useState(false);

  useEffect(() =>  {
    const dataFetch = async () => {
      const data =  await fetch("https://fakestoreapi.com/products/categories");
      const res = await data.json();
      setData(res);
      //setDataTwo(res);
      setLoad(true);
    };
    dataFetch();
  }, []);

  return (
    <>
      <div className="container">
        <div className="category-item-container has-scrollbar">
        {
            getData.map((e,index)=>(
                <li key={index}>
                 <div className="category-item">
                    <div className="category-img-box">
                     <img
                       src="./../../../assets/images/icons/dress.svg"
                       alt="dress & frock"
                       width={30}
                     />
                   </div>
                   <div className="category-content-box">
                     <div className="category-content-flex">
                       <h3 className="category-item-title">Dress &amp; frock</h3>
                       <p className="category-item-amount">(53)</p>
                     </div>
                     <a href="#" className="category-btn">
                       Show all
                     </a>
                   </div>
                 </div>
                </li>            
            ))
        }
          
          {/*
          <div className="category-item">
            <div className="category-img-box">
              <img
                src="./../../../assets/images/icons/coat.svg"
                alt="winter wear"
                width={30}
              />
            </div>
              <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Winter wear</h3>
                <p className="category-item-amount">(58)</p>
              </div>
              <a href="#" className="category-btn">
                Show all
              </a>
            </div>
          </div>
          <div className="category-item">
            <div className="category-img-box">
              <img
                src="./../../../assets/images/icons/glasses.svg"
                alt="glasses & lens"
                width={30}
              />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Glasses &amp; lens</h3>
                <p className="category-item-amount">(68)</p>
              </div>
              <a href="#" className="category-btn">
                Show all
              </a>
            </div>
          </div>
          <div className="category-item">
            <div className="category-img-box">
              <img
                src="./../../../assets/images/icons/shorts.svg"
                alt="shorts & jeans"
                width={30}
              />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Shorts &amp; jeans</h3>
                <p className="category-item-amount">(84)</p>
              </div>
              <a href="#" className="category-btn">
                Show all
              </a>
            </div>
          </div>
           <div className="category-item">
            <div className="category-img-box">
              <img
                src="./../../../assets/images/icons/tee.svg"
                alt="t-shirts"
                width={30}
              />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">T-shirts</h3>
                <p className="category-item-amount">(35)</p>
              </div>
              <a href="#" className="category-btn">
                Show all
              </a>
            </div>
          </div>
          <div className="category-item">
            <div className="category-img-box">
              <img
                src="./../../../assets/images/icons/jacket.svg"
                alt="jacket"
                width={30}
              />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Jacket</h3>
                <p className="category-item-amount">(16)</p>
              </div>
              <a href="#" className="category-btn">
                Show all
              </a>
            </div>
          </div>
          <div className="category-item">
            <div className="category-img-box">
              <img
                src="./../../../assets/images/icons/watch.svg"
                alt="watch"
                width={30}
              />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Watch</h3>
                <p className="category-item-amount">(27)</p>
              </div>
              <a href="#" className="category-btn">
                Show all
              </a>
            </div>
          </div>
          <div className="category-item">
            <div className="category-img-box">
              <img
                src="./../../../assets/images/icons/hat.svg"
                alt="hat & caps"
                width={30}
              />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Hat &amp; caps</h3>
                <p className="category-item-amount">(39)</p>
              </div>
              <a href="#" className="category-btn">
                Show all
              </a>
            </div> 
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Category;
