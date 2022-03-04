import data from './data'

function App() {
  return (
    <div>
      <header>
        <a href="/">dumtreee</a>
      </header>
      <main>
        <h1>Featured Productss</h1>
        {data.product.map((product) => (
          <div key={product.slug}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </main>
    </div>
  )
}

export default App
